import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app without crashing', () => {
  render(<App />);
});
