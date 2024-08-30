const db = require("../config/db"); // Importe a configuração do banco de dados

const EmployeeModel = {
  getAllEmployees: async () => {
    try {
      const query = "SELECT * FROM funcionario";
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  createNewEmployee: async (employeeData) => {
    try {
      const query = `INSERT INTO funcionario (nome, endereco, bairro, cep, telefone, salario, data_contrato, funcao) VALUES ('${employeeData.nome}', '${employeeData.endereco}', '${employeeData.bairro}', '${employeeData.cep}', '${employeeData.telefone}', ${employeeData.salario}, '${employeeData.data_contrato}', '${employeeData.funcao}') RETURNING *`;
      const result = await db.query(query);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  getEmployee: async (filters) => {
    if (
      !filters.hasOwnProperty("uuid") &&
      !filters.hasOwnProperty("nome") &&
      !filters.hasOwnProperty("funcao")
    ) {
    }
    try {
      const query = "SELECT * FROM funcionario";
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = EmployeeModel;
