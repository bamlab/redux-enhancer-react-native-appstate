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
import { FOREGROUND, BACKGROUND, INACTIVE } from 'redux-enhancer-react-native-appstate';

function reducer(state = '', action) {
  switch (action.type) {
    case FOREGROUND:
      return 'back to foreground';
    case BACKGROUND:
      return 'background';
    case INACTIVE:
      return 'inactive';
    default:
      return state
  }
}
```

### Usage with Redux Saga

Make sure that this enhancer is applied before the saga middleware.
Otherwise, your saga would not be able to intercept the actions.

```javascript
// good
const store = createStore(reducers, initalState, [
  applyAppStateListener(),
  applyMiddleware(sagaMiddleware),
]);

// bad
const store = createStore(reducers, initalState, [
  applyMiddleware(sagaMiddleware),
  applyAppStateListener(),
]);
```

Then you can define a saga like:

```javascript
import { takeLatest } from 'redux-saga/effects';
import { FOREGROUND, BACKGROUND, INACTIVE } from 'redux-enhancer-react-native-appstate';

function* appHasComeBackToForeground() {
  // app has come back to foreground!
}

function* watchForAppBackToForeground() {
  yield takeLatest(
    FOREGROUND,
    catchApiExceptions(appHasComeBackToForeground),
  );
}
```
