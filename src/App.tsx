import Header from './Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router';
function App() {
    return(
        <div className=' bg-black  min-h-screen'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header />}/>

            <Route />
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App