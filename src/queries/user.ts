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
    username: username,
    password: password,
  });
};
export const getProfile = (user_uuid) => {
  return request.get(`http://localhost:5000/profile/<${user_uuid}>`, {});
};

export const createProfile = ({
  first_name,
  last_name,
  sex,
  preference,
  tags,
  biography,
  fame_rating,
  latitude,
  longitude,
  user_uuid,
}) => {
  return request.post("http://localhost:5000/change_profile", {
    last_name: last_name,
    sex: sex,
    preference: preference,
    tags: tags,
    biography: biography,
    fame_rating: fame_rating,
    latitude: latitude,
    longitude: longitude,
    user_uuid: user_uuid,
  });
};
// export const getProfile = ({ user_uuid }) => {
//   return request.post("http://localhost:5000/change_profile", {
//     data: data,
//   });
// };
