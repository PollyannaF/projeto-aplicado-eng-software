'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
     return queryInterface.createTable('item_pedidos', { 
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
       },
        codigo_produto: {
          type: Sequelize.STRING,
          allowNull: false,
          foreignkey: true
        },
        quantidade: {
          type: Sequelize.INTEGER,
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

  down: (queryInterface) => { return queryInterface.dropTable('item_pedidos');}
};
