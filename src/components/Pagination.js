import "../style/pagination.css";

/**
 * Pagination component to navigate between pages
 * @returns {JSX} React component
 */

function Pagination({ dataLength, pageSize, currentPage, setCurrentPage }) {
	//ceil to ensure we are reserving an extra page for remaining data
	const totalPages = dataLength === 0 ? Math.ceil(1 / pageSize) : Math.ceil(dataLength / pageSize);

	if (totalPages === 1) {
		setCurrentPage(1);
	}

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
