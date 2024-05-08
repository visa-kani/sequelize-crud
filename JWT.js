const { sign, verify } = require("jsonwebtoken");
const moment = require('moment');

const createTokens = (user) => {
  const accessToken = sign(
    { user_name: user.user_name, id: user.user_id, email: user.email, exp: moment().add(10, 'minutes').unix() },
    "password"
  );

   // Create refresh token
   const refreshToken = sign(
    { user_id: user.user_id },
    "refresh_secret", // Secret key for refresh token
    { expiresIn: "11m" } // Expiration time for refresh token (e.g., 7 days)
  );
  return { accessToken, refreshToken };
  // return accessToken;
};

// const validateToken = (req, res, next) => {
//   const accessToken = req.cookies["access-token"];
//   const authHeader = req.headers["authorization"];

//   console.log(req, "454545")
//   console.log(req.headers,req.cookies, "TOKEN")

//     if (!authHeader) {
//     return res.status(400).json({ error: "User not Authenticated!" });
//   }

//   if (!accessToken)
//     return res.status(400).json({ error: "User not Authenticated!" });

//   try {
//     // const validToken = verify(accessToken, "password");
//     const authHeaders = verify(authHeader, "password");
//     console.log(authHeaders, "authHeaders")
//     if (authHeaders) {
//       req.authenticated = true;
//       return next();
//     }
//   } catch (err) {
//     return res.status(401).json({ error: err });
//   }
// };

// const validateToken = (req, res, next) => {
//   const accessToken = req.cookies["access-token"];
//   const authHeader = req.headers["authorization"];

//   if (!authHeader && !accessToken) {
//     return res.status(400).json({ error: "User not authenticated!" });
//   }

//   const token = authHeader ? authHeader.split(" ")[1] : accessToken;

//   try {
//     const decoded = verify(token, "password");
//     req.user = decoded; // Save decoded user information for future use

//     if (decoded) {
//       const tokenExpiration = moment.unix(decoded.iat).add(10, 'minutes');
//       const now = moment();

//       if (now.isAfter(tokenExpiration)) {
//         return res.status(401).json({ error: "Token has expired" });
//       }

//       req.authenticated = true;
//       return next();
//     }
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// };

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  const authHeader = req.headers["authorization"];

  if (!authHeader && !accessToken) {
    return res.status(400).json({ error: "User not authenticated!" });
  }

  const token = authHeader ? authHeader.split(" ")[1] : accessToken;

  try {
    const decoded = verify(token, "password");
    req.user = decoded; // Save decoded user information for future use

    if (decoded) {
      const tokenExpiration = moment.unix(decoded.exp);
      const now = moment();

      if (now.isAfter(tokenExpiration)) {
        return res.status(401).json({ error: "Token has expired" });
      }

      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};


module.exports = { createTokens, validateToken };
