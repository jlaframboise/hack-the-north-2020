// import { useState, useEffect } from "react";

// export const useMousePosition = () => {
//     const [position, setPosition] = useState({ x:0, y:0 });

//     useEffect(() => {
//         const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY});
//         window.addEventListener("mousemove", setFromEvent);
    
//         return () => {
//             window.removeEventListener("mouseremove", setFromEvent);
//         };
//     }, []);

//     useEffect(() => {
//         // update our mouse position
//     }, [position])

//     return [position, setPosition];
// }


