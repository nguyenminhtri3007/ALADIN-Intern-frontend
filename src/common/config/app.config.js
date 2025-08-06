export class AppConfig {
  domain = "http://localhost:"; // thay theo domain be

  getDomain() {
    return this.domain;
  }

  getAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return null;
    }

    return accessToken;
  }

  setAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  getRefreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return null;
    }

    return refreshToken;
  }

  setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
  }

  clear() {
    localStorage.clear();
  }
}
