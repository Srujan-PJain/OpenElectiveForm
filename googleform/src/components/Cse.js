import React from "react";

const Cse = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>CSe</h1>

      <form>
        <input
          type="text"
          required=""
          class="fields"
          placeholder="Enter the name "
        />
        <br />

        <input
          type="text"
          required=""
          class="fields"
          placeholder="Enter the usn "
        />
        <br />
        <input
          type="email"
          required=""
          class="fields"
          placeholder="Enter the email"
        />
        <br />

        <input type="radio" id="cs" name="course" value="cse" />
        <label for="cs">cse</label>
        <br />
        <input type="radio" id="is" name="course" value="Ise" />
        <label for="is">Ise</label>
        <br />
        <input type="radio" id="ms" name="course" value="mee" />
        <label for="ms">mechanical</label>
        <br />
        <input type="radio" id="ec" name="course" value="ece" />
        <label for="ec">ec</label>
        <br />
        <div class="btnn">
          <a class="btn" href="">
            next
          </a>
        </div>
      </form>
    </>
  );
};

export default Cse;
