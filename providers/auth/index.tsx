import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import * as SecureStore from "expo-secure-store";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useLocalizationContext } from "../localization";

export const EXPO_SECURE_STORE_KEY = "your_unique_key";

// STATE
export interface AuthState {
  userAccessToken: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// ACTIONS
export interface InitializeWithoutRefreshToken {
  type: "INITIALIZE_WITHOUT_REFRESH_TOKEN";
}

export interface RestoreToken {
  type: "RESTORE_TOKEN";
  payload: {
    token: string;
  };
}

export interface SignIn {
  type: "SIGN_IN";
  payload: {
    token: string;
  };
}

export interface SignOut {
  type: "SIGN_OUT";
}

export const authReducer = (
  prevState: AuthState,
  action: RestoreToken | SignIn | SignOut | InitializeWithoutRefreshToken
) => {
  switch (action.type) {
    case "INITIALIZE_WITHOUT_REFRESH_TOKEN":
      return {
        ...prevState,
        userAccessToken: null,
        isLoading: false,
      };
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userAccessToken: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isAuthenticated: true,
        userAccessToken: action.payload.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isAuthenticated: false,
        userAccessToken: null,
      };
  }
};

export const defaultAuthState: AuthState = {
  isLoading: true,
  isAuthenticated: false,
  userAccessToken: null,
};

const useAuthReducer = (authDefaults?: AuthState) => {
  return useReducer(authReducer, { ...defaultAuthState, ...authDefaults });
};

interface Context extends AuthState {
  signIn: (data: { refreshToken: string; accessToken: string }) => void;
  signOut: () => void;
}

const AuthContext = createContext<Context>({
  ...defaultAuthState,
  signIn: () => {
    // no op for now
  },
  signOut: () => {
    // no op for now
  },
});

// custom create client to avoid require cycle
const createClient = () =>
  new ApolloClient({
    uri: "your_graphql_endpoint",
    cache: new InMemoryCache(),
  });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useAuthReducer();
  const client = createClient();
  const { getTranslation } = useLocalizationContext();

  // bootstrap async
  const initializeAuthenticationState = async () => {
    try {
      const refreshToken = await SecureStore.getItemAsync(
        EXPO_SECURE_STORE_KEY,
        {
          requireAuthentication: true,
          authenticationPrompt: getTranslation("loginWithBiometrics"),
        }
      );

      if (refreshToken) {
        // get a new valid access token and login via mutation
        const response = null;

        // if response has a valid token
        // if (response.token) {
        //   dispatch({
        //     type: "RESTORE_TOKEN",
        //     payload: {
        //       token: response.token,
        //     },
        //   });
        // } else {
        dispatch({
          type: "INITIALIZE_WITHOUT_REFRESH_TOKEN",
        });
        // }
      } else {
        dispatch({
          type: "INITIALIZE_WITHOUT_REFRESH_TOKEN",
        });
      }
    } catch (err) {
      console.error("Failed to initialize with biometrics", err);

      dispatch({
        type: "INITIALIZE_WITHOUT_REFRESH_TOKEN",
      });
    }
  };

  useEffect(() => {
    initializeAuthenticationState();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: { refreshToken: string; accessToken: string }) => {
        try {
          await SecureStore.setItemAsync(
            EXPO_SECURE_STORE_KEY,
            data.refreshToken,
            {
              requireAuthentication: true,
              authenticationPrompt: "Login with biometrics",
            }
          );
        } catch (err) {
          console.error("Failed to set token", err);
        }

        dispatch({
          type: "SIGN_IN",
          payload: {
            token: data.accessToken,
          },
        });
      },
      signOut: async () => {
        // clear push token from DB
        if (Device.isDevice && authState.userAccessToken) {
          try {
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            if (token) {
              // clear phone link to expo notifications
              // await client.mutate({
              //   mutation: CLEAR_NOTIFICATION_MUTATION,
              //   variables: {
              //     expoPushToken: token,
              //   },
              // });
            }
          } catch (e) {
            console.error("ruh roh", e);
          }
        }

        dispatch({
          type: "SIGN_OUT",
        });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authContext, ...authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
