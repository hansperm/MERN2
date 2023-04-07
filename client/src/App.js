import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import { CreateForm } from './components/CreateForm'
import { Nomatched } from './components/Nomatched'
import {Login} from './components/Login'
import { OrderSummary } from './components/OrderSummary'
import { UserDetails } from './components/UserDetails'
//mport {Test} from './components/Test'
function App() {
  return (
    <div>
    <Navbar />
    
    <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route path='register' element={<CreateForm />}/>
      <Route path='/login/register-form' element={<CreateForm />}/>
      <Route path='order-summary' element={<OrderSummary />}/>
      <Route path='userdetails' element={<UserDetails />}/>
      <Route path='*' element={<Nomatched />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App;
