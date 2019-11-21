import React from "react";
import {
  LightCard,
  BetterField,
  NewLable,
  FormContainerAddChild,
  FlexWarp
} from "../utils/styledComponents.js";
// import UpdateChildForm from "../forms/UpdateChildForm.js";
import UpdateChildToggle from "../views/UpdateChildToggle";
import PermissionForm from "../forms/PermissionForm";

const ChildHome = props => {
  console.log(props.location.state);
  const child = props.location.state.child;
  const doctor = props.location.state.doctor;
  const shots = props.location.state.shots;

  console.log(child);
  return (
    <>
      <LightCard>
        <h1>
          {child.firstName} {child.lastName}
        </h1>
        <h3>Gender</h3>
        <p>{child.gender}</p>
        <h3>Age</h3>
        <p>{child.age}</p>
        <h3>Weight</h3>
        <p>{child.weight}</p>
        <h3>Height</h3>
        <p>{child.height}</p>
        <UpdateChildToggle ChildId={child.id} />
      </LightCard>
      <LightCard>
        <h2>Immunization History</h2>
        <table>
          {shots.length === 0 ? (
            <h3>No Record</h3>
          ) : (
            <thead>
              <tr>
                <th>Vaccine</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
          )}
          {shots.length === 0 ? (
            <></>
          ) : (
            shots.map(shot => {
              return (
                <thead key={shot.id}>
                  <tr>
                    <th>{shot.vaccineName}</th>
                    <th>{shot.vaccineDate}</th>
                    <th>{shot.vaccineLocation}</th>
                  </tr>
                </thead>
              );
            })
          )}
        </table>
      </LightCard>
      <PermissionForm />
    </>
  );
};

export default ChildHome;
