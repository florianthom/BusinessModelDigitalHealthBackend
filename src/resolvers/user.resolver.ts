import { AuthPayload } from '../types/customTypes';
import * as jwt from 'jsonwebtoken';
import { TOKEN_EXPIRY_TIME, TOKEN_SECRET } from '../config/env.config';
import { generateSHA512Hash } from '../auth/Cryptography';
import { createHtml, createVerification } from '../email/mailCreator';
import { sendMail } from '../email/email';


export const UserQuery = {
    
/* 
    query {
        login(
          email: "thom.florian.97@googlemail.com",
          password: "graphql"
        ){
          token
        }
      }
 */

    login: {
        resolve: async (root, {email, password}, ctx) => {
            const user = await ctx.db.user({ email: email });

            if (generateSHA512Hash(password) !== user.password)
            {
                throw Error('Wrong password');
            }

/*
            // commented because for now i dont know whether we want to restrict login if not verified
            if (!user.verified)
            {
                throw Error('Email is not verified');
            }
 */

            const authPayload: AuthPayload = {
                user,
                token: jwt.sign({ userId: user.id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRY_TIME })
            };

            return authPayload;
        }
    },

    checkEmailAddress: {
        resolve: async (root, { email }, ctx) => {
            return !!(await ctx.db.user({ email }));
        }
    },

    getUser: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.user({id: args.id})
        }
    },

    getAllUsers: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.users();
        }
    }
};


export const UserMutation = {

/* 
    mutation {
        registrate( data: {
          firstName: "testPlayground1",
          lastName: "testPlayground1",
          email: "alice1@prisma.io",
          password: "graphql"
        }){
          id
          email
        }
      }
*/

    registrate: {
        resolve: async (root, {data}, ctx) => {
            const verificationCode = createVerification();

            const htmlContent = createHtml(
                            ctx.req.protocol,
                            ctx.req.get('host'),
                            data.firstName,
                            verificationCode
            );

            const newUser = await ctx.db.createUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: generateSHA512Hash(data.password),
                verificationCode: verificationCode
            });

            sendMail(data.email, 'Please confirm your Email account', htmlContent);
            return newUser;
        }
    },

    deleteUser: {
        resolve: (root, args, ctx) => {
            const userId = ctx.userId;
            return ctx.db.deleteUser({ id: userId });
        }
    }

};
