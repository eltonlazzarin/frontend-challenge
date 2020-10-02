import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Main from '../pages/Main';

describe('Form test', () => {
  it('should be able to validate if input is empty', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('input-repo')).toBeEmptyDOMElement();
  });
});

describe('Form test', () => {
  it('should be able to validate if input is receiving values', () => {
    const { getByTestId, getByPlaceholderText } = render(<Main />);

    fireEvent.change(getByPlaceholderText('Digite o nome do repositório'), {
      target: { value: 'facebook/react' },
    });

    fireEvent.submit(getByTestId('repo-form'));

    expect(getByTestId('input-repo')).toHaveValue();
  });
});
