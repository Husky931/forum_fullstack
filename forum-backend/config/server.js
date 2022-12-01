module.exports = ({ env }) => ({
  host: 'local',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
