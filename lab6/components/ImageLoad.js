import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function ImageLoad() {
  return (
    <View style={styles.imagesLoad.imageView}>
      <Text style={styles.imagesLoad.imageText}>Image loaded with uri</Text>
      <Image
        style={styles.imagesLoad.imageImg}
        source={{
          uri: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220320172430-leclerc-card.jpg",
        }}
      />
      <Text style={styles.imagesLoad.imageText}>Image loaded with require</Text>
      <Image
        style={styles.imagesLoad.imageImg}
        source={require("../assets/example.jpg")}
      />
    </View>
  );
}
