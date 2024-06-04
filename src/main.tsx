import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './containers/store/store.ts'
import { Provider } from 'react-redux'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
