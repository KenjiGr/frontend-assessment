import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import './list-styles.css'

function List(){ 
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        axios.get(`https://api.hatchways.io/assessment/students`).then(res => {
            setProfiles(res.data.students)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        console.log(profiles)
    },[profiles])

    return (
        <div className="list-cont">
            {profiles.map((i,idx) => (
                <Card data={i} key={idx}/>
            ))}
        </div>
    )
}

export default List