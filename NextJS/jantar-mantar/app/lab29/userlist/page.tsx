"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Amit",
      email: "amit@gmail.com",
    },
  ]);

  const deleteUser = async (id: number) => {
    const response = await fetch(`/lab29/api/users/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.id}. {user.name} - {user.email}
          </p>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}