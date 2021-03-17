import React from "react"

const ConfirmDocument = ({ invoiceWarning }) => {
	return (
		<>
			<div className="mb-4">
				<button className="btn btn-info w-100" type="submit">
					Utwórz nową fakturę
				</button>
				{invoiceWarning && (
					<div>
						<small style={{ color: "red" }}>
							Wprowadź przynajmniej jeden towar do listy żeby wygenerować fakturę
						</small>
					</div>
				)}
			</div>
		</>
	)
}

export default ConfirmDocument
