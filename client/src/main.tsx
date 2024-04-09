
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreContext, store } from './app/stores/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>
)
