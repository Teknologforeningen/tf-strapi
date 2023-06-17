export default ({ env }) => ({
  clientId: 'strapi',
  clientSecret: env('KEYCLOAK_CLIENT_SECRET'),
  authEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/auth',
  tokenEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/token',
  userinfoEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/userinfo',
  logoutEndpoint: 'https://id.tf.fi/realms/tf-medlemmar/protocol/openid-connect/logout',
  redirectUri: 'http://localhost:1337/keycloak/callback',
  // Homepage
  redirectToUrlAfterLogin: "http://localhost:3000",
  redirectToUrlAfterLogout: "http://localhost:3000",
  permittedOverwriteRedirectUrls: [
    "http://localhost:1337",
    "http://localhost:3000",
    "http://localhost:3000/medlemmar",
    "https://tf.fi",
    "https://tf.fi/medlemmar",
  ],
  debug: true
});
