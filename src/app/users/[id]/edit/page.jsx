import { updateUser } from "@/app/lib/action";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const EditPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);
  console.log(user, "Users Data");
  const updateUserData = async (formData) => {
    "use server";

    return await updateUser(id, formData);
  };
  return (
    // Main wrapper: Center the form and add some top margin
    <div className="max-w-lg mx-auto mt-10 p-6 sm:p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Edit User</h1>
        <p className="text-sm text-gray-500 mt-2">
          Update information for {user?.name}
        </p>
      </div>

      {/* Form Section */}
      <form action={updateUserData} className="flex flex-col gap-5">
        <TextField
          className="w-full"
          name="name"
          defaultValue={user?.name}
          type="text"
        >
          <Label className="mb-1 font-medium">Name</Label>
          {/* Added defaultValue to pre-fill the input */}
          <Input placeholder="Enter your name" />
        </TextField>

        <TextField
          className="w-full"
          name="email"
          defaultValue={user?.email}
          type="email"
        >
          <Label className="mb-1 font-medium">Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>

        <TextField
          className="w-full"
          name="role"
          defaultValue={user?.role}
          type="text"
        >
          <Label className="mb-1 font-medium">Role</Label>
          <Input placeholder="Enter your user role" />
        </TextField>

        {/* Buttons: Spaced out and aligned to the right */}
        <div className="flex justify-end gap-3 mt-4">
          <Button slot="close" variant="secondary" className="px-6">
            Cancel
          </Button>
          <Button type="submit" slot="close" color="primary" className="px-6">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
