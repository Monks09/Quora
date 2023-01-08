// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// function Input() {
//   const [state, setState] = useState([]);
//   const [input, setInput] = useState("");
//   useEffect(() => {
//     fetch(`http://localhost:2000/posts/1`)
//       .then((response) => response.json())
//       .then((json) => {
//         setState(json);
//       });
//   }, []);

//   return (
//     <div>
//       <form onSubmit={handle}>
//         <input
//           type="text"
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Input;
