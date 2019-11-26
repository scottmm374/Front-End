import React, { useState, useEffect, useContext } from "react";
import AddChild from "../forms/AddChild";
import ChildCardList from "../ChildCardList";
import { PatientInfoContext } from "../../context/PatientInfoContext";
import api from "../utils/api";
import { LightCard } from "../utils/styledComponents.js";

const ParentHome = props => {
  const addPatient = useContext(PatientInfoContext);
  const [children, setChildren] = useState(null);
  const [shots, setShots] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      setShots([]);
      setRefresh(false);
    }
    api()
      .get(`/user/${localStorage.id}`)
      .then(res => {
        //console.log("it worked:", res.data);
        setChildren(res.data);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }, [localStorage.id, refresh]);

  useEffect(() => {
    if (children) {
      children.map(child => {
        api()
          .get(`/record/${child.id}`)
          .then(res => {
            //console.log("this also worked:", res.data);
            //setShots(shots.concat([res.data]));
            setShots(shots =>
              shots.concat([{ id: child.id, shotData: res.data }])
            );
          })
          .catch(err => {
            console.log("error:", err);
          });
      });
    }
  }, [children]);

  //useEffect(()=>{console.log(refresh)}, [refresh]);

  if (!children || shots.length < children.length) return <h4>Loading...</h4>;

  return (
    <>
      <h1>{addPatient.message}</h1>
      <p>{addPatient.email}</p>

      {/* <h1>Welcome to Your Homepage!</h1> */}
      <h2>Your Children</h2>
      <div className="children">
        {children.length > 0 ? (
          <ChildCardList children={children} shots={shots} />
        ) : (
          <div>No Children</div>
        )}
      </div>
      <div>
        <h2>Add Child</h2>
        <LightCard>
          <AddChild
            setRefresh={setRefresh}
            patientEmail={
              localStorage.patientEmail
                ? localStorage.patientEmail
                : "err@err.com"
            }
            userId={localStorage.id}
          />
        </LightCard>
      </div>
    </>
  );
};

export default ParentHome;
