import React from 'react'

import Sump from './sump';

// export default () => {
//     return (
//         <div style={{display: "flex", flexDirection: 'column'}}>
//             Tank
//             <div style={{width: 100, height: 20, background: "green"}}>
//                 <div style={{width: 50, height: 10, background: "red"}}/>
//             </div>
//         </div
//     );
// }

export const Tank = () => {
    return (
        <div>
            <Sump />
            Tanks
        </div>
    )
}