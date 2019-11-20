import React from "react";
import {
    LightCard,
    BetterField,
    NewLable,
    FormContainerAddChild,
    FlexWarp
  } from "../utils/styledComponents.js";

const ChildHome = (props) => {
    console.log(props.location.state);
    const child = props.location.state.child;
    const doctor = props.location.state.doctor;
    const shots = props.location.state.shots;

    console.log(child);
    return (
        <>
            <LightCard>
                <h1>{child.firstName} {child.lastName}</h1>
                <h3>Gender</h3>
                <p>{child.gender}</p>
                <h3>Age</h3>
                <p>{child.age}</p>
                <h3>Weight</h3>
                <p>{child.weight}</p>
                <h3>Height</h3>
                <p>{child.height}</p>
            </LightCard>
            <LightCard>
                <h2>Immunization History</h2>
                {shots.length === 0 ? <h3>No Record</h3>  : <><h3>Vaccine</h3><h3>Date</h3><h3>Location</h3></>}
                {shots.length === 0 ? <></>  :
                    shots.map((shot) => {
                        return (
                            <FlexWarp key={shot.id}>
                                <p>{shot.vaccineName}</p>
                                <p>{shot.vaccineDate}</p>
                                <p>{shot.vaccineLocation}</p>
                            </FlexWarp>
                        );
                })}
            </LightCard>
        </>
    );
};

export default ChildHome;