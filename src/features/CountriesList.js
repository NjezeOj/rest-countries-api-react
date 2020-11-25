import React, {Component} from 'react'
import axios from 'axios'

export default class CountriesList extends Component {
    constructor(props){
        super(props);
        this.state = {            
            countries: [],          
        };


    }
    
    async fetchdata(region) {
        let data = await axios
            .get(`https://restcountries.eu/rest/v2/${region}`)
            .then( res => res)
            .catch( err => console.log(err))
        this.setState({ countries: data.data })
    }

    async fetchdata1(region) {
        /*const endpoint = `https://restcountries.eu/rest/v2/${region}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                //console.log(...data);
                //console.log(data[0].name);
                //country = [...data]
                this.setState({ countries: [...data] })
            });*/

        let data = await axios
            .get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(res => res)
            .catch(err => console.log(err))
        this.setState({ countries: data.data })
    }

    
    componentDidMount() {
       this.fetchdata(this.props.region);
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.region !== prevProps.region){
            this.fetchdata1(this.props.region);
        }
            
    }
    
    cards = () => {
        return this.state.countries.map((country, index) => {
            return(
                <div className="card" key={index}>
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

/*export const CountriesList = props => {
    
    return props.countries.map(country => {
        return (                      
            <section className="cards">
                <div className="card">
                    <img src={country.flag} alt="countryImage" />
                    <h2>{country.name}</h2>
                    <p><b>Population:</b>{country.population}</p>
                    <p><b>Region:</b>{country.region}</p>
                    <p><b>Capital:</b> {country.capital}</p>
                </div>
            </section>
        )
    })
    
}*/

