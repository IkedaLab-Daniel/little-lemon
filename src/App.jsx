import {Routes, Route, Link} from 'react-router-dom'
import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/BookingPage' element={<BookingPage/>} />
      </Routes>
    </>
  )
}

export default App
