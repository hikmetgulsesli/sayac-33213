import { Plus, Minus, RotateCcw } from 'lucide-react';
import { HistoryEntry } from '../types';
import { formatTime } from '../utils/time';

interface HistoryItemProps {
  entry: HistoryEntry;
}

export function HistoryItem({ entry }: HistoryItemProps) {
  const config = {
    increment: {
      icon: Plus,
      iconBg: 'bg-primary-container/10 text-primary',
      label: 'Arttırma (+1)',
    },
    decrement: {
      icon: Minus,
      iconBg: 'bg-surface-container-highest text-on-surface',
      label: 'Azaltma (-1)',
    },
    reset: {
      icon: RotateCcw,
      iconBg: 'bg-tertiary-container/10 text-tertiary',
      label: 'Sıfırlama (↺)',
    },
  }[entry.type];

  const Icon = config.icon;

  return (
    <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-bright transition-colors group cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className={`w-10 h-10 rounded-full ${config.iconBg} flex items-center justify-center group-hover:opacity-80 transition-colors`}>
          <Icon size={16} className="font-bold" />
        </div>
        <div>
          <p className="text-sm font-medium text-on-surface">{config.label}</p>
          <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-outline mt-1">
            {formatTime(entry.timestamp)}
          </p>
        </div>
      </div>
      <div className="text-lg font-bold text-on-surface">{entry.value}</div>
    </div>
  );
}
