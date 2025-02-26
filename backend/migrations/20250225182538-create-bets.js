module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bets", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: Sequelize.INTEGER, allowNull: false },
      matchId: { type: Sequelize.INTEGER, references: { model: "Matches", key: "id" }, onDelete: "CASCADE" },
      teamId: { type: Sequelize.INTEGER, references: { model: "Teams", key: "id" }, onDelete: "CASCADE" },
      betType: { type: Sequelize.ENUM("moneyline", "spread", "total"), allowNull: false },
      spreadValue: { type: Sequelize.FLOAT, allowNull: true },
      totalType: { type: Sequelize.ENUM("over", "under"), allowNull: true },
      odds: { type: Sequelize.FLOAT, allowNull: false },
      wagerAmount: { type: Sequelize.FLOAT, allowNull: false },
      currency: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Bets");
  },
};
