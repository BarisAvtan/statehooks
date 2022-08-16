import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// class UseEffectExample extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0, 
//             text: ''
//         }
//     }
// //component oluştuktan sonra çalısır
//     componentDidMount() {
//         console.log('componentdidmount');
//     }

//     //state içinde bulunan bir bilgi güncellendiğinde çalışır
//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }

//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız.</p>
//                 <button onClick={()=> this.setState({count: this.state.count + 1})}>+1</button>
//             </div>
//         )
//     }
// }
// export default UseEffectExample();

//////////////////////////////////////////////////////////////////////////////

const UseEffectExample = (props) => {
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);

    // text
    useEffect(()=> {
        console.log('text')
    }, [text]) 

    // count
    useEffect(()=> {
        console.log('count')
        localStorage.setItem('count', count)
    }, [count])

    // componentdidmount
    useEffect(()=> {
        console.log('componentdidmount')

        const countData = localStorage.getItem('count');

        if(countData) {
            setCount(Number(countData))
        }
    }, [])

    // componentdidmount(), componentdidupdate()
    useEffect(()=> {
        console.log('componentdidmount - componentdidupdate'); 
    })

    return ( 
        <div>
            <p>Butona {count} kez tıkladınız.</p>
            <p>girilen text: {text }</p>
            <button onClick={()=> setCount(count+1)}>+1</button>
            <button onClick={()=> setCount(count-1)}>-1</button>
            <button onClick={()=> setCount(props.count)}>reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div> 
    )
}

UseEffectExample.defaultProps = {
    count: 5,
    text: 'deneme'
}
 export default UseEffectExample;