// export const Counter = () => {

import { useState } from "react";

//     let count = 1;
//     return (
//        <button
//           type="button"
//           className="counter"
//           onClick={() => ++count}
//         >
//           Count is {count}
//         </button>
//     );
// }

export const Counter = () => {

    const [count, setCount] = useState(0);

    const SetCounterHandler = () => {
        setCount(count + 1);
    }

    return (
       <button
          type="button"
          className="counter"
          onClick={SetCounterHandler}
        >
          Count is {count}
        </button>
    );
}