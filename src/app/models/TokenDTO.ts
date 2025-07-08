export interface TokenDTO{
  username: string;
  authenticated: boolean;
  created : Date;
  expiration: Date;
  accessToken: string;
  refreshToken: string;

}
