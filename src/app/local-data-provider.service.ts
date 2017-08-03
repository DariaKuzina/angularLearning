import { Injectable } from '@angular/core';

@Injectable()
export class LocalDataProviderService {

    storageKey: string;

    constructor() {
        this.storageKey = "magicStrings";
    }

    getMagicStrings(): string[] {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    store(info : string[]) : void{
        localStorage.setItem(this.storageKey, JSON.stringify(info));
    }

    add(item : string) : string[] {

        let existing : string[] = this.getMagicStrings();

        if(existing == null)
            existing = [];

        existing.push(item);
        this.store(existing);
        return existing;
    }

//i know it is a bad way. lazy to invent ids
    delete(i: number) :  string[]{

        let existing : string[] = this.getMagicStrings();
        existing.splice(i,1);
        this.store(existing);
        return existing;
    }

    clear() : string[]{
        localStorage.removeItem(this.storageKey);
        return [];
    }

}