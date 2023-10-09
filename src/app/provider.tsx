"use client";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { reduxStore, persistor } from "../lib/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
