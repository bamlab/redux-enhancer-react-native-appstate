# redux-enhancer-react-native-appstate
Connect your App State changes directly to your Redux store!

## Installation

```
npm install --save redux-enhancer-react-native-appstate
```

## Usage

When you create your Redux store, add the enhancer:

```javascript
import { createStore } from 'redux';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';

...

const store = createStore(reducers, initalState, [
  applyAppStateListener(),
]);
```

The store will now automatically dispatch app state related actions.

For instance, you can use it in a reducer:
```javascript
import { FOREGROUND } from 'redux-enhancer-react-native-appstate';

function reducer(state = '', action) {
  switch (action.type) {
    case FOREGROUND:
      return 'back to foreground';
    default:
      return state
  }
}
