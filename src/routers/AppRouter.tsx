import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DemoBanner } from '../Components/DemoBanner/DemoBanner';
import { TableBanner } from '../Components/TableBanners/TableBanner';

export function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/tablebanner' element={<TableBanner></TableBanner>}></Route>
                <Route path='/' element={<DemoBanner></DemoBanner>}></Route>
            </Routes>
        </>
    )
}