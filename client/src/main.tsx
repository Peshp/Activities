
import ReactDOM from 'react-dom/client'
import 'react-calendar/dist/Calendar.css'
import { StoreContext, store } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={store}>
        <RouterProvider router={router} />
    </StoreContext.Provider>
)
