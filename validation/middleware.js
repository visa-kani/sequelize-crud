// const Joi = require('joi'); 
// const middleware = (schema, property) => { 
//   return (req, res, next) => { 
//     const { error } = Joi.validate(req[property], schema); 
//     const valid = error == null; 
//     if (valid) { next(); } 
//     else { 
//       const { details } = error; 
//       const message = details.map(i => i.message).join(',')
//       console.log("error", message); 
//       res.status(422).json({ error: message }) 
//     } 
//   } 
// } 
// module.exports = middleware;

// const Joi = require('joi');
// const middleware = (schema, property) => {
//   return async (req, res, next) => {
//     try {
//       // Validate request body against schema
//       const { error } = Joi.validate(req[property], schema);
//       if (error) {
//         const { details } = error;
//         const message = details.map(i => i.message).join(',');
//         console.log("error", message);
//         return res.status(422).json({ error: message });
//       }

//       // Check if email is unique
//       const { email } = req[property];
//       const isEmailUnique = await checkIfEmailIsUnique(email);
//       if (!isEmailUnique) {
//         return res.status(422).json({ error: 'Email must be unique' });
//       }

//       // Proceed to the next middleware if validation passes
//       next();
//     } catch (err) {
//       console.error("Error in middleware:", err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
// };

// // Function to check if email is unique (you need to implement this)
// async function checkIfEmailIsUnique(email) {
//   // Implement logic to check if the email is unique in your database
//   // You can use Sequelize ORM or any other method to perform this check
//   // Return true if the email is unique, false otherwise
// }

// module.exports = middleware;
const Joi = require('joi');
const middleware = (schema, property) => {
  return async (req, res, next) => {
    try {
      // Validate request body against schema
      const { error } = schema.validate(req[property]);
      if (error) {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        console.log("error", message);
        return res.status(422).json({ error: message });
      }

      // Check if email is unique
      const { email } = req[property];
      const isEmailUnique = await checkIfEmailIsUnique(email);
      if (!isEmailUnique) {
        return res.status(422).json({ error: 'Email must be unique' });
      }

      // Proceed to the next middleware if validation passes
      next();
    } catch (err) {
      console.error("Error in middleware:", err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};

// Function to check if email is unique (you need to implement this)
async function checkIfEmailIsUnique(email) {
  // Implement logic to check if the email is unique in your database
  // You can use Sequelize ORM or any other method to perform this check
  // Return true if the email is unique, false otherwise
}

module.exports = middleware;
