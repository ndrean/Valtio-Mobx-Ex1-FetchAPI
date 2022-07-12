import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
//import { action } from "mobx";
import Loader from "./Loader";
//import { User } from "./User";

export default observer(function MComponent({ store }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    // if we used a global loading state, then we would need to use "action"
    //action(() => (loadState.loading = true));
    store.fetchMbxUsers();
    setLoad(false);
  }, [store]);

  console.log("store.users");
  return <>{load ? <Loader /> : <MUsers data={store.users} />}</>;
});

const MUsers = observer(({ data }) => {
  console.log("data", data);
  return <>{data && data.map((user) => <MUser key={user.id} user={user} />)}</>;
});

const MUser = observer(({ user }) => <p>{user.email}</p>);
/*
const MbxUsers = observer(({ store }) => {
  return (
    store.users &&
    store.users.map((user) => <User key={user.email.toString()} user={user} />)
  );
});
*/
