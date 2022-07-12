import { observer } from "mobx-react-lite";
export default observer(function MbxUser({ user }) {
  return <p>{user.email}</p>;
});
