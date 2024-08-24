import request from "./request";

export const createUser = ({
  username,
  password,
  email,
  firstName,
  lastName,
}) => {
  return request.post("http://localhost:5000/register_user", {
    username: username,
    password: password,
    email: email,
    first_name: firstName,
    last_name: lastName,
  });
};

export const login = ({ username, password }) => {
  return request.post("http://localhost:5000/login", {
    name: username,
    password: password,
  });
};
export const getProfile = (user_uuid) => {
  return request.get(`http://localhost:5000/profile/<${user_uuid}>`, {});
};

// export const createProfile = ({ data }) => {
//   return request.post("http://localhost:5000/change_profile", {
//     data: data,
//   });
// };

// export const getProfile = ({ user_uuid }) => {
//   return request.post("http://localhost:5000/change_profile", {
//     data: data,
//   });
// };
