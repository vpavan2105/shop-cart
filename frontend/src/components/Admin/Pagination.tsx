import React from "react";
import { Button } from "@chakra-ui/react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: '0 5px' }}>
            <Button
              variant={number === currentPage ? 'solid' : 'outline'}
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
