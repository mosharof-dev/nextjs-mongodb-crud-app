import { revalidatePath } from "next/cache";

export const createUser = async (fromData) => {
   'use server'
   const newUser = Object.fromEntries(fromData.entries());
    console.log(newUser, 'User Data');
    const res = await fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if(data.insertedId){
      revalidatePath('/users')
    }
    console.log(data);
    return data;
  };
  

export const updateUser = async (id, fromData) => {
    'use server'
    const updatedUser = Object.fromEntries(fromData.entries());
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const data = await res.json();
    // if(data.modifiedCount > 0){
    //   revalidatePath('/users')
    // }
    console.log(data);
    return data;
}

export const deleteUser = async (id) => {
    'use server'
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if(data.deletedCount > 0){
      revalidatePath('/users')
    }
    console.log(data);
    return data;
    
}