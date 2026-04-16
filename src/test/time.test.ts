import { describe, it, expect } from 'vitest';
import { formatTime, generateId } from '../utils/time';

describe('formatTime', () => {
  it('formats timestamp to HH:MM:SS', () => {
    const date = new Date(2024, 0, 1, 14, 32, 5);
    const result = formatTime(date.getTime());
    expect(result).toBe('14:32:05');
  });

  it('pads single digit hours, minutes, and seconds', () => {
    const date = new Date(2024, 0, 1, 9, 5, 3);
    const result = formatTime(date.getTime());
    expect(result).toBe('09:05:03');
  });
});

describe('generateId', () => {
  it('generates a non-empty string', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  it('generates unique ids', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});
