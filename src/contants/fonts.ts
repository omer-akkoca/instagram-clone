import { IFontSize, IRoboto } from "../types/fonts";
import { w } from "./responsive";

export const fontFamily: IRoboto = {
    "100": "Roboto-Thin", //thin
    "300": "Roboto-Light", // light
    "400": "Roboto-Regular", // regular
    "500": "Roboto-Medium", // medium
    "600": "Roboto-Semibold", // semibold
    "700": "Roboto-Bold", // bold
    "800": "Roboto-Extrabold", // extrabold
    "900": "Roboto-Black", // black
    "th": "Roboto-Thin", // thin
    "li": "Roboto-Light", // light
    "r": "Roboto-Regular", // regular
    "m": "Roboto-Medium", // medium
    "sb": "Roboto-Semibold", // semibold
    "b": "Roboto-Bold", // bold
    "xb": "Roboto-Extrabold", // extrabold
    "bl": "Roboto-Black", // black
}

export const fontSize: IFontSize = {
    xxxxxl: 0.1 * w,
    xxxxl: 0.09 * w,
    xxxl: 0.08 * w,
    xxl: 0.07 * w,
    xl: 0.06 * w,
    ld: 0.055 * w,
    l: 0.05 * w,
    dd: 0.045 * w,
    dc: 0.0425 * w,
    d: 0.04 * w,
    mm: 0.035 * w,
    m: 0.03 * w,
    smed: 0.025 * w,
    s: 0.02 * w,
    xs: 0.01 * w
}
