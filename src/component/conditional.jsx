import axios from "axios";
import { useEffect, useState } from "react";

const User = ({ user }) => {
  return (
    <div key={user.id} className="flex flex-col items-center">
      <img src={user.image} className="h-28" />
      <div className="text-xl font-semibold mt-2">
        {user.firstName} {user.lastName}
      </div>
      <span className="text-lg text-gray-400 font-bold">
        {user.id}
      </span>
    </div>
  );
};

export function ConditionalRendering() {
  const [users, setUsers] = useState([]);
  const [losingUsers, setLosingUsers] = useState([]);

  const fetchUsers = async () => {
    const newUsers = await axios.get("https://dummyjson.com/users");
    setUsers(newUsers.data.users.slice(0, 5));
    setLosingUsers(newUsers.data.users.slice(6, 10));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const showWinning = 1;

  return (
    <div className="h-full flex flex-col space-y-4 flex-wrap items-center justify-center">
      {showWinning ? (
        <>
          <h1 className="font-medium">Winners 🎉</h1>
          <div className="flex space-x-12 flex-wrap items-center justify-center">
            {users.map((user, idx) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </>
      ) : null}
      {!showWinning ? (
        <>
          <h1 className="font-medium">Losers 😥</h1>
          <div className="flex space-x-12 flex-wrap items-center justify-center">
            {losingUsers.map((user, idx) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
