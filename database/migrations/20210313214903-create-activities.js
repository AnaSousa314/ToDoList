'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('activities',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    activity: Sequelize.STRING
  },{
    tableName: 'activities',
    timestamps: false
  }
  )
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('activities');
     
  }
};
