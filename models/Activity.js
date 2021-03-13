module.exports = (sequelize,DataTypes)=>{
  const Activity = sequelize.define(
    'Activity',{
      id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      activity: DataTypes.STRING
    },{
      tableName: 'activities'
    });
    return Activity;
}