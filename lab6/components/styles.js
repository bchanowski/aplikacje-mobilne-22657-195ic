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
    margin: 5,
  },
  imageText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
  },
});

styles.imagesSlider = StyleSheet.create({
  sliderView: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderImg: {
    flex: 2,
    width: "95%",
    borderRadius: 50,
    borderColor: "#980000",
    borderWidth: 1,
    marginTop: 20,
  },
});

styles.lazyLoading = StyleSheet.create({
  loadView: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  loadImg: {
    flex: 1,
    width: "95%",
    borderRadius: 50,
    borderColor: "#980000",
    borderWidth: 1,
    marginTop: 20,
  },
  loadIcons: {
    flexDirection: "row",
    margin: "2%",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

styles.webInfo = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  webBorder: {
    backgroundColor: "#980000",
    borderRadius: 50,
    borderColor: "#980000",
    borderWidth: 1,
    padding: 20,
  },
  webText: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
  },
});

export default styles;
