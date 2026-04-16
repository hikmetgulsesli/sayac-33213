import { HistoryEntry } from '../types';
import { HistoryItem } from './HistoryItem';

interface HistoryListProps {
  entries: HistoryEntry[];
  onViewAll?: () => void;
}

export function HistoryList({ entries, onViewAll }: HistoryListProps) {
  const recentEntries = entries.slice(0, 5);

  if (entries.length === 0) {
    return (
      <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-surface-container rounded-full p-6 mb-6">
          <span className="material-symbols-outlined text-4xl text-outline-variant">history_toggle_off</span>
        </div>
        <h3 className="text-[1.125rem] font-medium text-on-surface mb-2">Geçmiş Kayıtlar</h3>
        <p className="text-base italic text-outline text-center max-w-sm">
          Henüz işlem yapılmadı
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-on-surface">Son İşlemler</h3>
        {onViewAll && (
          <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors uppercase tracking-wider">
            Tümünü Gör
          </button>
        )}
      </div>
      <div className="space-y-4">
        {recentEntries.map((entry) => (
          <HistoryItem key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
