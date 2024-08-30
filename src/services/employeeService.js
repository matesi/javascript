"use strict";

const EmployeeController = require("../controllers/employeeController"); // Importa o controller

const EmployeeService = {
  getAllEmployees: async (req, res) => {
    try {
      let employees = await EmployeeController.getAllEmployees();
      let status = employees.hasOwnProperty("status") ? employees.status : 200;
      res.status(status).json(employees);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter lista de funcionarios." });
    }
  },

  getEmployee: async (req, res) => {
    try {
      let employee = await EmployeeController.getEmployee(req.query);
      let status = employee.hasOwnProperty("status") ? employee.status : 201;
      res.status(status).json(employee);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter os dados do funcionario." });
    }
  },

  createNewEmployee: async (req, res) => {
    try {
      let body = req.body;
      console.log(body);
      const newEmployee = await EmployeeController.createNewEmployee(body);
      let status = newEmployee.hasOwnProperty("status")
        ? newEmployee.status
        : 201;
      res.status(status).json(newEmployee);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao cadastrar um novo funcionário (Service)." + error,
      });
    }
  },
};

module.exports = EmployeeService;
