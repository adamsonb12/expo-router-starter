import styled from "styled-components/native";
import { Text } from "../text";

export const Link = styled(Text)`
  color: ${(props) => props.theme.colors.link};
`;
