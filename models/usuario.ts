import {DataTypes} from 'sequelize';
import db from '../database/conecction';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    estado:{
        type: DataTypes.BOOLEAN,
    },
});

export default Usuario;