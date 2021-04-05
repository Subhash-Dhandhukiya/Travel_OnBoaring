import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    black: '#1E1F20',
    white: '#ffffff',
    gray: '#6A6A6A',
    blue: '#0682FE',
}

export const SIZE = {
    //global size
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    //font size
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    //app dimentions
    width,
    height
};

export const FONTS = {
    h1: { fontFamily: "Roboto-Black", fontSize: SIZE.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Black", fontSize: SIZE.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Black", fontSize: SIZE.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Black", fontSize: SIZE.h4, lineHeight: 22 },

    body1: { fontFamily: "Roboto-Regular", fontSize: SIZE.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZE.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZE.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZE.body4, lineHeight: 22 },
}

const appTheme = (COLORS, SIZE, FONTS)
export default appTheme;