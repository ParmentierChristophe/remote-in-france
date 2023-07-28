import { Flex } from '@chakra-ui/react';
import { useCompanies } from '../hooks/useCompanies';
import { Company } from '../../core/domain/entities/company.entity';
import { Card } from '../components/Card';
import {useNavigate} from "react-router-dom";

export function CompanyList() {
	const data = useCompanies();
	const navigate = useNavigate();

	return (
		<div data-testid="company-list">
			<Flex flexWrap="wrap" justifyContent="center">
				{data.companies.map((company: Company) => (
					<div key={company.id}>
						<Card
							key={company.id}
							name={company.name}
							description={company.description}
							onClick={() => navigate(`/company/${company.id}`)}
							isRemote={company.isRemote}
							isEnglish={company.isEnglish}
							companyId={company.id.toString()}
							isHybrid={company.isHybrid}
							isHiring={company.isHiring}
							data-testid="company-card"
						/>
					</div>
				))}
			</Flex>
		</div>
	);
}