import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route,
  } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Header } from '../pages/header/header';
import { ProductWidget } from '../pages/products/product_widget/product_widget';
import { Contact } from '../pages/Contact/contact';
import { CarritoWidget } from '../pages/Carrito/carrito_widget/carrito_widget';



  
 export const Routes = () => {
    return (
      <BrowserRouter>  
          <Layout>
            
            <ReactDomRoutes>
              <Route path='/' element={<Header/>} />
              <Route path='products' element={<ProductWidget />}/> 
              <Route path='contact' element={< Contact />}/>
              
              <Route path='*' element={<p>Error</p>} />
              <Route path='carrito' element={<CarritoWidget/>}/> 
            </ReactDomRoutes>
           
          </Layout>
     </BrowserRouter>
    );
  };
  