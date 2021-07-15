// import React from 'react';
// import { useSelector } from 'react-redux';
// import './SelectBranchRequest.scss';
// import { cartridges_types } from '../../../redux/defaultValues';

// export default function SelectBranchRequest() {
//     const branch = useSelector(state=> state.equipment.branch)
//     const finishRequest = useSelector(state=> state.equipment.finishRequestCartridges)
//     const filterToBranch = finishRequest.filter(el=> {
//         return el.branch === branch
//     })
//     console.log(filterToBranch);

//     const finishRequest2 = useSelector(state=> state.equipment.finishRequestCartridges)
// //     const filt = finishRequest2.map(el => {
// //         const t1 = Object.keys(el).toString()
// //         console.log(t1=== branch);
// //         console.log(...el[t1]);
// //     //     el[1].map((request, index) => {
// //     //         console.log(request);
// //     // })
// // })
//     return (
//         <>
//         {finishRequest2.map(el => {
//             return (
//                 <div className='finish__request'>
//                     <div className='finish__request__branch'>
//                         <h5>Филиал</h5>
//                         <div>{branch}</div>
//                     </div>
//                     {
//                         el[Object.keys(el).toString()].map((request, index) => {
//                             console.log(el[Object.keys(el).toString()]);
//                             return (
//                             <>
//                             <div className='finish__request__cartridge'>
//                                 {console.log(cartridges_types[index])}
//                                 <div key={index}>
//                                 <div className='finish__request__cartridge__model'>{request.model}</div>
//                                 <div className='finish__request__cartdige__count'>{request.count}</div>
//                             </div>
//                             </div>
//                             </>
//                             )
//                         }) 
//                     }
//                             <div className='finish__request__cartridge__button'>
//                                 <button className='btn btn-white' onClick={()=> {
                                    
//                                 }}>Исполнить заявку</button>
//                                 <button className='btn btn-light'>Отправить заявку в архив</button>
//                             </div>
//                     </div>
//             )
//         })
//     }
//         </>
//     )
// }

import React from 'react';
import { useSelector } from 'react-redux';
import './SelectBranchRequest.scss';
import { cartridges_types } from '../../../redux/defaultValues';


export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)

    const finishRequest = useSelector(state => state.equipment.finishRequestCartridges);
    console.log(finishRequest);

    return (
        <div className='finish__request'>
        <div className='finish__request__branch'>
        {finishRequest.map(el => {
            return (
                <>
                    {branch === el[0].branch ? el.map((request, index)=> {
                        return (
                        <div key={index} className='finish__request__cartridge'>
                            <div className='finish__request__cartridge__model'>{request.model}</div>
                            <div className='finish__request__cartdige__count'>{request.count}</div>
                        </div>
                        )
                    })
                 : <div>Ничего нету</div>}
            </>
            )
            }
        )}
        
        </div>
        </div>
    )

//     const q = Array.from(cartridges_types).map((request, index)=> {
//         console.log(request);
//         return (
//          <div key={index} className='finish__request__cartridge'>
//              <div className='finish__request__cartridge__model'>{finishRequest[1][index]}</div>
//              <div className='finish__request__cartdige__count'>{finishRequest[1][index]}</div>
//          </div>
//         )
//  })
//  console.log(q);
//     return (
//         <>
//         <div>
//             <h2>{finishRequest[0]}</h2>
//             </div>

//                    {Array.from(cartridges_types).map((request, index)=> {
//                        return (
//                         <div key={index} className='finish__request__cartridge'>
//                             <div className='finish__request__cartridge__model'>{finishRequest[1][index]}</div>
//                             <div className='finish__request__cartdige__count'>{finishRequest[1][index]}</div>
//                         </div>
//                        )
//                 })}
//         </>
//     )
    // return <div></div>
    // return (
    //     {finishRequest.map(response => <div></div>)  }
    //         // <>
    //         // <div className='finish__request__branch'>
    //         //     <h5>Филиал</h5>
    //         //     <div>{index}</div>
    //         // </div>
    //         //                 <div className='finish__request__cartridge'>
    //         //             <div key={index}>
    //         //                 <div className='finish__request__cartridge__model'>{request.model}</div>
    //         //                 <div className='finish__request__cartdige__count'>{request.count}</div>
    //         //             </div>
    //         //     </div>
    //         //     </>
    //         )
}









            {/* { const t1 = Object.keys(el).toString()
             el[t1].map((request, index) => {

              return (
                    <>
                    <div className='finish__request__branch'>
                         <h5>Филиал</h5>
                    <div>{branch}</div>
                    </div>
                    <div className='finish__request__cartridge'>
                <div key={index}>
                    <div className='finish__request__cartridge__model'>{request.model}</div>
                    <div className='finish__request__cartdige__count'>{request.count}</div>
                </div>
        </div> 
        </>
             )}

        <div className='finish__request__cartridge__button'>
            <button className='btn btn-white'>Исполнить заявку</button>
            <button className='btn btn-light'>Отправить заявку в архив</button>
        </div>

            )}
            </div>
            )})
    } */}
