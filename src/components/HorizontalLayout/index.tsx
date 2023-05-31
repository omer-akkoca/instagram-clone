import React, { View, ViewStyle } from "react-native"

type justifyTypes = "center" | "end" | "start" | "around" | "between" | "evenly"

const justifyElements: {
    center: ViewStyle,
    end: ViewStyle,
    start: ViewStyle,
    around: ViewStyle,
    between: ViewStyle,
    evenly: ViewStyle
} = {
    center: { justifyContent: "center" },
    end: { justifyContent: "flex-end" },
    start: { justifyContent: "flex-start" },
    around: { justifyContent: "space-around" },
    between: { justifyContent: "space-between" },
    evenly: { justifyContent: "space-evenly" }
}

interface IHorizontalLayout{
    children: JSX.Element | JSX.Element[],
    justify?: justifyTypes,
    customStyle?: ViewStyle
}

const HorizontalLayout = ({ children, justify = "start", customStyle = {} }: IHorizontalLayout): JSX.Element => {
    return(
        <View style={[
            { flexDirection: "row", alignItems: "center" },
            justifyElements[justify],
            customStyle
        ]}>
            {children}
        </View>
    )
}

export default HorizontalLayout;