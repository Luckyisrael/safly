/* eslint-disable prettier/prettier */
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;


export const theme = {
    primary: '#1d2733',
    secondary: '#4dc0e8',
    darkgrey: '#737373',
    lightgrey: '#bfbfbf',
    secondary100: '#2c5468',
    secondary200: '#292f33',
    secondary300: '#3c86a3',
    secondary400: '#2c5469'  
} as const

export const fontSize = {
    extraSmall: 12,
    small:      14,
    medium:     16,
    large:      18,
    extraLarge: 20,
} as const

export const colors = {
    theme,
    fontSize,
    background: '#fff'
}