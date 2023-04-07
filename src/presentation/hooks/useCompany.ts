import { useEffect, useState } from 'react';
import { GetCompany } from '../../core/application/getCompany';
import { Company } from '../../core/domain/entities/company.entity';
import { container } from '../../core/infra/config/config';

export function useCompany(companyId: string) {
	const [company, setCompany] = useState<Company | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchCompanies() {
			const getCompany = container.resolve<GetCompany>(GetCompany);
			getCompany
				.execute(companyId)
				.then((company) => setCompany(company));
			setLoading(false);
		}
		fetchCompanies();
	}, [companyId]);

	return { company, loading };
}
