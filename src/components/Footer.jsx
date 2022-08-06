import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-primary mt-5 text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://www.github.com/Ajumah22">
          Funmilola Oresajo
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
