const EmployeeModel = require("../models/employee-model");
const UsersModel = require("../models/users-model");

// 1. Add Employee

const AddEmployee = async (req, res) => {
  try {
    let info = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      hire_date: req.body.hire_date,
      createdAt: req.body.created_at,
      updatedAt: Date.now(),
      department_id: req.body.department_id,
    };
    const EmployeeData = await EmployeeModel.create(info);
    res
      .status(200)
      .json({
        status: "SUCCESS",
        msg: "Employee details has been saved",
        data: req.body,
      });
    console.log(EmployeeData);
  } catch (error) {
    console.error("Error posting employees:", error);

    if (error.name === "SequelizeUniqueConstraintError") {
      res
        .status(400)
        .json({
          error: "Unique Constraint Violation",
          msg: "Department ID already exists",
        });
    } else if (error.name === "SequelizeValidationError") {
      const errorMessages = error.errors.map((err) => err.message);
      res
        .status(400)
        .json({ error: "Validation Error", messages: errorMessages });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

// 2. Get Employee

const GetEmployee = async (req, res) => {
  try {
    const employees = await EmployeeModel.findAll();
    res
      .status(200)
      .json({ records: employees, totalRecords: employees.length });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 3. Get Employee by ID

const GetEmployeeById = async (req, res) => {
  try {
    const employee = await EmployeeModel.findByPk(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 4. Update Employee

const UpdateEmployee = async (req, res) => {
  const EmployeeEditData = await EmployeeModel.update(req.body, {
    where: {
      employee_id: req.params.id,
    },
  });
  res.status(200).json({
    status: "SUCCESS",
    msg: "Employee detail has been updated",
    data: req.body,
  });
  console.log(EmployeeEditData, "qwerty");
};

// 5. Delete Employee

const DeleteEmployee = async (req, res) => {
  await EmployeeModel.destroy({ where: { employee_id: req.params.id } });
  res.status(200).send("Employee data is deleted !");
};

// 6. Inner Join 

// const GetAddress = async (req, res) => {
//     EmployeeModel.hasOne(UsersModel, { foreignKey: 'employee_id' });
//     try {
//     const employees = await EmployeeModel.findAll(
//     {
//           include: [{
//             model: UsersModel,
//             attributes: ['address']
//           }],
//           attributes: ['email']
//         }
// );
//     res
//      .status(200)
//      .json({ records: employees, totalRecords: employees.length });
//   } catch (error) {
//     console.error("Error fetching employees:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const GetAddress = async (req, res) => {
    EmployeeModel.hasOne(UsersModel, { foreignKey: 'employee_id' });
    try {
      const employees = await EmployeeModel.findAll({
        include: [{
          model: UsersModel,
          attributes: ['address']
        }],
        attributes: ['email']
      });
  
      // Process the result to filter out duplicates and null user values
      const filteredRecords = employees.reduce((acc, employee) => {
        const { email, user } = employee.toJSON();
        if (user && user.address) {
          acc.push({ email, address: user.address });
        }
        return acc;
      }, []);
  
      res.status(200).json({ records: filteredRecords, totalRecords: filteredRecords.length });
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports = {
  AddEmployee,
  GetEmployee,
  GetEmployeeById,
  UpdateEmployee,
  DeleteEmployee,
  GetAddress
}