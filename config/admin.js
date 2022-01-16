module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e86978d0a2d8e0930aba6ef24dced10'),
  },
});
