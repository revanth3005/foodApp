import React from "react";
import { useState } from "react";
import axios from "axios";
const Report = () => {
  const [report, setReport] = useState({
    email: "",
    comment: "",
  });
  const reportHandler = (event) => {
    setReport({
      ...report,
      [event.target.name]: event.target.value,
    });
  };
  const submitReport = async (e) => {
    e.preventDefault();
    const sendReport = await axios.post(
      "https://foodservice-6f06f-default-rtdb.asia-southeast1.firebasedatabase.app/reportUsers.json",
      JSON.stringify({
        user: report,
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log("sendReport", sendReport.statusText);
    if (sendReport.statusText === "OK") {
      setReport({
        email: "",
        comment: "",
      });
      alert("your Request has been received");
    }
  };
  return (
    <div className="modal" id="reportModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">
              Report
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-dark">
            <form onSubmit={submitReport}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  required
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={report.email}
                  onChange={reportHandler}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  required
                  value={report.comment}
                  name="comment"
                  onChange={reportHandler}
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <button
                type="submit"
                className={`btn btn-outline-success mt-2`}
                data-bs-dismiss="modal"
              >
                Report
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
