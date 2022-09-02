import { NavLink } from 'react-router-dom';
import cl from './Header.module.css'
const Header = (props) => {

    let login;
    if (props.isAuthUser) {
        login = <div className={cl.prof}>{props.login} <br></br> <button onClick={props.logout} className={cl.button} style={{margin: '10px 0 0 0'}}>Logout</button></div>
    } else {
        login = <NavLink className={cl.login} to={'/login'}>Login</NavLink>
    }

    return (
        <header className={cl.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'></img>
            <div className={cl.login}>
            {login}
            </div>
        </header>
    );
}

export default Header;