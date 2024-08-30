"use strict";
const express = require("express");
const employeeService = require("./services/employeeService");

class app {
  start() {
    const app = express(); //Instância do Express
    const PORT = 3000; //Porta para o servidor, por exemplo a 3000

    app.use(express.json()); //Middleware para tratar os dados no formato JSON

    app.get("/", (req, res) => {
      res.redirect("/api/employees");
    });

    app.get("/api/employees", employeeService.getAllEmployees); //Rota para obter todos os funcionários
    app.get("/api/employees/get", employeeService.getEmployee); //Rota para obter os dados de um funcionários
    app.post("/api/employees/post", employeeService.createNewEmployee); //Rota para cadastrar um novo funcionário
    // app.put("/api/employees", employeeService.updateEmployee); //Rota para alterar os dados do funcionário
    // app.delete("/api/employees", employeeService.updateEmployee); //Rota para excluir um funcionário

    app.listen(PORT, () => {
      console.log(`Servidor na porta ${PORT}`);
    });
  }
}
new app().start();
