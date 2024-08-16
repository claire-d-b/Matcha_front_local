import request from "./request";

export const createUser = ({
  username,
  password,
  email,
  firstName,
  lastName,
}) => {
  return request.post("http://localhost:5000/register-user", {
    username: username,
    password: password,
    email: email,
    first_name: firstName,
    last_name: lastName,
  });
};
