import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        // Check if token is present
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated. No token found.",
                success: false,
            });
        }

        // Verify token
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        
        // Check if decoding was successful and the token contains a userId
        if (!decode || !decode.userId) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        // Set user ID in request object
        req.id = decode.userId;
        next(); // Proceed to next middleware/controller

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({
            message: "Server error during authentication",
            success: false
        });
    }
};

export default isAuthenticated;
