import React from "react"
import DatePicker from "react-datepicker"

const ClientData = ({ setPaymentDate, paymentDate }) => {
	return (
		<>
			<div className="form-group mt-4">
				<label htmlFor="payment-deadline">Termin płatności: </label>
				<div>
					<DatePicker
						className="form-control"
						name="payment-deadline"
						id="payment-deadline"
						selected={paymentDate}
						onChange={date => setPaymentDate(date)}
					/>
				</div>
			</div>
		</>
	)
}

export default ClientData
