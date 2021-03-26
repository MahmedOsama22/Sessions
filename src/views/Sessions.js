import React from "react";
// import Timer from"../views/Timer"
// reactstrap components
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import SessionTimer from "./Timer";

class RegularTables extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                <CardTitle tag="h4">Session</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <SessionTimer />

                  </Row>
                  <Button
                    color="primary"
                    className="mr-5"
                    // onClick={() => setModal1(true)}
                  >
                    Start session
                  </Button>
                  <Button
                    color="info"
                    //  onClick={() => setModal2(true)}
                  >
                    End session
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h4>Modal</h4>

              {/* <Modal isOpen={modal1} toggle={() => setModal1(false)}> */}
              <div
              // className="modal-header justify-content-center"
              >
                {/* <button */}
                {/* className="close" */}
                {/* type="button" */}
                {/* // onClick={() => setModal1(false)} */}
                {/* > */}
                {/* <i className="now-ui-icons ui-1_simple-remove"></i> */}
                {/* </button> */}
                <h4
                //  className="title title-up"
                >
                  Session Details
                </h4>
              </div>
              {/* <ModalBody> */}
              <p>Far far away, behind the word mountains, far from the</p>
              {/* </ModalBody> */}
              <div
              // className="modal-footer"
              >
                <Button color="default" type="button">
                  {/* Started/Ended */}
                  {/* <Timer/> */}
                </Button>
                {/* <Button
                    color="danger"
                    type="button"
                    // onClick={() => setModal1(false)}
                  >
                    Close
                  </Button> */}
              </div>
              {/* </Modal> */}
              {/* <Modal */}
              {/* // modalClassName="modal-mini modal-info" */}
              {/* // toggle={() => setModal2(false)} */}
              {/* // isOpen={modal2} */}
              {/* > */}
              <div className="modal-header justify-content-center">
                <div
                // className="modal-profile"
                >
                  {/* <i className="now-ui-icons users_circle-08"></i> */}
                </div>
              </div>
              {/* <ModalBody> */}
              {/* <p>Always have an access to your profile</p> */}
              {/* </ModalBody> */}
              <div
              // className="modal-footer"
              >
                {/* <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button> */}
                {/* <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    // onClick={() => setModal2(false)}
                  >
                    Close
                  </Button> */}
              </div>
              {/* </Modal> */}
            </Col>
            <Col xs={12}>
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Old Sessions</CardTitle>
                  {/* <p className="category"> Here is a subtitle for this table</p> */}
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
