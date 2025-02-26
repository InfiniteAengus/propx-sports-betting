import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "Teams",
})
export default class Team extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare image: string;
}
