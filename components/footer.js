import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "Tamil", label: "Tamil" },
  { value: "Hindi", label: "Hindi" },
  { value: "Malayalam", label: "Malayalam" },
];

export default function Footer() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <footer className="footer">
      <Container>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto order-last order-sm-first">
            <div className="selectDropdown">
              <Dropdown
                options={options}
                onChange={setSelectedOption}
                defaultValue={selectedOption}
                placeholder="Select Language"
              />
            </div>
            <div className="socialIcons">
              <div>
                <Link href="/">
                  <a>
                    <svg
                      id="Group_54"
                      data-name="Group 54"
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.694"
                      height="22"
                      viewBox="0 0 11.694 22"
                    >
                      <g id="Group_53" data-name="Group 53">
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M312.928,212.282l.606-3.951h-3.791v-2.564a1.976,1.976,0,0,1,2.228-2.135h1.724v-3.364a21.022,21.022,0,0,0-3.06-.267c-3.122,0-5.163,1.892-5.163,5.318v3.012H302v3.951h3.471v9.552a13.814,13.814,0,0,0,4.272,0v-9.552Z"
                          transform="translate(-302 -200)"
                          fill="#272f3e"
                        />
                      </g>
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17.875"
                      viewBox="0 0 22 17.875"
                    >
                      <path
                        id="Path_13"
                        data-name="Path 13"
                        d="M22,4.116a9.4,9.4,0,0,1-2.6.712,4.485,4.485,0,0,0,1.984-2.493,9.013,9.013,0,0,1-2.86,1.092,4.51,4.51,0,0,0-7.8,3.084,4.644,4.644,0,0,0,.1,1.028,12.766,12.766,0,0,1-9.3-4.718A4.517,4.517,0,0,0,2.918,8.85,4.455,4.455,0,0,1,.88,8.295v.05a4.531,4.531,0,0,0,3.614,4.432,4.5,4.5,0,0,1-1.183.148,3.987,3.987,0,0,1-.854-.077,4.553,4.553,0,0,0,4.214,3.142,9.061,9.061,0,0,1-5.592,1.924A8.448,8.448,0,0,1,0,17.851a12.7,12.7,0,0,0,6.919,2.024A12.748,12.748,0,0,0,19.756,7.041c0-.2-.007-.392-.017-.583A9,9,0,0,0,22,4.116Z"
                        transform="translate(0 -2)"
                        fill="#272f3e"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="noFill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.002"
                      height="19.65"
                      viewBox="0 0 22.002 19.65"
                    >
                      <g id="you_tube" transform="translate(-5638 -6379)">
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M28.608,14.1a3.231,3.231,0,0,1,1.939,2.474A44.7,44.7,0,0,1,31,23.347a47.073,47.073,0,0,1-.453,6.751,3.231,3.231,0,0,1-1.939,2.474C26.886,33.15,20,33.15,20,33.15s-6.868,0-8.608-.6a3.231,3.231,0,0,1-1.939-2.474A46.9,46.9,0,0,1,9,23.324a47.073,47.073,0,0,1,.453-6.751,3.306,3.306,0,0,1,1.939-2.5C13.114,13.5,20,13.5,20,13.5S26.886,13.5,28.608,14.1Zm-5.074,9.225-5.727,4.208V19.116Z"
                          transform="translate(5629 6365.5)"
                          fill="#272f3e"
                        />
                        <path
                          id="Path_11-2"
                          data-name="Path 11"
                          d="M28.608,14.1a3.231,3.231,0,0,1,1.939,2.474A44.7,44.7,0,0,1,31,23.347a47.073,47.073,0,0,1-.453,6.751,3.231,3.231,0,0,1-1.939,2.474C26.886,33.15,20,33.15,20,33.15s-6.868,0-8.608-.6a3.231,3.231,0,0,1-1.939-2.474A46.9,46.9,0,0,1,9,23.324a47.073,47.073,0,0,1,.453-6.751,3.306,3.306,0,0,1,1.939-2.5C13.114,13.5,20,13.5,20,13.5S26.886,13.5,28.608,14.1Zm-5.074,9.225-5.727,4.208V19.116Z"
                          transform="translate(5629 6365.5)"
                          fill="#272f3e"
                        />
                        <path
                          className="svg"
                          id="Intersection_1"
                          data-name="Intersection 1"
                          d="M8.8,5.573l5.625,4.295L8.8,14.027Z"
                          transform="translate(5638 6379)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/">
                  <a>
                 
<svg id="_001-instagram" data-name="001-instagram" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 22">
  <g id="Group_6203" data-name="Group 6203">
    <path id="Path_3651" data-name="Path 3651" d="M16.5,0H5.5A5.516,5.516,0,0,0,0,5.5v11A5.517,5.517,0,0,0,5.5,22h11A5.517,5.517,0,0,0,22,16.5V5.5A5.516,5.516,0,0,0,16.5,0ZM11,15.583A4.583,4.583,0,1,1,15.583,11,4.584,4.584,0,0,1,11,15.583Zm5.958-9.167a1.375,1.375,0,1,1,1.375-1.375A1.375,1.375,0,0,1,16.958,6.417Z"/>
  </g>
</svg>

                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-8 col-12">
            <div className="w-75 mx-auto help" >
              <span className="d-block mb-3">Help</span>
              <div className="d-flex justify-content-between flex-wrap gap-3">
                <div>
                  <Link href="/">
                    <a>
                      {" "}
                      <p>Become a partner</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      {" "}
                      <p>Bug bounty</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      {" "}
                      <p>Community</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      {" "}
                      <p>About</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      {" "}
                      <p>Blog</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a>
                      <p>Become a partner</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Bug bounty</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Community</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>About</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Blog</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a>
                      <p>Become a partner</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Bug bounty</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Community</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>About</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <p>Blog</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3 col-12">
            <span className="d-block mb-3">Resources</span>
            <div>
              <Link href="/">
                <a>
                  <p>Newsroom</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>New features</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>Our founders</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>Careers</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>Investors</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p className="mb-0">© Appkodes. All rights reserved.</p>
          </div>
          <div className="d-flex gap-3">
            <p className="mb-0">
              {" "}
              <Link href="/">
                <a><p>Privacy Policy</p></a>
              </Link>{" "}
            </p>
            <p className="mb-0">
              {" "}
              <Link href="/">
              <a><p>Terms of Service</p></a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
