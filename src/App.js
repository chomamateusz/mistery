import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Signup from "./components/authComponents/Signup"
import Dashboard from "./components/dashboardComponents/Dashboard"
import Login from "./components/authComponents/Login"
import PrivateRoute from "./components/authComponents/PrivateRoute"
import ForgotPassword from "./components/authComponents/ForgotPassword"
import UpdateProfile from "./components/authComponents/UpdateProfile"
import CreateInvoice from "./components/createInvoicesComponents/CreateDocument"
import DocumentDetails from "./components/DocumentDetails"
import error404 from "./components/error404"
import ScrollToTop from "./components/ScrollToTop"
import bg from "./assets/bg.jpg"

function App() {
	return (
		<div>
			<img
				src={bg}
				alt="#"
				style={{
					position: "absolute",
					zIndex: -1,
					width: "100%",
					opacity: 0.1,
				}}
			/>

			<Router>
				<ScrollToTop />
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path="/" component={Dashboard} />
						<PrivateRoute exact path="/create-document" component={CreateInvoice} />
						<PrivateRoute path="/update-profile" component={UpdateProfile} />
						<PrivateRoute path="/invoice-details/:id" component={DocumentDetails} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/forgot-password" component={ForgotPassword} />
						<Route component={error404} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	)
}

export default App
