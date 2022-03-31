import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import MealDetails from './components/MealDetails/MealDetails'
import NotFound from './components/NotFound/NotFound'
import Restaurant from './components/Restaurant/Restaurant'

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='/restaurant/:id' element={<MealDetails></MealDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App
