import { useEffect, useState } from "react";
import TopHeader from "../../components/common/Topheader";
import Table from "../../components/common/Table";
import { RolesData } from "../../Models/interfaceModal";
import { observer } from "mobx-react-lite";

const RolesPage = observer(() => {
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {}, []);

  const headerColumns = [
    "ID",
    "Role Name",
    "Created By",
    "Created Date",
    "Description",
  ];

  return (
    <div className="p-4">
      <TopHeader title="Roles" />

      <div className="bg-white p-3 border rounded-md m-2">
        <div className="flex justify-between items-center p-2">
          <p className="text-base font-medium">List of all Roles</p>
          <input
            type="text"
            className="w-48 md:w-64 h-8 text-sm p-2 border border-slate-300 rounded bg-basegray"
            placeholder="Search"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <Table
          updateWallet={() => {}}
          headerColumns={headerColumns}
          modelCallBack={() => {}}
          authStore={RolesData}
          parentCallback={() => {}}
          value=""
          dailogType="slider"
          statusPopover={false}
        />
        ;
      </div>
    </div>
  );
});

export default RolesPage;
