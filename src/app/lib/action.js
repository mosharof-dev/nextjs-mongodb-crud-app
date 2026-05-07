export const deleteUser = async (id) => {
    'use server'
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    return res.json();
  
}