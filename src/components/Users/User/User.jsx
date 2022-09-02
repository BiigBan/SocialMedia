import Item from './Item/Item';
import cl from './User.module.css';
import React, { useState } from 'react';
import { compose } from 'redux';
import { withPaginatorInfoUser } from '../../../@hoc/withPaginatorInfoUsers';

/*
//1
const User = (props) => {
    if(props.users.length === 0 ){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
    })
        // debugger

    // const users = [
    //     {
    //         id: 1,
    //         follow: false,
    //         image: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
    //         name: 'Elena',
    //         status: 'Hey, i`ve registered on this site recently. If u want to chat with me - follow on me',
    //         location: {
    //             cityName: 'London',
    //             country: 'UK',
    //         }
    //     },
    //     {
    //         id: 2,
    //         follow: false,
    //         image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
    //         name: 'Dima',
    //         status: 'Did u see last match of national team of Ukraine?',
    //         location: {
    //             cityName: 'Bern',
    //             country: 'Switzerland',
    //         }
    //     },
    //     {
    //         id: 3,
    //         follow: false,
    //         image: 'https://images.unsplash.com/photo-1526248285192-65d8c14dc9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGR8ZW58MHx8MHx8&w=1000&q=80',
    //         name: 'Egor',
    //         status: 'If u like take a photo. Follow on me, I can teach you to make this photo better!',
    //         location: {
    //             cityName: 'Lviv',
    //             country: 'Ukraine',
    //         }
    //     },
    //     {
    //         id: 4,
    //         follow: false,
    //         image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    //         name: 'Anton',
    //         status: 'Okay, I think that this world is so worst',
    //         location: {
    //             cityName: 'Odesa',
    //             country: 'Ukraine',
    //         }
    //     }
    // ]
    // props.setUsers(users);
}


    return (
        <div className={cl.user}>
            {props.users.map(el => <Item followStatus={el.followed} follow={props.follow} userId={el.id} image={el.photos} name={el.name} status={el.status} />)}
        </div>
    )
}
//1
*/

const User = (props) => {
    let cacheNum
    props.currentPageNum <= 10 || props.currentPageNum == 0 ? cacheNum = 1 : cacheNum = Math.floor(props.currentPageNum / 10);

    let prevArrowBoolean;
    props.currentPageNum > 10 ? prevArrowBoolean = true : prevArrowBoolean = false;

    const [currentPortion, setCurrentPortion] = useState(cacheNum);
    const [preArrow, setPreArrow] = useState(prevArrowBoolean);
    const [nexArrow, setNexArrow] = useState(true);


    props.allPageFun(Math.ceil(props.totalCount / props.count));
    let pages = [];
    for (let i = 1; i < props.allPage; i++) {
        pages.push(i);
    }
    let num = currentPortion * 10;
    let leafs = pages.filter(el => {
        if (currentPortion === 1) {
            if (el >= currentPortion && el <= num) {
                return true
            } else return false
        } else {
            if (el >= currentPortion * 10 && el <= num + 10) {
                return true
            } else return false
        }
    });


    const prevArrow = (e) => {
        setCurrentPortion(prev => prev - 1)
        if ((currentPortion - 1) === 1) {
            setPreArrow(false);
        }
    }
    const nextArrow = (e) => {
        setCurrentPortion(prev => prev + 1)
        if ((currentPortion + 1) > 1) {
            setPreArrow(true)
        }
        (currentPortion + 1) === props.allPage ? setNexArrow(false) : setNexArrow(true);
    }

    return (
        <div className={cl.user}>
            <div className={cl.pages}>
                {preArrow &&
                    <span onClick={prevArrow} className={cl.arrow}>{'<'}</span>}
                {leafs.map(el => <span onClick={(e) => { props.onPageChangeFun(el) }} className={props.currentPageNum === el ? cl.selected : cl.pageNum}>{el}</span>)}
                {nexArrow &&
                    <span onClick={nextArrow} className={cl.arrow}>{'>'}</span>}
            </div>
            {props.users.map(el => <Item followUserDeleteThunk={props.followUserDeleteThunk} followUserPostThunk={props.followUserPostThunk} changeCurrentProfileUserIdFun={props.changeCurrentProfileUserIdFun} userIdFun={props.userIdFun} followStatus={el.followed} follow={props.follow} userId={el.id} image={el.photos} name={el.name} status={el.status} />)} {/*userIdFun={props.userIdFun} chosedUserFun={props.chosedUserFun} */}
        </div>
    )
}
// export default compose(withPaginatorInfoUser)(User);
export default User;