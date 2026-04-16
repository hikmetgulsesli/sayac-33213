import { describe, it, expect } from 'vitest';
import { HistoryEntry } from '../types';

describe('HistoryEntry', () => {
  it('has correct type for increment', () => {
    const entry: HistoryEntry = {
      id: 'test-1',
      type: 'increment',
      value: 5,
      timestamp: Date.now(),
    };
    expect(entry.type).toBe('increment');
  });

  it('has correct type for decrement', () => {
    const entry: HistoryEntry = {
      id: 'test-2',
      type: 'decrement',
      value: 4,
      timestamp: Date.now(),
    };
    expect(entry.type).toBe('decrement');
  });

  it('has correct type for reset', () => {
    const entry: HistoryEntry = {
      id: 'test-3',
      type: 'reset',
      value: 0,
      timestamp: Date.now(),
    };
    expect(entry.type).toBe('reset');
  });
});
