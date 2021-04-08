module.exports = (sequelize,DataTypes)=>{
  const Activity = sequelize.define(
    'Activity',{
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      task: DataTypes.STRING
    },{
      tableName: 'activities'
    });
    return Activity;
}