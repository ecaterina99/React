import {createRoot} from "react-dom/client";
import './App.css'
import MySecondElement from "./Header.tsx";
//create root
const reactElement = <h1><span>Hello JSX</span></h1>
const root = createRoot(document.getElementById("root")!)


function MyFirstElement() {
    return reactElement
}


function MyThirdElement() {
    return (
        <img src="/src/1.png" width="1000px"></img>
    )
}

function Page() {
    return (
        <>
            <header>
                <h1>Hi</h1>
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎
                    </li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
        </>
    )
}

root.render(
    <div>
        <MyFirstElement/>
        <MySecondElement/>
        <MyThirdElement/>
        <Page/>
    </div>
)

/**
 * IMPERATIVE CODING:
 * const h1 = document.createElement("h1")
 * h1.textContent="Hello "
 * h1.className="header"
 * document.getElementById("root").appendChild(h1)
 */


/** the same thing:
 import { createRoot } from "react-dom/client"

 const root = createRoot(document.querySelector("#root"))
 root.render(<p>Hello from the world of React!</p>) */


/**

 root.render(
 <div>
 {reactElement}
 <ul>
 <li>Super popular JS library</li>
 <li>Will help me be even more employable</li>
 <li>React has a pretty cool logo</li>
 </ul>
 </div>
 )

 *
 * function MainContent() {
 *
 return <h1>React is great!</h1>
 *
 }
 *
 * root.render(
 * <div>
 * <MyAwesomeNavbar/>
 * <MainContent>
 *</div>
 * )
 */