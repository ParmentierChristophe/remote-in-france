import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbItemProps,
	BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IBreadcrumbItemPropsProps extends BreadcrumbItemProps {
	text?: string;
}

export function BreadcrumbComponent({ text }: IBreadcrumbItemPropsProps) {
	return (
		<Breadcrumb>
			<BreadcrumbItem>
				<BreadcrumbLink
					as={Link}
					to={'/remote-in-france'}
					fontWeight="bold"
				>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink>{text}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}
