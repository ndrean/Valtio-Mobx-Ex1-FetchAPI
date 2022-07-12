import React, { useEffect, useState } from "react";

import { fetchUsers } from "./fetchUsers";
//import User from './User'
import { Users } from "./User";

const Loader = () => <p>Loading...</p>;

export default function RComponent() {
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data) => setUsers(<Users data={data} />));
    setLoading(false);
  }, []);

  return <>{loading ? <Loader /> : <div>{users}</div>}</>;
}
