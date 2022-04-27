import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Button, Center, SSRProvider } from "native-base";
import * as DocumentPicker from "expo-document-picker";
import LoginFormModal from "./components/Login/LoginFormModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const documentUploadHandler = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Center>
          <Text style={{ marginBottom: 20 }}>Select a Document to Upload</Text>
          <StatusBar style="auto" />
          <Button.Group gutter={5}>
            <Button onPress={documentUploadHandler}>Upload Document</Button>
            <Button onPress={() => setShowModal(true)}>Login Modal</Button>
          </Button.Group>
          {/* <SSRProvider> */}
          <LoginFormModal showModal={showModal} setShowModal={setShowModal} />
          {/* </SSRProvider> */}
        </Center>
      </View>
    </NativeBaseProvider>
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
