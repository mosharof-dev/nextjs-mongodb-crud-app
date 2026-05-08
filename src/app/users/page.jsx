import React from "react";
import { getUser } from "../lib/data";
import UsersTable from "@/Components/UsersTable";
import { createUser, deleteUser } from "../lib/action";
import AddUsersModal from "@/Components/AddUsersModal";

const UsersPage = async () => {
  const users = await getUser();
  console.log(users);
  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-3xl font-bold text-center ">
          Users management {users.length}
        </h1>
        <AddUsersModal createUser={createUser} />
      </div>
      <UsersTable users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default UsersPage;
