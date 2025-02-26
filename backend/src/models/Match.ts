import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Team from "./Team";

@Table({
  tableName: "Matches",
})
export default class Match extends Model {
  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare teamAId: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare teamBId: number;

  @Column({ type: DataType.DATE, allowNull: false })
  declare date: Date;

  @BelongsTo(() => Team, "teamAId")
  declare teamA: Team;

  @BelongsTo(() => Team, "teamBId")
  declare teamB: Team;
}
