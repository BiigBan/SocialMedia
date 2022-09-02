import UsersContainer from '../Users/UsersContainer';
import cl from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={cl.dialogs}>
            <UsersContainer />
        </div>
    )
}

export default Dialogs;