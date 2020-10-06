import React from 'react'

export const Search = () => {
    
    return (
        <section className="searchbars">
            <form type="search" className="searchbar">
                <input type="text" id="countrysearch" name="countrysearch" form="form1" placeholder="Search for a country.."></input>
                <button type="submit" className="searchbutton">
                    <img className="search" src="magnifying.png" alt="search"></img>
                </button>
            </form>

            <div className="countryselect">
                <form>
                    <select name="countrieselect" id="countrieselect">
                        <option value="region">Filter by Region</option>
                    </select>                    
                </form>
            </div> 
        </section>
    )
}