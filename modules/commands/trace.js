module.exports = {
  config: {
    name: "trace",
    version: "1.0",
    role: 0,
    shortDescription: "Trace user"
  },

  onStart: async function ({ message, args }) {
    const uid = args[0];
    message.reply(`🔍 Tracing UID: ${uid}...\n📍 Location: Unknown\n💻 Device: Android`);
  }
};
