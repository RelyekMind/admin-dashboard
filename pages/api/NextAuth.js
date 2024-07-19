import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {  label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Aquí puedes validar las credenciales del administrador
        const user = { id: 1, name: 'Admin', email: 'admin@example.com' };
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async (session, user) => {
      session.user = user;
      return session;
    }
  }
});
