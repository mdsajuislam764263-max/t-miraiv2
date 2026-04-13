module.exports = {
  config: {
    name: "iptrace",
    version: "1.0",
    role: 0,
    shortDescription: "Fake IP trace"
  },

  onStart: async function ({ message, args }) {
    const target = args.join(" ");
    message.reply(`🌐 Tracing IP of ${target}...`);
    setTimeout(() => {
      message.reply(`📍 IP: 192.168.0.${Math.floor(Math.random()*255)}\nLocation: Unknown`);
    }, 3000);
  }
};
