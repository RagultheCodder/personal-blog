import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import '../../scss/search.scss';

const Search = (props: {
  filtering: string;
  onChange: (arg: string) => void;
}) => {
  return (
    <div
      className="p-2 rounded-3 border border-secondary-subtle 
    search-wrapper bg-white d-flex align-items-center justify-content-between"
    >
      <input
        type="text"
        value={props.filtering}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="search"
        className="border-0 bg-transparent"
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
