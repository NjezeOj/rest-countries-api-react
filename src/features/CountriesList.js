import React, {Component} from 'react'


export default class CountriesList extends Component {
    constructor(props){
        super(props);
        this.state = {            
            countries: []            
        };


    }
    
    /*const endpoint = `https://restcountries.eu/rest/v2/all`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            //console.log(...data);
            //console.log(data[0].name);
            //country = [...data]
        });*/

    componentDidMount(){
        const endpoint = `https://restcountries.eu/rest/v2/all`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                //console.log(...data);
                //console.log(data[0].name);
                //country = [...data]
                this.setState({countries: [...data]})
            });            
    }

    cards = () => {
        return this.state.countries.map(country => {
            return(
                <div className="card">
                    <img src={country.flag} alt="countryImage" />
                    <h2>{country.name}</h2>
                    <p><b>Population:</b>{country.population}</p>
                    <p><b>Region:</b>{country.region}</p>
                    <p><b>Capital:</b> {country.capital}</p>
                </div>
            )
        })
    }
    

    render(){
        return (
            <section className="cards">
                {this.cards()}                
            </section>            
        )
    }
}