import React, { useState } from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "./AddPatient.css";
export default function AddPatient(props) {
  const [sex, setSex] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const errors = [];
    if (first === undefined || first.length === 0) {
      errors.push("first name is required");
    }
    if (last === undefined || last.length === 0) {
      errors.push("last name is required");
      alert(errors);
    } else
      alert(
        "New patient " +
          first +
          " " +
          last +
          " (" +
          sex +
          ", " +
          day +
          "/" +
          month +
          "/" +
          year +
          ") is added to the system."
      );
    /**try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }**/
  }

  return (
    <div className="info">
      <form onSubmit={handleSubmit}>
        <h1>New Patient Form</h1>
        <table id="form_table">
          <tr>
            <td colspan="3">
              <p>First Name:</p>
            </td>
            <td colspan="3">
              <p>Last Name:</p>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <input
                type="text"
                className="longInput"
                onChange={e => setFirst(e.target.value)}
              />
            </td>
            <td colspan="3">
              <input
                type="text"
                className="longInput"
                onChange={e => setLast(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colspan="6">
              <p>Sex:</p>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <select value={sex}>
                <option value="Female" onChange={e => setSex(e.target.value)}>
                  Female
                </option>
                <option value="Male" onChange={e => setSex(e.target.value)}>
                  Male
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <p>Date of Birth:</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label className="month">Month</label>
              <input
                type="text"
                placeholder="(1-12)"
                className="dob"
                onChange={e => setMonth(e.target.value)}
              />
            </td>
            <td colspan="2">
              <label className="day">Day</label>
              <input
                type="text"
                placeholder="(1-31)"
                className="dob"
                onChange={e => setDay(e.target.value)}
              />
            </td>
            <td colspan="2">
              <label className="year">Year</label>
              <input
                type="text"
                placeholder="(1900-2020)"
                className="dob"
                onChange={e => setYear(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
