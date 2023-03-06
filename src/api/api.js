import axios from "axios";

const instance = axios.create({
  baseURL: "https://aviso.herokuapp.com/",
});

export const ItemsApi = {
  async getNews() {
    const response = await instance.get(`api/news/`);
    return response.data;
  },
  async getArticles() {
    const response = await instance.get(`api/articles/`);
    return response.data;
  },
};

// export const profileAPI = {
//   getProfile(userId) {
//     return instance.get(`profile/${userId}`);
//   },
//   getStatus(userId) {
//     return instance.get(`profile/status/${userId}`);
//   },
//   updateStatus(status) {
//     return instance.put(`profile/status/`, { status: status });
//   },
//   savePhoto(photoFile) {
//     let formData = new FormData();
//     formData.append("image", photoFile);
//     return instance.put(`profile/photo`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   },
//   saveProfile(profile) {
//     return instance.put(`profile`, profile);
//   },
// };

// export const authAPI = {
//   me() {
//     return instance.get(`auth/me`);
//   },
//   login(email, password, rememberMe = false, captcha = false) {
//     return instance.post(`auth/login`, {
//       email,
//       password,
//       rememberMe,
//       captcha,
//     });
//   },
//   logout() {
//     return instance.delete(`auth/login`);
//   },
// };

// export const securityAPI = {
//   getCaptchaUrl() {
//     return instance.get(`security/get-captcha-url`);
//   },
// };
