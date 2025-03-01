"use client";

import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { useAgGridContext } from "@/laduny/provider/AgGridProvider";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { CategoryProductResponse } from "@/laduny/types/category";
import { formatLogTimeDate } from "@/laduny/utils/timeUtils";
import ActionButtonList from "@/laduny/components/shared/ActionButtonList";

const CategoryProductList = ({
  data,
  token,
  refreshData,
}: {
  data: CategoryProductResponse[];
  token: string;
  refreshData: () => void;
}) => {
  const { gridOptions } = useAgGridContext();
  const gridRef = useRef<AgGridReact>(null);

  const [rowData, setRowData] = useState<CategoryProductResponse[]>([]);
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
      { field: "name", headerName: "Name" },
      {
        field: "description",
        headerName: "Description",
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
            name={`categories`}
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
        theme={`legacy`}
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
      />
    </>
  );
};

export default CategoryProductList;
