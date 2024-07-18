import { useQuery } from "@powersync/react-native";
import { Text, View } from "react-native";

export const SyncedData = () => {
  const data = useQuery("SELECT * FROM user");
  return (
    <View>
      <Text>Synced Data</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};
