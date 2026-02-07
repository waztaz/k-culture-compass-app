import type { FirestorePermissionError } from './errors';

type Listener = (error: FirestorePermissionError) => void;
type Events = {
  'permission-error': Listener[];
};

class ErrorEmitter {
  private listeners: Events = {
    'permission-error': [],
  };

  emit(event: keyof Events, error: FirestorePermissionError) {
    this.listeners[event].forEach((listener) => listener(error));
  }

  on(event: keyof Events, listener: Listener) {
    this.listeners[event].push(listener);
  }

  off(event: keyof Events, listener: Listener) {
    const index = this.listeners[event].indexOf(listener);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  }
}

export const errorEmitter = new ErrorEmitter();
