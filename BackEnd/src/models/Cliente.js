import Sequelize, {Model} from 'sequelize';

class Cliente extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            cpf: Sequelize.STRING,
            email: Sequelize.STRING,
            telefone: Sequelize.INTEGER,
            endereco: Sequelize.STRING,
            estado: Sequelize.STRING,
            municipio: Sequelize.STRING,
            senha: Sequelize.STRING
        },
        {
            sequelize
        })
    }
}

export default Cliente;