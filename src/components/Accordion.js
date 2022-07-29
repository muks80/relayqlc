import React from 'react';
import '../App.css';
import Accordion from 'react-bootstrap/Accordion';
import { CgShapeCircle } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";

const Accord = ({title, array, mins}) => {
    return (
        <div>
            <Accordion className="mb-5 accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header><CgShapeCircle className="button-circle" size={40}/>{title}<span className="accord-mins">{mins}</span></Accordion.Header>
                {array && array.map(item => (
                  <Accordion.Body key={title}>
                    <p>
                      <CgShapeCircle className="body-circle" size={40}/>
                      {item}
                      <FaChevronRight className="body-arrow"/>
                    </p>
                  </Accordion.Body>
                ))}
              </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Accord;