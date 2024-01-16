import _ from "lodash";
interface Props {
  currentPage: number;
  pageSize: number;
  onPage: (pageNumber: number) => void;
  count: number;
  onNext: () => void;
  onPrevious: () => void;
}

function Pagination({
  currentPage,
  pageSize,
  onPage,
  count,
  onNext,
  onPrevious,
}: Props) {
  const pageCount = Math.ceil(count / pageSize);
  const pages = _.range(1, pageCount + 1);
  //   console.log("r : ", r);
  return (
    <nav aria-label="Page navigation " className="absolute bottom-[-50px]">
      <ul className="select-none inline-flex -space-x-px text-base  h-10">
        <li>
          <button
            disabled={currentPage > 1 ? false : true}
            onClick={onPrevious}
            className={
              (currentPage > 1 ? " " : " cursor-not-allowed ") +
              "flex items-center justify-center px-4 py-5 h-8 ms-0 leading-tight  border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-400 hover:text-gray-700 "
            }
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page * 10 + "pageCreator"}>
            <button
              onClick={() => onPage(page)}
              key={-(page * 7) + "pageInnerAnchor"}
              className={
                (currentPage === page ? "bg-blue-500" : "") +
                " flex items-center justify-center px-4 py-5 h-8 leading-tight  border border-gray-300 hover:bg-gray-400 hover:text-gray-700 "
              }
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage < pageCount ? false : true}
            onClick={onNext}
            className={
              (currentPage < pageCount ? " " : " cursor-not-allowed ") +
              "flex items-center justify-center px-4 py-5 h-8 leading-tight  border border-gray-300 rounded-e-lg hover:bg-gray-400 hover:text-gray-700 "
            }
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
