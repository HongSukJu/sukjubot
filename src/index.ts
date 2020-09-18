import { token, prefix } from "./config.json";

import Router from "./router";
const router = new Router();

import { Client, Message } from "discord.js";
const client = new Client();

client.once("ready", () => {
    console.log("봇 켜짐");
});

client.on("message", (msg: Message) => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const cmdName = args.shift()!.toLowerCase();

    if (cmdName === "help") {
        router.help(msg);
        return;
    }

    router.route(msg, cmdName, args);
});

client.login(token);