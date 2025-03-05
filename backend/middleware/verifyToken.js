import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  1; // Get the tokens from the header
  const authHeader = req.headers["authorization"];
  const pureToken = authHeader.split(" ")[1];
  if (!pureToken) {
    return res
      .status(401)
      .json({ message: "you are not authorize to perform this action" });
  }

  2; // Check if the token is valid or not using jwt package
  jwt.verify(pureToken, "this_is_private_key", function (err, decoded) {
    if (err) {
      return res.status(401).json({ message: "token invalid" });
    }

    console.log(decoded, "this is decoded"); // bar
    next();
  });

  3; // If token is valid then proceed forward else block the request
 
};
