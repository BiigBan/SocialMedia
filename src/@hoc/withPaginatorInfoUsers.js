import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';




// export const withPaginatorInfoUser = (Component) => {

//     let cacheNum
//     props.currentPageNum <= 10 || props.currentPageNum == 0 ? cacheNum = 1 : cacheNum = Math.floor(props.currentPageNum / 10);

//     let prevArrowBoolean;
//     props.currentPageNum > 10? prevArrowBoolean = true : prevArrowBoolean = false;

//     const [currentPortion, setCurrentPortion] = useState(cacheNum);
//     const [preArrow, setPreArrow] = useState(prevArrowBoolean);
//     const [nexArrow, setNexArrow] = useState(true);




//     props.allPageFun(Math.ceil(props.totalCount / props.count));
//     let pages = [];
//     for (let i = 1; i < props.allPage; i++) {
//         pages.push(i);
//     }
//     let num = currentPortion * 10;
//     let leafs = pages.filter(el => {
//         if (currentPortion === 1) {
//             if (el >= currentPortion && el <= num) {
//                 return true
//             } else return false
//         } else {
//             if (el >= currentPortion * 10 && el <= num + 10) {
//                 return true
//             } else return false
//         }
//     });

    
//     const prevArrow = (e) => {
//         setCurrentPortion(prev => prev - 1)
//         if ((currentPortion - 1) === 1) {
//             setPreArrow(false);
//         }
//     }
//     const nextArrow = (e) => {
//         setCurrentPortion(prev => prev + 1)
//         if ((currentPortion + 1) > 1) {
//             setPreArrow(true)
//         }
//         (currentPortion + 1) === props.allPage ? setNexArrow(false) : setNexArrow(true);
//     }



// }

// const mapStateToProps = (state) => {
//     return {
//         currentPageNum: state.users.currentPage,
//         totalCount: state.users.totalCount,
//         count: state.users.visibleCount,
//         allPage: state.users.allPage,
//     }
// }


// connect(mapStateToProps, {allPageFun})(withPaginatorInfoUser);