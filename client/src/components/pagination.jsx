import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <ul className="flex items-center space-x-4">
                <li>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                            currentPage === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-white text-[#187ac5] hover:bg-[#187ac5] hover:text-white"
                        }`}
                    >
                        Prev
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                        <button
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-full border font-semibold transition-all duration-300 ${
                                currentPage === index + 1
                                    ? "bg-[#187ac5] text-white"
                                    : "bg-white text-[#187ac5] hover:bg-[#187ac5] hover:text-white"
                            }`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                            currentPage === totalPages
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-white text-[#187ac5] hover:bg-[#187ac5] hover:text-white"
                        }`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
