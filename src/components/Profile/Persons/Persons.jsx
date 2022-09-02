import Person from './Person/Person';
import cl from './Persons.module.css';

const Persons = (props) => {
    return (
        <div className={cl.persons}>
            <Person profile={props.profile}/>
        </div>
    )
}

export default Persons;