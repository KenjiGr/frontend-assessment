import React, { useState } from "react";
import '../styles/card-styles.css';

function Card(props){
    const getAvg = (arr) => arr.reduce((p, c) => parseInt(p) + parseInt(c), 0) / arr.length;
    const [toggle, setToggle] = useState('none');
    const [input, setInput] = useState('');
    // const [tags, setTags] = useState([]);
    const [student, setStudent] = useState({
        fullName: `${props.data.firstName} ${props.data.lastName}`,
        icon: props.data.pic,
        email: props.data.email,
        company: props.data.company,
        skill: props.data.skill,
        avg: getAvg(props.data.grades),
        grades: props.data.grades,
        tags: []
    });

    const handleChange = (e) => {
        setInput(e.target.value)
    };
    
    const handleClick = () => {
        if(toggle === ''){
            setToggle('none')
        }else{
            setToggle('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudent({
            ...student,
            tags: [...student.tags, input.trim()]
        })
        setInput('')
    }
    return (
        <div className="main-div">
        <div className="main-cont">
            <div className="img-cont">
                <img src={student.icon} alt={student.fullName}/>
            </div>
            <div className="second-cont">
                <div className="btn-cont">
                <h1>{student.fullName}</h1>
                <button onClick={handleClick}>{toggle ? '+' : '-'}</button>
                </div>
                <div className="info-cont">
                    <h3>Email: {student.email}</h3>
                    <h3>Company: {student.company}</h3>
                    <h3>Skill: {student.skill}</h3>
                    <h3>Average: {student.avg}</h3>
                    {student.tags.map((i,idx) => (
                        <h3 key={idx}>{i}</h3>
                    ))}
                </div>
            </div>
        </div>
        <div className={`${toggle} drop-cont`}>
            {student.grades.map((i, idx) => (
                <h3 key={idx}>{`Test ${idx+1}: ${i}%`}</h3>
            ))}
        </div>
                <form onSubmit={handleSubmit}>
                    <input value={input} type='text' placeholder="Add a tag" onChange={handleChange} />
                </form>
        </div>
    )
}

export default Card