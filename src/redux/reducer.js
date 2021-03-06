import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    movies: [],
    error: '',
}



const rootReducer = (state = initialState, action) => { 
    switch(action.type){

        case FETCH_MOVIES_REQUEST :
            return {
                ...state,
                loading: true
            }

        case FETCH_MOVIES_SUCCESS :
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error: ''
            }

        case FETCH_MOVIES_FAILURE :
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload
            }
                
        default: return state; 
    }
}

export default rootReducer
