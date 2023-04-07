import 'reflect-metadata';
import { injectable } from 'inversify';
import type { CompanyRepository } from '../domain/repositories/company.repository';
import { container } from '../infra/config/config';
import { Company } from '../domain/entities/company.entity';

@injectable()
export class GetCompanies {
	private companyRepository: CompanyRepository;
	constructor() {
		this.companyRepository =
			container.get<CompanyRepository>('CompanyRepository');
	}

	async execute(): Promise<Company[]> {
		return await this.companyRepository.getAllCompanies();
	}
}
