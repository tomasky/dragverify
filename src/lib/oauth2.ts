import * as oauthserver from "oauth2-server";
let model = {
  // We support generators.
  getAccessToken: function() {
          return { user: {} }
  },

  // Or, calling a node-style callback.
  getClient: function() {
          return { grants: ['authorization_code'], redirectUris: ['http://example.com/cb'] };
  },
  saveAuthorizationCode: function() {
          return { authorizationCode: 123 };
  },

  
};

let options = { model: model,grants:['password'] };
let oauth = oauthserver(options);
