import {useEffect, useState} from 'react';
import {Company} from '../../core/domain/entities/company.entity';
import {useInjection} from 'inversify-react';
import {ICompanyUseCase} from "../../core/application/use-cases/companyUseCase";

export function useCompanies() {
    const companyUseCase =
        useInjection<ICompanyUseCase>('ICompanyUseCase');
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchCompanies() {
            const companies = await companyUseCase.getAllCompanies();
            setCompanies(companies);
            setLoading(false);
        }

        fetchCompanies();
    }, [companyUseCase]);

    return {companies, loading};
}
