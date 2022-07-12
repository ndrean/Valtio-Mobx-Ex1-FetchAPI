import { proxy, useSnapshot } from "valtio";
import { fetchUsers } from "./fetchUsers";

export { useSnapshot };

export const usersStore = proxy({
  users: null,
  //loading: false,
  async getUsers() {
    //usersStore.loading = true;
    usersStore.users = await fetchUsers();
    //usersStore.loading = false;
  }
});
