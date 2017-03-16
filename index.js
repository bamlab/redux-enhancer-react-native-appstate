// @flow

import { AppState } from 'react-native';

export const FOREGROUND = 'APP_STATE.FOREGROUND';

export default () => (createStore) => (...args) => {
  const store = createStore(...args);

  let currentState = AppState.currentState;

  const handleAppStateChange = (nextAppState) => {
    if (currentState.match(/inactive|background/) && nextAppState === 'active') {
      store.dispatch({
        type: FOREGROUND,
      });
    }
    currentState = nextAppState;
  };

  AppState.addEventListener('change', handleAppStateChange);

  return store;
};
