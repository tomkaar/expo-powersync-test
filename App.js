import "react-native-polyfill-globals/auto";
import "@azure/core-asynciterator-polyfill";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Buffer } from "@craftzdog/react-native-buffer";
import { PowerSyncProvider } from "./lib/powersync/PowerSyncProvider";
import { FetchSomethingElseButton } from "./components/FetchSomethingElseButton";
import { SyncedData } from "./components/SyncedData";

if (typeof global.Buffer == "undefined") {
  // @ts-ignore If using TypeScript
  global.Buffer = Buffer;
}

if (typeof process.nextTick == "undefined") {
  process.nextTick = setImmediate;
}

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
