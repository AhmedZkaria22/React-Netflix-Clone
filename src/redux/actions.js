import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./constants";

export const fetchMoviesRequest = () => {
    return{
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = users => {
    return{
        type: FETCH_MOVIES_SUCCESS,
        payload: users
    }
}

export const fetchMoviesFailure = error => {
    return{
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}
