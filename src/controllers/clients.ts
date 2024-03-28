type Client = {
    id?: number;
    name: string;
    address: string;
    phone: string;
}

const getClientById = (id: number) => { }
const getClients = () => { }
const createClient = (data: Client) => { }
const deleteClientById = (id: number) => { }
const updateClientById = (id: number) => { }

export = {
    getClientById,
    getClients,
    createClient,
    deleteClientById,
    updateClientById
}