import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Badge } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { signup } = useAuth()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match")
		}

		try {
			setError("")
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
			history.push("/")
		} catch {
			setError("Failed to create an account")
      setLoading(false)
		}

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
							<h2 className="text-center mb-4 ">Sign Up</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>
								<Form.Group id="password-confirm">
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} required />
								</Form.Group>
								<Button disabled={loading} className="w-100 bg-info border-info " type="submit">
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2 text-info">
						Already have an account?
						<Link to="/login">
							<Badge className="bg-light text-info m-2 p-2 border border-info">Log In</Badge>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
