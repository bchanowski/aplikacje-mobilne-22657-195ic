import NetInfo from "@react-native-community/netinfo";
import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function WebInfo() {
  const [connectionType, setConnectionType] = useState("");
  const [isConnected, setIsConnected] = useState();
  const [isInternetReachable, setIsInternetReachable] = useState();
  const [isWifiEnabled, setIsWifiEnabled] = useState();
  const [connectionDetails, setConnectionDetails] = useState();
  const [ipAddress, setIpAddress] = useState();

  NetInfo.fetch().then((state) => {
    setIsConnected(state.isConnected);
    setConnectionType(state.type);
    setIsInternetReachable(state.isInternetReachable);
    setIsWifiEnabled(state.isWifiEnabled);
    setConnectionDetails(state.details.isInternetExpensive);
    setIpAddress(state.details.ipAddress);
  });
  return (
    <View style={styles.webInfo.webView}>
      <View style={styles.webInfo.webBorder}>
        <Text style={styles.webInfo.webText}>Connection Info:</Text>
        <Text style={styles.webInfo.webText}>Type: {connectionType}</Text>
        <Text style={styles.webInfo.webText}>
          Is Connected: {isConnected ? "Yes" : "No"}
        </Text>
        <Text style={styles.webInfo.webText}>
          Is Internet reachable: {isInternetReachable ? "Yes" : "No"}
        </Text>
        <Text style={styles.webInfo.webText}>
          Is WiFi enabled: {isWifiEnabled ? "Yes" : "No"}
        </Text>
        <Text style={styles.webInfo.webText}>
          Is Internet Expensive: {connectionDetails ? "Yes" : "No"}
        </Text>
        <Text style={styles.webInfo.webText}>
          {ipAddress != null ? "Ip address: " + ipAddress : ""}
        </Text>
      </View>
    </View>
  );
}
