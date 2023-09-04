import {inject, injectable} from "inversify";
import {Company} from "../../domain/entities/company.entity";
import type {CompanyRepository} from "../../domain/repositories/company.repository";

export interface ICompanyUseCase {
    getAllCompanies(): Promise<Company[]>;

    getCompany(id: string): Promise<Company | undefined>;

    searchCompany(query: string): Promise<Company[]>;
}

@injectable()
export class CompanyUseCase implements ICompanyUseCase {
    @inject("CompanyRepository")
    protected companyRepository!: CompanyRepository;

    getAllCompanies(): Promise<Company[]> {
        return this.companyRepository.getAllCompanies();
    }

    getCompany(id: string): Promise<Company | undefined> {
        return this.companyRepository.getCompany(id);
    }

    async searchCompany(query: string): Promise<Company[]> {
        const companies = await this.companyRepository.getAllCompanies();
        const filteredCompanies = companies.filter(company =>
            company.name.toLowerCase().includes(query.toLowerCase())
        );
        return filteredCompanies;
    }
}
