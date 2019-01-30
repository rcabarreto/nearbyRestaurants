import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import router from 'router'

import * as configureStore from 'store/configureStore'

// App css
import 'styles/app.scss'

const store = configureStore.configure()

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app'),
)
