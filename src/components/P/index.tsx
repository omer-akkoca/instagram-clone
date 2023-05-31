import React from "react";
import { Text } from "react-native";
import { fontFamily, fontSize } from "../../contants/fonts";
import { IP } from "../../types/component";
import { colors } from "../../contants/colors";

const P = ({
    color= "text_white",
    size= "m",
    font= "m",
    align= "left",
    transform= "none",
    lineHeight,
    spacing= 0,
    lines,
    customStyle,
    children
}: IP): JSX.Element => {
    return(
        <Text
            style={[
                {
                    color: colors[color],
                    fontFamily: fontFamily[font],
                    fontSize: fontSize[size],
                    textAlign: align,
                    textTransform: transform,
                    letterSpacing: spacing
                },
                lineHeight ? { lineHeight } : {},
                customStyle
            ]}
            numberOfLines={lines}
        >
            {children}
        </Text>
    )
}

export default P;