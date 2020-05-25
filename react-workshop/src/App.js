import React from 'react';
import { AxiosBillionaires } from './api';

export default class App extends React.Component {
  state = {
    billionaires: [],
  }
  
  async componentDidMount() {
    this.setState({ billionaires :  await AxiosBillionaires(),})
    console.log(this.state.billionaires);
    
  }

  render() {
    return (
      <>
        <h1>Top 20 of Billionaires of Thailand.</h1>
        <ul className="list-group">
          {
            this.state.billionaires.map(person => (
              <React.Fragment key={person.id}>
                <li className="list-group-item">👨🏼‍✈ {person.name}</li>{' '}
                <ul >  
                  <li className="list-group-item">💰มูลค่าทรัพย์สินทั้งหมด{' '}
                  {`${person.totalAsset} ${person.assetUnit}`}</li>{' '}
                  <li className="list-group-item">🏛 ธุรกิจ {person.businessType}</li>{' '}
                </ul>
              </React.Fragment >
            ))
          }
        </ul>
        
      </>
    )
  }
}
