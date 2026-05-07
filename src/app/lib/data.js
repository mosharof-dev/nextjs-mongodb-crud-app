export const getUser = async () =>{
    const res = await fetch('http://localhost:5000/users');
    return res.json();
}

export const getUserById = async (id) =>{
    const res = await fetch(`http://localhost:5000/users/${id}`);
    return res.json();
}