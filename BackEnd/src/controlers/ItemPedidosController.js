class ItemPedidos {
    index(req,res){
        res.json({
            tudoCerto: true,
        });
    }
}


export default new ItemPedidos();