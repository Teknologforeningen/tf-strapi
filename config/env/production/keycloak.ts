export default ({ env }) => ({
  clientSecret: env('KEYCLOAK_CLIENT_SECRET'),
  redirectUri: 'https://cms.tf.fi/keycloak/callback',
  redirectToUrlAfterLogout: "https://tf.fi",
  debug: false
});
