import {useState} from 'react'
import Sidenav from './components/Sidenav'
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Sidenav/>
            <Main/>
            <Work/>
            <Projects/>
        </>
    )
}

export default App
