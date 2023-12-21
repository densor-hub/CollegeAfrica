import { Text, Image, FlatList, View, TouchableOpacity } from "react-native"
import { List } from 'react-native-paper';

function PhotoGridScreen({ navigation }: any) {
  const dummyArray = [
    { id: 1, source: "../assets/birdImage.png" },
    { id: 2, source: "../assets/birdImage.png" },
    { id: 3, source: "../assets/birdImage.png" },
    { id: 4, source: "../assets/birdImage.png" },
    { id: 5, source: "../assets/birdImage.png" },
    { id: 6, source: "../assets/birdImage.png" },
    { id: 7, source: "../assets/birdImage.png" },
    { id: 8, source: "../assets/birdImage.png" },
    { id: 9, source: "../assets/birdImage.png" },
  ]
  return (
    <View >
      <List.Section >
        <FlatList
          data={dummyArray}
          numColumns={3}
          renderItem={({ item }) => (
            <List.Item
              title={""}
              left={() =>
                <Image style={{ width: 100, height: 100 }} source={require("../assets/birdImage.png")}>

                </Image>
              }
            />
          )}
        />
      </List.Section>
      <TouchableOpacity onPress={() => navigation.goBack()}
        style={{
          padding: 10,
          backgroundColor: "#f97316",
          width: "30%",
          position: "relative",
          left: "35%",
          borderRadius: 20,
        }} >
        <Text style={{ textAlign: "center" }}> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
export default PhotoGridScreen