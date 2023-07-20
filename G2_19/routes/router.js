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

  

module.exports = router;