"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import {
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
ModuleRegistry.registerModules([AllCommunityModule]);

interface AgGridContextProps {
  gridOptions: GridOptions;
}

const AgGridContext = createContext<AgGridContextProps | undefined>(undefined);

export const AgGridProvider = ({ children }: { children: ReactNode }) => {
  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  }, []);

  const onGridSizeChanged = useCallback((params: GridSizeChangedEvent) => {
    params.api.sizeColumnsToFit();
  }, []);

  const gridOptions: GridOptions = useMemo(
    () => ({
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 150,
      },
      pagination: true,
      paginationPageSize: 10,
      paginationPageSizeSelector: [10, 25, 50],
      onGridReady,
      onGridSizeChanged,
    }),
    [onGridReady, onGridSizeChanged]
  );

  return (
    <AgGridContext.Provider value={{ gridOptions }}>
      {children}
    </AgGridContext.Provider>
  );
};

export const useAgGridContext = () => {
  const context = useContext(AgGridContext);
  if (!context) {
    throw new Error("useAgGridContext must be used within an AgGridProvider");
  }
  return context;
};
