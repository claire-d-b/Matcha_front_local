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

// export const postPicture = ({ file, title, user_uuid }) => {
//   const formData = new FormData();
//   formData.append("creation", JSON.stringify(""));
//   formData.append("address", file);
//   formData.append("is_profile_picure", JSON.stringify("true"));
//   formData.append("title", JSON.stringify(title));
//   formData.append("user_uuid", JSON.stringify(user_uuid));

//   return request.post(
//     `http://localhost:5000/post_profile_picture/${user_uuid}`,
//     {
//       creation: formData.get("creation"),
//       address: formData.get("address"),
//       is_profile_picure: formData.get("is_profile_picure"),
//       title: formData.get("title"),
//       user_uuid: formData.get("user_uuid"),
//     },
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     },
//   );
// };

export const postOtherPicture = ({ file, title, user_uuid }) => {
  const formData = new FormData();
  formData.append("creation", JSON.stringify(""));
  formData.append("address", file);
  formData.append("is_profile_picure", JSON.stringify("false"));
  formData.append("title", JSON.stringify(title));
  formData.append("user_uuid", JSON.stringify(user_uuid));

  return request.post(
    `http://localhost:5000/post_other_pictures/${user_uuid}`,
    {
      creation: formData.get("creation"),
      address: formData.get("address"),
      is_profile_picure: formData.get("is_profile_picure"),
      title: formData.get("title"),
      user_uuid: formData.get("user_uuid"),
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

// export const getProfile = ({ user_uuid }) => {
//   return request.post("http://localhost:5000/change_profile", {
//     data: data,
//   });
// };
export const getUserPictures = ({ user_uuid }) => {
  return request.get(`http://localhost:5000/pictures/${user_uuid}`);
};
