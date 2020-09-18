import { Message } from "discord.js";
import { prefix } from "../config.json";
import Command from "../interfaces/Command";
import axios from "axios";

class Npm implements Command {
    name: string;
    usage: string;
    description: string;

    constructor() {
        this.name = "npm";
        this.usage = `${prefix}npm <name>`;
        this.description =
            "주어진 이름을 가진 npm에 등록된 패키지를 리턴합니다.";
    }
    exec(msg: Message, args: string[]) {
        const name = args.shift();
        const URL = `https://www.npmjs.com/package/${name}`;

        axios
            .get(URL)
            .then((res) => {
                msg.channel.send(URL);
            })
            .catch(() => {
                msg.channel.send("npm에 없는 패키지입니다.");
            });
    }
}

export default Npm;
