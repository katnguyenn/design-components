import { blue, orange, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: blue[300],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    secondaryColor: orange[200],
    secondaryColorHover: orange[300],
    textColorOnPrimary: neutral[100],
    textColor: neutral[400],
    textColorInverted: neutral[300],
    disabled: neutral[400],
    textonDisabled: neutral[300],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[400],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[300],
    secondaryColor: orange[200],
    secondaryColorHover: orange[300],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[300],
    disabled: neutral[400],
    textonDisabled: neutral[300],
    primaryFont,
    formElementBackground: blue[100],
    textOnFormElementBackground: neutral[400],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};