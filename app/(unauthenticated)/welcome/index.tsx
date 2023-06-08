import styled from "styled-components/native";

import { useAuthContext } from "../../../providers/auth";
import { FullScreenContentWithSafePadding } from "../../../components/@common/layout";
import { TitleLarge } from "../../../components/@common/typography/title";
import { PrimaryButton } from "../../../components/@common/buttons/primary";

const StyledTitle = styled(TitleLarge)`
  text-align: center;
`;

export default function WelcomeSceen() {
  const { signIn } = useAuthContext();

  return (
    <>
      <FullScreenContentWithSafePadding>
        <StyledTitle>Welcome!</StyledTitle>
        <PrimaryButton
          style={{
            marginTop: 40,
          }}
          onPress={() =>
            signIn({
              refreshToken: "fake",
              accessToken: "fake",
            })
          }
        >
          Log me in
        </PrimaryButton>
      </FullScreenContentWithSafePadding>
    </>
  );
}
