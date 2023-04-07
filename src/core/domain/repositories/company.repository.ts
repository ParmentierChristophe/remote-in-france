import { Company } from '../entities/company.entity';

export interface CompanyRepository {
	getAllCompanies(): Promise<Company[]>;
	getCompany(id: string): Promise<Company | undefined>;
}
