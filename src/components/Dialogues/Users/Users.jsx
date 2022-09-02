import cl from './Users.module.css';
import User from './User/User'
import { useEffect, useState } from 'react';

const Users = (props) => {
    // console.log(props);
    // let cacheNum
    // props.currentPageNum <= 10 || props.currentPageNum == 0 ? cacheNum = 1 : cacheNum = Math.floor(props.currentPageNum / 10);

    // let prevArrowBoolean;
    // props.currentPageNum > 10 ? prevArrowBoolean = true : prevArrowBoolean = false;

    // const [currentPortion, setCurrentPortion] = useState(cacheNum);
    // const [preArrow, setPreArrow] = useState(prevArrowBoolean);
    // const [nexArrow, setNexArrow] = useState(true);

    // useEffect(() => {
    //     props.getUsersFun(props.currentPageNum, props.count);
    // }, [])

    // const onPageChangeFun = (pageNum) => {
    //     props.getUsersFun(pageNum, props.count);
    // }


    // props.allPageFun(Math.ceil(props.totalCount / props.count));
    // let pages = [];
    // for (let i = 1; i < props.allPage; i++) {
    //     pages.push(i);
    // }
    // let num = currentPortion * 10;
    // let leafs = pages.filter(el => {
    //     if (currentPortion === 1) {
    //         if (el >= currentPortion && el <= num) {
    //             return true
    //         } else return false
    //     } else {
    //         if (el >= currentPortion * 10 && el <= num + 10) {
    //             return true
    //         } else return false
    //     }
    // });


    // const prevArrow = (e) => {
    //     setCurrentPortion(prev => prev - 1)
    //     if ((currentPortion - 1) === 1) {
    //         setPreArrow(false);
    //     }
    // }
    // const nextArrow = (e) => {
    //     setCurrentPortion(prev => prev + 1)
    //     if ((currentPortion + 1) > 1) {
    //         setPreArrow(true)
    //     }
    //     (currentPortion + 1) === props.allPage ? setNexArrow(false) : setNexArrow(true);
    // }

    let userElements = props.userInfo.map(info => {
        return <User name={info.name} id={info.id} time={info.time} currentUser={props.currentUser} />
    })
    return (
        <div className={cl.users}>
            {userElements}
            {/* <div className={cl.numbers}>
                {preArrow &&
                    <span onClick={prevArrow} className={cl.arrow}>{'<'}</span>}
                {leafs.map(el => <span onClick={(e) => { onPageChangeFun(el) }} className={props.currentPageNum === el ? cl.selected : cl.pageNum}>{el}</span>)}
                {nexArrow &&
                    <span onClick={nextArrow} className={cl.arrow}>{'>'}</span>}
            </div> */}
        </div>
    )
}

export default Users;