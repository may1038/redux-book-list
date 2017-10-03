import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import rootReducers from "./reducers/index"

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
