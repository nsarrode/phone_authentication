module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY", process.env.SENDGRID_API_KEY),
    },
    settings: {
      defaultFrom: "nahuel.sarrode@globant.com",
      defaultReplyTo: "nahuel.sarrode@globant.com",
    },
  },
});
