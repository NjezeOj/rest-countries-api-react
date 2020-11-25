import React, {Component} from 'react'
import CountriesList from '../features/CountriesList'

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            regionApi: "all",
            regions: [
               
                {
                    label: "Africa",
                    value: "africa",
                },
                {
                    label: "Americas",
                    value: "americas",
                },
                {
                    label: "Asia",
                    value: "asia",
                },
                {
                    label: "Europe",
                    value: "europe",
                },
                {
                    label: "Oceania",
                    value: "oceania",
                },
            ],
            countries: []
        }
        

    }

    
    onChangeToRegion = e => {
        this.setState({regionApi: e.target.value})
        console.log(e.target.value)
    }   

    
    search = () => {
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
                        <select 
                            name="countrieselect"
                            id="countrieselect"
                            //value={this.state.regionApi}
                            onChange={this.onChangeToRegion}>
                            
                            {/*{
                                write code to randomise region
                                this.state.regions.map(region=> {
                                    return <option key={region.value} value={region.value}>{region.label}</option>
                                })
                            }*/}
                            

                            <option key="africa" value="africa">Africa</option>
                            <option key="americas" value="americas">Americas</option>
                            <option key="asia" value="asia">Asia</option>
                            <option key="europe" value="Europe">Europe</option>
                            <option key="oceania" value="oceania">Oceania</option>
                            


                        </select>
                        
                        
                    </form>
                </div>
            </section>

        )
    }


    render(){
        return (
            <>
                {this.search()}
                <CountriesList region= {this.state.regionApi} />
            </>
            
                    
        )
    }
    
}