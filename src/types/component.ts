import { TextStyle, ViewStyle, ImageStyle, ImageResizeMode, ImageSourcePropType } from "react-native"
import { fontFamilyType, fontSizeType } from "./fonts"
import { colorsType } from "./color"

// P
type alignType = "auto" | "left" | "justify" | "right" | "center"
type transformType = "capitalize" | "lowercase" | "none" | "uppercase"
export interface IP{
    children?: any,
    color?: colorsType,
    size?: fontSizeType,
    lines?: number,
    align?: alignType,
    font?: fontFamilyType,
    lineHeight?: number,
    onPress?: Function,
    transform?: transformType,
    spacing?: number,
    customStyle?: TextStyle
}

// Button
export interface IButton{
    children?: JSX.Element | JSX.Element[],
    onPress: Function,
    title?: string,
    bgColor?: colorsType | "transparent",
    height?: number,
    border?: {
        width?: number,
        color?: colorsType | "transparent",
        radius?: number | "full"
    },
    textStyle?: IP,
    rounded?: boolean,
    disabled?: boolean,
    opacity?: number // opacity must be between 1 and 0
    customStyle?: ViewStyle,
}

// Space
type spaceType = "n" | "xxs" | "xs" | "s" | "smed" | "m" | "l" | "xl" | "xxl"
export interface ISpace{
    children?: JSX.Element | JSX.Element[],
    v?: spaceType,
    h?: spaceType,
    flex?: number
    customStyle?: ViewStyle
}

// Image
export interface IImage {
    url?: string,
    local?: ImageSourcePropType,
    width: number | "auto" | "100%",
    height: number | "auto",
    mode?: ImageResizeMode,
    radius?: number | "full",
    customStyle?: ImageStyle
}

// From Provider
export interface IFormProvider{
    children: JSX.Element | JSX.Element[],
    initialState: {}
}