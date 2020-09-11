import { AuthenticationError, gql } from 'apollo-server-express';
import { TOKEN_SECRET } from '../config/env.config';
import * as jwt from 'jsonwebtoken';

const WHITELIST = [
    'login',
    'registrate',
    'checkUsername',
    'checkEmailAddress',
    '__Schema',

/*     
    "getAllCanvases"
 */    ];

export const verifyToken = (authHeader: {authToken: string}, tokenRequired = true) => {
    // console.log("hi");
    if (authHeader.authToken) {
        console.log("hi2");
        const token = authHeader.authToken.replace('Bearer ', '');
        try {
            const decoded = jwt.verify(token, TOKEN_SECRET);
            console.log(decoded.userId);
            return decoded.userId;
        }
        catch (err)
        {
            if (tokenRequired)
            {
                throw new AuthenticationError('Failed to verify token');
            }
        }
    }

    if (tokenRequired)
    {
        throw new AuthenticationError('No permission, access denied');
    }
};

export const operationAuthorized = (request: any): boolean => {
    let authRequired = false;

    const obj = gql`${request}`;
    const def = (obj.definitions as any[]);
    const sel = (def as any[])[0].selectionSet.selections as any[];
    if (def.length === 1 && sel.length === 1) {
        authRequired = !WHITELIST.includes(sel[0].name.value);
    }

    return authRequired;
};
