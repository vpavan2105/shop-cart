
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
      <AuthContextProvider>
       <App />
       </AuthContextProvider>
       </BrowserRouter>
    </ChakraProvider>
  </Provider>
)
