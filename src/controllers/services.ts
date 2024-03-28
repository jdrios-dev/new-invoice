type Service = {
    id?: number;
    name: string;
    description: string;
    price_unit: number;
    quantity: number;
    total: number;
    invoice_id: number;
}

const getServiceById = (id: number) => { }
const getServices = () => { }
const createService = (data: Service) => { }
const deleteServiceById = (id: number) => { }
const updateServiceById = (id: number) => { }

export {
    getServiceById,
    getServices,
    createService,
    deleteServiceById,
    updateServiceById
}