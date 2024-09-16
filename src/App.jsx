import React, { useState } from 'react'
import './App.css'
import boxes from './boxes'
import Box from './Box'

const App=(props)=>{
	// Dynamic style
	const [squares, setSquares] = React.useState(boxes)

	const styles = {
		background:props.darkMode ? "#222222":"#cccccc"
	}
	

	// Dynamic style
	// const square = x => <div className='box' key={x.id} style={styles}></div>

	// challenge 2
	function toggle(){
		console.log("clicked")
	}
	const square = x => 
	         <Box 
			     id = {x.id}
			     key={square.id} 
			     on={x.on} 
			     toggle={toggle}
			 />
	const squareElements = squares.map(square)
	return(
		<div>
			{squareElements}
		</div>
	)
}

export default App