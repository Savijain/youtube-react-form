import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    Fullname: "",
    Age: "",
    MobileNumber: "",
    email: "",
    batch: "",
    paymentStatus: "",
  });


  const inputs = [
    {
      id: 1,
      name: "Full name",
      type: "text",
      placeholder: "Full name",
      errorMessage:
        "Full name shouldn't include any digits or special character!",
      label: "Full name",
      required: true,
    },
    {
      id: 2,
      name: "Age",
      type: "integer",
      placeholder: "Age",
      errorMessage:
        "Age should be in digits",
      pattern: "^[0-9][0-9]$",
      label: "Age",
    },
    {
      id: 3,
      name: "MobileNumber",
      type: "Number",
      placeholder: "Contact Number",
      errorMessage:
        "Contact Number can only include 10 digits",
      label: "Mobile Number",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "batch",
      type: "batch",
      placeholder: "Choose batch",
      errorMessage: "Select a batch",
      label: "Select your batch",
      required: true,
    },
    {
      id: 6,
      name: "paymentStatus",
      type: "integer",
      label: "Payment Amount",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(e.CompletePayment());
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const CompletePayment = (q) => {
    console.log("Payment Successful")
  };

  return (
    
    <div className="app">
      <div className="batchb">
        <br></br>
        <h2>Batch Details</h2>
        <p>
        <li>Batch A : 6-7AM</li>
        <li>Batch B : 7-8AM</li>
        <li>Batch C : 8-9AM</li>
        <li>Batch D : 5-6PM</li>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <h1>Register for yoga class!</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={CompletePayment}>Submit</button>
      </form>
    </div>
  );
};

export default App;
