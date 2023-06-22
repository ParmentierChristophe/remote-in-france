import { useEffect, useState } from 'react';
import { Company } from '../../core/domain/entities/company.entity';
import { useInjection } from 'inversify-react';
import { CompanyRepository } from '../../core/domain/repositories/company.repository';

export function useCompanies() {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const companyRepository =
		useInjection<CompanyRepository>('CompanyRepository');

	useEffect(() => {
		async function fetchCompanies() {
			const companies = await companyRepository.getAllCompanies();
			setCompanies(companies);
			setLoading(false);
		}

		fetchCompanies();
	}, [companyRepository]);

	return { companies, loading };
}
