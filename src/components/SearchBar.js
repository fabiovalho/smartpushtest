import React, {useState} from 'react';
import Table from './Table';

const SearchBar = ({data}) => {

const [table, setTable] = useState([]);
const [input, setInput] = useState("");
let filteredData = data;

const handleChange = (e) => {
  e.preventDefault();
  setInput(e.target.value);
  setTable(filteredData);
};


if (input.length > 0) {
    filteredData = 
    Object.values(data).filter(row => {
        return row.city.match(input) ? row : '';
    });
}

return <div>
<input
    type="search"
    style={{marginBottom: "20px"}}
    placeholder="Search here"
    onChange={handleChange}
    value={input} />
    <Table data={table} />
</div>

};

export default SearchBar;