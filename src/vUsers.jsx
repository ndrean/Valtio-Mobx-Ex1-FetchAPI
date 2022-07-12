import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

import { usersStore } from "./vStore";
import Loader from "./Loader";
import { Users } from "./User";

export default function VComponent() {
  const { users } = useSnapshot(usersStore);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    usersStore.getUsers();
    setLoading(false);
  }, []);

  console.log("vusers", users);
  return <>{loading ? <Loader /> : <Users data={users} />}</>;
}

/*
const VUsers = ({ users }) => {
  return (
    <>
      {users && users.map((user) => <User key={user.username} user={user} />)}
    </>
  );
};
*/
//const VUser = ({ user }) => <p>{user.email}</p>;
