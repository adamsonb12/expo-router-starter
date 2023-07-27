import { ReactNode } from "react";
import {
  Dimensions,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import {
  ModalProps,
  Portal,
  Modal as PaperModal,
  Card,
} from "react-native-paper";
import styled from "styled-components/native";

import { Title } from "../typography/title";
import { spacing24, spacing32, spacing48, spacing64 } from "../spacing";

interface Props extends Partial<ModalProps> {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const ModalContentWrapper = styled(View)`
  padding: 0 ${spacing32};
`;

export const Modal = ({ children, containerStyle, ...props }: Props) => {
  return (
    <Portal>
      <PaperModal
        theme={{
          colors: {
            backdrop: "rgba(0,0,0,0.5)",
          },
        }}
        {...(props as ModalProps)}
        visible
      >
        <ModalContentWrapper>
          <ModalContainer
            style={{
              padding: 0,
              maxHeight: Dimensions.get("window").height * 0.75,
              ...(containerStyle as object),
            }}
          >
            {children}
          </ModalContainer>
        </ModalContentWrapper>
      </PaperModal>
    </Portal>
  );
};

export const ModalContainer = styled(Card)``;

export const ModalHeaderContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing48} ${spacing48} ${spacing32};
  background-color: ${(props) => props.theme.colors.background};
`;

export const ModalTitle = styled(Title)`
  text-align: center;
`;

export const ModalHeader = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <ModalHeaderContainer {...props}>
      <ModalTitle>{children}</ModalTitle>
    </ModalHeaderContainer>
  );
};

export const ModalScrollableContentWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <ScrollView>{children}</ScrollView>;
};

export const ModalContent = styled(View)`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${spacing48} ${spacing32} ${spacing24};
`;

export const ModalFooterActionContainer = styled(View)`
  margin-top: ${spacing64};
`;
