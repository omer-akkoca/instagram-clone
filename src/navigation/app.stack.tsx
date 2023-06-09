import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Discover, Home } from "../screens";

const Stack = createNativeStackNavigator();

const AppStack = (): JSX.Element => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Discover" component={Discover} />
            {/* ... */}
        </Stack.Navigator>
    )
}

export default AppStack;