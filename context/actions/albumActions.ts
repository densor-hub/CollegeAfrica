import { iAlbum, iAlbumsActionType } from "../../index"

export const AddAlbums = (payload: iAlbum[]): iAlbumsActionType => {
    return {
        type: "ADD",
        addPayload: payload
    }
}

export const DeleteAlbums = (payload: number): iAlbumsActionType => {
    return {
        type: "DELETE",
        deletePayload: payload
    }
}