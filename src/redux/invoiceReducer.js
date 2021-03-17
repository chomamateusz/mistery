// import data from "../data/data.json"

export const invoiceReducer = (state = { documents: [] }, action) => {
	switch (action.type) {
		case "FETCH_DATA":
			return { ...state, documents: [...action.payload.documents] }
		case "ADD_INVOICE":
			const newInvoice = {
				client: {
					...action.payload.client,
				},
				paymentDate: action.payload.paymentDate,
				createdAt: action.payload.createdAt,
				type: action.payload.type,
				id: action.payload.id,
				items: [...action.payload.items],
			}

			// fetch("http://localhost:3000/documents", {
			// 	method: "POST",
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify(newInvoice),
			// })

			return { ...state, documents: [newInvoice, ...state.documents] }

		default:
			return state
	}
}
