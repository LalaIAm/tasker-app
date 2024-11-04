import { createContext, useReducer, useMemo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ABeeZee_400Regular, useFonts } from '@expo-google-fonts/abeezee'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_900Black } from '@expo-google-fonts/poppins'
import { AppStack, AuthStack } from "./Navigation";
import 'expo-dev-client'

const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'ABeeZee': ABeeZee_400Regular,
    'Poppins': Poppins_400Regular,
    'PoppinsSemi': Poppins_600SemiBold,
    'PoppinsBlack': Poppins_900Black
  });



  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy" });
      },
    }),
    []
  );
  return (
    <NavigationContainer
      documentTitle={{
      enabled: false
    }}>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{
          headerBackVisible: false, headerShown: false
        }}>
          {state.userToken == null ? (
            <Stack.Screen name="Auth" component={AuthStack} options={{
              headerShown: false
            }} />
          ) : (
              <Stack.Navigator name='App' component={AppStack} />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}


