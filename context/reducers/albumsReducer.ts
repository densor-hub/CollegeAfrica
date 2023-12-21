import { iAlbumsActionType, iAlbumsInitialState, iAlbum } from "../.."
import { } from "../.."

const initialState: iAlbumsInitialState = {
    albums: []
}

export const albumReducer = (state: iAlbumsInitialState = initialState, action: iAlbumsActionType) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, albums: action.addPayload
            }

        case "DELETE":
            return {
                ...state, albums: state.albums?.filter(albums => { return albums.id !== action.deletePayload })
            }

        default: return state
    }
}

export default albumReducer