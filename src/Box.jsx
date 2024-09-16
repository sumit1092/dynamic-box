
import React from 'react'

const Box = (props)=>{
    console.log(props.id)

    const [on, setOn] = React.useState(props.on)
    const styles = {
        background: on ? "#222222" : "transparent"
    }
    
    //challenge 3
    const toggle = ()=>{
        setOn(x => !x)
    }
    return(
        <div 
            className='box' 
            style={styles} 
            onClick={toggle}//

            //onClick={()=>props.toggle(props.id)} //toggle to print id
            >
        </div>
    )
}

export default Box