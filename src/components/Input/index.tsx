import React from "react";
import { View, TextInput, Text, TouchableOpacity, ViewStyle, TextInputProps } from "react-native";
import useForm from "../../providers/Form";
import P from "../P";
import { W } from "../../contants/responsive";
import { colors } from "../../contants/colors";

interface IInput extends TextInputProps {
    valueKey: string,
    placeholder: string,
    customStyle?: ViewStyle
}

const Input = ({ valueKey, placeholder, customStyle= {}, ...rest }: IInput): JSX.Element => {

    const { values, handleSetValues, focusedKey, setFocusedKey } = useForm()

    const focused = valueKey === focusedKey;
    const inputValue = values[valueKey as keyof typeof values]

    return (
        <TouchableOpacity
            style={[
                {
                    height: W(14),
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: focused ? colors.input_focused_border : colors.input_unfocused_border,
                    justifyContent: "center", alignItems: "flex-start",
                    backgroundColor: "white", paddingHorizontal: 12, paddingVertical: 8
                },
                customStyle
            ]}
            activeOpacity={1}
            onPress={() => setFocusedKey(valueKey)}
            //onBlur={() => setFocusedKey("")}
        >
            {
                focused || inputValue
                    ? <View style={{ flex: 1, width: "100%", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                            <P size="m" color="input_focused_text" lines={1}>{placeholder}</P>
                            <TextInput
                                style={{ padding: 0, margin: 0, flex: 1 }}
                                value={inputValue}
                                onChangeText={(text) => handleSetValues(valueKey, text)}
                                autoFocus={focused}
                                onFocus={() => setFocusedKey(valueKey)}
                                onBlur={() => setFocusedKey("")}
                                {...rest}
                            />
                        </View>
                        {
                            /* right content */
                        }
                    </View>
                    : <P size="m" color="input_focused_text" lines={1}>{placeholder}</P>
            }
        </TouchableOpacity>
    )
}

export default Input;