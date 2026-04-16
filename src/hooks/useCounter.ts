import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { CounterState, HistoryEntry } from '../types';
import { generateId } from '../utils/time';

const MAX_HISTORY = 5;

export function useCounter() {
  const [state, setState] = useLocalStorage<CounterState>('sayac-state', {
    count: 0,
    history: [],
  });

  const addHistoryEntry = useCallback((type: HistoryEntry['type']) => {
    setState((prev) => {
      const entry: HistoryEntry = {
        id: generateId(),
        type,
        value: prev.count,
        timestamp: Date.now(),
      };
      return {
        count: prev.count,
        history: [entry, ...prev.history].slice(0, MAX_HISTORY),
      };
    });
  }, [setState]);

  const increment = useCallback(() => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
    addHistoryEntry('increment');
  }, [setState, addHistoryEntry]);

  const decrement = useCallback(() => {
    setState((prev) => ({ ...prev, count: Math.max(0, prev.count - 1) }));
    addHistoryEntry('decrement');
  }, [setState, addHistoryEntry]);

  const reset = useCallback(() => {
    setState((prev) => ({ ...prev, count: 0 }));
    addHistoryEntry('reset');
  }, [setState, addHistoryEntry]);

  return {
    count: state.count,
    history: state.history,
    increment,
    decrement,
    reset,
  };
}
