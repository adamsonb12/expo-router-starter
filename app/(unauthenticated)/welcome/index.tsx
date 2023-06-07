import { Text, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../../providers/auth";

export default function WelcomeSceen() {
  const { signIn } = useAuthContext();

  return (
    <>
      <Text>Welcome!</Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: "cyan",
        }}
        onPress={() =>
          signIn({
            refreshToken: "fake",
            accessToken: "fake",
          })
        }
      >
        <Text>Log me in</Text>
      </TouchableOpacity>
    </>
  );
}
