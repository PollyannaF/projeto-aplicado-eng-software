class Pedidos {
    index(req,res){
        res.json({
            tudoCerto: true,
        });
    }
}


export default new Pedidos();