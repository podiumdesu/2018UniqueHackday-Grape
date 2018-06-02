import Offline from 'offline-plugin/runtime'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import normalize from 'normalize.css'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import App from './components/App'

if (process.env.NODE_ENV === 'production') Offline.install()

// eslint-disable-next-line import/prefer-default-export
export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

if (!module.hot) render(<Root />, document.querySelector('react'))
