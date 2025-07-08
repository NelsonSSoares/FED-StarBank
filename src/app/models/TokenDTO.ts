export class TokenDTO{
  username: string;
  authenticated: boolean;
  created : Date;
  expiration: Date;
  accessToken: string;
  refreshToken: string;

  constructor(
    username: string,
    authenticated: boolean,
    created: Date,
    expiration: Date,
    accessToken: string,
    refreshToken: string
  ) {
    this.username = username;
    this.authenticated = authenticated;
    this.created = created;
    this.expiration = expiration;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
