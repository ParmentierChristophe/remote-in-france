import {useInjection} from "inversify-react";
import {useEffect, useState} from "react";
import {ICompanyUseCase} from "../../core/application/use-cases/companyUseCase";
import {Company} from "../../core/domain/entities/company.entity";

export function useSearch() {
    const companyUseCase = useInjection<ICompanyUseCase>('ICompanyUseCase');
    const [searchResults, setSearchResults] = useState<Company[]>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query !== '') {
            companyUseCase.searchCompany(query).then((results) => {
                setSearchResults(results);
            });
        } else {
            setSearchResults([]);
        }
    }, [query, companyUseCase]);

    return {searchResults, query, setQuery}
}