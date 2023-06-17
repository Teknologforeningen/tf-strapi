export default ({ env }) => ({
  clientSecret: env('KEYCLOAK_CLIENT_SECRET'),
  redirectUri: 'https://cms.tf.fi/keycloak/callback',
  redirectToUrlAfterLogin: "https://tf.fi",
  redirectToUrlAfterLogout: "https://tf.fi",
  debug: false
});
