import React from "react";
import ChildCard from "./ChildCard";

const ChildCardList = (props) => {
    return (
        <>
            {props.children.map( (child, index) => {
                if(!child.isChild) return;

                let tempShots = props.shots.find((e) => e.id === child.id);
                return (
                    <ChildCard key={child.id} child={child} doctor={props.doctors[index]} shots={tempShots.shotData}/>
                );
            })}
        </>
    );
};

export default ChildCardList;