const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Inscricao = sequelize.define(
    "Inscricao",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dataInscricao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "data_inscricao",
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'ativa'
        },
    },
    {
        tableName: "inscricoes",
        timestamps: true,
        underscored: true,
    },
);
module.exports = Inscricao;