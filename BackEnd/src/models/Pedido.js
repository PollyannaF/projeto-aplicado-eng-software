import Sequelize, {Model} from 'sequelize';

class Pedido extends Model {
    static init(sequelize){
        super.init({
            
        },
        {
            sequelize
        })
    }
}

export default Pedido;