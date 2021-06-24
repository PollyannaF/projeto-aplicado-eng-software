class Produto {
    index(req,res){
        res.json({
            rotaProduto: true,
        });
    }
}


export default new Produto();