module.exports = {
  client: {
    includes: ['./src/client/**/**'],
    service: {
      name: "typesafe-react-express",
      url: "http://localhost:4000/graphql",
      skipSSLValidation: true 
    }
  }  
};

