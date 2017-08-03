import { Injectable } from '@angular/core';

@Injectable()
export class RandomDataProviderService {

  size: number;
  chars: string;

  constructor(n: number) {
    this.size = n;
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  getMagicString(): string {
    let text = "";
    for (let i = 0; i < this.size; i++)
      text += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
    return text;
  }

}