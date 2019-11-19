import React from "react";
import { Link } from "react-router-dom"

const ChildCard = (props) => {
    const child = props.child;
    const doctor = props.doctor;
    const firstName = props.child.firstName;
    const lastName = props.child.lastName;
    const doctorName = props.doctor.name;

    //console.log(child, doctor);
    
    return (
        <div>
            <Link 
                to={{
                    pathname:`/patient-account/${firstName}${lastName}`,
                    state: {
                        child: child,
                        doctor: doctor,
                        shots: props.shots
                    }
            }}>{firstName} {lastName}</Link>
            <p>{doctorName.length > 0 ? doctorName : "No Doctor"}</p>
        </div>
    );
};

export default ChildCard;