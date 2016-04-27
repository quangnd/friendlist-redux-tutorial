import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

if (__DEV__) {
  createStore = compose(
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools(store) {
  if (__DEV__) {
    let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}

/*
We are doing two things here. We are overriding createStore using the compose function, 
which allows us to apply multiple store enhancers like the devTools. We also expose a function 
renderDevTools that renders the DebugPanel.
*/