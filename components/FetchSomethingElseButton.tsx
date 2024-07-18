import { Alert, Button } from "react-native";

export const FetchSomethingElseButton = () => {
  const handleFetchSomethingElse = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/1");

      if (!response.ok) {
        console.error(response);
        Alert.alert("Response error", JSON.stringify(response, null, 2));
      }

      const data = await response.json();
      Alert.alert("Fetched something else", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      Alert.alert("Test", error as any);
      const message =
        error instanceof Error
          ? error.message
          : "Failed to fetch something else";
      Alert.alert("Failed to fetch something else", message);
    }
  };

  return (
    <Button title="Fetch something else" onPress={handleFetchSomethingElse} />
  );
};
