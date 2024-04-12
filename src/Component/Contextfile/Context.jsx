import { createContext , useState} from "react";


export const myContext =createContext()


// export const MycontextProvider = ({children}) =>  {
//     const [state, setState] = useState(0)
//     return (
//          <myContext.Provider value={{state,setState}}>
//             {children}
//          </myContext.Provider>
//     )
// }