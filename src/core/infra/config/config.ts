import { Container } from 'inversify';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { LocalCompanyRepository } from '../repositories/localCompany.repository';

const container = new Container();

container
	.bind<CompanyRepository>('CompanyRepository')
	.to(LocalCompanyRepository);

export { container };
