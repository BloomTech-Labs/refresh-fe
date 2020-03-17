import React from 'react';
import { render } from '@testing-library/react';
import UserList from './user-list';


test('All users <h2/> is found', () => {
    const { getByText } = render(<UserList />);

    getByText('ALL USERS')
})