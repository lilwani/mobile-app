import { TextDecoder, TextEncoder } from 'util';
import '@testing-library/jest-dom';
Object.assign(global, { TextDecoder, TextEncoder });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
