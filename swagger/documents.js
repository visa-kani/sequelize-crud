const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Sequelize CRUD",
        version: "1.0.0",
        description: "This demo swagger",
    },
    servers: [
        {
            url: "http://localhost:7001/",
            description: "Local server",
        },
    ],

    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    tags: [
        {
            name: "Employee API",
            description: "Employee API"
        },
        {
            name: "User API",
            description: "User API"
        },
    ],
    paths: {
        "/employeeData": {
            get: {
                tags: ["Employee API"],
                description: "Listing out the all the employee record",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "employee_id": 9,
                                        "first_name": "Tamilmozhi",
                                        "last_name": "KaniAAA",
                                        "email": "kanimozhi.t.applogiq@gmail.com",
                                        "hire_date": "2021-10-10",
                                        "createdAt": "2021-05-05",
                                        "updatedAt": "2024-04-23",
                                        "department_id": 10
                                    }
                                },
                            },
                        },
                    },
                }
            },
            post: {
                tags: ["Employee API"],
                description: "Adding new employee record",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                example: {
                                    "first_name": "Tamilmozhi",
                                    "last_name": "KaniAAA",
                                    "email": "kanimozhi.t.applogiq@gmail.com",
                                    "hire_date": "2021-10-10",
                                    "department_id": 10
                                }
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Success",
                        security: [
                            {
                                bearerAuth: []
                            }
                        ],
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "status": "SUCCESS",
                                        "msg": "Employee details has been saved",
                                        "data": {
                                            "first_name": "Tamilmozhi",
                                            "last_name": "KaniAAA",
                                            "email": "kanimozhi.t.applogiq@gmail.com",
                                            "hire_date": "2021-10-10",
                                            "createdAt": "2021-05-05",
                                            "updatedAt": "2024-04-23",
                                            "department_id": 10
                                        },
                                    }
                                },
                            },
                        },
                    },
                }
            },
        },
        "/employeeData/{id}": {
            put: {
                tags: ["Employee API"],
                description: "Edit existing employee record",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        description: "ID of the employee to update",
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                example: {
                                    "employee_id": 25,
                                    "first_name": "Tamilmozhi",
                                    "last_name": "KaniAAA",
                                    "email": "kanimozhi.t.applogiq@gmail.com",
                                    "hire_date": "2021-10-10",
                                    "createdAt": "2021-05-05",
                                    "updatedAt": "2024-04-23",
                                    "department_id": 10
                                }
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "status": "SUCCESS",
                                        "msg": "Employee detail has been updated",
                                        "data": {
                                            "first_name": "Tamilmozhi",
                                            "last_name": "KaniAAA",
                                            "email": "kanimozhi.t.applogiq@gmail.com",
                                            "hire_date": "2021-10-10",
                                            "createdAt": "2021-05-05",
                                            "updatedAt": "2024-04-23",
                                            "department_id": 10
                                        },
                                    }
                                },
                            },
                        },
                    },
                }
            },
            delete: {
                tags: ["Employee API"],
                description: "Delete employee record",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        description: "ID of the employee to delete",
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: "Employee data is deleted!"
                                },
                            },
                        },
                    }
                }
            }
        },
        "/user-login": {
            post: {
                tags: ["User API"],
                description: "User Login",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                example: {
                                    "email": "kanimozhi.t.applogiq@gmail.com",
                                    "user_password": "Applogiq@123"
                                }
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Success",
                        security: [
                            {
                                bearerAuth: []
                            }
                        ],
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "status": "SUCCESS",
                                        "msg": "User logged in successfully!",
                                        "accessToken": "accessToken"
                                    }
                                },
                            },
                        },
                    },
                }
            }
        },
        "/user-registration": {
            post: {
                tags: ["User API"],
                description: "User Registration",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                example: {
                                    "user_name": "Ram",
                                    "email": "ramumasep26@gmail.com",
                                    "address": "Tirupur",
                                    "city": "Tirupur",
                                    "state": "TamilNadu",
                                    "phone_number": "1234567890",
                                    "user_password": "RamKani",
                                    "createdAt": Date.now(),
                                    "updatedAt": Date.now(),
                                }
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "status": "SUCCESS",
                                        "msg": "User details has been saved",
                                        "data": {
                                            "user_name": "Ram",
                                            "email": "ramumasep26@gmail.com",
                                            "address": "Tirupur",
                                            "city": "Tirupur",
                                            "state": "TamilNadu",
                                            "phone_number": "1234567890",
                                            "user_password": "RamKani",
                                            "createdAt": Date.now(),
                                            "updatedAt": Date.now(),
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
            }
        }
    }
};

module.exports = swaggerDocument;

// _______________________________________________


// const  swaggerJsdoc  = require('swagger-jsdoc');
// const  swaggerUi  = require('swagger-ui-express');

// const optionsV1 = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'My Folder API',
//             description: 'nodejs-express-mysql API ',
//             version: '1.0.0',
//         },
//         servers: [
//             {
//                 url: "http://localhost:7001",
//             },
//         ],
//         components: {
//             securitySchemes: {
//               bearerAuth: {
//                 type: 'http',
//                 scheme: 'bearer',
//                 bearerFormat: 'JWT',
//               },
//             },
//         }
//     },
//     // Looks for configuration in specified directories
//     apis: ['docs/*.yml','./route/v1/*.js', './controller/*.js', './middleware/*.js'],
// }


// const swaggerSpecV1 = swaggerJsdoc(optionsV1)

// function swaggerDocs(app, port) {
//     console.log(`:::::::::::::::: SWAGGER RUNNING ON ${port}.`)
//     app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecV1))
//     app.get('/docs-json', (req, res) => {
//         res.setHeader('Content-Type', 'application/json')
//         res.send(swaggerSpecV1)
//     })
// }

// module.exports = swaggerDocs