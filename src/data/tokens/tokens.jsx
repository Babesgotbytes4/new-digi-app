const shade = {
    blue: {
        none:'rgba(0, 0, 0, 0)',
        lighter:'rgba(25, 118, 210, 0.1)',
        light:'rgba(25, 118, 210, 0.25)',
        medium:'rgba(25, 118, 210, 0.5)',
        strong:'rgba(25, 118, 210, 0.75)',
        stronger:'rgba(25, 118, 210, 0.9)',
        solid:'rgba(25, 118, 210, 1)',
    },
    black: {
        none:'rgba(0, 0, 0, 0)',
        lighter:'rgba(0, 0, 0, 0.1)',
        light:'rgba(0, 0, 0, 0.25)',
        medium:'rgba(0, 0, 0, 0.5)',
        strong:'rgba(0, 0, 0, 0.75)',
        stronger:'rgba(0, 0, 0, 0.9)',
        solid:'rgba(0, 0, 0, 1)',

    }
}

const highlight = {
    white: {
        none:'rgba(255, 255, 255, 0)',
        lighter:'rgba(255, 255, 255, 0.1)',
        light:'rgba(255, 255, 255, 0.25)',
        medium:'rgba(255, 255, 255, 0.5)',
        strong:'rgba(255, 255, 255, 0.75)',
        stronger:'rgba(255, 255, 255, 0.9)',
        solid:'rgba(255, 255, 255, 1)',
    }
}

const radius = {
    none: '0',
    light: '4px',
    medium: '16px',
    strong: '27px',
    circle: '50%',
}

const spacing = {
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '2rem',
    xl: '4rem',
    xxl: '8rem',
}

const fontFamily = {
    roboto: 'Roboto, Arial, Helvetica, sans-serif;',
}

const fontSize = {
    s: '0.875rem',
    m: '16px',
    l: '1.125',
    xl: '3rem',
}

const letterSpacing = {
    loose: '1%',
    medium: '0%',
    tight: '-1%',
    tighter: '-2%',
}

const fontWeight = {
    regular: '400',
    bold: '700',
    black: '900',
}

const lineHeight = {
    medium: '100%',
    tight: '95%',
    black: '90%',
}

const text = {
    s: {
      size: fontSize.s,
      weight: fontWeight.regular,
      spacing: letterSpacing.loose,
    },
    m: {
        size: fontSize.m,
        weight: fontWeight.regular,
        spacing: letterSpacing.medium,
    },
    l: {
        size: fontSize.l,
        weight: fontWeight.black,
        spacing: letterSpacing.tight,
        height: lineHeight.tight,

    },
    xl: {
        size: fontSize.xl,
        weight: fontWeight.black,
        spacing: letterSpacing.tighter,
        height: lineHeight.tighter,
    },
}

export const tokens = {
    spacing,
    shade,
    highlight,
    radius,
    fontFamily,
    text,
}

export default tokens;