const initialState = {
    services: [],
    listLoadingStatus: "idle",
    getAllUrl: "http://localhost:7070/api/services",
    deleteServiceUrl: "http://localhost:7070/api/services/"
};

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case 'PUT_SERVICES' :
            const services = action.payload;
            return {...state, services: services};
        case 'SET_LOADING_LIST_STATUS' :
            const status = action.payload;
            return {...state, listLoadingStatus: status}
        default :
            return state;
    }
}
