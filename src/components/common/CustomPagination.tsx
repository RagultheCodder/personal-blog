import ReactPaginate from 'react-paginate';
import '../../scss/customPagination.scss';
import { Next, Prev } from '../../assets/svg';

const CustomPagination = (props: {
  pageCount: number;
  handlePagination: (selectedItem: { selected: number }) => void;
}) => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        pageCount={props.pageCount}
        pageRangeDisplayed={4}
        onPageChange={props.handlePagination}
        marginPagesDisplayed={1}
        previousLabel={<Prev />}
        nextLabel={<Next />}
      />
    </div>
  );
};

export default CustomPagination;
