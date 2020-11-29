import React from 'react';
import styled from 'styled-components/macro';

export const Dialog = ({ title, secondaryText, action1, action2, className, children }) => (
  <Container className={className}>
    {title && <Title>{title}</Title>}
    {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
    <ActionsContainer>
      {action1 && <Actions>{action1}</Actions>}
      {action2 && <Actions>{action2}</Actions>}
    </ActionsContainer>
    {children && <ChildrenContent>{children}</ChildrenContent>}
  </Container>
);

const Container = styled.div`
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);
  padding: 20px 5px 5px 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  width: 230px;
  margin-top: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.4px;
`;

const SecondaryText = styled.p`
  margin: 10px 0 0 0;;
  color: #6b6b6b;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
`;

const Actions = styled.button`
  margin: 20px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  color: #6200EE;
  letter-spacing: 0.4px;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;

  &:hover {
    background: #faf5ff;
    
  }
`;

const ChildrenContent = styled.div`
  border-radius: 4px;
  background: #f1f1f1;
  padding: 10px;
  margin: 10px 0;
  letter-spacing: 0.4px;
`;