import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const Error404 = () => {
	return (
		<>
			<div className="d-flex align-items-center flex-column">
				<h2 className="m-4 text-center">404 Page not found</h2>
				<Link to="/">
					<Button className="m-4 btn-info">Return to main screen</Button>
				</Link>
			</div>
		</>
	)
}

export default Error404
