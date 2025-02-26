module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Odds", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      matchId: { type: Sequelize.INTEGER, references: { model: "Matches", key: "id" }, onDelete: "CASCADE" },
      teamId: { type: Sequelize.INTEGER, references: { model: "Teams", key: "id" }, onDelete: "CASCADE" },
      moneyline: { type: Sequelize.FLOAT, allowNull: false },
      spread: { type: Sequelize.FLOAT, allowNull: false },
      spreadOdds: { type: Sequelize.FLOAT, allowNull: false },
      total: { type: Sequelize.FLOAT, allowNull: false },
      totalOverOdds: { type: Sequelize.FLOAT, allowNull: false },
      totalUnderOdds: { type: Sequelize.FLOAT, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Odds");
  },
};
