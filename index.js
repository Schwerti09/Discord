import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`🤖 Bot online als ${client.user.tag}`);
});

client.on('messageCreate', msg => {
  if (msg.author.bot) return;
  if (msg.content === '!ping') msg.reply('🏓 Pong from AUTOMIND!');
});

client.login(process.env.DISCORD_TOKEN);
