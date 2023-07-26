import { useCompanies } from './useCompanies';
import { CompanyRepository } from '../../core/domain/repositories/company.repository';
import {renderHook, waitFor} from "@testing-library/react";

const mockCompanies = [
    {
        id: 1,
        name: 'Company 1',
        description: 'Description 1',
        isRemote: true,
        isEnglish: false,
        isHybrid: true,
        isHiring: true,
    },
    {
        id: 2,
        name: 'Company 2',
        description: 'Description 2',
        isRemote: false,
        isEnglish: true,
        isHybrid: false,
        isHiring: false,
    },
];

const mockCompanyRepository: CompanyRepository = {
    getAllCompanies: async () => mockCompanies,
    getCompany: async (id: string) => mockCompanies.find((c) => c.id.toString() === id),

};

jest.mock('inversify-react', () => ({
    useInjection: () => mockCompanyRepository,
}));

test('useCompanies returns companies and loading state', async () => {
    const { result } = renderHook(() => useCompanies());

    expect(result.current.companies).toEqual([]);
    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.companies).toEqual(mockCompanies);
});
