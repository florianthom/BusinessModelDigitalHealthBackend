import { VERIFICATIONCODELENGTH } from '../config/env.config';
import { Alphabet } from './Alphabet';

export const createVerification = () => {
    let code = '';
    for (let i = 0; i < VERIFICATIONCODELENGTH; i++) {
        code += Alphabet.charAt(Math.random() * Alphabet.length);
    }
    return code;
};

const createLink = (protocol: string, host: string, username: string, verification: string) => {
    return protocol + '://' + host + '/verify?id=' + verification + '&user=' + username;
};

export const createHtml = (protocol: string, host: string, username: string, verification: string) => {
    return `Hello ${username}<br>Please click on the link to verify your email<br>
            <a href=${createLink(protocol, host, username, verification)}>Click here to verify</a>`;
};
