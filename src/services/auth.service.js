import axios from 'axios';
import backendUrl from "../store/backendUrl";

const API_URL = backendUrl()+'api/auth/';

class AuthService {
  login(user) {
    return axios
        .post(API_URL + 'signin', {
          username: user.username,
          password: user.password
        })
        .then(response => {
          // console.log(JSON.stringify(response.data));
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }

          return response.data;
        });
  }

  logout() {
    localStorage.clear();
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
