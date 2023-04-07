export interface CompanyProps {
	id: number;
	name: string;
	description: string;
	isRemote: boolean;
	isEnglish: boolean;
	isHybrid: boolean;
	isHiring: boolean;
}

export class Company {
	id: number;
	name: string;
	description: string;
	isRemote: boolean;
	isEnglish: boolean;
	isHybrid: boolean;
	isHiring: boolean;

	constructor({
		id,
		name,
		description,
		isRemote,
		isEnglish,
		isHybrid,
		isHiring,
	}: CompanyProps) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.isEnglish = isEnglish;
		this.isRemote = isRemote;
		this.isHybrid = isHybrid;
		this.isHiring = isHiring;
	}

	public static create(props: CompanyProps): Company {
		return new Company(props);
	}
}
