declare module 'redux-enhancer-react-native-appstate' {
  import { Store } from 'redux';

  const FOREGROUND = 'APP_STATE.FOREGROUND';
  const BACKGROUND = 'APP_STATE.BACKGROUND';
  const INACTIVE = 'APP_STATE.INACTIVE';

  function applyAppStateListener(): Store;

  export = applyAppStateListener;
}
