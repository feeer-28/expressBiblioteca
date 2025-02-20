const db = require("..//config/database");
class LibroController{
    static async obtenerLibro(req,res){
        let [lista] = await db.query("SELECT * FROM libros");
        res.json(lista);
    }
    static  async insertarLibro(req,res){
        let {titulo,autot} = req.body;
        let  = await db.query("INSERT INTO (nombre,apellido,email) values (?,?,?)",[]);
        res.json(req.body);
    }
    static async eliminarLibro(req,res){
        let {id} = req.params
        await db.query("DELETE FROM  WHERE id=?",[id]);
        res.send({mensaje:"registro eliminado"});
        
    }
    static async actualizarLibro(req,res){
        let {id} = req.params
        let {} = req.body;
        await db.query("UPDATE  SET nombre=?,apellido=?,email=? WHERE id=?",[,id]);
        res.json({msj:"actualizar"});


    }
    static async buscarLibro(req,res){
        let {buscarN} = req.params;
        let buscar = await db.query("SELECT * FROM  WHERE nombre=?",[buscarN]);
        res.json(buscar);
    }
}

module.exports= LibroController;
