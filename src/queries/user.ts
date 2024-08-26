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
  return request.get(`http://localhost:5000/profile/${user_uuid}`, {});
};

export const patchProfile = ({
  profileFirstName,
  profileLastName,
  gender,
  preference,
  hobbies,
  profileBio,
  age,
  points,
  city,
  user_uuid,
}) => {
  return request.patch(`http://localhost:5000/patch_profile/${user_uuid}`, {
    first_name: profileFirstName,
    last_name: profileLastName,
    sex: gender,
    preference: preference,
    tags: hobbies,
    biography: profileBio,
    age: age,
    fame_rating: points,
    latitude: city,
    longitude: city,
    user_uuid: user_uuid,
  });
};
// export const getProfile = ({ user_uuid }) => {
//   return request.post("http://localhost:5000/change_profile", {
//     data: data,
//   });
// };
