import { Message, MessageEmbed } from "discord.js";
import Command from "./interfaces/Command";
import { prefix } from "./config.json";

import Twitch from "./commands/twitch";
import Npm from "./commands/npm";

class Router {
    commands: Command[];

    constructor() {
        this.commands = [
            new Twitch(),
            new Npm(),
        ];
    }

    route(msg: Message, cmdName: string, args: string[]) {
        const command = this.commands.find(cmd => {
            return cmd.name === cmdName || cmd.alias?.find(alias => alias === cmdName)
        });

        if (command) {
            command.exec(msg, args);
        }
    }

    help(msg: Message) {
        const embed = new MessageEmbed()
            .setTitle("SukJuBot 도움말")

        this.commands.forEach(cmd => {
            embed.addField(`\`${cmd.usage}\``, `${cmd.description}`)
        });

        msg.channel.send(embed);
    }
}

export default Router;