import React, { useState, useEffect } from "react";
import AddChild from "../forms/AddChild";
import ChildCardList from "../ChildCardList";
import getToken from "../utils/api";

const ParentHome = (props) => {
    const [children, setChildren] = useState(null);
    const [shots, setShots] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if(refresh)
        {
            setShots([]);
            setRefresh(false);
        }
        getToken()
            .get(`https://immunizationtracker-bw.herokuapp.com/api/user/${props.match.params.id}`)
            .then(res => {
                //console.log("it worked:", res.data);
                setChildren(res.data);
            })
            .catch(err => {
                console.log("error:", err);
            });
    }, [props.match.params.id, refresh]);

    useEffect(() => {
        if(children)
        {
            children.map((child) => {
                getToken()
                    .get(`https://immunizationtracker-bw.herokuapp.com/api/record/${child.id}`)
                    .then(res => {
                        //console.log("this also worked:", res.data);
                        //setShots(shots.concat([res.data]));
                        setShots(shots => shots.concat([{id: child.id, shotData: res.data}]));            
                    })
                    .catch(err => {
                        console.log("error:", err);
                    });
            });
        }
    }, [children]);

    //useEffect(()=>{console.log(refresh)}, [refresh]);

    if(!children || shots.length < children.length) return <h4>Loading...</h4>
    
    return (
        <>
            <h1>Welcome to Your Homepage!</h1>
            <div>
                <h2>Your Children</h2>
                {children.length > 0 ? <ChildCardList children={children} shots={shots}/> : <div>No Children</div>}
            </div>
            <div>
                <h2>Add Child</h2>
                <AddChild 
                        setRefresh={setRefresh} 
                        patientEmail={localStorage.patientEmail ? localStorage.patientEmail : "err@err.com"} 
                        userId={props.match.params.id}/>
            </div>
        </>
    );
};

export default ParentHome;