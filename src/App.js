
import './App.css';
import Navigation from './components/Navigation/Navigation';
import './nullstyle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import Login from './components/Login/Login';
import React, { useEffect, Suspense } from 'react';
import { getAuthUserThunk } from './redux/auth-reduce';
import { connect } from 'react-redux';
import Loader from './components/@Loader/Loader';

const Users = React.lazy(() => import('./components/Users/Users'));


const App = (props) => {

  useEffect(() => {
    props.getAuthUserThunk();
  }, [])

  if (!props.inizializate) {
    <div><img src="./assets/loader/loader.svga" alt="" /></div>
  }
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <div className='app-wrapper'>
          {/* <div className='content'> */}
          <HeaderContainer />
          <Navigation />
          <div className='main-content'>
            <Routes>
              <Route path='/Profile' element={<ProfileContainer />} />
              <Route path='Profile/:userId' element={<ProfileContainer />} />
              <Route path='/Dialogues/*' element={<DialoguesContainer />} />
              <Route path='/News' element={<News />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/Settings' element={<Settings />} />
              <Route path='/users' element={<Users />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
          {/* </div> */}
        </div>
      </BrowserRouter>
    </Suspense>
  )
}


const mapStateToProps = (state) => {
  return {
    inizializate: state.app.initialInizializated,
  }
}

export default connect(mapStateToProps, { getAuthUserThunk })(App);
