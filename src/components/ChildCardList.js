import React from "react";
import ChildCard from "./ChildCard";

const ChildCardList = (props) => {
    return (
        <>
            {props.children.map( (child) => {
                if(!child.isChild) return;

                let tempShots = props.shots.find((e) => e.id === child.id);
                if(!tempShots) tempShots = {shotData: null};
                return (
                    <ChildCard key={child.id} child={child} shots={tempShots.shotData}/>
                );
            })}
        </>
    );
};

export default ChildCardList;