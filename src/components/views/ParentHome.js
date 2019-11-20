import React, { useState, useEffect } from "react";
import AddChild from "../forms/AddChild";
import ChildCardList from "../ChildCardList";
import getToken from "../utils/api";

const ParentHome = () => {
    const [userName, setUserName] = useState("");
    const [children, setChildren] = useState(null);
    const [shots, setShots] = useState([]);

    useEffect(() => {
        getToken()
            .get(`https://immunizationtracker-bw.herokuapp.com/api/user/1`)
            .then(res => {
                console.log("it worked:", res.data);
                setChildren(res.data);
            })
            .catch(err => {
                console.log("error:", err);
            });
    }, []);

    useEffect(() => {
        if(children)
        {
            //set userName by finding first entry that's not a child. If it's not index 0, issue warning message
            let parent = children[0];
            if(!parent.isChild)
                setUserName(`${parent.firstName} ${parent.lastName}`);
            else
            {
                parent = children.find((child) => !child.isChild );

                if(parent)
                {
                    setUserName(`${parent.firstName} ${parent.lastName}`);
                    console.log("Error: Parent is not first in user array");
                }
                else
                    console.log("Error: No parent found!!");
            }

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
            <h1>Welcome {userName}</h1>
            <div>
                <h2>Your Children</h2>
                <ChildCardList children={children} shots={shots}/>
            </div>
            <div>
                <h2>Add Child</h2>
                <AddChild />
            </div>
        </>
    );
};

export default ParentHome;