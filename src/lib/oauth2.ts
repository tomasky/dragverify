
export class InMemoryCache {
  clients :{ [key:string] : any}[]
  tokens:{ [key:string] : string}[]
  users:{ [key:string] : string}[]
constructor(){
  this.clients = [{ clientId : 'thom', clientSecret : 'nightworld', 'redirectUris' : [''] }];
  this.tokens = [];
  this.users = [{ id : '123', username: 'thomseddon', password: 'nightworld' }];
}

/**
 * Dump the cache.
 */

dump() {
  console.log('clients', this.clients);
  console.log('tokens', this.tokens);
  console.log('users', this.users);
};

/*
 * Get access token.
 */

 async getAccessToken (bearerToken:string) {
  var tokens = this.tokens.filter(function(token) {
    return token [ 'accessToken' ] === bearerToken;
  });

  return tokens.length ? tokens[0] : false;
};


/**
 * Get refresh token.
 */

async getRefreshToken(bearerToken:string) {
  let tokens = this.tokens.filter(function(token) {
    return token [ 'refreshToken' ] === bearerToken;
  });

  return tokens.length ? tokens[0] : false;
};


/**
 * Get client.
 */

async getClient(clientId:string, clientSecret:string) {
  let clients = this.clients.filter(function(client) {
    return client [ 'clientId' ] === clientId && client [ 'clientSecret' ] === clientSecret;
  });

  return clients.length ? clients[0] : false;
};

/**
 * Save token.
 */

async saveToken (token:any, client:any, user:any) {
  this.tokens.push({
    accessToken: token['accessToken'],
    accessTokenExpiresAt: token['accessTokenExpiresAt'],
    clientId: client['clientId'],
    refreshToken: token [ 'refreshToken' ],
    refreshTokenExpiresAt: token [ 'refreshTokenExpiresAt' ],
    userId: user [ 'id' ]
  });
};

/*
 * Get user.
 */

async getUser (username:string, password:string) {
  let users = this.users.filter(function(user) {
    return user['username'] === username && user [ 'password' ] === password;
  });

  return users.length ? users[0] : false;
};
}
