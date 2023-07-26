import {useCompany} from './useCompany';
import {CompanyRepository} from '../../core/domain/repositories/company.repository';
import {Company} from "../../core/domain/entities/company.entity";
import {renderHook, waitFor} from "@testing-library/react";

const companyId = 1;

const mockCompany: Company = {
    id: companyId,
    name: 'Company 1',
    description: 'Description 1',
    isRemote: true,
    isEnglish: false,
    isHybrid: true,
    isHiring: true,
};

const mockCompanyRepository: CompanyRepository = {
    getAllCompanies: async () => [mockCompany],
    getCompany: async (id: string) => (id === companyId.toString() ? mockCompany : undefined),
};

jest.mock('inversify-react', () => ({
    useInjection: () => mockCompanyRepository,
}));
test('useCompany returns company and loading state', async () => {

    const {result} = renderHook(() => useCompany(companyId.toString()));

    expect(result.current.company).toBeUndefined();
    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.company).toEqual(mockCompany);
});
