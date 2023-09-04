import {Company} from "../../core/domain/entities/company.entity";
import {act, renderHook, waitFor} from "@testing-library/react";
import {useSearch} from "./useSearch";


const mockCompany: Company[] = [{
    id: 1,
    name: 'Company 1',
    description: 'Description 1',
    isRemote: true,
    isEnglish: false,
    isHybrid: true,
    isHiring: true,
}];

const mockCompanyUseCase = {
    searchCompany: async (query: string) => mockCompany.filter(company =>
        company.name.toLowerCase().includes(query.toLowerCase())),
};

jest.mock('inversify-react', () => ({
    useInjection: () => mockCompanyUseCase,
}));

test('useCompany returns company and loading state', async () => {
    const {result} = renderHook(() => useSearch());

    expect(result.current.query).toBe('');
    expect(result.current.searchResults).toStrictEqual([]);

    act(() => {
        result.current.setQuery('Company');
    });
    expect(result.current.query).toBe("Company");

    await waitFor(() => {
        expect(result.current.searchResults).toEqual(mockCompany);
    });
});