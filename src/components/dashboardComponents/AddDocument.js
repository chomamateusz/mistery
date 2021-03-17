import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const AddDocument = () => {
	return (
		<>
			<h5 className="mt-4 text-center">Stwórz nowy dokument:</h5>

			<div className="input-group mb-3 d-flex justify-content-center">
				<div className="input-group-append">
					<Link to={`/create-document`}>
						<Button variant="info">
							<p className="text-left text-light m-0">Utwórz</p>
						</Button>
					</Link>
				</div>
			</div>
			<hr />
		</>
	)
}

export default AddDocument
