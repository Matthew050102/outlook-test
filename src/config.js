import "dotenv/config";

export const CONFIG = {
  url: process.env.OUTLOOK_URL,
  isDebugMode: process.env.DEBUG_MODE === "true",
  stayLoggedIn: process.env.STAY_LOGGED_IN === "true",
  gherkinTimeout: Number(process.env.GHERKIN_TIMEOUT),

  credentials: {
    email: process.env.OUTLOOK_EMAIL,
    password: process.env.OUTLOOK_PASSWORD,
  },

  testData: {
    recipient: process.env.RECIPIENT,
  },
};

export const LOGIN_PARAMS = {
  url: CONFIG.url,
  email: CONFIG.credentials.email,
  password: CONFIG.credentials.password,
  stayLoggedIn: CONFIG.stayLoggedIn,
};
