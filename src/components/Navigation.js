import React from "react"
import { Button, Nav, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Navigation() {
	const { logout } = useAuth()
	const history = useHistory()

	async function handleLogout() {
		await logout()
		history.push("/login")
	}

	return (
		<>
			<Nav className="w-100 p-2 bg-info m-0">
				<Container className="d-flex align-items-center">
					<Link to="/" className="w-25">
						<Button
							style={{ textDecoration: "none" }}
							variant="link"
							className="btn-info btn-sm ml-2"
						>
							<p className="text-left text-light m-0">Dashboard</p>
						</Button>
					</Link>
					<div className="w-75 d-flex justify-content-end">
						<Link to="/update-profile">
							<Button
								style={{ textDecoration: "none" }}
								variant="link"
								className="btn-info btn-sm ml-2"
							>
								<p className="text-left text-light m-0">Update Profile</p>
							</Button>
						</Link>

						<Button
							style={{ textDecoration: "none" }}
							variant="link"
							className="btn-info btn-sm ml-2"
							onClick={handleLogout}
						>
							<p className="text-light m-0">Log Out</p>
						</Button>
					</div>
				</Container>
			</Nav>
		</>
	)
}
