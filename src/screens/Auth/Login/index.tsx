import React from "react";
import { Button, Image, P, Space } from "../../../components";
import { FormProvider } from "../../../providers";
import Input from "../../../components/Input";
import { ImageBackground } from "react-native"
import { AUTH_BG, INSTAGRAM_SQUARE } from "../../../../assets/images";
import { W } from "../../../contants/responsive";
import { View } from "react-native";

const Login = (): JSX.Element => {
    return (
        <ImageBackground
            source={AUTH_BG}
            className="flex-1"
        >
            <Space customStyle={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
                <View>
                    <Image
                        local={INSTAGRAM_SQUARE}
                        width={W(15)}
                        height={W(15)}
                    />
                </View>
                <View className="w-full">
                    <FormProvider initialState={{ username: "", password: "" }}>
                        <Input
                            valueKey="username"
                            placeholder="Kullanıcı adı, e-posta adresi veya cep telefonu numaranızı giriniz..."
                        />
                        <Space v="s" />
                        <Input
                            valueKey="password"
                            placeholder="Şifre"
                            secureTextEntry
                        />
                        <Space v="s" />
                        <Button
                            bgColor="button_blue_bg"
                            onPress={() => null}
                            title="Giriş Yap"
                            border={{ radius: "full" }}
                            height={W(10)}
                            textStyle={{ color: "text_white", size: "m", font: "700" }}
                        />
                        <Space v="s" />
                        <Button
                            bgColor="transparent"
                            onPress={() => null}
                            title="Hesabını Bul"
                            textStyle={{ color: "black_text", size: "m", font: "700" }}
                        />
                    </FormProvider>
                </View>
                <View className="w-full">
                    <Button
                        title="Yeni Hesap oluştur"
                        bgColor="transparent"
                        textStyle={{ color: "button_blue_bg", size: "m", font: "700" }}
                        border={{ color: "button_blue_bg", width: 1, radius: "full" }}
                        height={W(10)}
                        onPress={() => null}
                    />
                    <Space v="xs" />
                    <P font="400" size="mm" color="black_text" align="center">Meta</P>
                </View>
            </Space>
        </ImageBackground>
    )
}

export default Login;