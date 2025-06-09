import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div >
            <h1>Custom App | chai</h1>
        </div>
    )
}

//Creating  react Element 

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <>
    <br></br>
    <a href="https://google.com" target='_blank'>Visit google</a>
    </>
)



const anotherUser = "chai aur react"


// this is the basic way by which react use and expect its input to feeded 

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
    // MyApp()
    reactElement
  
)

