import React from "react";

import "./Feedback.css";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import Rating from "@material-ui/lab/Rating";

export const Feedback = () => {
  return (
    <div className="feedback-wrapper" id="feedback">
      <div className="makeStyles-paper-5">
        <Form>
          <h2 id="feedback-form-title"> Feedback!</h2>

          <div className="feedback-text">
            <textarea
              className="feedback-text-area"
              placeholder="Feedback here....."
              cols="37"
              rows="10"
            ></textarea>
          </div>

          <div className="rating">
            <Rating name="hover-feedback" precision={0.5} />
          </div>

          <div className="submit-btn-feedback-form">
            <Button type="submit">
              <strong>Submit</strong>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
