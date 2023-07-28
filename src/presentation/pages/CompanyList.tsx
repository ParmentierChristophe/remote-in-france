import { Flex } from '@chakra-ui/react';
import { useCompanies } from '../hooks/useCompanies';
import { Company } from '../../core/domain/entities/company.entity';
import { Card } from '../components/Card';

export function CompanyList() {
	const data = useCompanies();

	return (
		<div>
			<Flex flexWrap="wrap" justifyContent="center">
				{data.companies.map((company: Company) => (
					<div>
						<Card
							key={company.id}
							name={company.name}
							description={company.description}
							isRemote={company.isRemote}
							isEnglish={company.isEnglish}
							companyId={company.id.toString()}
							isHybrid={company.isHybrid}
							isHiring={company.isHiring}
						/>
					</div>
				))}
			</Flex>
		</div>
	);
}
