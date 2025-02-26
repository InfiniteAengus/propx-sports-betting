import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import Match from "./Match";
import Team from "./Team";

@Table({
  tableName: "Bets",
})
export default class Bet extends Model {
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @ForeignKey(() => Match)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare matchId: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare teamId: number; // The team user is betting on

  @Column({ type: DataType.ENUM("moneyline", "spread", "total"), allowNull: false })
  declare betType: string; // Type of bet

  @Column({ type: DataType.FLOAT, allowNull: true })
  declare spreadValue: number; // If it's a spread bet

  @Column({ type: DataType.ENUM("over", "under"), allowNull: true })
  declare totalType: string; // If it's a total bet (over/under)

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare odds: number; // The odds at the time of placing the bet

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare wagerAmount: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare currency: string;
}
