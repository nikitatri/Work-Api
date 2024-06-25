const dotenv = require('dotenv');
dotenv.config();

const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No credentials sent!' });
    }

    const [scheme, encoded] = authHeader.split(' ');

    if (scheme !== 'Basic' || !encoded) {
        return res.status(401).json({ error: 'Invalid authorization format' });
    }

    const [username, password] = Buffer.from(encoded, 'base64').toString().split(':');

    if (username === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASS) {
        return next();
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
};

module.exports = basicAuth;
