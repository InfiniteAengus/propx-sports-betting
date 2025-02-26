module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Matches", [
      {
        id: 1,
        date: new Date(),
        teamAId: 1,
        teamBId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        date: new Date(),
        teamAId: 3,
        teamBId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Matches", null, {});
  },
};
