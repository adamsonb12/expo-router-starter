import { Text, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../../providers/auth";

export default function HomeSceen() {
  const { signOut } = useAuthContext();

  return (
    <>
      <Text>Hello there you are logged in!</Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: "crimson",
        }}
        onPress={() => signOut()}
      >
        <Text>Log me out!</Text>
      </TouchableOpacity>
    </>
  );
}
