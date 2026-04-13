module.exports = {
  config: {
    name: "whois",
    version: "1.0",
    role: 0,
    shortDescription: "Fake user info"
  },

  onStart: async function ({ message, args }) {
    const name = args.join(" ");
    message.reply(`🕵️ Gathering info on ${name}...`);
    setTimeout(() => {
      message.reply(`Name: ${name}\nStatus: Active\nDevice: Android\nRisk Level: Low`);
    }, 2500);
  }
};
