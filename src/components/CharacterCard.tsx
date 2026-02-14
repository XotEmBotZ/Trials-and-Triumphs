import { Character } from '@/types';

interface BaseCardProps {
  name: string;
  hp: number;
  stage?: string;
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const BaseCard = ({ name, hp, stage = "STAGE 1", children, isSelected, onClick, disabled }: BaseCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-[340px] aspect-[7/10] p-2 flex flex-col transition-all duration-300 group ${
        isSelected ? 'scale-105 z-10' : 'hover:scale-102'
      } ${disabled ? 'opacity-60 grayscale cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {/* Scroll Background Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <img 
          src="/team_details/scroll.png" 
          alt="Card Background" 
          className={`w-full h-full object-stretch drop-shadow-2xl ${
            isSelected ? 'brightness-110 sepia-[0.1] ring-4 ring-blue-500/50' : ''
          }`}
        />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-orange-900/5 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full px-5 py-6 text-stone-800 font-serif">
        
        {/* Top Header */}
        <div className="flex justify-between items-end mb-2 border-b-2 border-stone-800/20 pb-1">
          <div className="flex items-baseline gap-1.5">
             <div className="bg-stone-800 text-stone-100 px-1.5 py-0.5 text-[9px] font-bold rounded-sm leading-tight uppercase tracking-wider">
               {stage}
             </div>
             <h2 className="text-2xl font-black italic tracking-tighter leading-none drop-shadow-sm flex items-baseline gap-1">
               {name} <span className="text-sm lowercase font-bold">ex</span>
             </h2>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-black tracking-tighter">HP</span>
            <span className="text-2xl font-black tabular-nums leading-none">{hp}</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 border border-stone-800 flex items-center justify-center text-[10px] shadow-lg text-white">
               ★
            </div>
          </div>
        </div>

        {/* Inner Content (Dynamic) */}
        <div className="flex-1 flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  onSelect?: (character: Character) => void;
  disabled?: boolean;
}

export default function CharacterCard({ character, isSelected, onSelect, disabled }: CharacterCardProps) {
  // Find the ultimate skill (usually the last one or marked as Ultimate)
  const ultimateSkill = character.skills.find(s => s.name.toLowerCase().includes('ultimate')) || character.skills[character.skills.length - 1];
  
  return (
    <BaseCard 
      name={character.name} 
      hp={character.hp} 
      isSelected={isSelected}
      onClick={() => !disabled && onSelect?.(character)}
      disabled={disabled}
    >
      {/* Main Sprite Illustration Area */}
      <div className="relative flex-1 flex items-center justify-center py-2">
        <div className="absolute inset-0 bg-stone-100/30 rounded-lg border border-stone-800/10 shadow-inner"></div>
        {character.spriteUrl ? (
          <img 
            src={character.spriteUrl} 
            alt={character.name} 
            className="relative z-10 w-48 h-48 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110" 
          />
        ) : (
          <span className="relative z-10 text-6xl opacity-20">👤</span>
        )}
      </div>

      {/* Description Box */}
      <div className="relative bg-gradient-to-b from-stone-100/80 to-stone-200/80 border border-stone-400/50 rounded-md p-2 shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 rounded-t-md opacity-80"></div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xs font-bold text-red-900 uppercase tracking-widest border-b border-red-900/20">{character.class}</h3>
          {character.spriteUrl && (
            <img src={character.spriteUrl} alt="" className="w-8 h-8 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" />
          )}
        </div>
        <p className="text-[11px] leading-tight text-stone-700 italic font-medium">
          {character.shortDescription}
        </p>
      </div>

      {/* Primary Stat Buff Line */}
      <div className="flex items-center gap-2 px-1">
        <div className="w-5 h-5 rounded-full bg-emerald-700 border border-emerald-900 flex items-center justify-center text-[8px] text-white shadow-sm font-bold">
          {character.class[0]}
        </div>
        <span className="text-sm font-bold tracking-tight text-stone-800">
          {character.primaryStatBuff || `+${character.speed} Speed Boost`}
        </span>
      </div>

      {/* Ultimate Skill / Rule Box */}
      <div className="mt-auto bg-stone-100/90 border-2 border-stone-400/60 rounded-lg p-2.5 relative overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 h-4 bg-stone-800/5 flex items-center justify-center">
          <span className="text-[9px] font-black italic uppercase tracking-[0.2em] text-stone-400">exRule</span>
        </div>
        <div className="pt-3">
          <h4 className="text-[10px] font-bold text-stone-900 mb-0.5 underline decoration-stone-400 decoration-1 underline-offset-2">
            {ultimateSkill?.name}
          </h4>
          <p className="text-[10px] leading-[1.1] text-stone-600 font-medium">
            {ultimateSkill?.description}
          </p>
        </div>
      </div>
    </BaseCard>
  );
}
