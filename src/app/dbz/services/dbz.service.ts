import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: crypto.randomUUID(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: crypto.randomUUID(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: crypto.randomUUID(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: crypto.randomUUID(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: string) {
  //   this.characters = this.characters.filter(char => char.id !== id)
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
