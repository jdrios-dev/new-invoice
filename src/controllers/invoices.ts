
type Invoice = {
    id?: number;
    prefix: string;
    total: number;
    client_id: number;
}

const getInvoiceById = (id: number) => { }
const getInvoices = () => { }
const createInvoice = (data: Invoice) => { }
const deleteInvoiceById = (id: number) => { }
const updateInvoiceById = (id: number) => { }

export {
    getInvoiceById,
    getInvoices,
    createInvoice,
    deleteInvoiceById,
    updateInvoiceById
}