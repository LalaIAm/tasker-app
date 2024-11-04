import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from './screens/Auth/Welcome'

import Dashboard from "./screens/Dashboard";

const Stack = createNativeStackNavigator()


export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}

