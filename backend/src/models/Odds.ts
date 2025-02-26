import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import Match from "./Match";
import Team from "./Team";

@Table({
  tableName: "Odds",
})
export default class Odds extends Model {
  @ForeignKey(() => Match)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare matchId: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare teamId: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare moneyline: number; // Moneyline odds

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare spread: number; // Spread value (e.g., -3.5, +3.5)

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare spreadOdds: number; // Odds for the spread bet

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare total: number; // Total points value (e.g., 220.5)

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare totalOverOdds: number; // Odds for Over bet

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare totalUnderOdds: number; // Odds for Under bet
}
