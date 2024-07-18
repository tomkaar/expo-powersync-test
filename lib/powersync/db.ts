import { PowerSyncDatabase } from "@powersync/react-native";
import { Connector } from "./connector";
import { schema } from "./schema";

/**
 * Instantiate the local PowerSync database
 * This uses react-native-quick-sqlite to open a SQLite database file
 */
export const db = new PowerSyncDatabase({
  schema, // The schema you defined in the previous step
  database: {
    dbFilename: "powersync.db", // Filename for the SQLite database — it's important to only instantiate one instance per file.
    // dbLocation: 'path/to/directory' // Optional. Directory where the database file is located.'
  },
});
