import React from "react";

const ChildHome = (props) => {
    console.log(props.location.state);
    const child = props.location.state.child;
    const doctor = props.location.state.doctor;
    const shots = props.location.state.shots;

    console.log(child);
    return (
        <>
            <div>
                <h1>{child.firstName} {child.lastName}</h1>
                <h3>Gender</h3>
                <p>{child.gender}</p>
                <h3>Age</h3>
                <p>{child.age}</p>
                <h3>Weight</h3>
                <p>{child.weight}</p>
                <h3>Height</h3>
                <p>{child.height}</p>
                <h3>Current Doctor</h3>
                <p>{doctor.name}</p>
            </div>
            <div>
                <h2>Immunization History</h2>
                
                {shots.length === 0 ? <h3>No Record</h3>  :
                shots.map((shot) => {
                    return (
                        <div key={shot.id}>
                            <h3>Vaccine</h3>
                            <p>{shot.vaccineName}</p>
                            <h3>Date</h3>
                            <p>{shot.vaccineDate}</p>
                            <h3>Location</h3>
                            <p>{shot.vaccineLocation}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ChildHome;