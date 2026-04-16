import { Home, History, Settings, Target } from 'lucide-react';

interface SidebarProps {
  activeTab: 'home' | 'history' | 'goals' | 'settings';
  onTabChange: (tab: 'home' | 'history' | 'goals' | 'settings') => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = [
    { id: 'home' as const, label: 'Ana Sayfa', icon: Home },
    { id: 'history' as const, label: 'Geçmiş', icon: History },
    { id: 'goals' as const, label: 'Hedefler', icon: Target },
    { id: 'settings' as const, label: 'Ayarlar', icon: Settings },
  ];

  return (
    <nav className="hidden md:flex flex-col h-screen p-4 space-y-2 bg-surface-container-low text-primary font-body text-sm font-medium w-64 border-r-0 shadow-none">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold text-primary">Sayaç Pro</h1>
        <p className="text-xs text-outline mt-1 uppercase tracking-widest font-bold">Minimalist Takip</p>
      </div>
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
            activeTab === id
              ? 'bg-white text-primary font-bold shadow-[0_4px_24px_rgba(70,72,212,0.04)]'
              : 'text-secondary hover:bg-white/50'
          }`}
        >
          <span className={activeTab === id ? 'fill' : ''} style={{ fontVariationSettings: activeTab === id ? "'FILL' 1" : "'FILL' 0" }}>
            <Icon size={20} />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
