import jwt from "jsonwebtoken";
export const JwtAuth = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        return res.status(500).send("Server Error");
    }
    const auth_token = req.headers.authorization;
    const token = auth_token?.split(" ")[1];
    console.log({ token });
    // Check if the token is present
    if (!token) {
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
    try {
        // Decode the token
        const decoded = jwt.verify(token, secretKey);
        // Check if the decoded object has a userId property
        if (decoded && decoded.userId) {
            // Attach user data to the request object
            req.body.userId = decoded.userId;
            next();
        }
        else {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }
    }
    catch (error) {
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
};
