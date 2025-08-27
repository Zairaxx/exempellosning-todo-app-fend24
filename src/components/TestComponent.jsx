import { useEffect, useState } from "react"
import User from "./User"
const TestComponent = ({testData}) => {
    //Mounting
    useEffect(() => {
        console.log("Component is mounting!");

        //Unmounting
        return () => {
            console.log("Component is unmounting")
        }
    }, [])



    return(
        <>
            <h2>Test</h2>
            {testData.map((user,i) => <User user={user} key={i}/>)}
        </>
    )
}

export default TestComponent