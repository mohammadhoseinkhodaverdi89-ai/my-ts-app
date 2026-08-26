import Header from './Header/Header';
import Login from './Header/Login/Login'
import { BrowserRouter,Routes,Route } from 'react-router';
function App() {
    return(
        <div className=' bg-black  min-h-screen'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={
            <>
            <Header />
            </>
        }/>

            <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App