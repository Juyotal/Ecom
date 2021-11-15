import { Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
        <Router>
        <div>
            <Header />
        
             
                <main className="py-4">
                    <Container>
                        <Route path='/' component={HomeScreen} exact/>   
                        <Route path='/product/:id' component={ProductScreen} /> 
                    </Container>
                </main>
            <Footer/>

        </div>
        </Router>
  );
}

export default App;
