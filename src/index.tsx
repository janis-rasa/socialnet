import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss'
import store from './redux/redux-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
