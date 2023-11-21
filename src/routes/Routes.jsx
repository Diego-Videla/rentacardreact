import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route,
  } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Header } from '../pages/header/header';
import { ProductWidget } from '../pages/products/product_widget/product_widget';
import { Contact } from '../pages/Contact/contact';
  
 export const Routes = () => {
    return (
      <BrowserRouter>  
          <Layout>
            <ReactDomRoutes>
              <Route path='/' element={<Header/>} />
              <Route path='products' element={<ProductWidget />}/> 
              <Route path='contact' element={< Contact />}/> 
              <Route path='*' element={<p>Error</p>} />
            </ReactDomRoutes>
          </Layout>
     </BrowserRouter>
    );
  };
  