"use client";

import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { useAgGridContext } from "@/laduny/provider/AgGridProvider";
import { ColDef, ICellRendererParams } from "ag-grid-community";

import { formatLogTimeDate } from "@/laduny/utils/timeUtils";
import ActionButtonList from "@/laduny/components/shared/ActionButtonList";
import { SalesOrderResponse } from "@/laduny/types/sales";

const SalesOrderList = ({
  data,
  token,
  refreshData,
}: {
  data: SalesOrderResponse[];
  token: string;
  refreshData: () => void;
}) => {
  const { gridOptions } = useAgGridContext();
  const gridRef = useRef<AgGridReact>(null);

  const [rowData, setRowData] = useState<SalesOrderResponse[]>([]);
  const [colDefs, setColDefs] = useState<ColDef[]>([]);

  useEffect(() => {
    setRowData(data);

    const columnDefs: ColDef[] = [
      {
        field: "id",
        headerName: "#",
        valueGetter: (params) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : null,
      },
      { field: "id", headerName: "Sales Order ID" }, // Updated to match the dummy data
      { field: "amount", headerName: "Total Amount" },
      {
        field: "orderDate",
        headerName: "Order Date",
        valueFormatter: (params) => formatLogTimeDate(params.value),
      },
      {
        field: "invoiceStatus",
        headerName: "Invoice Status",
      },
      {
        field: "createdTime",
        headerName: "Created Time",
        valueFormatter: (params) => formatLogTimeDate(params.value),
      },
      {
        field: "updatedTime",
        headerName: "Updated Time",
        valueFormatter: (params) => formatLogTimeDate(params.value),
      },
      {
        field: "createdBy",
        headerName: "Created By",
      },
      {
        field: "updatedBy",
        headerName: "Updated By",
      },
      {
        field: "action",
        headerName: "Action",
        cellRenderer: (params: ICellRendererParams) => (
          <ActionButtonList
            data={params.data}
            token={token}
            refreshData={refreshData}
            name={`sales`}
            isCategoryProduct={true}
          />
        ),
      },
    ];

    setColDefs(columnDefs);
  }, [data]);

  const onFilterTextBoxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.setGridOption("quickFilterText", e.target.value);
    }
  };

  return (
    <>
      <input
        type="text"
        className="mb-2 p-2 border rounded w-full"
        placeholder="Search..."
        onChange={onFilterTextBoxChanged}
      />

      <AgGridReact
        gridOptions={gridOptions}
        theme="legacy"
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
      />
    </>
  );
};

export default SalesOrderList;
