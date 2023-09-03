import {useEffect, useState} from 'react';
import {Company} from '../../core/domain/entities/company.entity';
import {useInjection} from 'inversify-react';
import {ICompanyUseCase} from "../../core/application/use-cases/companyUseCase";

export function useCompany(companyId: string) {
    const [company, setCompany] = useState<Company | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const companyUseCase =
        useInjection<ICompanyUseCase>('ICompanyUseCase');

    useEffect(() => {
        async function fetchCompany() {
            const company = await companyUseCase.getCompany(companyId);
            setCompany(company);
            setLoading(false);
        }

        fetchCompany();
    }, [companyUseCase, companyId]);

    return {company, loading};
}
