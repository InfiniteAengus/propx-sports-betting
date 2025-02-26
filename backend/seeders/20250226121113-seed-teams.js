module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Teams", [
      {
        id: 1,
        name: "Team Alpha",
        image: "https://i.postimg.cc/MGwDbkpY/warriors.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Team Beta",
        image: "https://i.postimg.cc/dt74JmfG/bucks.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Team Gamma",
        image: "https://i.postimg.cc/L6rv5gdw/hornets.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Team Delta",
        image: "https://i.postimg.cc/T3g0D2fw/kings.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Teams", null, {});
  },
};
