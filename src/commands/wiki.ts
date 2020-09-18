import axios from "axios";
import { Message } from "discord.js";
import { prefix } from "../config.json";
import Command from "../interfaces/Command";

class Wiki implements Command {
    name: string;
    usage: string;
    description: string;
    alias: string[];

    constructor() {
        this.name = "wiki";
        this.usage = `${prefix}wiki/${prefix}namu <name>`;
        this.description = "주어진 이름의 나무위키 페이지를 리턴합니다.";
        this.alias = ["namu"];
    }
    // 구현 실패
    exec(msg: Message, args: string[]) {
        const name = args.shift();
        if (!name) return;

        const URL = encodeURI(`https://namu.wiki/w/${name}`);
        console.log(URL);

        axios
            .get(URL)
            .then((res) => {
                msg.channel.send(URL);
            })
            .catch(() => {
                msg.channel.send("나무위키에 없는 페이지입니다.");
            });
    }
}

export default Wiki;
