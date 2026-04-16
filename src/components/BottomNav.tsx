import { Plus, History, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'history' | 'settings';
  onTabChange: (tab: 'home' | 'history' | 'settings') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home' as const, label: 'Sayaç', icon: Plus },
    { id: 'history' as const, label: 'Geçmiş', icon: History },
    { id: 'settings' as const, label: 'Ayarlar', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 md:hidden bg-white/70 backdrop-blur-xl z-50 rounded-t-3xl border border-white/15 shadow-[0_-4px_24px_rgba(70,72,212,0.04)] text-primary font-body text-[10px] font-bold uppercase tracking-widest">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex flex-col items-center justify-center p-2 transition-all ${
            activeTab === id
              ? 'bg-primary text-white rounded-2xl p-3 scale-110 -translate-y-2'
              : 'text-secondary hover:text-primary'
          }`}
        >
          <Icon size={24} className={id === 'home' && activeTab === id ? 'fill' : ''} style={{ fontVariationSettings: id === 'home' && activeTab === id ? "'FILL' 1" : "'FILL' 0" }} />
          <span className="mt-1">{label}</span>
        </button>
      ))}
    </nav>
  );
}
