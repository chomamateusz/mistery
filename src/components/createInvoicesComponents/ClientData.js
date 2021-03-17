import React from "react"

const ClientData = ({ handleClientChange, clientWarning }) => {
	return (
		<>
			<h5>Dane klienta:</h5>
			<div
				className="bg-info text-light"
				style={{
					border: "1px solid #ccc",
					padding: "10px 20px",
					borderRadius: "5px",
				}}
			>
				<div className="form-group">
					<label htmlFor="client-name">Nazwa: </label>
					<input
						onChange={e => handleClientChange(e)}
						className="form-control"
						type="text"
						name="clientName"
						id="clientName"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="client-address">Adres: </label>
					<input
						onChange={e => handleClientChange(e)}
						className="form-control"
						type="text"
						name="clientAddress"
						id="clientAddress"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="client-nip">NIP: </label>
					<input
						onChange={e => handleClientChange(e)}
						className="form-control"
						type="text"
						name="clientNip"
						id="clientNip"
					/>
				</div>
			</div>

			{clientWarning && (
				<small style={{ color: "red" }}>Uzupełnij dane klienta żeby wygenerować fakturę</small>
			)}
		</>
	)
}

export default ClientData
