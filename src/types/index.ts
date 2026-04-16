export interface HistoryEntry {
  id: string;
  type: 'increment' | 'decrement' | 'reset';
  value: number;
  timestamp: number;
}

export interface CounterState {
  count: number;
  history: HistoryEntry[];
}
