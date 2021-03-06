import {EventEmitter} from "events";

let sessions = new Map();
let publishers = new Map();
let idlePlayers = new Set();

let nodeEvent = new EventEmitter();
let stat = {
    inbytes: 0,
    outbytes: 0,
    accepted: 0
};

export default {
    sessions,
    publishers,
    idlePlayers,
    nodeEvent: nodeEvent,
    stat
};
