import React from "react";

const HistoryCard = (props) => {
    return (
        props.shots.length === 0 ? <h3>No Record</h3>  :
            <table> 
                <thead><tr><th>Vaccine</th><th>Date</th><th>Location</th></tr></thead>
                <tbody>
                    <HistoryRows shots={props.shots} />
                </tbody>
            </table>
    );
};

const HistoryRows = (props) => {
    return props.shots.map((shot) => {
        return (
            <tr key={shot.id} >
                <th>{shot.vaccineName}</th>
                <th>{shot.vaccineDate}</th>
                <th>{shot.vaccineLocation}</th>
            </tr>
        );
    });
};

export default HistoryCard;