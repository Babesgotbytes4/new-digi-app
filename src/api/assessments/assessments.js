import { openDB } from 'idb';
import axios from 'axios';

const BLANK_HASHES = {
    id: 'hashes',
    data: {
        assessments: '',
    }  
};

const fetchHashes = async () => {
    const {data} = await axios('/data/hashes.json')
    return data;
}

const fetchAssessments = async () => {
    const {data} = await axios('/data/assessments.json')
    return data;
}

const createDatabase = () => {
    const dbRequest = openDB('assessments', 1, {
        upgrade: (respondedDb) => {
            respondedDb.createObjectStore("meta", { keyPath: "id"});
            respondedDb.createObjectStore("data", { keyPath: "id"}
            );
        },
    });
    
    
    const add = async(newItem) => {
        const newItemArray = Array.isArray(newItem)  ? newItem : [newItem]
       
        const db = await dbRequest;

        const promiseArray = newItemArray.map(
            (singleNewItem) => 
            new Promise((resolve) => {
        db.add("data", singleNewItem).then(() => resolve());

           })
       );
       await Promise.all(promiseArray).catch(console.error);
    };

    const update = async(newItem, partialUpdate) => {
        const db = await dbRequest;
       if (!partialUpdate) return await db.put("data", newItem);

       const currentItem = await read(newItem.id);

       await db.put("data", {
        ...currentItem,
        ...newItem,

       });
    };


    const reset = async(newItems) => {
       if(!newItems) throw new Error('No new items supplied');

        const db = await dbRequest;
       await db.clear("data");
       await add(newItems)
    };


    const remove = async(id) => {
        const db = await dbRequest;
        db.delete("data", id);

    };

    const read = async(id) => {
        const db = await dbRequest;

        if (!id) {
            const response = await db.getAll("data");
            return response; 
        }
        const response = await db.get("data", id);
        return response;
 };

  
    const sync = async () => {
        const db = await dbRequest;
        const fetchedHashes = await fetchHashes();
        const rawLocalHashes = await db.get("meta", 'hashes')

        const localHashes = rawLocalHashes || BLANK_HASHES;
         if (
             !localHashes.data.assessments &&
             localHashes.data.assessments !== "" &&
              fetchedHashes.data.assessments === localHashes.data.assessments
              ) 
              return;
       
         const fetchedAssessments = await fetchAssessments();
         reset(fetchedAssessments);

         const newHashes = {
             ...localHashes,
             data: {
            ...localHashes.data,
            assessments: fetchedHashes.data.assessments,
             }
         };

         db.add("meta", newHashes);

    };

    return {
        add,
        remove,
        update,
        read,
        sync,
    };
};

  export const assessments = createDatabase();
  export default assessments;