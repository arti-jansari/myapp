import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Registration from './Registration'
import  Dashboard from './Dashboard'

const App = () => {
  return(
<Routes>
  <Route  to='/' element={<Registration />}></Route>
  <Route  to='/dashboard' element={<Dashboard />}></Route>
</Routes>
  )
};

export default App;
