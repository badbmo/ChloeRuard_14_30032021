import "../style/pagination.css";

/**
 * Pagination component to navigate between pages
 * @param {number} dataLength length of data used
 * @param {number} pageSize number of items per page
 * @param {number} currentPage number of the current page
 * @param {function} setCurrentPage function to change current page (next one or previous one)
 * @returns {JSX} React component
 */

function Pagination({ dataLength, pageSize, currentPage, setCurrentPage }) {
	//ceil to ensure we are reserving an extra page for remaining data
	const totalPages = dataLength === 0 ? Math.ceil(1 / pageSize) : Math.ceil(dataLength / pageSize);

	const onPreviousPage = () => {
		setCurrentPage(currentPage - 1);
	};
	const onNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const renderButtonPrevious = () => {
		return (
			<button
				className={`pagination__button ${currentPage === 1 && "pagination__button-disabled"}`}
				onClick={onPreviousPage}
			>
				Previous
			</button>
		);
	};

	const renderButtonNext = () => {
		return (
			<button
				className={`pagination__button ${currentPage === totalPages && "pagination__button-disabled"}`}
				onClick={onNextPage}
			>
				Next
			</button>
		);
	};

	return (
		<div className="pagination">
			{renderButtonPrevious()}
			<div className="pagination__pages">
				{currentPage}/{totalPages}
			</div>
			{renderButtonNext()}
		</div>
	);
}

export default Pagination;
