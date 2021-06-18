import './App.css'
import {Main} from '../src/pages/main/Main'
import {Product} from '../src/components/product/Product'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <h1>Hallo Webshop!</h1>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/product/:id'>
                    <Product/>
                </Route>
            </Switch>


        </>
    )
}

export default App
