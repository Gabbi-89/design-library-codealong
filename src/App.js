import React from 'react';
import styled from 'styled-components/macro';
import { Dialog } from 'lib/Dialog';

export const App = () => {
  return (
    <div>
      <Dialog 
        title='This is the title' 
        secondaryText='This is the secondary text'
        action1='Action 1'
        action2='Action 2'
      />
      <Dialog 
        title='This is another dialog with another title'
        secondaryText='This is the seconday text'
        action1='OK'
      />
      <Dialog 
        secondaryText='This is the seconday text'
        action1='NOT OK'
        action2='OK'
      />
      <ThinnerDialog 
        title='This is another dialog with another title'
        secondaryText='This is the seconday text'
        action1='Action 1'
      />

      <Dialog title='Extra Dialog'>
        <h1>Hello Children</h1>
        <p>This has children props</p>
      </Dialog>
    </div>
  );
};

const ThinnerDialog = styled(Dialog)`
  width: 400px;
`;