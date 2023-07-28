import {Company} from '../../domain/entities/company.entity';
import {LocalCompanyRepository} from "./localCompany.repository";

const testData: Company[] = [
    {
        id: 1,
        name: 'Company 1',
        description: 'Description 1',
        isRemote: true,
        isEnglish: true,
        isHybrid: true,
        isHiring: true
    }, {
        id: 2,
        name: 'Company 2',
        description: 'Description 2',
        isRemote: true,
        isEnglish: true,
        isHybrid: true,
        isHiring: true
    },
];

jest.mock('../data/data.json', () => testData);

describe('LocalCompanyRepository', () => {
    let repository: LocalCompanyRepository;

    beforeAll(() => {
        repository = new LocalCompanyRepository();
    });

    it('should get a company by id', async () => {
        const company = await repository.getCompany("2");
        expect(company).toBeDefined();
        expect(company?.name).toBe("Company 2");
    });

    it('should return undefined for non-existent company id', async () => {
        const companyId = '100';
        const company = await repository.getCompany(companyId);
        expect(company).toBeUndefined();
    });

    it('should get all companies', async () => {
        const companies = await repository.getAllCompanies();
        expect(companies).toEqual(testData);
    });
});