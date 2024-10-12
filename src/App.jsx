import {useState} from 'react'
import Sidenav from './components/Sidenav'
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Sidenav/>
            <Main/>
            <Work/>
        </>
    )
}

export default App
