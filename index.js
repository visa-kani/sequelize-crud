const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/documents");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routers

const Router = require("./routes/employee");
// const swaggerDocs = require('./swagger/documents');
app.use('/', Router)
// swaggerDocs(app, 7001)
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

const PORT = 7001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
