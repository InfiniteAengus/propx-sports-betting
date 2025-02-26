module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Matches", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      date: { type: Sequelize.DATE, allowNull: false },
      teamAId: { type: Sequelize.INTEGER, references: { model: "Teams", key: "id" }, onDelete: "CASCADE" },
      teamBId: { type: Sequelize.INTEGER, references: { model: "Teams", key: "id" }, onDelete: "CASCADE" },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Matches");
  },
};
