export type CharacterClass = 'Knight' | 'Archer' | 'Wizard' | 'Assassin' | 'Bard';

export interface Character {
  id: string;
  name: string;
  class: CharacterClass;
  hp: number;
  mana: number;
  speed: number;
  strengthUtility: string;
  skills: { name: string; description: string }[];
  spriteUrl?: string;
  shortDescription: string;
  primaryStatBuff: string;
}

export interface Player {
  name: string;
  selectedCharacter?: Character;
}

export interface Team {
  name: string;
  players: [Player, Player, Player];
}
