import React from "react"
import { View } from "react-native"
import { spaces } from "../../contants/spaces"
import { ISpace } from "../../types/component"

const Space = ({
    v= "m",
    h= "m",
    flex= 0,
    customStyle= {},
    children
}: ISpace): JSX.Element => {
    return(
        <View style={[
            { paddingHorizontal: spaces[`h_${h}`], paddingVertical: spaces[`v_${v}`], flex },
            customStyle
        ]}>
            {children}
        </View>
    )
}

export default Space;