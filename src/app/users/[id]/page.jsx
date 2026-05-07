import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetails = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);
  console.log(user);
  return (
    <div>
      <h1>User Details {user.name}</h1>
      <p>This is the user details page.</p>
    </div>
  );
};

export default UserDetails;
