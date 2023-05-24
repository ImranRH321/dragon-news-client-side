import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center my-5">
        <img src={logo} alt="" />
        <p>
          <span>Journalism Without Fear or Favour</span>
        </p>
        {/* <p>{moment().format()}</p>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p> */}
        <h1 className="text-success">
          {moment().format("dddd, MMMM D ,YYYY")}
        </h1>
      </div>
      <div className="d-flex gap-3">
        <Button variant="danger">Latest</Button>

        <Marquee>
          <b>
            {" "}
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as.... Match Highlights: Germany vs
            Spain — as it happened ! Match Highlights: Germany vs Spain as....
          </b>
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
