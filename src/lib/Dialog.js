import React from 'react';
import styled from 'styled-components/macro';

export const Dialog = ({ title, secondaryText, action1, action2, className, children }) => (
  <Container className={className}>
    {title && <Title>{title}</Title>}
    {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
    <ActionsContainer>
      {action1 && <Actions>Action 1</Actions>}
      {action2 && <Actions>Action 2</Actions>}
    </ActionsContainer>
    {children && <ChildrenContent>{children}</ChildrenContent>}
  </Container>
);

const Container = styled.div`
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  width: 220px;
  margin-top: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.3px;
`;

const SecondaryText = styled.p`
  margin: 10px 0 0 0;;
  color: #6b6b6b;
  font-size: 14px;
  letter-spacing: 0.3px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
`;

const Actions = styled.p`
  margin: 20px 10px 0 10px;
  font-size: 14px;
  font-weight: bold;
  color: #6200EE;
  letter-spacing: 0.3px;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 10px;
`;