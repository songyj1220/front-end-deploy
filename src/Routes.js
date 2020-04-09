import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Menu";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NotFound from "./containers/NotFound";
import Menu from "./containers/Menu";
import Location from "./containers/Location";
import DetaildPatientInfo from "./containers/DetailedPatientInfo";
import PatientList from "./containers/PatientList";
import AddPatient from "./containers/AddPatient";
import Feedback from "./containers/Feedback";

export default function Routes() {
  return (
    /* Set up paths for pages */
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/location" exact component={Location} />
      <Route
        path="/detailed_patient_info"
        exact
        component={DetaildPatientInfo}
      />
      <Route path="/patient_list" exact component={PatientList} />
      <Route path="/add_patient" exact component={AddPatient} />
      <Route path="/feedback" exact component={Feedback} />
      <Route component={NotFound} />
    </Switch>
  );
}
