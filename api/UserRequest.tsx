// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:3001" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

// export const getUser = (userId) => API.get(`/user/${userId}`);
// export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
// export const getAllUser = () => API.get("/user");

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

API.interceptors.request.use((req) => {
  const profileData = localStorage.getItem("profile");

  if (profileData !== null) {
    const profile = JSON.parse(profileData);

    if (profile.token) {
      req.headers.Authorization = `Bearer 
${profile.token}
`;
    }
  }

  return req;
});

export const getUser = (userId: any) =>
  API.get(
    `/user/
${userId}
`
  );
export const updateUser = (id: any, formData: any) =>
  API.put(
    `/user/
${id}
`,
    formData
  );
export const getAllUser = () => API.get("/user");
