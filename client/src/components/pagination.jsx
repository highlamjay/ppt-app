import React from 'react';

const Pagination = () => {
    return (
        <div className="flex justify-center mt-10">
            <ul className="flex items-center space-x-4">
                <li>
                    <button className="px-4 py-2 bg-white text-[#187ac5] font-semibold rounded-full border hover:bg-[#187ac5] hover:text-white transition-all duration-300">
                        Prev
                    </button>
                </li>
                <li>
                    <button className="px-4 py-2 bg-white text-[#187ac5] font-semibold rounded-full border hover:bg-[#187ac5] hover:text-white transition-all duration-300">
                        1
                    </button>
                </li>
                <li>
                    <button className="px-4 py-2 bg-white text-[#187ac5] font-semibold rounded-full border hover:bg-[#187ac5] hover:text-white transition-all duration-300">
                        2
                    </button>
                </li>
                <li>
                    <button className="px-4 py-2 bg-white text-[#187ac5] font-semibold rounded-full border hover:bg-[#187ac5] hover:text-white transition-all duration-300">
                        3
                    </button>
                </li>
                <li>
                    <button className="px-4 py-2 bg-white text-[#187ac5] font-semibold rounded-full border hover:bg-[#187ac5] hover:text-white transition-all duration-300">
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
