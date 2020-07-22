const mysql = require("mysql");
const sequelize = require("sequelize");
const Schema = sequelize.Schema;

module.exports= (sequelize, DataTypes)=>{
  const Parent = sequelize.define(
      "Parent",
      {   id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV1,
              primaryKey: true
          },
          first_name: {
              type: DataTypes.STRING,
              allowNull: false
          },
          last_name:{
              type: DataTypes.STRING,
              allowNull: false
          },
          email:{
              type: DataTypes.STRING,
              allowNull: false
          },
          phone: {
              type: DataTypes.STRING,
              allowNull: false
          }
  );
  return Parent;
};