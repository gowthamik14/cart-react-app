import React from 'react';
import { render } from '@testing-library/react';
import H1 from '@components/lib/typography/H1';

test('render H1', () => {
  
  const { container } = render(
    <H1/>
  );

  expect(container).toMatchSnapshot();
  
});
