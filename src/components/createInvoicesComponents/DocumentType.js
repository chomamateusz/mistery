import React from "react"

const AddInvoice = ({ setDocType }) => {
	return (
		<>
			<h5 className="mt-4">Typ dokumentu:</h5>

			<div className="input-group mb-3 w-50">
				<select
					onChange={e => {
						setDocType(e.target.value)
					}}
					className="custom-select"
					type="select"
					name="itemTax"
					id="itemTax"
				>
					<option value="invoice">Faktura</option>
					<option value="prepayment-invoice">Faktura zaliczkowa</option>
					<option value="receipt">Paragon</option>
				</select>
			</div>
		</>
	)
}

export default AddInvoice
