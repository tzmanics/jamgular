exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/user/:userId": {
      type: "json",
      userId: {
        url: "https://jsonplaceholder.typicode.com/users",
        property: "id"
      }
    }
  }
};
