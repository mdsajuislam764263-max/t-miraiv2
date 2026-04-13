module.exports = {
  config: {
    name: "ddos",
    version: "1.0",
    role: 0,
    shortDescription: "Fake attack"
  },

  onStart: async function ({ message, args }) {
    const target = args[0];
    message.reply(`💣 Attacking ${target}...`);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      message.reply(`⚡ Sending packets... (${i*10}%)`);
      if (i === 5) {
        clearInterval(interval);
        message.reply("🔥 Server Down (simulation)");
      }
    }, 1000);
  }
};
