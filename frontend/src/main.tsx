<<<<<<< HEAD

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
       <App />
    </ChakraProvider>
  </Provider>

=======
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </Provider>
>>>>>>> bae62114e604ca099c32862113c82e386c46857e
)
