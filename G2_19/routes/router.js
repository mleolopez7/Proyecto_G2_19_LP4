"use strict";


//ESTO ES UN EJEMPLO DE LAS RUTAS
var  VueloController = require("../controllers/vuelo-controller"),
  //HospitalController = require("../controllers/Hospital-controller"),
  //ConsultaController = require("../controllers/consulta-controller"),
  //MedicoController = require("../controllers/medico-controller"),
  express = require("express"),
  router = express.Router();

router
  //****VUELO****
  .get("/vuelo/getall", VueloController.getAll)
  .post("/vuelo/getone/:codigo_vuelo", VueloController.getOne)
  .post("/vuelo/insertar/:codigo_vuelo", VueloController.post)
  .put("/vuelo/actualizar/:codigo_vuelo", VueloController.put)
  .delete("/vuelo/eliminar/:codigo_vuelo", VueloController.delete)
  .use(VueloController.error404)

  //****CONSULTA****
  //.get("/consulta/getAll", ConsultaController.getAll)
  //.post("/consulta/getOne/:numero_paciente", ConsultaController.getOne)
  //.post("/consulta/insertar/:numero_paciente", ConsultaController.post)
  //.put("/consulta/actualizar/:numero_paciente", ConsultaController.put)
  //.delete("/consulta/eliminar/:numero_paciente", ConsultaController.delete)
  //.use(ConsultaController.error404)
  
  //****HOSPITAL****
  //.get("/hospital/getall", HospitalController.getAll)
  //.post("/hospital/getone/:codigo_hospital", HospitalController.getOne)
  //.post("/hospital/insertar/:codigo_hospital", HospitalController.post)
  //.put("/hospital/actualizar/:codigo_hospital", HospitalController.put)
  //.delete("/hospital/eliminar/:codigo_hospital",HospitalController.delete)
  //.use(HospitalController.error404)

 //*MEDICO*
  //.get("/medico/getall", MedicoController.getAll)
  //.post("/medico/getone/:numero_colegiado", MedicoController.getOne)
  //.post("/medico/insertar/:numero_colegiado", MedicoController.post)
  //.put("/medico/actualizar/:numero_colegiado", MedicoController.put)
  //.delete("/medico/eliminar/:numero_colegiado", MedicoController.delete)
  //.use(MedicoController.error404)

module.exports = router;