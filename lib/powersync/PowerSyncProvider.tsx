import {
  PowerSyncContext,
  SyncStreamConnectionMethod,
} from "@powersync/react-native";
import { type ReactNode, useEffect, useState } from "react";

import { Connector } from "./connector";
import { db } from "./db";

export const PowerSyncProvider = ({ children }: { children: ReactNode }) => {
  const [connector] = useState(new Connector());
  const [powersync] = useState(db);

  useEffect(() => {
    const fn = async () => {
      try {
        await powersync.init();
        console.log("Powersync initialized");
        powersync.connect(connector, {
          connectionMethod: SyncStreamConnectionMethod.WEB_SOCKET,
        });
        console.log("Connected to powersync");
      } catch (error) {
        console.error(error);
      }
    };

    fn();
  }, []);

  return (
    <PowerSyncContext.Provider value={powersync}>
      {children}
    </PowerSyncContext.Provider>
  );
};
