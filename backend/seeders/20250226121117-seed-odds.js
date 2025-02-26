module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Odds", [
      // Match 1 (Team Alpha vs Team Beta)
      {
        id: 1,
        matchId: 1,
        teamId: 1,
        moneyline: 1.8,
        spread: -3.5,
        spreadOdds: 2.0,
        total: 220.5,
        totalOverOdds: 1.9,
        totalUnderOdds: 1.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        matchId: 1,
        teamId: 2,
        moneyline: 2.2,
        spread: 3.5,
        spreadOdds: 1.9,
        total: 220.5,
        totalOverOdds: 1.9,
        totalUnderOdds: 1.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Match 2 (Team Gamma vs Team Delta)
      {
        id: 3,
        matchId: 2,
        teamId: 3,
        moneyline: 1.6,
        spread: -5.5,
        spreadOdds: 1.8,
        total: 215.5,
        totalOverOdds: 2.0,
        totalUnderOdds: 1.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        matchId: 2,
        teamId: 4,
        moneyline: 2.5,
        spread: 5.5,
        spreadOdds: 2.2,
        total: 215.5,
        totalOverOdds: 1.9,
        totalUnderOdds: 2.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Odds", null, {});
  },
};
