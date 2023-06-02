import React from "react";
import "./mainform.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Mainform = () => {
  const [dat, setdat] = useState("");
  const navigae = useNavigate();
  const nextpage = () => {
    navigae("cse.js");
  };
  return (
    <>
      <form>
        <input
          type="text"
          required=""
          className="fields"
          placeholder="Enter the name "
          value={dat}
          onChange={(e) => {
            setdat(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          required=""
          className="fields"
          placeholder="Enter the usn "
        />
        <br />
        <input
          type="email"
          required=""
          className="fields"
          placeholder="Enter the email"
        />
        <br />

        <input type="radio" id="cs" name="course" />
        <label htmlFor="cs">cse</label>
        <br />
        <input type="radio" id="is" name="course" />
        <label htmlFor="is">Ise</label>
        <br />
        <input type="radio" id="ms" name="course" />
        <label htmlFor="ms">mechanical</label>
        <br />
        <input type="radio" id="ec" name="course" />
        <label htmlFor="ec">ec</label>
        <br />
        <div className="btnn">
          <a onClick={nextpage} className="btn" href="">
            next
          </a>
        </div>
      </form>
    </>
  );
};

export default Mainform;
