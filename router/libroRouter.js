const express = require('express');
const router=express.Router();
const LibroController = require('../controller/librosController')
router.get("/libro",LibroController.obtenerLibros);
router.post("/libro",LibroController.insertarLibros);
router.delete("/libro/:id",LibroController.eliminarLibros);
router.put("/libro/:id",LibroController.actualizarLibros);
router.get("/libro/:buscarN ",LibroController.buscarLibros);
module.exports=router;