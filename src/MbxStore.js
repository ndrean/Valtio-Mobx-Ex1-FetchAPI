import { observable, runInAction } from "mobx";
import { fetchUsers } from "./fetchUsers";

// central state with attributes and actions

export const myStore = observable({
  users: null,
  fetchMbxUsers: async () => {
    const response = await fetchUsers();
    runInAction(() => (myStore.users = response));
  }
  /*: using generators
  *fetchMbxUsers() {
    const response = yield fetchUsers();
    myStore.users = response;
  }
  */
});

export const loader = observable({
  loading: false
});
