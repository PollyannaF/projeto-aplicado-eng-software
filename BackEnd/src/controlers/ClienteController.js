class Cliente {
    index(req,res){
        res.json({
            tudoCerto: true,
        });
    }
}


export default new Cliente();