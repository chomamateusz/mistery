import React from "react"
import Navigation from "../Navigation"
import AddDocument from "./AddDocument"
import AllDocuments from "./AllDocuments"
import { Container } from "react-bootstrap"

const Dashboard = () => {
	return (
		<>
			<Navigation />
			<Container>
				<AddDocument />
				<AllDocuments />
			</Container>
		</>
	)
}

export default Dashboard
