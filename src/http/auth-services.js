import instance from "./settings";

const registerService = (data) => {
  console.log("registerService", data);
  return instance.post("/register", data);
};

const loginService = (data) => {
  return instance.post("/login", data);
};

const getMe = () => {
  return instance.get("/me");
};

export const authService = {
  registerService,
  loginService,
  getMe,
};
