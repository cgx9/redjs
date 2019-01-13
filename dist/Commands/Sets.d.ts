import { AbstractCommands } from './AbstractCommands';
import { Connection } from '../Connection';
import { Database } from '../data/Database';
export declare class Sets extends AbstractCommands {
    constructor(opt: any);
    getCommandsNames(): string[];
    sismember(conn: Connection, key: string, member: any): number;
    scard(conn: Connection, key: string): number;
    sunion(conn: Connection, ...keys: string[]): any[];
    srem(conn: Connection, key: string, ...members: string[]): number;
    sadd(conn: Connection, key: string, ...members: string[]): number;
    smembers(conn: Connection, key: string): any[];
    spop(conn: Connection, key: string, count?: number): any[];
    protected getDataset(db: Database, key: string): any;
    protected createNewKey(db: Database, key: string): any;
}
