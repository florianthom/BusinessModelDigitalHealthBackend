import * as env from 'env-var';
const SERVER_PORT = env.get('SERVER_PORT').asPortNumber();
const TOKEN_SECRET = env.get('TOKEN_SECRET').asString();
const TOKEN_EXPIRY_TIME = env.get('TOKEN_EXPIRY_TIME').asString();
const MY_SECRET_PRISMA_YML = env.get('MY_SECRET_PRISMA_YML').asString();
const EMAIL_SERVICE = env.get('EMAIL_SERVICE').asString();
const EMAIL_PORT = env.get('EMAIL_PORT').asPortNumber();
const EMAIL_CIPHERS = env.get('EMAIL_CIPHERS').asString();
const EMAIL_REJECT = env.get('EMAIL_REJECT').asBool();
const USER_EMAIL = env.get('USER_EMAIL').asString();
const PASSWORD_EMAIL = env.get('PASSWORD_EMAIL').asString();
const EMAIL_ADDRESS = env.get('EMAIL_ADDRESS').asString();
const VERIFICATIONCODELENGTH = env.get('VERIFICATIONCODELENGTH').asIntPositive();

export {
    SERVER_PORT,
    TOKEN_SECRET,
    TOKEN_EXPIRY_TIME,
    MY_SECRET_PRISMA_YML,
    EMAIL_ADDRESS,
    EMAIL_CIPHERS,
    EMAIL_PORT,
    EMAIL_REJECT,
    EMAIL_SERVICE,
    USER_EMAIL,
    PASSWORD_EMAIL,
    VERIFICATIONCODELENGTH
};