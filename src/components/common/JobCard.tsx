import "./css/JobCard.css";
import { Accordion } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useState } from "react";
import { Tooltip } from "@mui/material";

const JobCard = (props: any) => {
  const publicationString = props.job.publication_date.replace(/T|Z/g, " ");
  const [isSaved, setSaved] = useState(false);

  const toggleSaved = (e: any) => {
    e.stopPropagation();
    setSaved((prevSaved) => !prevSaved);
  };
  return (
    <Accordion.Item eventKey={props.job.id}>
      <Accordion.Header>
        <div className="Card">
          <div className="CardTitle">{props.job.headline}</div>
          <div className="CardDescription">
            {props.job.description.conditions}
          </div>
          <div className="CardPublicationDate">{publicationString}</div>
        </div>
        <span
          className="SaveIcon"
          style={{ float: "right" }}
          onClick={(e) => toggleSaved(e)}
        >
          {" "}
          {!isSaved ? (
            <Tooltip title="Spara annons">
            <Star style={{ fontSize: "24px", margin: "10px" }} />
            </Tooltip>
          ) : (
            <Tooltip title="Ta bort sparad annons">
            <StarFill style={{ fontSize: "24px", margin: "10px" }} />
            </Tooltip>
          )}
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <div className="CardDescription">{props.job.description.text}</div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default JobCard;
