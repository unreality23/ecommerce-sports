import React from "react";
import Button from "../../atoms/Button/Button";

const Pagination = ({
  currentPage,
  totalPages,
  maxPaginationButtonsToShow,
  handlePrevious,
  handleNext,
  handlePageChange,
}) => {
  const getPageNumbers = () => {
    if (totalPages <= maxPaginationButtonsToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pagesToShow = [];
    const ellipsis = "...";

    if (currentPage <= maxPaginationButtonsToShow - 2) {
      // When current page is near the start
      for (let i = 1; i <= maxPaginationButtonsToShow; i++) {
        pagesToShow.push(i);
      }
      pagesToShow.push(ellipsis);
      pagesToShow.push(totalPages);
    } else if (currentPage >= totalPages - (maxPaginationButtonsToShow - 2)) {
      // When current page is near the end
      pagesToShow.push(1);
      pagesToShow.push(ellipsis);
      for (
        let i = totalPages - (maxPaginationButtonsToShow - 1);
        i <= totalPages;
        i++
      ) {
        pagesToShow.push(i);
      }
    } else {
      // When current page is in the middle
      pagesToShow.push(1);
      pagesToShow.push(ellipsis);
      for (
        let i = currentPage - Math.floor(maxPaginationButtonsToShow - 3);
        i <= currentPage + Math.floor((maxPaginationButtonsToShow - 4) / 2);
        i++
      ) {
        pagesToShow.push(i);
      }
      pagesToShow.push(ellipsis);
      pagesToShow.push(totalPages);
    }

    return pagesToShow;
  };

  return (
    <div className="mt-6 flex items-center justify-center mb-20">
      <Button
        buttonClassName={`mx-2 px-4 py-2 ${
          currentPage === 1 ? "opacity-70" : ""
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        text={"<"}
      />

      {getPageNumbers().map((page, index) => (
        <Button
          key={index}
          buttonClassName={`mx-2 px-4 py-2  hover:opacity-100 ${
            currentPage === page ? " font-bold" : "font-normal opacity-70"
          }`}
          onClick={() => handlePageChange(page)}
          text={page}
        />
      ))}

      <Button
        buttonClassName={`mx-2 px-4 py-2 ${
          currentPage === totalPages ? "opacity-70" : ""
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        text={">"}
      />
    </div>
  );
};

export default Pagination;
