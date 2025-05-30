import { DataTypes } from "sequelize";
import db from "../configs/Database.js"; // pastikan kamu sudah setup koneksi Sequelize di sini

const Place = db.define('places', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating_avg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(9, 7),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: false
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // jika tabelmu tidak punya kolom createdAt & updatedAt
});

export default Place;