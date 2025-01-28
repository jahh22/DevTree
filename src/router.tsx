import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import Authlayout from './layouts/Authlayout'
import AppLayout from './layouts/AppLayout'
import LinkTreeView from './views/LinkTreeView'
import ProfileView from './views/ProfileView'
import HandleView from './views/HandleView'
import NotFoundView from './views/NotFoundView'
import HomeView from './views/HomeView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Authlayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                </Route>
                <Route path='/admin' element={<AppLayout />}>
                    <Route index={true} element={< LinkTreeView />} />
                    <Route path='profile' element={<ProfileView />} />
                </Route>
                <Route path='/:handle' element={<Authlayout />}>
                    <Route element={<HandleView />} index={true} />
                </Route>
                <Route path='/' element={<HomeView />} />


                <Route path='/404' element={<Authlayout />}>
                    <Route element={<NotFoundView />} index={true} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}