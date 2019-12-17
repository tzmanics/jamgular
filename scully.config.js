exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/user/:userId": {
      type: "json",
      userId: {
        url: "https://jsonplaceholder.typicode.com/users",
        property: "id"
      }
    }
  }
};
