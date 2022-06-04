import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function AsyncStorageFunction() {
  const [asyncValue, setAsyncValue] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [readKey, setReadKey] = useState("");
  const storeData = async () => {
    try {
      await AsyncStorage.setItem(keyValue, asyncValue);
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(readKey);
      if (value !== null) {
        alert("Value for key: " + readKey + " is " + value);
      }
    } catch (e) {
      alert("Not a proper key");
    }
  };

  return (
    <View style={styles.asyncStor.asyncView}>
      <View style={styles.asyncStor.asyncView2}>
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setKeyValue(e.target.value)}
          placeholder="Key"
        />
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setAsyncValue(e.target.value)}
          placeholder="Value"
        />
        <TouchableOpacity
          style={styles.asyncStor.asyncButton}
          onPress={storeData}
        >
          <Text>Add Value</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setReadKey(e.target.value)}
          placeholder="Key"
        />
        <TouchableOpacity
          style={styles.asyncStor.asyncButton}
          onPress={getData}
        >
          <Text>Check Key Value</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
