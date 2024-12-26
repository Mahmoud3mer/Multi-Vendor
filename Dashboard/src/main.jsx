import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/Reducers/store.jsx'
import { Toaster } from 'react-hot-toast'

const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster toastOptions={{
          position: 'top-right',
          style: {
            backgroundColor: '#283046',
            color: 'white'
          }
        }}/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
