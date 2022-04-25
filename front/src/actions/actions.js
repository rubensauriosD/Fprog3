import axios from 'axios';

export function getPais() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pais`);
        dispatch({ type: 'GET_PAIS', payload: response.data });
    }
}

