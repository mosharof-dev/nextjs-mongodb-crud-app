import React from "react";
import { getUser } from "../lib/data";
import UsersTable from "@/Components/UsersTable";

const UsersPage = async () => {
  const users = await getUser();
  console.log(users);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4">
        Users management {users.length}
      </h1>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
