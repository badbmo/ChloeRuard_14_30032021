import "../style/pagination.css";

/**
 * Pagination component to navigate between pages
 * @returns {JSX} React component
 */

function Pagination({ dataLength, pageSize, currentPage, setCurrentPage }) {
	
	//ceil to ensure we are reserving an extra page for remaining data
	const totalPages = Math.ceil(dataLength / pageSize);

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
		<div>
			{renderButtonPrevious()}
			{currentPage}/{totalPages}
			{renderButtonNext()}
		</div>
	);
}

export default Pagination;
