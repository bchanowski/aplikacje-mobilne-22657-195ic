import { ActivityIndicator, View } from "react-native";
import { Image } from "@rneui/themed";
import { Entypo, Zocial } from "@expo/vector-icons";
import styles from "./styles";

export default function LazyLoading() {
  return (
    <View style={styles.lazyLoading.loadView}>
      <Image
        containerStyle={styles.lazyLoading.loadImg}
        source={{
          uri: "https://pbs.twimg.com/media/FTyP-cjXoAAiDb9?format=jpg&name=4096x4096",
        }}
        style={{ width: "100%", height: "100%" }}
        PlaceholderContent={<ActivityIndicator color="#fff" size="large" />}
      />
      <View style={styles.lazyLoading.loadIcons}>
        <Zocial name="appstore" size={40} color="#980000" />
        <Zocial name="bitcoin" size={40} color="#980000" />
        <Zocial name="android" size={40} color="#980000" />
        <Zocial name="acrobat" size={40} color="#980000" />
        <Zocial name="creativecommons" size={40} color="#980000" />
        <Zocial name="dropbox" size={40} color="#980000" />
        <Zocial name="drupal" size={40} color="#980000" />
        <Zocial name="chrome" size={40} color="#980000" />
        <Zocial name="evernote" size={40} color="#980000" />
        <Zocial name="facebook" size={40} color="#980000" />
        <Zocial name="email" size={40} color="#980000" />
        <Zocial name="github" size={40} color="#980000" />
        <Zocial name="google" size={40} color="#980000" />
        <Zocial name="gmail" size={40} color="#980000" />
        <Zocial name="forrst" size={40} color="#980000" />
        <Zocial name="flickr" size={40} color="#980000" />
        <Zocial name="ie" size={40} color="#980000" />
        <Zocial name="itunes" size={40} color="#980000" />
        <Zocial name="instagram" size={40} color="#980000" />
        <Zocial name="klout" size={40} color="#980000" />
        <Zocial name="logmein" size={40} color="#980000" />
        <Zocial name="myspace" size={40} color="#980000" />
        <Zocial name="paypal" size={40} color="#980000" />
        <Zocial name="pinterest" size={40} color="#980000" />
        <Zocial name="reddit" size={40} color="#980000" />
        <Zocial name="stackoverflow" size={40} color="#980000" />
        <Zocial name="skype" size={40} color="#980000" />
        <Zocial name="rss" size={40} color="#980000" />
        <Zocial name="spotify" size={40} color="#980000" />
        <Zocial name="steam" size={40} color="#980000" />
        <Zocial name="twitter" size={40} color="#980000" />
        <Zocial name="vk" size={40} color="#980000" />
        <Zocial name="windows" size={40} color="#980000" />
        <Zocial name="wordpress" size={40} color="#980000" />
        <Zocial name="xing" size={40} color="#980000" />
        <Zocial name="yahoo" size={40} color="#980000" />
      </View>
      <View style={styles.lazyLoading.loadIcons}>
        <Entypo name="cycle" size={40} color="#980000" />
        <Entypo name="database" size={40} color="#980000" />
        <Entypo name="dial-pad" size={40} color="#980000" />
        <Entypo name="direction" size={40} color="#980000" />
        <Entypo name="document" size={40} color="#980000" />
        <Entypo name="documents" size={40} color="#980000" />
        <Entypo name="dot-single" size={40} color="#980000" />
        <Entypo name="download" size={40} color="#980000" />
        <Entypo name="dribbble" size={40} color="#980000" />
        <Entypo name="drink" size={40} color="#980000" />
        <Entypo name="drive" size={40} color="#980000" />
        <Entypo name="drop" size={40} color="#980000" />
        <Entypo name="dropbox" size={40} color="#980000" />
        <Entypo name="edit" size={40} color="#980000" />
        <Entypo name="email" size={40} color="#980000" />
        <Entypo name="emoji-flirt" size={40} color="#980000" />
        <Entypo name="emoji-happy" size={40} color="#980000" />
        <Entypo name="emoji-neutral" size={40} color="#980000" />
        <Entypo name="emoji-sad" size={40} color="#980000" />
        <Entypo name="erase" size={40} color="#980000" />
        <Entypo name="eraser" size={40} color="#980000" />
        <Entypo name="evernote" size={40} color="#980000" />
        <Entypo name="export" size={40} color="#980000" />
        <Entypo name="feather" size={40} color="#980000" />
        <Entypo name="facebook" size={40} color="#980000" />
        <Entypo name="fingerprint" size={40} color="#980000" />
        <Entypo name="flag" size={40} color="#980000" />
        <Entypo name="flash" size={40} color="#980000" />
        <Entypo name="flashlight" size={40} color="#980000" />
        <Entypo name="flattr" size={40} color="#980000" />
        <Entypo name="flow-line" size={40} color="#980000" />
        <Entypo name="flower" size={40} color="#980000" />
        <Entypo name="folder" size={40} color="#980000" />
        <Entypo name="github" size={40} color="#980000" />
        <Entypo name="gauge" size={40} color="#980000" />
        <Entypo name="game-controller" size={40} color="#980000" />
      </View>
    </View>
  );
}
