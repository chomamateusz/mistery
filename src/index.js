import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { AuthProvider } from "./contexts/AuthContext"
import "./index.css"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Provider>
	</React.StrictMode>,

	document.getElementById("root")
)
