import React, { useState, useEffect } from "react";
import AddChild from "../forms/AddChild";
import ChildCardList from "../ChildCardList";
import getToken from "../utils/api";

const ParentHome = () => {
    const parentName = "Eric";
    const [children, setChildren] = useState(null);
    const [shots, setShots] = useState([]);
    const doctors = [
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"},
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"},
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"},
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"},
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}, 
                        {name: "Dr. Kerr"}
                    ];

    useEffect(() => {
        getToken()
            .get(`https://immunizationtracker-bw.herokuapp.com/api/user/1`)
            .then(res => {
                //console.log("it worked:", res.data);
                setChildren(res.data);
            })
            .catch(err => {
                console.log("error:", err);
                //setSubmitting(false);
                //resetForm();
            });
    }, []);

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

    if(!children || shots.length < children.length) return <h4>Loading...</h4>
    
    return (
        <>
            <h1>Welcome {parentName}</h1>
            <div>
                <h2>Your Children</h2>
                <ChildCardList children={children} doctors={doctors} shots={shots}/>
            </div>
            <div>
                <h2>Add Child</h2>
                <AddChild />
            </div>
        </>
    );
};

export default ParentHome;