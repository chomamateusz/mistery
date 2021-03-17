import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css"
import Navigation from "../Navigation"
import ItemsTable from "./ItemsTable"
import ClientData from "./ClientData"
import ConfirmItem from "./ConfirmItem"
import InvoiceDatePicker from "./InvoiceDatePicker"
import ConfirmDocument from "./ConfirmDocument"
import DocumentType from "./DocumentType"

const CreateInvoice = () => {
	class InvoiceItem {
		constructor() {
			this.itemName = ""
			this.itemPrice = ""
			this.itemQuantity = ""
			this.itemUnits = ""
			this.itemTax = ""
		}
	}

	const history = useHistory()
	const dispatch = useDispatch()
	const [docType, setDocType] = useState("invoice")
	const [paymentDate, setPaymentDate] = useState(new Date())
	const [client, setClient] = useState({})
	const [invoiceItems, setInvoiceItems] = useState([])
	const [tempInvoiceItem, setTempInvoiceItem] = useState(new InvoiceItem())
	const [clientWarning, setClientWarning] = useState(false)
	const [itemWarning, setItemWarning] = useState(false)
	const [invoiceWarning, setInvoiceWarning] = useState(false)
	const documentsLength = useSelector(state => state.documents.documents.length + 1)

	const addItem = () => {
		if (
			tempInvoiceItem.itemName &&
			tempInvoiceItem.itemPrice &&
			tempInvoiceItem.itemQuantity &&
			tempInvoiceItem.itemUnits &&
			tempInvoiceItem.itemTax
		) {
			setItemWarning(false)
			setInvoiceItems([...invoiceItems, tempInvoiceItem])
			setTempInvoiceItem(new InvoiceItem())
		} else {
			setItemWarning(true)
		}
	}

	const handleClientChange = e => {
		setClient({ ...client, [e.target.id]: e.target.value })
	}

	const handleItemChange = e => {
		setTempInvoiceItem({ ...tempInvoiceItem, [e.target.id]: e.target.value })
	}

	const handleSubmit = e => {
		const clientData = client.clientName && client.clientAddress && client.clientNip

		e.preventDefault()
		if (invoiceItems.length && clientData) {
			dispatch({
				type: "ADD_INVOICE",
				payload: {
					client: client,
					items: invoiceItems,
					paymentDate: paymentDate.toLocaleDateString(),
					createdAt: new Date().toLocaleDateString(),
					type: docType,
					id: documentsLength,
				},
			})
			setClientWarning(false)
			setInvoiceWarning(false)
			setItemWarning(false)
			history.push("/")
		} else if (invoiceItems.length && !clientData) {
			setClientWarning(true)
			setInvoiceWarning(false)
		} else if (!invoiceItems.length && clientData) {
			setClientWarning(false)
			setInvoiceWarning(true)
		} else if (!invoiceItems.length && !clientData) {
			setClientWarning(true)
			setInvoiceWarning(true)
			setItemWarning(true)
		}
	}

	return (
		<>
			<Navigation />
			<h2 className="m-4 text-center">Kreator dokumentu</h2>

			<form onSubmit={handleSubmit} className="container-fluid" style={{ maxWidth: "600px" }}>
				<DocumentType setDocType={setDocType} />
				<ClientData clientWarning={clientWarning} handleClientChange={handleClientChange} />
				<ItemsTable invoiceItems={invoiceItems} />
				<ConfirmItem
					addItem={addItem}
					handleItemChange={handleItemChange}
					tempInvoiceItem={tempInvoiceItem}
					itemWarning={itemWarning}
				/>
				<InvoiceDatePicker paymentDate={paymentDate} setPaymentDate={setPaymentDate} />
				<ConfirmDocument invoiceWarning={invoiceWarning} />
			</form>
		</>
	)
}

export default CreateInvoice
