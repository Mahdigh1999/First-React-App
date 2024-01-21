import { getImageUrl } from "../../utils/image-utils";
type Company = {
  companyImage: string;
  companyName: string;
  companyId: string;
  companyDiscribtion: string;
};

const CompanyCard = ({
  companyDiscribtion,
  companyId,
  companyImage,
  companyName,
}: Company) => {
  return (
    <div
      data-id={companyId}
      className="h-48 border-2 border-gray-500 flex rounded-lg my-2 overflow-hidden"
    >
      <div className="h-full w-80 flex justify-center border-r-2 border-gray-600">
        <img
          src={getImageUrl(companyImage)}
          alt="sorry"
          className="h-full w-full"
        />
      </div>
      <div className="h-full  px-2 py-1 flex-grow ">
        <h2 className="text-3xl font-bold">{companyName}</h2>
        <p className="text-xl w-full word-break"> {companyDiscribtion}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
