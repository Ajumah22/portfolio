import Accordion from "react-bootstrap/Accordion";

function Experience() {
  return (
    <div>
      <h4 className="text-center text-primary my-4
      ">Work Experience</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Darway Coast Nigeria Limited</Accordion.Header>
          <Accordion.Body>
            <h6>Date: February to June, 2022</h6>
            <h6>Designation: Junior Software Programmer</h6>
            <p>
              <strong>Job Description:</strong> Be involved and participate in
              the overall application lifecycle. Compile and analyze data,
              processes, and codes to troubleshoot problems and identify areas
              for improvement. Collaborating with the front-end developers and
              other team members to establish objectives and design more
              functional, cohesive codes to enhance the user experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Ernst and Young</Accordion.Header>
          <Accordion.Body>
            <h6>Date: October, 2019 to August, 2020</h6>
            <h6>
              Designation: Client Service Officer (National Youth Service Corps)
            </h6>
            <p>
              <strong>Job Description:</strong> Identified and addressed service
              gaps, and recommended solutions. Took full ownership of customer
              issues and ensured total complete customer satisfaction of problem
              resolutions. Oversaw the collection of FIRS taxes and other Ogun
              State revenues; received and verified payment of bank cheques for
              accuracy and reference purpose.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Experience;
