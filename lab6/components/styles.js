import { StyleSheet } from "react-native";

const styles = {};

styles.mainPage = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#000000",
  },
  mainButton: {
    flex: 1,
    backgroundColor: "#980000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 70,
    marginVertical: 20,
    borderRadius: 50,
  },
  mainText: {
    fontSize: 24,
  },
});

styles.imagesLoad = StyleSheet.create({
  imageView: {
    flex: 1,
    backgroundColor: "#000000",
  },
  imageImg: {
    flex: 1,
    borderRadius: 50,
    borderColor: "#980000",
    borderWidth: 1,
  },
  imageText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
  },
});

export default styles;
