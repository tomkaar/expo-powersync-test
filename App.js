import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PowerSyncProvider } from "./lib/powersync/PowerSyncProvider";
import { FetchSomethingElseButton } from "./components/FetchSomethingElseButton";
import { SyncedData } from "./components/SyncedData";

export default function App() {
  return (
    <PowerSyncProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <FetchSomethingElseButton />
        <SyncedData />
      </View>
    </PowerSyncProvider>
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
