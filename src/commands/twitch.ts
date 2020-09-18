import { Message } from "discord.js";
import { prefix } from "../config.json";
import Command from "../interfaces/Command";

class Twitch implements Command {
    name: string;
    usage: string;
    description: string;
    alias: string[];

    constructor() {
        this.name = "twitch";
        this.usage = `${prefix}twitch/${prefix}tw/${prefix}twi <name>`;
        this.description = "주어진 이름의 스트리머 방송국을 리턴합니다.";
        this.alias = ["tw", "twi"];
    }
    exec(msg: Message, args: string[]) {
        const name = args.shift();
        msg.channel.send(`https://www.twitch.tv/${name}`);
    }
}

export default Twitch;
