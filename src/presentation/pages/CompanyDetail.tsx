import { Box, Container, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { BreadcrumbComponent } from '../components/BreadcrumbComponent';
import { Label } from '../components/Label';
import { useCompany } from '../hooks/useCompany';

export function CompanyDetail() {
	const { companyId = '0' } = useParams<{ companyId: string }>();

	const data = useCompany(companyId);

	if (data.loading) {
		return <div>Loading...</div>;
	}

	return (
		<Container maxW="4xl">
			<BreadcrumbComponent text={data.company?.name} />

			<Box m="16">
				<h1>{data.company?.name}</h1>
				<p>{data.company?.description}</p>
				<Flex>
					{data.company?.isHiring ? (
						<Label nameLabel="Hiring" bgColor="#614CFF" />
					) : null}
					{data.company?.isEnglish ? (
						<Label nameLabel="English Friendly" bgColor="#9C81FF" />
					) : null}
					{data.company?.isRemote ? (
						<Label nameLabel="Remote" bgColor="#719FFF" />
					) : null}
					{data.company?.isHybrid ? (
						<Label nameLabel="Hybrid" bgColor="#eb7151" />
					) : null}
				</Flex>
			</Box>
		</Container>
	);
}
