import { useEffect, useState } from 'react';
import { GetCompanies } from '../../core/application/getCompanies';
import { Company } from '../../core/domain/entities/company.entity';
import { container } from '../../core/infra/config/config';

export function useCompanies() {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchCompanies() {
			const getCompanies = container.resolve<GetCompanies>(GetCompanies);
			getCompanies.execute().then((companies) => setCompanies(companies));
			setLoading(false);
		}

		fetchCompanies();
	}, []);

	return { companies, loading };
}
