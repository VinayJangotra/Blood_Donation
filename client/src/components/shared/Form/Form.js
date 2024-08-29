import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ formType, submitButton, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              id="donarRadio"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="donarRadio">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              id="adminRadio"
            />
            <label className="form-check-label" htmlFor="adminRadio">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              id="hospitalRadio"
            />
            <label className="form-check-label" htmlFor="hospitalRadio">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
              id="organisationRadio"
            />
            <label className="form-check-label" htmlFor="organisationRadio">
              Organisation
            </label>
          </div>
        </div>
        {/* switch  */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    inputType={"Email"}
                    name={"email"}
                    labelFor={"forEmail"}
                    labelText={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    inputType={"Password"}
                    name={"password"}
                    labelFor={"forPassword"}
                    labelText={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "donar" || role === "admin") && (
                    <InputType
                      inputType={"text"}
                      name={"name"}
                      labelFor={"forName"}
                      labelText={"Name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  <InputType
                    inputType={"Email"}
                    name={"email"}
                    labelFor={"forEmail"}
                    labelText={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    inputType={"Password"}
                    name={"password"}
                    labelFor={"forPassword"}
                    labelText={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {role === "organisation" && (
                    <InputType
                      inputType={"text"}
                      name={"organisationName"}
                      labelFor={"fororganisationName"}
                      labelText={"Organisation Name"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      inputType="text"
                      name="hospitalName"
                      labelFor="forHospitalName"
                      labelText="Hospital Name"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    inputType={"text"}
                    name={"website"}
                    labelFor={"forWebsite"}
                    labelText={"Website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    inputType={"text"}
                    name={"Address"}
                    labelFor={"forAddress"}
                    labelText={"Address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    inputType={"text"}
                    name={"phone"}
                    labelFor={"forPhone"}
                    labelText={"Phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />{" "}
                </>
              );
            }
          }
        })()}
        <div className="d-flex ms-2">
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
