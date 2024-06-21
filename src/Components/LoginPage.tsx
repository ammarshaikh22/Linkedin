import { createPortal } from "react-dom";
import img from "../img/LinkedIn_Logo.svg.png";
import { useContext, useState } from "react";
import { context } from "../Context/FormContext";
import { formType } from "./Type";
import { Form } from "react-router-dom";

export const LoginPage = (_props: any) => {
  const { setFullN } = useContext(context);
  const [data, setData] = useState({
    fName: "",
    lName: "",
  });
  const [error, setError] = useState({
    fName: "",
    lName: "",
  });
  const errorData: any = {
    fName: [{ required: true, message: "Please Enter Your first Name" }],
    lName: [{ required: true, message: "Please Enter Your last name" }],
  };
  const handleError = (formData: any) => {
    let obj: any | formType = {};
    Object.entries(formData).forEach(([key, value]: [string, any]) => {
      // eslint-disable-next-line array-callback-return
      errorData[key].some((rule: any) => {
        if (rule.required && !value) {
          obj[key] = rule.message;
          return true;
        }
      });
    });
    setError(obj);
    return obj;
  };
  const handleData = (e: any) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setError({
      fName: "",
      lName: ""
    })
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    let Data: any = handleError(data);
    if (Object.keys(Data).length) return;
    localStorage.setItem("fName", data.fName);
    localStorage.setItem("lName", data.lName);
    setFullN({
      fName: data.fName || "Unknown",
      lName: data.lName || "Person",
    });
    setData({
      fName: "",
      lName: "",
    });
    _props.setIsActive(false)
  };
  return createPortal(
    <div
      onClick={() => _props.setIsActive(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${
        _props.isActive ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-10 h-[430px] max-w-xs grow rounded-md bg-white p-4 shadow-lg"
      >
        <div className="mt-4">
          <img src={img} alt="logo" className="max-w-[40%]" />
        </div>
        <div className="mt-5">
          <h2 className="text-4xl font-bold">Sign In</h2>
        </div>
        <Form onSubmit={handleForm}>
          <div className="mt-8">
            <input
              placeholder="First Name"
              type="text"
              name="fName"
              onChange={handleData}
              value={data.fName}
              className="w-[280px] h-12 border border-black rounded-sm p-3 mb-1"
            />
            <p className="text-red-500 text-xs mb-3">{error.fName}</p>
            <input
              placeholder="Last Name"
              type="text"
              name="lName"
              value={data.lName}
              onChange={handleData}
              className="w-[280px] h-12 border border-black rounded-sm p-3 mb-1"
            />
            <p className="text-red-500 text-xs mb-6">{error.lName}</p>
          </div>
          <span>Forget Password?</span>
          <div className="mt-5">
            <button
              className="w-[280px] h-12 bg-blue-700 border rounded-3xl p-3 text-white"
            >
              Sign In
            </button>
          </div>
        </Form>
      </div>
    </div>,
    document.getElementById("login") as HTMLDivElement
  );
};
