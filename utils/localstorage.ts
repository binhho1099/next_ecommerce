export class LocalStorage {
  static Get<T>(key: string): T | null {
    if (typeof window !== 'undefined') {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue !== null) {
        const parsedValue: T = JSON.parse(serializedValue);
        return parsedValue;
      }
    }
    return null;
  }

  static Set<T>(key: string, value: T): void {
    if (typeof window !== 'undefined') {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    }
  }

  static Remove(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
