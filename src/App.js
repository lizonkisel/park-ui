import React from 'react';

import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot } from '@telegram-apps/telegram-ui';

import { Header } from './components/Header/header';
import { Main } from './components/Main/Main';


const App = () => (
  <AppRoot >
    <Header />
    <Main>

    </Main>
  </AppRoot>
);

export default App;
