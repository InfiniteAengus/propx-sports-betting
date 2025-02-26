import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Team from "../models/Team"; // Import models explicitly
import Match from "../models/Match";
import Bet from "../models/Bet";
import Odds from "../models/Odds";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: console.log,
  models: [Team, Match, Bet, Odds], // Explicitly load models
});

export default sequelize;
