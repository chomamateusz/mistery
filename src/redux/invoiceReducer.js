import data from "../data/data.json"

export const invoiceReducer = (state = data, action) => {
	switch (action.type) {
		case "ADD_INVOICE":
			const newInvoice = {
				client: {
					...action.payload.client,
				},
				paymentDate: action.payload.paymentDate,
				createdAt: action.payload.createdAt,
				type: action.payload.type,
				items: [...action.payload.items],
			}

			fetch("http://localhost:3000/documents", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newInvoice),
			})

			return { ...state, documents: [...state.documents, newInvoice] }

		default:
			return state
	}
}
