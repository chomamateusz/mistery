import React from "react"

const ItemsTable = ({ invoiceItems }) => {
	return (
		<>
			{invoiceItems.length > 0 && (
				<>
					<h5 className="mt-4">Lista towarów:</h5>
					<table className="table table-striped table-info">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Nazwa</th>
								<th scope="col">Cena</th>
								<th scope="col">Ilość</th>
								<th scope="col">Jednostki</th>
								<th scope="col">VAT</th>
							</tr>
						</thead>
						<tbody>
							{invoiceItems.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<tr>
											<td>{item.itemName}</td>
											<td>{item.itemPrice}</td>
											<td>{item.itemQuantity}</td>
											<td>{item.itemUnits}</td>
											<td>{item.itemTax}</td>
										</tr>
									</React.Fragment>
								)
							})}
						</tbody>
					</table>
				</>
			)}
		</>
	)
}

export default ItemsTable
