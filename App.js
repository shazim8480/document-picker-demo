import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import * as DocumentPicker from "expo-document-picker";

export default function App() {
  const documentUploadHandler = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Select a Document to Upload</Text>
      <StatusBar style="auto" />
      <Button title="Upload Document" onPress={documentUploadHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
