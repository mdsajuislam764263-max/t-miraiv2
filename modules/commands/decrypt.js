module.exports = {
  config: {
    name: "decrypt",
    version: "1.0",
    role: 0,
    shortDescription: "Decrypt text"
  },

  onStart: async function ({ message, args }) {
    try {
      const decoded = Buffer.from(args.join(" "), 'base64').toString();
      message.reply(`🔓 Decrypted:\n${decoded}`);
    } catch {
      message.reply("❌ Invalid text");
    }
  }
};
