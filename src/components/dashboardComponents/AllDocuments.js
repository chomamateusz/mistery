import React from "react"
import { useSelector } from "react-redux"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const AllDocuments = () => {
	const documents = useSelector(state => state.documents.documents)

	return (
		<>
			<h2 className="mb-3">Wszystkie Dokumenty:</h2>

			{documents.map((document, index) => {
				const docType = () => {
					switch (document.type) {
						case "invoice":
							return "Faktura"
						case "prepayment-invoice":
							return "Faktura przedpłacowa"
						case "receipt":
							return "Paragon"
						default:
							return
					}
				}

				return (
					<Card className="mb-3 text-white bg-info" key={index}>
						<div className="card-header d-flex justify-content-center align-items-center">
							<p className=" m-0 w-50">
								{docType()} nr {document.id}/{document.createdAt}
							</p>
							<div className="w-50 d-flex justify-content-end">
								<Link to={`/invoice-details/${document.id}`}>
									<Button className="btn-light btn-sm">Zobacz dokument</Button>
								</Link>
							</div>
						</div>
						<div className="px-3 py-2 m-0">
							<p className=" m-0">Nabywca: {document.client.clientName}</p>
							TERMIN PŁATNOŚCI: {document.paymentDate}
						</div>
					</Card>
				)
			})}
		</>
	)
}

export default AllDocuments
