import '../../scss/customSelect.scss';

const CustomSelect = (props: {
  pagesize: number;
  selectPage: (arg: number) => void;
}) => {
  return (
    <div className="d-flex align-items-center custom-select-wrapper">
      <p className="my-0">Show</p>
      <select
        value={props.pagesize}
        onChange={(e) => props.selectPage(Number(e.target.value))}
        className="ms-2 bg-white"
      >
        {[5, 10, 15].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
