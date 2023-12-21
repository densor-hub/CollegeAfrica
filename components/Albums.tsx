import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { List } from 'react-native-paper';
import useCustomAxios from "../hooks/useCustomAxios"
import { useSelector, useDispatch } from "react-redux"
import { iAlbum, iRootReducerState } from "../index"
import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import { MaterialIcons } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView } from "react-native-safe-area-context";


const AlbumsScreen = ({ navigation }: any) => {
    const [showLoading, setShowLoading] = useState(false)
    const [alertMessage, setAlertMessgae] = useState("");
    const axios = useCustomAxios()
    const dispatch = useDispatch()
    const albums = useSelector((state: iRootReducerState) => { return state.albumReducer.albums })

    //send delete request to API
    const handleDelete = (id: number): void => {
        try {
            setShowLoading(true)
            axios.delete<iAlbum>(`/albums/${id}`).then((response: AxiosResponse<iAlbum>) => {
                dispatch({ type: "DELETE", deletePayload: id })
                setAlertMessgae("Deleted Successfully")
                setShowLoading(false)
            }).catch((error: any) => {
                setAlertMessgae(error?.message)
                setShowLoading(false)
            })
        } catch (error: any) {
            setAlertMessgae(error?.message)
        }
    }

    //fetch albums on load of page
    useEffect(() => {
        try {
            setShowLoading(true)
            axios.get<iAlbum[]>('/albums').then((response: AxiosResponse<iAlbum[]>) => {
                dispatch({ type: "ADD", addPayload: response.data })
                setShowLoading(false)
            }).catch((error) => {
                setAlertMessgae(error.message)
                setShowLoading(false)
            })
        } catch (error: any) {
            setAlertMessgae(error?.message)
        }
    }, [])

    //clear alert after 3seconds
    useEffect(() => {
        if (alertMessage) {
            setTimeout(() => {
                setAlertMessgae("")
            }, 3000);
        }
    }, [alertMessage])

    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>{alertMessage && alertMessage}</Text>
            <Spinner visible={showLoading} textContent={'Loading...'} />
            <View>
                <List.Section >
                    <FlatList
                        data={albums}
                        numColumns={1}
                        renderItem={({ index, item }) => (
                            <List.Item
                                title={""}
                                key={index}
                                left={() =>
                                    <View key={item.id}
                                        style={{
                                            width: "100%",
                                            borderWidth: 3,
                                            borderColor: '#f97316',
                                            borderStyle: 'solid',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderRadius: 10,
                                            backgroundColor: '#fed7aa',
                                            padding: 5,
                                            position: "relative",
                                            left: 10,
                                        }}>

                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate("Photos") }}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: "white",
                                                borderRadius: 100,
                                                padding: 10,
                                                backgroundColor: "#fdba74",

                                            }}>
                                            <Text
                                                style={{
                                                    height: 40,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    position: "relative",
                                                    top: 10,
                                                }}>{item.title}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            handleDelete(item.id)
                                        }}>
                                            <MaterialIcons name="delete" size={20} style={{ color: "#7f1d1d" }}>
                                            </MaterialIcons>
                                        </TouchableOpacity>
                                    </View>}
                            />
                        )}
                    />
                </List.Section>
            </View>
        </SafeAreaView>
    )
}

export default AlbumsScreen