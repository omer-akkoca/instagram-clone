import React from "react"
import { TouchableOpacity, Image } from "react-native"
import P from "../P"
import { IButton } from "../../types/component"
import { colors } from "../../contants/colors"

const Button = ({
    children,
    onPress,
    title= "Click Me",
    border= { color: "transparent", radius: 0, width: 0 },
    bgColor= "transparent",
    opacity,
    height,
    disabled= false,
    textStyle,
    customStyle
}: IButton): JSX.Element => {

    const handleonPress = (e: Event) => {
        onPress()
    }

    return(
        <TouchableOpacity
            onPress={handleonPress}
            style={[
                {
                    borderWidth: border?.width,
                    borderColor: border.color && colors[border.color],
                    borderRadius: border?.radius === "full" ? 999 : border?.radius,
                    backgroundColor: colors[bgColor]
                },
                height ? { height, justifyContent: "center", alignItems: "center" } : {},
                customStyle
            ]}
            activeOpacity={opacity}
            disabled={disabled}
        >
            {
                false //disabled
                ?   (
                    <Image
                        source={{ uri: "https://some_image" }}
                        style={{ height: 25, width: 25, resizeMode: "center" }}
                    />
                )
                :   (
                    children
                    ?   children
                    :   <P {...textStyle} align="center">{title}</P>
                )
                
            }
        </TouchableOpacity>
    )
}

export default Button;