import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, RegisterWithEmail, RegisterWithPhone } from "../screens";

const Stack = createNativeStackNavigator();

const AuthStack = (): JSX.Element => {
    return(
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="RegisterWithEmail" component={RegisterWithEmail} />
            <Stack.Screen name="RegisterWithPhone" component={RegisterWithPhone} />
        </Stack.Navigator>
    )
}

export default AuthStack;