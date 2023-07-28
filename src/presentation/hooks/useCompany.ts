import { useEffect, useState } from 'react';
import { Company } from '../../core/domain/entities/company.entity';
import { useInjection } from 'inversify-react';
import { CompanyRepository } from '../../core/domain/repositories/company.repository';

export function useCompany(companyId: string) {
	const [company, setCompany] = useState<Company | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(true);

	const companyRepository =
		useInjection<CompanyRepository>('CompanyRepository');

	useEffect(() => {
		async function fetchCompanies() {
			const company = await companyRepository.getCompany(companyId);
			setCompany(company);
			setLoading(false);
		}
		fetchCompanies();
	}, [companyRepository, companyId]);

	return { company, loading };
}
