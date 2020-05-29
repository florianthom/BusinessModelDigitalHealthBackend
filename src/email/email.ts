import * as nodemailer from 'nodemailer';
import {
    EMAIL_ADDRESS,
    EMAIL_CIPHERS,
    EMAIL_PORT,
    EMAIL_REJECT,
    EMAIL_SERVICE,
    PASSWORD_EMAIL,
} from '../config/env.config';

const createNodeMailer = () => {
    return nodemailer.createTransport({
        host: EMAIL_SERVICE,
        port: EMAIL_PORT,
        tls: {
            ciphers: EMAIL_CIPHERS,
            rejectUnauthorized: EMAIL_REJECT
        },
        debug: true,
        auth: {
            user: EMAIL_ADDRESS,
            pass: PASSWORD_EMAIL
        }
    });
};

const createMailOptions = (receiver: string, subject: string, html: string) => {
    return {
        from: EMAIL_ADDRESS,
        to: receiver,
        subject: subject,
        html: html
    };
};

export const sendMail = (receiver: string, subject: string, html: string) => {
    const options = createMailOptions(receiver, subject, html);
    const transporter = createNodeMailer();
    transporter.sendMail(options, (error, response) => {
        if (error) {
            console.log(`Receiver: ${receiver}, Subject: ${subject}, HTML: ${html}`);
            console.log(error);
            throw Error(error);
        } /* else {
            console.log('Message send: ', response.messageId);
        } */
    });
};
