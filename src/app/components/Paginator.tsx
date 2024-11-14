import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PaginatorProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number; // Общее количество страниц
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Определяем диапазон страниц для отображения
  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    // Убедимся, что показываем только три страницы
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
          {/* Левая стрелка */}
          <li>
            <button 
              onClick={handlePreviousClick}
              disabled={currentPage === 1} // Деактивируем кнопку, если текущая страница минимальна
              className={`w-6 h-6 border border-[#ECECEC] rounded-md flex items-center justify-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-secondary'}`}
              style={{ padding: '7px 9px 6px 8px' }}
            >
              <Image src="/arrow_pag.svg" alt="Previous" width={11} height={7} className="transform rotate-180" />
            </button>
          </li>

          {/* Номера страниц */}
          {visiblePages.map((page) => (
            <li key={page}>
              <button 
                onClick={() => setCurrentPage(page)} 
                className={`w-6 h-6 border border-[#ECECEC] rounded-md flex items-center justify-center hover:bg-secondary ${currentPage === page ? 'bg-secondary' : ''}`} 
                style={{ padding: '7px 9px 6px 8px' }}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Правая стрелка */}
          <li>
            <button 
              onClick={handleNextClick}
              disabled={currentPage === totalPages} // Деактивируем кнопку, если текущая страница максимальна
              className={`w-6 h-6 border border-[#ECECEC] rounded-md flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : 'hover:bg-secondary'}`}
              style={{ padding: '7px 9px 6px 8px' }}
            >
              <Image src="/arrow_pag.svg" alt="Next" width={11} height={7} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;
