import { injectable } from 'inversify';
import 'reflect-metadata';
import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import data from '../data/data.json';

@injectable()
export class LocalCompanyRepository implements CompanyRepository {
	getCompany(id: string): Promise<Company | undefined> {
		return new Promise((resolve) => {
			const company = data.find((c) => c.id.toString() === id);
			resolve(company);
		});
	}

	async getAllCompanies(): Promise<Company[]> {
		return data;
	}
}
