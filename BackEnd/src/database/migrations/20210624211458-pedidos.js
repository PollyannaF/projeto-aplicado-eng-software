'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
     return queryInterface.createTable('pedidos', { 
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
       },
        cpf_cliente: {
          type: Sequelize.STRING,
          allowNull: false,
          foreignkey: true
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

  down: (queryInterface) => { return queryInterface.dropTable('pedidos');}
};
