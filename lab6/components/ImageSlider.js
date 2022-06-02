import { Image, View } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { useState } from "react";

export default function ImageSlider() {
  const [imageScale, setImageScale] = useState(0.75);

  const resizeImage = (value) => {
    setImageScale(value);
  };

  return (
    <View style={styles.imagesSlider.sliderView}>
      <Image
        style={[
          styles.imagesSlider.sliderImg,
          { transform: [{ scale: imageScale }] },
        ]}
        source={{
          uri: "https://pbs.twimg.com/media/FULm00MXsAIjVdm?format=jpg&name=medium",
        }}
      />
      <Slider
        style={{
          width: "90%",
        }}
        value={0.75}
        maximumValue={1}
        minimumValue={0.1}
        minimumTrackTintColor="#980000"
        maximumTrackTintColor="#fff"
        thumbTintColor="#980000"
        onValueChange={resizeImage}
      />
    </View>
  );
}
