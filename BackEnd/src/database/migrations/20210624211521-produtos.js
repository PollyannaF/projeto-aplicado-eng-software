'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
     return queryInterface.createTable('produtos', { 
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
       },
        nome_produto: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
        preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface) => { return queryInterface.dropTable('produtos');}
};
