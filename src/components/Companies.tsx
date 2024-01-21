import { useEffect, useState } from "react";
import { getCompanies } from "../services/fakeCompaniesServices";
import Pagination from "./Pagination";
import { paginateCompanies } from "../utils/paginate";
import CompanyCard from "./common/CompanyCard";
import { usePage, useSearch } from "../App";
type Companies = {
  companyImage: string;
  companyId: string;
  companyName: string;
  discribtion: string;
}[];
const Companies = () => {
  const [companies, setCompanies] = useState<Companies>(getCompanies());
  const {currentPage, handlePage} = usePage();
  const { seacrhValue } = useSearch();
  useEffect(() => {
    setCompanies(getCompanies());
    return () => handlePage(1);
  },[]);

  const pageSize = 5;
  const searchResult = companies.filter((company) =>
    company.companyName
      .toLocaleLowerCase()
      .trim()
      .includes(seacrhValue.toLocaleLowerCase().trim())
  );

  const renderCompanies = paginateCompanies(
    searchResult,
    currentPage,
    pageSize
  );
  return (
    <div className="relative p-2 mb-48">
      {renderCompanies.map((company) => (
        <CompanyCard
          key={company.companyId}
          companyDiscribtion={company.discribtion}
          companyId={company.companyId}
          companyImage={company.companyImage}
          companyName={company.companyName}
        />
      ))}
      <Pagination
        count={searchResult.length}
        currentPage={currentPage}
        onNext={() => handlePage((currentPage + 1))}
        onPrevious={() => handlePage((currentPage - 1))}
        onPage={(page) => handlePage(page)}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Companies;
