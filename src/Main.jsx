import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import PostsPage from './components/PostsPage';
import SinglePage from './components/SinglePage';

const Main = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='posts' element={<PostsPage passedUserData={props.passedData}/>} />
                    <Route path='posts/:id' element={<SinglePage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default Main;