import React from "react";
import { Link } from "react-router-dom"

const ChildCard = (props) => {
    //console.log(child, doctor);
    
    return (
        <div>
            <Link 
                to={{
                    pathname:`/child-account/${props.child.firstName}${props.child.lastName}`,
                    state: {
                        child: props.child,
                        shots: props.shots
                    }
            }}>{props.child.firstName} {props.child.lastName}</Link>
        </div>
    );
};

export default ChildCard;