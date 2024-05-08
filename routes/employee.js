const employees = require("../controller/employee")
const users = require("../controller/user-details")
const { validateToken } = require("../JWT");
const router = require('express').Router()

// Employee Routers

router.get("/employeeData", validateToken, employees.GetEmployee)

router.get("/employeeData/:id", validateToken, employees.GetEmployeeById)

router.post("/employeeData", validateToken, employees.AddEmployee)

router.put("/employeeData/:id", validateToken, employees.UpdateEmployee)

router.delete("/employeeData/:id", validateToken, employees.DeleteEmployee)

router.get("/employeeData/address", validateToken, employees.GetAddress)

router.get("/users-list", users.GetUsers)

router.post("/user-login", users.userLogin)

router.post("/user-registration", users.userRegistration)

// router.route("/employeeData").get(employees.GetEmployee)
//     .post(employees.AddEmployee)
//     .put(employees.UpdateEmployee)
//     .delete(employees.DeleteEmployee)    

module.exports = router