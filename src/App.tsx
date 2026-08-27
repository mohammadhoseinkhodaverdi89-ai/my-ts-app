import Header from './Header/Header';
import Login from './Header/Login/Login'
import Featured from './Featured/Featured'
import { BrowserRouter,Routes,Route } from 'react-router';
function App() {
    return(
        <div className=' bg-black  min-h-screen'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={
            <>
            <Header />
                     <Featured />
            </>
        }/>

            <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App