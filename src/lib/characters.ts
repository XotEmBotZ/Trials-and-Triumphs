import { Character } from '@/types';

export const CHARACTERS: Character[] = [
  {
    id: 'knight',
    name: 'Knight',
    class: 'Knight',
    hp: 125,
    atk: 20,
    mana: 40,
    speed: 20,
    strengthUtility: 'Defensive Tank',
    shortDescription: 'Heavy armor specialist focusing on defense and protecting allies.',
    primaryStatBuff: '+5 Defense Boost',
    skills: [
      { name: 'Shield Bash', description: '20 Mana. Roll 9+ → 25 damage + stun target 1 turn' },
      { name: 'Fortified Strike', description: '16 Mana. Roll 10+, Deals 24 damage and the Knight takes 20% less damage for this turn.' },
      { name: 'Guardian’s Vow', description: '30 Mana. Roll 8+ → party takes −25% damage for 2 turns (50% less if 17+ roll)' },
      { name: 'Ultimate — Iron Fortress', description: '60 Mana. Roll 14+ → -75% damage taken for one turn + taunt all enemies' }
    ],
    spriteUrl: '/assets/knight.png',
    levelStats: [
      { level: 1, hp: 125, atk: 20, speed: 20, mana: 40 },
      { level: 2, hp: 140, atk: 23, speed: 22, mana: 50 },
      { level: 3, hp: 155, atk: 26, speed: 24, mana: 60 },
      { level: 4, hp: 170, atk: 29, speed: 26, mana: 70 },
      { level: 5, hp: 185, atk: 32, speed: 28, mana: 80 },
      { level: 6, hp: 200, atk: 35, speed: 30, mana: 90 }
    ]
  },
  {
    id: 'archer',
    name: 'Archer',
    class: 'Archer',
    hp: 105,
    atk: 20,
    mana: 50,
    speed: 26,
    strengthUtility: 'Mobile Ranged DPS',
    shortDescription: 'Swift marksman with deadly accuracy. Rain arrows from a distance.',
    primaryStatBuff: '+10 Speed Boost',
    skills: [
      { name: 'Rapid Fire', description: '20 Mana. Roll 10+ → 16 damage 2 light hits (Roll 10> and 5< only one hits)' },
      { name: 'Pinning Arrow', description: '25 Mana. Roll 10+ → 25 damage + −5 speed for two turns (roll 15+ 3 turns)' },
      { name: 'Deadeye Snipe', description: '35 Mana. Roll 15+ → 42 damage, lower speed for next turn' },
      { name: 'Ultimate — Tempest Volley', description: '60 Mana. Roll 11+ → 27 damage all enemies + −3 speed (Roll 17+ to deal 32 damage to all enemies)' }
    ],
    spriteUrl: '/assets/archer.png',
    levelStats: [
      { level: 1, hp: 105, atk: 20, speed: 26, mana: 50 },
      { level: 2, hp: 117, atk: 23, speed: 29, mana: 60 },
      { level: 3, hp: 129, atk: 26, speed: 32, mana: 70 },
      { level: 4, hp: 141, atk: 29, speed: 35, mana: 80 },
      { level: 5, hp: 153, atk: 32, speed: 38, mana: 90 },
      { level: 6, hp: 165, atk: 35, speed: 41, mana: 100 }
    ]
  },
  {
    id: 'wizard',
    name: 'Wizard',
    class: 'Wizard',
    hp: 110,
    atk: 20,
    mana: 70,
    speed: 22,
    strengthUtility: 'AoE Controller',
    shortDescription: 'Master of arcane arts dealing massive area damage and controlling the battlefield.',
    primaryStatBuff: '+8 Magic Boost',
    skills: [
      { name: 'Fireball', description: '20 Mana. Roll 10+ → 27 damage, Roll 15+ hits all enemies' },
      { name: 'Ice Lance', description: '25 Mana. Roll 9+ → 23 damage, -5 speed, freezes target if 15+' },
      { name: 'Chain Lightning', description: '45 Mana. Roll 10+ → 20 damage to 3 enemies (Roll 15+ and deal 16 damage to all)' },
      { name: 'Ultimate — Falling Star Cataclysm', description: '80 Mana. 1 or 2-turn charge. Roll 14+ (1-turn) or 12+ (2-turn) → 40 AoE damage' }
    ],
    spriteUrl: '/assets/wizard.png',
    levelStats: [
      { level: 1, hp: 110, atk: 20, speed: 22, mana: 70 },
      { level: 2, hp: 122, atk: 23, speed: 24, mana: 85 },
      { level: 3, hp: 134, atk: 26, speed: 26, mana: 100 },
      { level: 4, hp: 146, atk: 29, speed: 28, mana: 115 },
      { level: 5, hp: 158, atk: 32, speed: 30, mana: 130 },
      { level: 6, hp: 170, atk: 35, speed: 32, mana: 150 }
    ]
  },
  {
    id: 'assassin',
    name: 'Assassin',
    class: 'Assassin',
    hp: 100,
    atk: 24,
    mana: 40,
    speed: 24,
    strengthUtility: 'Burst Risk Dealer',
    shortDescription: 'Strikes from the shadows with lethal precision and high risk.',
    primaryStatBuff: '+12 Crit Boost',
    skills: [
      { name: 'Shadow Strike', description: '25 Mana. Roll 10+ → 34 dmg + poison (5 dmg × 2 turns)' },
      { name: 'Backstab', description: '35 Mana. Roll 13+ → 22 dmg (45 if target attacks Assassin)' },
      { name: 'Blade Dance', description: '30 Mana. Roll 11+ → hit two enemies, 22 damage' },
      { name: 'Ultimate — Execution Mark', description: '60 Mana. Roll 16+ → deal 45% of target’s max HP' }
    ],
    spriteUrl: '/assets/assassin.png',
    levelStats: [
      { level: 1, hp: 100, atk: 24, speed: 24, mana: 40 },
      { level: 2, hp: 112, atk: 27, speed: 26, mana: 50 },
      { level: 3, hp: 124, atk: 30, speed: 28, mana: 60 },
      { level: 4, hp: 136, atk: 33, speed: 30, mana: 70 },
      { level: 5, hp: 148, atk: 36, speed: 32, mana: 80 },
      { level: 6, hp: 160, atk: 39, speed: 34, mana: 90 }
    ]
  },
  {
    id: 'bard',
    name: 'Bard',
    class: 'Bard',
    hp: 110,
    atk: 18,
    mana: 60,
    speed: 22,
    strengthUtility: 'Support & Control',
    shortDescription: 'Enhances allies with melodies and disrupts enemies with discordant notes.',
    primaryStatBuff: '+10 Support Boost',
    skills: [
      { name: 'Healing Melody', description: '25 Mana. Roll 7+ → heal ally or self for 25% HP' },
      { name: 'Motivating Anthem', description: '20 Mana. Auto → ally gains +5 to next roll' },
      { name: 'Discordant Chorus', description: '30 Mana. Roll 9+ → all enemies −3 attack for 2 turns (15+ roll deals 20 damage)' },
      { name: 'Ultimate — Requiem of Return', description: '60 Mana. Roll 14+ → revive ally at 30% HP (revived ally skips turn)' }
    ],
    spriteUrl: '/assets/bard.png',
    levelStats: [
      { level: 1, hp: 110, atk: 18, speed: 22, mana: 60 },
      { level: 2, hp: 123, atk: 20, speed: 24, mana: 70 },
      { level: 3, hp: 136, atk: 22, speed: 26, mana: 80 },
      { level: 4, hp: 149, atk: 24, speed: 28, mana: 90 },
      { level: 5, hp: 162, atk: 26, speed: 30, mana: 105 },
      { level: 6, hp: 175, atk: 28, speed: 32, mana: 120 }
    ]
  }
];
