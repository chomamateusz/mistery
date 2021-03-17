import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Badge } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
	const emailRef = useRef()
	const { resetPassword } = useAuth()
	const [error, setError] = useState("")
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setMessage("")
			setError("")
			setLoading(true)
			await resetPassword(emailRef.current.value)
			setMessage("Check your inbox for further instructions")
		} catch {
			setError("Failed to reset password")
		}

		setLoading(false)
	}

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "100vh" }}
			>
				<div className="w-100 m-4" style={{ maxWidth: "400px" }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Password Reset</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							{message && <Alert variant="success">{message}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Button disabled={loading} className="w-100 bg-info border-info" type="submit">
									Reset Password
								</Button>
							</Form>
							<div className="w-100 text-center mt-3">
								<Link to="/login">
									<Badge className="bg-light text-info m-1 p-2 border border-info">Login</Badge>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2 text-info">
						Need an account?
						<Link to="/signup">
							<Badge className="bg-light text-info m-2 p-2 border border-info">Sign Up</Badge>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
