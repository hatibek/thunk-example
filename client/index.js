import 'regenerator-runtime/runtime';

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { ConnectedPuppies} from './Puppies'
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedPuppies />
  </Provider>,
  document.getElementById('app')
)
