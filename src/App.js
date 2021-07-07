import './App.css'
import { Main } from '../src/pages/main/Main'
import { Product } from '../src/components/product/Product'
import { ProductsPage } from "../src/pages/productsPage/ProductsPage";
import { SideBar } from '../src/components/sideBar/SideBar';
import { Switch, Route } from 'react-router-dom'
import firebase from "firebase/app"

const App = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAIXFTUAhwBTqVLdJJVGPbrV5_4msFJOpM",
        authDomain: "vintage-webshop-angenent.firebaseapp.com",
        projectId: "vintage-webshop-angenent",
        storageBucket: "vintage-webshop-angenent.appspot.com",
        messagingSenderId: "660706404750",
        appId: "1:660706404750:web:a5923d1ae332d732e1dcdf",
        measurementId: "G-S4DHRW9N7D"
    }
    //   firebase.initializeApp(firebaseConfig)
    return (
        <>
            <SideBar />
            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route path='/product-page/:id'>
                    <ProductsPage />
                </Route>
                <Route path='/product/:id'>
                    <Product />
                </Route>
            </Switch>
        </>
    )
}

export default App
