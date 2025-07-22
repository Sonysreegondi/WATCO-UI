import React from "react";
import { StatusColor } from "../../commonUtils/StatusColors";


interface TableProps {
  updateWallet: () => void;
  headerColumns: string[];
  modelCallBack: () => void;
  authStore: any[];
  parentCallback: () => void;
  value: string;
  dailogType?: string;
  statusPopover?: boolean;
}

const Table: React.FC<TableProps> = ({
  updateWallet,
  headerColumns,
  modelCallBack,
  authStore,
  parentCallback,
  value,
  dailogType,
  statusPopover,
}) => {
  return (
    <div className="overflow-x-auto border rounded shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {headerColumns.map((col, index) => (
              <th
                key={index}
                className="text-left px-4 py-2 text-sm font-semibold text-gray-600"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {authStore.length > 0 ? (
            authStore.map((item: any, idx: number) => (
              <tr key={idx} className="hover:bg-gray-50">
                {headerColumns.map((col, i) => {
                  const key = Object.keys(item)[i];
                  const value = item[key];
                  const isStatusColumn = key.toLowerCase().includes("status");

                  return (
                    <td key={i} className="px-4 py-2 text-sm text-gray-700">
                      {isStatusColumn ? (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${StatusColor(value)}`}
                        >
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headerColumns.length}
                className="px-4 py-4 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
