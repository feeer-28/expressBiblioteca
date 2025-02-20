const db = require("..//config/database");
class LibroController{
    static async obtenerLibros(req,res){
        let [lista] = await db.query("SELECT * FROM libros");
        res.json(lista);
    }
    static  async insertarLibros(req,res){
        let {titulo,autor,añoPublicacion,disponibilidad} = req.body;
        let libros = await db.query("INSERT INTO libros (titulo,autor,añoPublicacion,disponibilidad) values (?,?,?,?)",[titulo,autor,añoPublicacion,disponibilidad]);
        res.json(req.body);
    }
    static async eliminarLibros(req,res){
        let {id} = req.params
        await db.query("DELETE FROM libros WHERE id=?",[id]);
        res.send({mensaje:"registro eliminado"});
        
    }
    static async actualizarLibros(req,res){
        let {id} = req.params
        let {titulo,autor,añoPublicacion,disponibilidad} = req.body;
        await db.query("UPDATE libros SET titulo=?,autor=?,añoPublicacion=?,disponibilidad=? WHERE id=?",[titulo,autor,añoPublicacion,disponibilidad,id]);
        res.json({msj:"actualizar"});


    }
    static async buscarLibros(req,res){
        let {buscarN} = req.params;
        let buscar = await db.query("SELECT * FROM  WHERE titulo=?",[buscarN]);
        res.json(buscar);
    }
}

module.exports= LibroController;
