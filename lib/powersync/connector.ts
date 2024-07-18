import {
  AbstractPowerSyncDatabase,
  PowerSyncBackendConnector,
} from "@powersync/react-native";

export { Connector };

class Connector implements PowerSyncBackendConnector {
  async fetchCredentials() {
    const token = "XXX";
    const endpoint = "XXX";
    return { endpoint, token };
  }

  async uploadData(database: AbstractPowerSyncDatabase): Promise<void> {
    const transaction = await database.getNextCrudTransaction();

    if (!transaction) {
      return;
    }

    return;
  }
}
