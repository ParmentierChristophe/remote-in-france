import {Container} from 'inversify';
import {CompanyRepository} from '../../domain/repositories/company.repository';
import {LocalCompanyRepository} from '../repositories/localCompany.repository';
import {CompanyUseCase, ICompanyUseCase} from "../../application/use-cases/companyUseCase";

const container = new Container();

container
    .bind<CompanyRepository>('CompanyRepository')
    .to(LocalCompanyRepository).inSingletonScope();
container
    .bind<ICompanyUseCase>('ICompanyUseCase')
    .to(CompanyUseCase).inSingletonScope();

export {container};
