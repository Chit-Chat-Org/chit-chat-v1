import crypto from 'crypto-js';
export const hashPassword = (password) => {
    // hashing logic using crypto-js
    const hashedPassword = crypto.SHA256(password).toString(crypto.enc.Hex);
    return hashedPassword;
};
export const compareHashedPassword = (inputPassword, hashedPassword) => {
    // comparison logic using crypto-js
    const inputHash = crypto.SHA256(inputPassword).toString(crypto.enc.Hex);
    return inputHash === hashedPassword;
};
