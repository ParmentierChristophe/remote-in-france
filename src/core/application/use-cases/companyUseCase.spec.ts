import { CompanyUseCase } from './companyUseCase';
import { Company } from "../../domain/entities/company.entity";

class MockCompanyRepository {
    private companies: Company[] = [
        { id: 1, name: 'Company 1', description: 'Description 1', isRemote: true, isEnglish: true, isHybrid: false, isHiring: true },
        { id: 2, name: 'Company 2', description: 'Description 2', isRemote: false, isEnglish: false, isHybrid: true, isHiring: false },
    ];
    getAllCompanies(): Promise<Company[]> {
        return Promise.resolve(this.companies);
    }

    getCompany(id: string): Promise<Company | undefined> {
        const company: Company | undefined = this.companies.find(c => c.id.toString() === id);
        return Promise.resolve(company);
    }
}


class TestCompanyUseCase extends CompanyUseCase {
    constructor() {
        super();
        this.companyRepository = new MockCompanyRepository();
    }
}

describe('CompanyUseCase', () => {
    let companyUseCase: TestCompanyUseCase;

    beforeEach(() => {
        companyUseCase = new TestCompanyUseCase();
    });

    it('should return all companies', async () => {
        const companies = await companyUseCase.getAllCompanies();
        expect(companies).toHaveLength(2);
    });

    it('should return a company by ID', async () => {
        const company = await companyUseCase.getCompany('1');
        expect(company).toBeDefined();
        expect(company!.name).toBe('Company 1');
    });

    it('should return undefined for non-existing company by ID', async () => {
        const company = await companyUseCase.getCompany('3');
        expect(company).toBeUndefined();
    });

    it('should search companies by name', async () => {
        const searchResults = await companyUseCase.searchCompany('Company');
        expect(searchResults).toHaveLength(2);
        expect(searchResults[0].name).toBe('Company 1');
        expect(searchResults[1].name).toBe('Company 2');
    });

    it('should search companies by name (case insensitive)', async () => {
        const searchResults = await companyUseCase.searchCompany('company 1');
        expect(searchResults).toHaveLength(1);
        expect(searchResults[0].name).toBe('Company 1');
    });
});
