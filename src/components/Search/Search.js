import './Search.css'

const Search = ({handleSearch}) => {
  return(
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search Articles"
        onChange={event => handleSearch(event.target.value)}
      >
      </input>
    </div>
  )
}

export default Search;
