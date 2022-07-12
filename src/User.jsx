import React from "react";
//import { observer } from "mobx";

const User = ({ user }) => <p>{user.email}</p>;

const Users = ({ data }) => {
  return (
    <>{data && data.map((user) => <User key={user.email} user={user} />)}</>
  );
};

export { User, Users };
