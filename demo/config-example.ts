// vi config.js
export default {
  corsOptions: {
    origin: /(^.+(localhost|127.0.0.1):(1234|8000)$)|(x21.xyz$)/,
    optionsSuccessStatus: 200,
  },
  databaseUri: "mongodb://127.0.0.1:27017",
  databaseName: "test",
};
