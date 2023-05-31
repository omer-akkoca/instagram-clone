import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from "react-native"
 
const { width, height } = Dimensions.get("window");

const stbh = getStatusBarHeight();

const w = width;
const h = height;

const W = (x: number) => width * x / 100;
const H = (x: number) => height * x / 100;

export { w, h, stbh, W, H };  