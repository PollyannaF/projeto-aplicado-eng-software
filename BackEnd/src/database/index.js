import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Categoria from '../models/Categoria';

import Cliente from '../models/Cliente';

const models = [Cliente, Categoria];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection))
    }
}

export default new Database();