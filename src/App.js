import React, { useEffect, useState } from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { CustomContext } from './contexts/CustomContext';
import Main from './Main';

const App = () => {
  const [fetchedData, setFetchedData] = useState([])
  let [gatheredData, setGatheredData] = useState(null)
  const [typedEmail, setTypedEmail] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => setFetchedData(data))
  }, [])

  const getInfo = (data) => {
    setGatheredData(gatheredData = { ...data })
    setTypedEmail(fetchedData[fetchedData.indexOf(fetchedData.find(obj => { return gatheredData.email === obj.email }))].name)
    console.log('This is the gathered data', gatheredData)
  }

  const handleLogout = () => {
    setGatheredData(gatheredData = "")
  }

  return (
    <>
      <CustomContext.Provider value={typedEmail}>
        <div className='App'>
          {gatheredData && fetchedData.find(obj => { return gatheredData.email === obj.email })
            ? <>
              <div className='LoggedState'>
                <p className='Welcome'>{fetchedData[fetchedData.indexOf(fetchedData.find(obj => { return gatheredData.email === obj.email }))].email}!</p>
                <button onClick={handleLogout} className="LogoutButton">Logout</button>
              </div>
              <Main passedData={fetchedData}/>
            </>
            : <LoginComponent addUserInfo={getInfo} />
          }
        </div>

      </CustomContext.Provider>
    </>
  );
};

export default App;