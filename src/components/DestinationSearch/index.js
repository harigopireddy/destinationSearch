import './index.css'
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="ds-bg-container">
        <div className="ds-container">
          <h1>Destination Search</h1>
          <div className="ds-input-container">
            <input
              className="ds-input"
              onChange={this.searchUserInput}
              value={searchInput}
              type="search"
              placeholder="Search"
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="ds-icon"
              alt="search icon"
            />
          </div>
          <ul className="dis-container">
            {filterSearchResults.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
