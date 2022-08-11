import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search'; 
import CloseIcon from '@mui/icons-material/Close';
function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    let v = ''
    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {

            return value.identifiant.includes(searchWord);
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {

            setFilteredData(newFilter);
        }
    };
   
    const picked = () => {
        console.log(v)
        setFilteredData([]);
    };
    const clearInput = () => {
        
        setFilteredData([]);
        setWordEntered(v);
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        if (value.identifiant===wordEntered){
                            v = value
                        } 
                        return (
                            <a className="dataItem" onClick={picked} target="_blank">
                               
                                <p>{value.identifiant}</p>
                            </a>
                        );
                        
                       
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;