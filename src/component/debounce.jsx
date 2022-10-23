import axios from "axios";
import { useEffect, useState } from "react";
import { SearchBarInput } from "../sharedComponents/searchBar";

const User = ({ user }) => {
  return (
    <div key={user.id} className="flex flex-col items-center m-4">
      <img src={user.image} className="h-24" />
      <div className="text-xl font-semibold mt-2">
        {user.firstName} {user.lastName}
      </div>
      <span className="text-lg text-gray-400 font-bold">
        {user.id}
      </span>
    </div>
  );
};

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}

export function Debounce() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const debouncedValue = useDebounce(value, 300);

  const searchUsers = async () => {
    const newUsersResponse = await axios.get(
      `https://dummyjson.com/users/search?q=${value}`
    );

    if (newUsersResponse && newUsersResponse.data)
      setUsers(newUsersResponse.data.users);
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  useEffect(() => {
    searchUsers("");
  }, []);

  // useEffect(() => {
  //   searchUsers(value);
  // }, [value]);

  useEffect(() => {
    console.log("Value: ", debouncedValue);
    searchUsers(value);
  }, [debouncedValue]);

  return (
    <div className="h-full flex flex-col w-full items-center p-12">
      <form className="flex justify-center w-1/2 mb-12">
        <SearchBarInput
          value={value}
          onChange={handleSearchInputChange}
        />
      </form>
      <h3 className="font-bold text-3xl">Found Users</h3>
      <div className="flex flex-wrap items-center justify-center w-full">
        {users.map((user, idx) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
