import ReactPaginate from 'react-paginate';
import '../../scss/customPagination.scss';
import { ReactComponent as Next } from '../../assets/next.svg';
import { ReactComponent as Prev } from '../../assets/prev.svg';

const CustomPagination = (props: {
  pageCount: number;
  handlePagenation: (selectedItem: { selected: number }) => void;
}) => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        pageCount={props.pageCount}
        pageRangeDisplayed={4}
        onPageChange={props.handlePagenation}
        marginPagesDisplayed={1}
        previousLabel={<Prev />}
        nextLabel={<Next />}
      />
    </div>
  );
};

export default CustomPagination;
