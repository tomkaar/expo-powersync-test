import { Schema, Table, Column, ColumnType } from "@powersync/react-native";

export const schema = new Schema([
  new Table({
    name: "user",
    columns: [
      new Column({ name: "first_name", type: ColumnType.TEXT }),
      new Column({ name: "last_name", type: ColumnType.TEXT }),
    ],
  }),
]);
