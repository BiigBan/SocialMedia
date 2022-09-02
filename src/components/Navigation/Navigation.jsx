import cl from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? cl.active : cl.link;


const Navigation = () => {
    return (
        <nav className={cl.nav}>
            <div>
                <NavLink exact to="/Profile" className={setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogues/" className={setActive}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/Users" className={setActive}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/News" className={setActive}>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" className={setActive}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/Settings" className={setActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;