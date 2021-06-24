import Cliente from '../models/Cliente';

class ClienteController {
    // Buscar Cliente - Login e Senha
    async index(req,res){
        const {email, senha} = req.body;
        const cliente = await Cliente.findAll({
            where: {
                email : email,
                senha : senha
            }

        })
        if(!cliente){
            return res.status(400).json({ error: 'Usuario não existe' });
        }

        res.json({cliente});
    }

    // Criar cliente:
    async store(req,res){
        const cliente = await Cliente.create(req.body);
        return res.json(cliente)
    }

    // Atualizar cliente: 
    async update(req,res){
        const { email, senha} = req.body;

        const userExists = await Cliente.findOne({
            where: {
                email : email,
                senha : senha
            }
        })

        if(!userExists){
            return res.status(400).json({ error: 'Usuario não existe' });
        }



        const atualizar = await userExists.update(req.body)
        return res.json(atualizar)
    }

    // Excluir cliente:
    
    async delete(req,res){
        const userExists = await Cliente.findAll({
            where: {
                cpf : cpf
            }
        })

        if(!userExists){
            return res.status(400).json({ error: 'Usuario não existe' });
        }

        await userExists.destroy();
        return res.send();
    }

}


export default new ClienteController();