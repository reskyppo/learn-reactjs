import React, { Component, useState, useEffect } from 'react'
import "./Hooks.css"


// class Hooks extends Component {
//     state = {
//         count : 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count : this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `title change : ${this.state.count} `
//     }

//     componentDidUpdate() {
//         document.title = `title change : ${this.state.count} `
//     }

//     componentWillUnmount() {
//         document.title = 'React App'
//     }
    
//     render() {
//         return (
//             <div className = "hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick = {this.onUpdate} >Update nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title  = `Nilaiku (${count})`;
        return () => {
            document.title = 'React App'
        }
    })

    return(
        <div className = "hooks">
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick = {() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}

export default Hooks;