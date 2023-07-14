import { useState } from "react"

const Box = (props) => {

    // const toggle = () => {
    //     setFilled(prevState => !prevState)
    // }

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
      }
    

    return (
        <div
            style={styles}
            className='box'
            onClick={props.toggle}
        ></div>
    )
}

export default Box