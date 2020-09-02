declare module 'redux-enhancer-react-native-appstate' {
  import { Store } from 'redux';

  export const FOREGROUND = 'APP_STATE.FOREGROUND';
  export const BACKGROUND = 'APP_STATE.BACKGROUND';
  export const INACTIVE = 'APP_STATE.INACTIVE';

  function applyAppStateListener(): Store;
  export default applyAppStateListener;
}
