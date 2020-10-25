import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('app');
});
