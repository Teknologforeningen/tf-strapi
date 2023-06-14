export default ({ env }) => ({
  clientId: 'strapi',
  clientSecret: env('KEYCLOAK_CLIENT_SECRET'),
  authEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/auth',
  tokenEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/token',
  userinfoEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/userinfo',
  logoutEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/logout',
  redirectUri: 'http://localhost:1337/keycloak/callback',
  redirectToUrlAfterLogout: "http://localhost:1337",
  debug: true
});
