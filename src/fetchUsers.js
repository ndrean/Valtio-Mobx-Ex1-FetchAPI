export const fetchUsers = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    return response;
  } catch (error) {
    return undefined;
  }
};
