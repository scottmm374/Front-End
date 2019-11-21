import React from "react";
import HistoryCard from '../HistoryCard';

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
    const shots = props.location.state.shots;
    console.log(child);

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
                <HistoryCard shots={shots}/>
            </LightCard>
        </>
    );
};

export default ChildHome;