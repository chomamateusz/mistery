import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import { Container } from "react-bootstrap"

const DocumentDetails = () => {
	let { id } = useParams()

	const document = useSelector(state => {
		return state.documents.documents.find(document => document.id.toString() === id)
	})

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
	const netTotal = []
	const taxTotal = []
	const grossTotal = []

	return (
		<>
			<Navigation />
			<Container>
				<h5 className="mt-5 mb-4">
					{docType()} nr {document.id}/{document.createdAt}
				</h5>
				<hr />

				<div className="seller-client-container mt-4">
					<div className="mr-4">
						<h4 className="mb-3">Sprzedawca</h4>
						<p className="my-1">
							Nazwa: <strong>Tomasz Jabłoński</strong>
						</p>
						<p className="my-1">
							Adres: <strong>ul. Kasztanowa 16, 24-590 Lublin</strong>
						</p>
						<p className="my-1">
							NIP: <strong>536-358-43-54</strong>
						</p>
					</div>
					<hr />

					<div>
						<h4 className="mb-3">Nabywca</h4>
						<p className="my-1">
							Nazwa: <strong>{document.client.clientName}</strong>
						</p>
						<p className="my-1">
							Adres: <strong>{document.client.clientAddress}</strong>
						</p>
						<p className="my-1">
							NIP: <strong>{document.client.clientNip}</strong>
						</p>
					</div>
				</div>
				<hr />

				<div>
					<h5 className="my-4">Data wystawienia: {document.createdAt}</h5>
				</div>

				<div style={{ overflowX: "scroll" }} className="p-0">
					<table className="table table-striped table-info m-0">
						<thead className="thead-dark" style={{ overflow: "hidden" }}>
							<tr>
								<th className="pl-3">Nazwa</th>
								<th className="text-right">Jednostki</th>
								<th className="text-right">Ilość</th>
								<th className="text-right">Cena netto</th>
								<th className="text-right">VAT</th>
								<th className="text-right">wartość netto</th>
								<th className="text-right">wartość VAT</th>
								<th className="text-right pr-3">wartość brutto</th>
							</tr>
						</thead>
						<tbody>
							{document.items.map(item => {
								const taxRate = parseInt(item.itemTax, 10) / 100
								const netSum = item.itemPrice * item.itemQuantity
								const taxSum = Number((netSum * taxRate).toFixed(2))
								const grossSum = netSum + taxSum

								netTotal.push(netSum)
								taxTotal.push(taxSum)
								grossTotal.push(grossSum)

								return (
									<tr key={item.itemName}>
										<td className="w-25 pl-3">{item.itemName}</td>
										<td className="text-right">{item.itemUnits}</td>
										<td className="text-right">{item.itemQuantity}</td>
										<td className="text-right">{Number(item.itemPrice).toFixed(2)}</td>
										<td className="text-right">{item.itemTax}</td>
										<td className="text-right">{netSum.toFixed(2)}</td>
										<td className="text-right">{taxSum.toFixed(2)}</td>
										<td className="text-right pr-3">{grossSum.toFixed(2)}</td>
									</tr>
								)
							})}
							<tr>
								<th className="pl-3">Suma</th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th className="text-right">{netTotal.reduce((a, b) => a + b).toFixed(2)}</th>
								<th className="text-right">{taxTotal.reduce((a, b) => a + b).toFixed(2)}</th>
								<th className="text-right pr-3">{grossTotal.reduce((a, b) => a + b).toFixed(2)}</th>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="payment-container">
					<h5>Termin płatności: {document.paymentDate}</h5>
					<h4 className="font-weight-bold">
						Do zapłaty: {grossTotal.reduce((a, b) => a + b).toFixed(2)} PLN
					</h4>
				</div>
			</Container>
		</>
	)
}

export default DocumentDetails
