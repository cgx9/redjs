"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommands_1 = require("./AbstractCommands");
class ConnectionCommands extends AbstractCommands_1.AbstractCommands {
    constructor(opt) {
        super(opt);
    }
    getCommandsNames() {
        return ['ping', 'auth', 'echo', 'quit', 'select', 'swapdb'];
    }
    ping(conn, responseExpected = null) {
        let r = 'PONG';
        if (responseExpected) {
            r = responseExpected;
        }
        return {
            type: 'simpleString',
            value: r
        };
    }
    select(conn, index = 0) {
        this.checkArgCount('echo', arguments, 2);
        let r = 'OK';
        return {
            type: 'simpleString',
            value: r
        };
    }
    auth(conn, password) {
        this.checkArgCount('auth', arguments, 2);
        let r = 'OK';
        return {
            type: 'simpleString',
            value: r
        };
    }
    echo(conn, message) {
        this.checkArgCount('echo', arguments, 2);
        let r = message;
        return {
            type: 'simpleString',
            value: r
        };
    }
    quit(conn) {
        conn.on('close', () => {
            console.log('Connection closed');
        });
        conn.quit();
        let r = "OK";
        return {
            type: 'simpleString',
            value: r
        };
    }
}
exports.ConnectionCommands = ConnectionCommands;
//# sourceMappingURL=ConnectionCommands.js.map