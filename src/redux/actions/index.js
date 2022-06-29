import axios from "axios"
import { GET_DETAIL_POKEMON } from "../constants"

export const getDetailPokemon = (uuid) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_POKEMON,
        payload: {
            loading: true,
            data: false,
            error: false
        }
    })

    axios
        .get(`https://test.dengansenangteknologi.com/api/v1/pokemons/${uuid}`)
        .then((res) => {
            dispatch({
                type: GET_DETAIL_POKEMON,
                payload: {
                    loading: false,
                    data: res.data.data,
                    error: false
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAIL_POKEMON,
                payload: {
                    loading: false,
                    data: false,
                    error: err
                }
            })
        })
}