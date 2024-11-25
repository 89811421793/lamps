import React from 'react';
import Image from 'next/image';

type PaginatorProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number; // Общее количество страниц
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePreviousClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (endPage - startPage < 2) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 2);
      } else {
        startPage = Math.max(1, endPage - 2);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center mt-8 mb-12">
      <nav>
        <ul className="flex items-center gap-3"> 
          <li>
            <a 
              href="#" 
              onClick={handlePreviousClick}
              className={`w-6 h-6 border border-[#ECECEC] rounded-sm flex items-center justify-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-secondary'}`}
              style={{ padding: '7px 9px 6px 8px' }}
            >
              <Image src="/arrow_pag.svg" alt="Previous" width={11} height={7} className="transform rotate-180" />
            </a>
          </li>

          {visiblePages.map((page) => (
            <li key={page}>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }} 
                className={`w-6 h-6 border border-[#ECECEC] rounded-sm flex items-center justify-center hover:bg-secondary ${currentPage === page ? 'bg-secondary' : ''}`} 
                style={{ padding: '7px 9px 6px 8px' }}
              >
                {page}
              </a>
            </li>
          ))}

          <li>
            <a 
              href="#" 
              onClick={handleNextClick}
              className={`w-6 h-6 border border-[#ECECEC] rounded-sm flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : 'hover:bg-secondary'}`}
              style={{ padding: '7px 9px 6px 8px' }}
            >
              <Image src="/arrow_pag.svg" alt="Next" width={11} height={7} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;