import { Message } from "discord.js";

interface Command {
    name: string;
    alias?: string[];
    usage: string;
    description: string;
    exec: (msg: Message, args: string[]) => void;
}

export default Command;
