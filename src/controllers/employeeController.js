"use strict";

const EmployeeModel = require("../models/employeeModel"); // Importe o modelo

const EmployeeController = {
  getAllEmployees: async () => {
    try {
      const employees = await EmployeeModel.getAllEmployees();
      //   const employees = [
      //     {
      //       uuid: 1,
      //       nome: "Mauricio Teles da Silva",
      //       funcao: "Developer",
      //     },
      //     {
      //       uuid: 2,
      //       nome: "Marcos da Silva",
      //       funcao: "Developer",
      //     },
      //     {
      //       uuid: 3,
      //       nome: "José da Silva",
      //       funcao: "PO",
      //     },
      //     {
      //       uuid: 4,
      //       nome: "Roberto da Silveira",
      //       funcao: "Coordenador",
      //     },
      //   ];
      return employees;
    } catch (error) {
      return {
        status: 500,
        error: "Erro ao obter lista de funcionários. " + error,
      };
    }
  },
  getEmployee: async (filters = {}) => {
    try {
      if (
        !filters.hasOwnProperty("uuid") &&
        !filters.hasOwnProperty("nome") &&
        !filters.hasOwnProperty("funcao")
      ) {
        return {
          status: 400,
          error: "Nenhum filtro informado.",
        };
      } else {
        const dataEmployee = await EmployeeModel.getEmployee(filters);
        // const dataEmployees = [
        //   {
        //     uuid: 1,
        //     nome: "Mauricio Teles da Silva",
        //     funcao: "Developer",
        //   },
        //   {
        //     uuid: 2,
        //     nome: "Marcos da Silva",
        //     funcao: "Developer",
        //   },
        //   {
        //     uuid: 3,
        //     nome: "José da Silva",
        //     funcao: "PO",
        //   },
        //   {
        //     uuid: 4,
        //     nome: "Roberto da Silveira",
        //     funcao: "Coordenador",
        //   },
        // ];
        // let dataEmployee = [];
        // if (filters.hasOwnProperty("uuid")) {
        //   dataEmployee = dataEmployees.filter(
        //     (employee) => employee.uuid == parseInt(filters.uuid)
        //   );
        // } else if (filters.hasOwnProperty("nome")) {
        //   dataEmployee = dataEmployees.filter(
        //     (employee) => employee.nome == filters.nome
        //   );
        // } else if (
        //   filters.hasOwnProperty("funcao") &&
        //   filters.hasOwnProperty("nome")
        // ) {
        //   dataEmployee = dataEmployees.filter(
        //     (employee) =>
        //       employee.funcao == filters.funcao && employee.nome == filters.nome
        //   );
        // }

        return dataEmployee;
      }
    } catch (error) {
      return {
        status: 500,
        error: "Erro ao obter dados do funcionário. " + error,
      };
    }
  },
  createNewEmployee: async (employeeData) => {
    try {
      if (
        !employeeData.hasOwnProperty("nome") ||
        !employeeData.hasOwnProperty("endereco") ||
        !employeeData.hasOwnProperty("salario") ||
        !employeeData.hasOwnProperty("data_contrato") ||
        !employeeData.hasOwnProperty("funcao")
      ) {
        return {
          status: 400,
          error: "Há campos obrigatórios que não foram informados.",
        };
      } else {
        const newEmployee = await EmployeeModel.createNewEmployee(employeeData);
        return newEmployee;
      }
    } catch (error) {
      return {
        status: 500,
        error: "Erro ao cadastrar um novo funcionário (Controller)." + error,
      };
    }
  },
};

module.exports = EmployeeController;
