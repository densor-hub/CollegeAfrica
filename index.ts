import rootReducer from "./context/reducers";
export type iRootReducerState = ReturnType<typeof rootReducer>;

export interface iCounterActionType {
    type: string,
    payload: number
}

export interface iCounterInitialState {
    count: number
}

export interface iAlbumsActionType {
    type: string,
    addPayload?: iAlbum[],
    deletePayload?: number
}

export interface iAlbumsInitialState {
    albums: iAlbum[] | []
}

export interface iAlbum {
    user: number,
    id: number,
    title: string,
    navigation?: () => {}
}