import React, { useEffect, useState } from 'react';
import cl from './UserPost.module.css';

// class UserPost extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status,
//     }

//     changeEditMode = () => {
//         this.setState({
//             editMode: !this.state.editMode,
//         })
//         if (this.state.editMode) {
//             this.props.setStatusThunk(this.state.status);
//             this.setState({
//                 status: this.state.status,
//             })
//         };
//     }

//     statusValue = (e) => {
//         this.setState({
//             status: e.currentTarget.value,
//         })
//     }

//     render() {
//         const props = this.props;
//         const state = this.state;
//         return (
//             <div className={cl.post}>
//                 {!state.editMode &&
//                     <div className={cl.mainPost}>
//                         <span> {props.status ? props.status : 'Status'}</span>
//                     </div>
//                 }
//                 {state.editMode &&
//                     <div >
//                         <input onChange={this.statusValue} className={cl.inputPost} type="text" value={state.status} />
//                     </div>
//                 }
//                 <button className={cl.buttonPost} onClick={this.changeEditMode}>Change post</button>
//             </div>
//         )
//     }
// }
const UserPost = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const changeEditMode = () => {
        setEditMode(!editMode);
        if (editMode) {
            props.setStatusThunk(status);
        };
    }

    const statusValue = (e) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    // if()
    return (
        <div className={cl.post}>
            {!editMode &&
                <div className={cl.mainPost}>
                    <span> {status ? status : 'Status'}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input onChange={statusValue} className={cl.inputPost} type="text" value={status} />
                </div>
            }
            {
                Object.keys(props.currentUserId).length > 0 ?
                <></> : <button className={cl.buttonPost} onClick={changeEditMode}>Change post</button>
            }
        </div>
    )
}

export default UserPost;