import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

jest.mock('aos', () => ({ init: jest.fn() }));
jest.mock('react-ga4', () => ({
  initialize: jest.fn(),
  send: jest.fn(),
  event: jest.fn(),
}));
jest.mock('framer-motion', () => {
  const React = require('react');
  const motionProps = new Set([
    'animate',
    'initial',
    'transition',
    'whileHover',
    'whileInView',
  ]);

  const createMotionComponent = (tag) =>
    React.forwardRef(({ children, ...props }, ref) => {
      const cleanProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !motionProps.has(key))
      );

      return React.createElement(tag, { ...cleanProps, ref }, children);
    });

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag) => createMotionComponent(tag),
      }
    ),
  };
});

beforeAll(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;

  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  global.IntersectionObserver = IntersectionObserverMock;
  window.IntersectionObserver = IntersectionObserverMock;
});

test('renders portfolio owner name', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(/Emmanuel Agyare/i);

  act(() => {
    root.unmount();
  });
  document.body.removeChild(container);
});
