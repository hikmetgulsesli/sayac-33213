import { useState, useCallback } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { generateId } from './utils/time';
import { HistoryEntry } from './types';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { TopBar } from './components/TopBar';
import { CounterDisplay } from './components/CounterDisplay';
import { ActionButtons } from './components/ActionButtons';
import { HistoryList } from './components/HistoryList';
import './index.css';

type TabType = 'home' | 'history' | 'goals' | 'settings';

function App() {
  const [count, setCount] = useLocalStorage<number>('sayac-count', 0);
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>('sayac-history', []);
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const addHistoryEntry = useCallback((type: HistoryEntry['type']) => {
    const entry: HistoryEntry = {
      id: generateId(),
      type,
      value: count,
      timestamp: Date.now(),
    };
    setHistory((prev) => [entry, ...prev].slice(0, 5));
  }, [count, setHistory]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
    addHistoryEntry('increment');
  }, [setCount, addHistoryEntry]);

  const handleDecrement = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1));
    addHistoryEntry('decrement');
  }, [setCount, addHistoryEntry]);

  const handleReset = useCallback(() => {
    setCount(0);
    addHistoryEntry('reset');
  }, [setCount, addHistoryEntry]);

  return (
    <div className="flex min-h-screen bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container font-body">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-32 md:pb-12 max-w-4xl mx-auto w-full">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface">Basit Sayıcı</h2>
            <p className="text-sm font-bold uppercase tracking-widest text-outline mt-2">Günlük Hedef: 10,000</p>
          </div>

          <CounterDisplay count={count} />
          <ActionButtons
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
          />
          <HistoryList entries={history} />
        </div>
      </main>

      <BottomNav
        activeTab={activeTab === 'goals' ? 'home' : activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}

export default App;
