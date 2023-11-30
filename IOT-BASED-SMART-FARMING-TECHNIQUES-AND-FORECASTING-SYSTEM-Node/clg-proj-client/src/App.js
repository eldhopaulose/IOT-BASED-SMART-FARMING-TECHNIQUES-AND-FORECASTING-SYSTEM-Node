import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Soil from './pages/Soil'
import Menu from './components/Menu';
import Ph from './pages/ph';
import WeatherPrediction from './pages/WeatherPrediction'
import StoredData from './pages/StoredData'
import N from './pages/N';
import MalaN from './pages/MalaN';
import MalapH from './pages/MalapH';
import MalaSoil from './pages/MalaSoil';
import P from './pages/P';
import MalaP from './pages/MalaP';
import K from './pages/K';
import MalaK from './pages/MalaK';

function App() {
  return (
    <div>
       <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/soil' element={<Soil/>}></Route>
      <Route path='/MalaSoil' element={<MalaSoil/>}></Route>
      <Route path='/Ph' element={<Ph/>}></Route>
      <Route path='/MalapH' element={<MalapH/>}></Route>
      <Route path='/N' element={<N/>}></Route>
      <Route path='/MalaN' element={<MalaN/>}></Route>
      <Route path='/P' element={<P/>}></Route>
      <Route path='/MalaP' element={<MalaP/>}></Route>
      <Route path='/K' element={<K/>}></Route>
      <Route path='/MalaK' element={<MalaK/>}></Route>
      <Route path='/StoredData' element={<StoredData/>}></Route>
      <Route path='/WeatherPrediction' element={<WeatherPrediction/>}></Route>
    </Routes>
    </div>
  )
}

export default App
