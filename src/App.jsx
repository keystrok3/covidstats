import { useEffect, useState } from 'react';
import './App.css'
import { fetch_data } from './fetch_data_hook';

const App = () => {

  const [ data , setData ] = useState({})
  
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const result = await fetch_data('Kenya')
      setData(result[0]);
      setLoading(true)
    }

    fetchdata()
  }, [])


  useEffect(() => {
    if(!data.cases) return
    console.log(Object.keys(data.cases))
  }, [ data ])
  return (
    <div className="App">
      <header>
        <h1>Country Covid Trend</h1>
      </header>

      <main>
          <h3>{data.country}</h3>
          
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>New Cases</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {
                !loading ? <h4>Loading...</h4> :
                Object.keys(data.cases).map((day, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{ day }</td>
                      <td>{ data.cases[day].new }</td>
                      <td>{ data.cases[day].total }</td>
                      </tr>
                   
                  )
                })
              }
            </tbody>
          </table>
      </main>
    </div>
  )
};

export default App;