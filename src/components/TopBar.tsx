import { History, Settings } from 'lucide-react';

interface TopBarProps {
  onHistoryClick?: () => void;
  onSettingsClick?: () => void;
}

export function TopBar({ onHistoryClick, onSettingsClick }: TopBarProps) {
  return (
    <header className="w-full top-0 sticky flex justify-between items-center px-6 py-4 bg-surface-bright text-primary font-body font-semibold tracking-tight shadow-none border-b border-transparent md:hidden">
      <div className="text-2xl font-bold tracking-tighter text-on-surface">Sayaç</div>
      <div className="flex space-x-4">
        <button
          onClick={onHistoryClick}
          className="text-secondary hover:opacity-80 transition-opacity scale-95 active:transition-all p-2 cursor-pointer"
          aria-label="Geçmiş"
        >
          <History size={24} />
        </button>
        <button
          onClick={onSettingsClick}
          className="text-secondary hover:opacity-80 transition-opacity scale-95 active:transition-all p-2 cursor-pointer"
          aria-label="Ayarlar"
        >
          <Settings size={24} />
        </button>
      </div>
    </header>
  );
}
