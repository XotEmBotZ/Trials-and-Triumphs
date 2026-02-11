import { Character } from '@/types';

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  onSelect?: (character: Character) => void;
  disabled?: boolean;
}

export default function CharacterCard({ character, isSelected, onSelect, disabled }: CharacterCardProps) {
  return (
    <div 
      className={`p-6 bg-gray-900 border-2 rounded-xl transition-all ${
        isSelected ? 'border-blue-500 bg-gray-800' : 'border-gray-800 hover:border-gray-700'
      } ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect?.(character)}
    >
      <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
        {character.spriteUrl ? (
          <img src={character.spriteUrl} alt={character.name} className="w-full h-full object-contain" />
        ) : (
          <span className="text-3xl">👤</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-center mb-1">{character.name}</h3>
      <p className="text-blue-400 text-sm text-center mb-3 font-semibold uppercase">{character.class}</p>
      <p className="text-gray-400 text-sm text-center mb-4 line-clamp-2">{character.shortDescription}</p>
      
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="bg-gray-800 p-1 rounded">HP: {character.hp}</div>
        <div className="bg-gray-800 p-1 rounded">MP: {character.mana}</div>
      </div>
    </div>
  );
}
