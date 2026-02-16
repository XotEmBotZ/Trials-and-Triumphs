export type CharacterClass = 'Knight' | 'Archer' | 'Wizard' | 'Assassin' | 'Bard';

export interface Character {
  id: string;
  name: string;
  class: CharacterClass;
  hp: number;
  atk: number;
  mana: number;
  speed: number;
  strengthUtility: string;
  skills: { name: string; description: string }[];
  spriteUrl?: string;
  shortDescription: string;
  primaryStatBuff: string;
  levelStats?: {
    level: number;
    hp: number;
    atk: number;
    speed: number;
    mana: number;
  }[];
}

export interface Player {
  id?: string;
  name: string;
  selectedCharacter?: Character;
  character_key?: string | null;
  level?: number;
}

export interface Team {
  name: string;
  players: [Player, Player, Player];
}

export interface TeamRecord {
  id: string;
  user_id: string;
  name: string;
  current_step: 'SELECT' | 'COMPLETED';
  p1_name: string;
  p1_character: string | null;
  p1_level: number;
  p2_name: string;
  p2_character: string | null;
  p2_level: number;
  p3_name: string;
  p3_character: string | null;
  p3_level: number;
  created_at: string;
}
