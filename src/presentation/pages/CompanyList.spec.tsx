import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CompanyList} from './CompanyList';

jest.mock('../hooks/useCompanies', () => ({
    useCompanies: () => ({
        companies: [
            {
                id: "1",
                name: 'Company 1',
                description: 'Description 1',
                isRemote: true,
                isEnglish: true,
                isHybrid: true,
                isHiring: true,
            },
        ],
        loading: false
    }),
}));

test('renders company cards', () => {
    render(
        <MemoryRouter>
            <CompanyList/>
        </MemoryRouter>
    );

    const companyCards = screen.getAllByTestId('company-card');

    expect(companyCards).toHaveLength(1);
    expect(screen.getByText('Company 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
});
