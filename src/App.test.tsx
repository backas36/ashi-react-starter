import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    // ARRANGE
    render(<App />);
    // ACT

    // ASSERT, EXPECT
    expect(screen.getByRole('heading',{
      level: 1,
    })).toHaveTextContent('Hello World');
  });
});