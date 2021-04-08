'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      task: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('activities');
     
  }
};
