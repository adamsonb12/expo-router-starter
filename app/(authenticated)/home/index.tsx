import { DangerButton } from "../../../components/@common/buttons/danger";
import { FullScreenContentWithSafePadding } from "../../../components/@common/layout";
import { Text } from "../../../components/@common/typography/text";
import { useAuthContext } from "../../../providers/auth";

export default function HomeSceen() {
  const { signOut } = useAuthContext();

  return (
    <>
      <FullScreenContentWithSafePadding>
        <Text>Hello there you are logged in!</Text>
        <DangerButton
          style={{
            marginTop: 40,
          }}
          onPress={() => signOut()}
        >
          Log me out!
        </DangerButton>
      </FullScreenContentWithSafePadding>
    </>
  );
}
