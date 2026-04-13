module.exports = {
  config: {
    name: "dark",
    version: "1.0",
    role: 0,
    shortDescription: "Dark reply"
  },

  onStart: async function ({ message, args }) {
    message.reply(`😈 ${args.join(" ")}... system compromised.`);
  }
};
