import './App.css';

import Menubar from './Components/Menubar';
import data from './data';
import Card from './Components/Card';
import Detail from './Routes/Detail';
import Cart from './Routes/Cart'

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  
  return (
    <div className='App'>
      <Menubar></Menubar>

      <Routes>
        <Route path='/detail/:id' element={
          <>
          <ToastContainer></ToastContainer>
          <Detail shoes={shoes}></Detail>
          </>
        } />

        <Route path="/" element={
          <>
          <div className='main-bg'></div>
  
          <div className='container'>
            <div className='row'>
              {
                shoes.map((d, i) => {
                  return (
                    <Card key={i} order={i} title={ shoes[i].title } price={ shoes[i].price } img={ "https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg" }></Card>
                  )
                })
              }
            </div>
          </div>
    
          <button onClick={ () => {
            axios.get('https://codingapple1.github.io/shop/data2.json') 
            .then( (result) => {
              let copy = [...shoes, ...result.data]
              setShoes(copy)
            } )
            .catch( () => {
              console.log("서버와의 연결이 실패했습니다.")
            } )
          } }>상품 더보기</button>
          </>
        } />

        <Route path='/cart' element={
          <Cart></Cart>
        } />
        
      </Routes>
    </div>
  );
}

export default App;
