import { Minus, Plus, RotateCcw } from 'lucide-react';

interface ActionButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function ActionButtons({ onIncrement, onDecrement, onReset }: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-12 w-full z-10">
      <button
        onClick={onDecrement}
        className="flex items-center justify-center space-x-2 bg-surface-container-high text-on-surface rounded-2xl px-6 py-4 hover:bg-surface-dim transition-colors shadow-sm w-32 cursor-pointer"
        aria-label="Azalt"
      >
        <Minus size={20} className="font-bold" />
        <span className="font-medium">Azalt</span>
      </button>
      <button
        onClick={onIncrement}
        className="flex items-center justify-center space-x-2 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl px-8 py-5 hover:opacity-90 transition-opacity shadow-[0_8px_32px_rgba(70,72,212,0.25)] w-40 cursor-pointer transform hover:scale-105 duration-200"
        aria-label="Arttır"
      >
        <Plus size={24} className="font-bold text-xl" />
        <span className="font-bold text-lg">Arttır</span>
      </button>
      <button
        onClick={onReset}
        className="flex items-center justify-center space-x-2 border border-tertiary/20 text-tertiary bg-transparent rounded-2xl px-6 py-4 hover:bg-tertiary/5 transition-colors w-32 cursor-pointer"
        aria-label="Sıfırla"
      >
        <RotateCcw size={20} className="font-medium" />
        <span className="font-medium">Sıfırla</span>
      </button>
    </div>
  );
}
