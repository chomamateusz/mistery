import React from "react"

const ClientData = ({ handleItemChange, tempInvoiceItem, addItem, itemWarning }) => {
	return (
		<>
			<h5 className="mt-4">Dodaj towar:</h5>

			<div
				className="bg-info text-light"
				style={{
					border: "1px solid #ccc",
					padding: "10px 20px",
					borderRadius: "5px",
				}}
			>
				<div className="form-group">
					<label htmlFor="itemName" className="font-weight-bold">
						Nazwa:
					</label>
					<input
						onChange={e => handleItemChange(e, tempInvoiceItem.itemId)}
						className="form-control"
						type="text"
						name="itemName"
						id="itemName"
						value={tempInvoiceItem.itemName}
					/>
				</div>

				<div className="form-row">
					<div className="col">
						<label htmlFor="itemPrice">Cena: </label>
					</div>
					<div className="col">
						<label htmlFor="itemQuantity">Ilość: </label>
					</div>
					<div className="col">
						<label htmlFor="itemUnits">Jednostki: </label>
					</div>
					<div className="col">
						<label htmlFor="itemTax">VAT: </label>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col">
						<input
							onChange={e => handleItemChange(e, tempInvoiceItem.itemId)}
							className="form-control"
							type="number"
							name="itemPrice"
							id="itemPrice"
							step="0.01"
							value={tempInvoiceItem.itemPrice}
						/>
					</div>

					<div className="form-group col">
						<input
							onChange={e => handleItemChange(e, tempInvoiceItem.itemId)}
							className="form-control"
							type="number"
							name="itemQuantity"
							id="itemQuantity"
							step="1"
							value={tempInvoiceItem.itemQuantity}
						/>
					</div>
					<div className="form-group col">
						<input
							onChange={e => handleItemChange(e, tempInvoiceItem.itemId)}
							className="form-control"
							type="string"
							name="itemUnits"
							id="itemUnits"
							step="1"
							value={tempInvoiceItem.itemUnits}
						/>
					</div>

					<div className="form-group col">
						<select
							onChange={e => handleItemChange(e, tempInvoiceItem.itemId)}
							className="custom-select"
							type="select"
							name="itemTax"
							id="itemTax"
							value={tempInvoiceItem.itemTax}
						>
							<option></option>
							<option>0%</option>
							<option>5%</option>
							<option>8%</option>
							<option>23%</option>
						</select>
					</div>
				</div>
			</div>

			{itemWarning && (
				<small style={{ color: "red" }}>Uzupełnij dane żeby wprowadzić towar do listy</small>
			)}

			<div className="m-2 text-center">
				<button className="btn btn-info m-2" type="button" onClick={addItem}>
					Zatwierdź towar
				</button>
			</div>
		</>
	)
}

export default ClientData
