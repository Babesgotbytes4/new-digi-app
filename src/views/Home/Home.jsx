import React from "react";
import {Button} from "@material-ui/core";
// import styled from "styled-components";
// import '../../index.css'
import logo from "./digi-logo.png";

export const Home = () => {
  return (
    <>
        <img src={logo} alt="Logo" />
    
        <div>
            <Button href={"/login"}>
                Login 
            </Button>
            
            <Button href={"/register"}>
                Register
            </Button>
        </div>
    </>
  );
  }


export default Home;
