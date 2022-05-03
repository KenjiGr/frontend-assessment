import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import '../styles/list-styles.css'

function List(){
    const [profiles, setProfiles] = useState([]);
    const [input, setInput] = useState('')
    const [tagInput, setTagInput] = useState('')
    const [filtered, setFiltered] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleTagChange = (e) => {
        setTagInput(e.target.value)
    };

    useEffect(() => {
        setFiltered(profiles.filter(i => {
            return i.firstName.toLowerCase().includes(input.toLowerCase()) || i.lastName.toLowerCase().includes(input.toLowerCase()) || i.tags.toLowerCase().includes(tagInput.toLowerCase())
        }))
    },[input, profiles, tagInput])

    useEffect(() => {
        axios.get(`https://api.hatchways.io/assessment/students`).then(res => {
            setProfiles(res.data.students)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
        console.log(profiles)
    },[profiles]);

    return (
        <div className="list-cont">
                <input type='text' placeholder="Search by name" onChange={handleChange}/>
                <input type='text' placeholder="Search by tag" onChange={handleTagChange}/>
            {!input ? profiles.map((i,idx) => (
                <Card data={i} key={idx} handleChange={handleChange}/>
            )) : filtered.map((i,idx) => (
                <Card data={i} key={idx} handleChange={handleChange}/>
            ))}
        </div>
    )
}

export default List