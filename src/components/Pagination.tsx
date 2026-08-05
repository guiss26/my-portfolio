import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>;
    max: number;
}

export default function Pagination({ page, setPage, max }: PaginationProps) {
    const nextPage = () => {
        if (page < max) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-3">
            <button onClick={previousPage} disabled={page <=1} className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                <FiChevronLeft />
            </button>

            <p>
                <span className="font-bold">{page}</span> de <span className="font-bold">{max}</span>
            </p>

            <button onClick={nextPage} disabled={page >= max} className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                <FiChevronRight />
            </button>
        </div>
    )
}
