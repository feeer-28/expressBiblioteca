const express = require('express');
const router=express.Router();
const LibroController = require('../controller/libroController')
router.get("/libro",LibroController.obtenerlibros);
router.post("/libro",LibroController.insertarlibros);
router.delete("/libro/:id",LibroController.eliminarlibros);
router.put("/libro/:id",LibroController.actualizarlibros);
router.get("/libro/:buscarN ",LibroController.buscarlibros);
module.exports=router;