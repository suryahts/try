import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Container,
  Dropdown,
  DropdownButton,
  Button,
  Alert,
} from "react-bootstrap";
import Drawer from "rc-drawer";

import logo from "../public/logo.png";
import nofiIcon from "../public/notification.svg";
import eth from "../public/eth.svg";
import polygon from "../public/polygon.svg";
import profile1 from "../public/img.jpg";

// Category Icons
import cat1 from "../public/cat1.svg";
import cat2 from "../public/cat2.svg";
import cat3 from "../public/cat3.svg";
import cat4 from "../public/cat4.svg";
import cat5 from "../public/cat5.svg";
import cat6 from "../public/cat6.svg";
import cat7 from "../public/cat7.svg";

// profile Icons
import copy from "../public/copy.svg";
import profile from "../public/Iconly-Bulk-Profile.svg";
import category from "../public/Iconly-Bulk-Category.svg";
import heart from "../public/Iconly-Bulk-Heart.svg";
import setting from "../public/Iconly-Bulk-Setting.svg";
import login from "../public/Iconly-Bulk-Login.svg";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import Autocomplete from "./autoComplete";

const notification = [
  {
    id: 1,
    Name: "John",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: 2,
    Name: "Surya's",
    content:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  },
  {
    id: 3,
    Name: "Surya's",
    content:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
];

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [show, setShow] = useState(true);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);

  const searchItems = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic sfsklf  flskjsdfjdsfjdfshfshfhsfk",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div>
        <span className="d-flex align-items-center overflow-hidden gap-3">
          <div style={{ flex: "0 0 auto" }}>
            {/* <Image
              src={profile1}
              width={40}
              height={40}
              className="borderRadius50 d-flex"
            /> */}
          </div>
          <span
            className="text-truncate bold"
            style={{ display: "block", textAlign: "left" }}
          >
            {" "}
            {item.name}
          </span>
        </span>
      </div>
    );
  };

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  // if (!supportsPWA) {
  //   return null;
  // }

  return (
    <header>
      <Navbar className="" fixed="top" expand="lg">
        <Container>
          <div className="">
            <div className="d-flex gap-5">
              <Drawer
                open={openDrawer}
                width="100%"
                handler={false}
                level={null}
                autoFocus={false}
                showMask={true}
                maskClosable={true}
                onClose={() => setOpenDrawer(false)}
              >
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
                    <div className="d-flex align-items-center gap-2 profile overflow-hidden">
                      <div className="flexAuto">
                        {/* <Image
                        alt=""
                        className=""
                        src={profile1}
                        width="45"
                        height="45"
                      /> */}
                      </div>
                      <div className="overflow-hidden">
                        <p className="mb-1 text-truncate">
                          hihjgghfdhgfdgdhihjgghfdhgfdgd78895642
                        </p>
                        <p className="mb-0">profile</p>
                      </div>
                    </div>
                    <div onClick={() => setOpenDrawer(false)}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 14.3 14.3"
                        >
                          <g
                            id="Group_147"
                            data-name="Group 147"
                            transform="translate(-1.993 -1.92)"
                          >
                            <path
                              id="Path_56"
                              data-name="Path 56"
                              d="M9.141,16.07a7,7,0,1,1,4.951-2.047A6.977,6.977,0,0,1,9.141,16.07Zm0-12.88A5.882,5.882,0,1,0,13.3,4.913,5.841,5.841,0,0,0,9.142,3.19Z"
                              transform="translate(0 0)"
                              fill="#161f30"
                              stroke="#161f30"
                              strokeWidth="0.3"
                            />
                            <path
                              id="Path_57"
                              data-name="Path 57"
                              d="M9.955,15.2a.56.56,0,0,1-.4-.956l4.753-4.753a.56.56,0,0,1,.792.792l-4.753,4.753a.556.556,0,0,1-.4.164Z"
                              transform="translate(-3.189 -3.193)"
                              fill="#161f30"
                            />
                            <path
                              id="Path_58"
                              data-name="Path 58"
                              d="M14.708,15.2a.558.558,0,0,1-.4-.164L9.559,10.284a.56.56,0,0,1,.792-.792L15.1,14.245a.56.56,0,0,1-.4.956Z"
                              transform="translate(-3.19 -3.193)"
                              fill="#161f30"
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Dropdown className="dropDrown">
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span style={{ marginRight: "10px" }}>
                          {" "}
                          Browse by category
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="7.73"
                          viewBox="0 0 10 5.73"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-18.3 -24.4)"
                          >
                            <g
                              id="Icon-Chevron-Left"
                              transform="translate(18.3 24.4)"
                            >
                              <path
                                id="Fill-35"
                                d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                transform="translate(218.7 310.6)"
                                fill="#161f30"
                              />
                            </g>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat1}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">All</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat2}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Art</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat3}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Collectibles</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat4}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Domain Names</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat5}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Music</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="6">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat6}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Photography</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="7">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat7}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Sports</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="mb-3">
                    <Dropdown className="dropDrown">
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span style={{ marginRight: "10px" }}>Help</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="7.73"
                          viewBox="0 0 10 5.73"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-18.3 -24.4)"
                          >
                            <g
                              id="Icon-Chevron-Left"
                              transform="translate(18.3 24.4)"
                            >
                              <path
                                id="Fill-35"
                                d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                transform="translate(218.7 310.6)"
                                fill="#161f30"
                              />
                            </g>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">
                          <Link href="/">
                            <a>
                              <span className="">Privacy policy</span>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <Link href="/">
                            <a>
                              <span className="">Terms & condition</span>
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link href="/" className="">
                        <a>Stats</a>
                      </Link>
                      <div
                        className="rightdir"
                        style={{ transform: "rotate(-90deg)" }}
                      >
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="7.73"
                            viewBox="0 0 10 5.73"
                          >
                            <g
                              id="Group_1"
                              data-name="Group 1"
                              transform="translate(-18.3 -24.4)"
                            >
                              <g
                                id="Icon-Chevron-Left"
                                transform="translate(18.3 24.4)"
                              >
                                <path
                                  id="Fill-35"
                                  d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                  transform="translate(218.7 310.6)"
                                  fill="#161f30"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Dropdown className="dropDrown">
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span style={{ marginRight: "10px" }}> Resources</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="7.73"
                          viewBox="0 0 10 5.73"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-18.3 -24.4)"
                          >
                            <g
                              id="Icon-Chevron-Left"
                              transform="translate(18.3 24.4)"
                            >
                              <path
                                id="Fill-35"
                                d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                transform="translate(218.7 310.6)"
                                fill="#161f30"
                              />
                            </g>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">
                          <span>Newsroom </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>New features </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <span>Our founders </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4">
                          <span>Careers </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                          <span>Investors </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Link href="/create">
                    <a>
                      {" "}
                      <Button variant="primary" className="createButton mb-5">
                        Logout
                      </Button>
                    </a>
                  </Link>
                  <Link href="/create">
                    <a>
                      {" "}
                      <Button variant="primary" className="createButton">
                        Create
                      </Button>
                    </a>
                  </Link>
                </div>
              </Drawer>
              <div className="d-flex align-items-center gap-4">
                <div className="d-block d-xl-none">
                  <span onClick={() => setOpenDrawer(true)}>
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="19.667"
                        viewBox="0 0 24 18.667"
                      >
                        <path
                          id="Path_154"
                          data-name="Path 154"
                          d="M3,6.333A1.333,1.333,0,0,1,4.333,5H25.667a1.333,1.333,0,1,1,0,2.667H4.333A1.333,1.333,0,0,1,3,6.333Zm0,8A1.333,1.333,0,0,1,4.333,13H25.667a1.333,1.333,0,1,1,0,2.667H4.333A1.333,1.333,0,0,1,3,14.333ZM4.333,21a1.333,1.333,0,0,0,0,2.667H25.667a1.333,1.333,0,1,0,0-2.667Z"
                          transform="translate(-3 -5)"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <Link href="/">
                  <a className="logo">
                    <span>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={logo}
                        height={28}
                      />
                    </span>
                  </a>
                </Link>
                {/* <div className="">
                            <FormControl
                                type="search"
                                placeholder="Search colloction, item or user"
                                className="search"
                                aria-label="Search"
                            />
                        </div> */}

                <div className="d-none d-xl-flex align-items-center">
                  <div className="align-self-center">
                    <Dropdown className="dropDrown">
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className=""
                      >
                        <span style={{ marginRight: "10px" }}>
                          {" "}
                          Browse by category
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="7.73"
                          viewBox="0 0 10 5.73"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-18.3 -24.4)"
                          >
                            <g
                              id="Icon-Chevron-Left"
                              transform="translate(18.3 24.4)"
                            >
                              <path
                                id="Fill-35"
                                d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                transform="translate(218.7 310.6)"
                                fill="#161f30"
                              />
                            </g>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat1}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">All</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat2}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Art</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat3}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Collectibles</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat4}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Domain Names</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat5}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Music</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="6">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat6}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Photography</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="7">
                          <Link href="/">
                            <a>
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    marginTop: "5px",
                                    marginRight: "10px",
                                  }}
                                >
                                  <Image
                                    alt=""
                                    className={`${styles.contentImage} `}
                                    src={cat7}
                                    width={18}
                                    height={18}
                                  />
                                </div>
                                <span className="ml-2">Sports</span>
                              </div>
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <NavDropdown
                      id="navbarScrollingDropdown"
                      align="start"
                      className="dropDrown"
                    >
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className="hai"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            id="Path_175"
                            data-name="Path 175"
                            d="M7.025.5H1.274A.774.774,0,0,0,.5,1.274V7.025a.774.774,0,0,0,.774.774H7.025A.774.774,0,0,0,7.8,7.025V1.274A.774.774,0,0,0,7.025.5ZM6.251,6.251h-4.2v-4.2h4.2v4.2ZM15.726.5H9.975a.774.774,0,0,0-.774.774V7.025a.774.774,0,0,0,.774.774h5.751a.774.774,0,0,0,.774-.774V1.274A.774.774,0,0,0,15.726.5Zm-.774,5.751h-4.2v-4.2h4.2ZM7.025,9.2H1.274A.774.774,0,0,0,.5,9.975v5.751a.774.774,0,0,0,.774.774H7.025a.774.774,0,0,0,.774-.774V9.975A.774.774,0,0,0,7.025,9.2Zm-.774,5.751h-4.2v-4.2h4.2v4.2ZM12.85,9.2a3.65,3.65,0,1,0,3.65,3.65A3.654,3.654,0,0,0,12.85,9.2Zm0,5.751a2.1,2.1,0,1,1,2.1-2.1A2.1,2.1,0,0,1,12.85,14.952Z"
                            transform="translate(-0.5 -0.5)"
                          />
                        </svg>
                        <span> Browse by category</span>
                      </Dropdown.Toggle>
                      <Dropdown.Item eventKey="1">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat1}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">All</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat2}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Art</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat3}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Collectibles</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat4}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Domain Names</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat5}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Music</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="6">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat6}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Photography</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="7">
                        <Link href="/">
                          <a>
                            <div className="d-flex align-items-center">
                              <div
                                style={{
                                  marginTop: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <Image
                                  alt=""
                                  className={`${styles.contentImage} `}
                                  src={cat7}
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <span className="ml-2">Sports</span>
                            </div>
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </NavDropdown>
                  </div>

                  <Nav.Link href="#action1">Stats</Nav.Link>

                  <div>
                    <Dropdown className="dropDrown">
                      <Dropdown.Toggle
                        id="dropdown-custom-components"
                        className=""
                      >
                        <span style={{ marginRight: "10px" }}> Resources</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="7.73"
                          viewBox="0 0 10 5.73"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-18.3 -24.4)"
                          >
                            <g
                              id="Icon-Chevron-Left"
                              transform="translate(18.3 24.4)"
                            >
                              <path
                                id="Fill-35"
                                d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5"
                                transform="translate(218.7 310.6)"
                                fill="#161f30"
                              />
                            </g>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">
                          <span>Newsroom </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>New features </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <span>Our founders </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4">
                          <span>Careers </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                          <span>Investors </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navRight">
            <div className="search">
              {/* <FormControl
                                type="search"
                                placeholder="Search colloction, item or user"
                                className="search"
                                aria-label="Search"
                            /> */}
              <ReactSearchAutocomplete
                items={searchItems}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
              {/* <Autocomplete
        suggestions={<div className='d-flex align-items-center overflow-hidden gap-3'>
        <div style={{flex: '0 0 auto'}}>
    <Image src={profile1} width={40} height={40}  className="borderRadius50 d-flex"/>
    </div>
     <span className='text-truncate bold' style={{ display: 'block', textAlign: 'left' }}>hai</span>            
     </div>}
      /> */}
            </div>

            <div className="rightContent gap-0 gap-md-4">
              {/* <div className="d-none d-xl-flex align-items-center" >
                                    <div className="align-self-center">
                                        <Dropdown className="dropDrown">
                                            <Dropdown.Toggle id="dropdown-custom-components" className="">
                                                <span style={{ marginRight: "10px" }}> Browse by category</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7.73" viewBox="0 0 10 5.73">
                                                    <g id="Group_1" data-name="Group 1" transform="translate(-18.3 -24.4)">
                                                        <g id="Icon-Chevron-Left" transform="translate(18.3 24.4)">
                                                            <path id="Fill-35" d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5" transform="translate(218.7 310.6)" fill="#161f30" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="1">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat1} width={18} height={18} /></div>
                                                            <span className='ml-2'>All</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="2">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat2} width={18} height={18} /></div>
                                                            <span className='ml-2'>Art</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="3">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat3} width={18} height={18} /></div>
                                                            <span className='ml-2'>Collectibles</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="4">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat4} width={18} height={18} /></div>
                                                            <span className='ml-2'>Domain Names</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="5">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat5} width={18} height={18} /></div>
                                                            <span className='ml-2'>Music</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="6">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat6} width={18} height={18} /></div>
                                                            <span className='ml-2'>Photography</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="7">
                                                    <Link href="/"><a>
                                                        <div className='d-flex align-items-center'>
                                                            <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat7} width={18} height={18} /></div>
                                                            <span className='ml-2'>Sports</span>
                                                        </div>
                                                    </a></Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <NavDropdown id="navbarScrollingDropdown" align="start" className='dropDrown'>
                                            <Dropdown.Toggle id="dropdown-custom-components" className="hai">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                    <path id="Path_175" data-name="Path 175" d="M7.025.5H1.274A.774.774,0,0,0,.5,1.274V7.025a.774.774,0,0,0,.774.774H7.025A.774.774,0,0,0,7.8,7.025V1.274A.774.774,0,0,0,7.025.5ZM6.251,6.251h-4.2v-4.2h4.2v4.2ZM15.726.5H9.975a.774.774,0,0,0-.774.774V7.025a.774.774,0,0,0,.774.774h5.751a.774.774,0,0,0,.774-.774V1.274A.774.774,0,0,0,15.726.5Zm-.774,5.751h-4.2v-4.2h4.2ZM7.025,9.2H1.274A.774.774,0,0,0,.5,9.975v5.751a.774.774,0,0,0,.774.774H7.025a.774.774,0,0,0,.774-.774V9.975A.774.774,0,0,0,7.025,9.2Zm-.774,5.751h-4.2v-4.2h4.2v4.2ZM12.85,9.2a3.65,3.65,0,1,0,3.65,3.65A3.654,3.654,0,0,0,12.85,9.2Zm0,5.751a2.1,2.1,0,1,1,2.1-2.1A2.1,2.1,0,0,1,12.85,14.952Z" transform="translate(-0.5 -0.5)" />
                                                </svg>
                                                <span> Browse by category</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Item eventKey="1">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat1} width={18} height={18} /></div>
                                                        <span className='ml-2'>All</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat2} width={18} height={18} /></div>
                                                        <span className='ml-2'>Art</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="3">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat3} width={18} height={18} /></div>
                                                        <span className='ml-2'>Collectibles</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="4">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat4} width={18} height={18} /></div>
                                                        <span className='ml-2'>Domain Names</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="5">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat5} width={18} height={18} /></div>
                                                        <span className='ml-2'>Music</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="6">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat6} width={18} height={18} /></div>
                                                        <span className='ml-2'>Photography</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="7">
                                                <Link href="/"><a>
                                                    <div className='d-flex align-items-center'>
                                                        <div style={{ marginTop: "5px", marginRight: "10px" }}><Image alt="" className={`${styles.contentImage} `} src={cat7} width={18} height={18} /></div>
                                                        <span className='ml-2'>Sports</span>
                                                    </div>
                                                </a></Link>
                                            </Dropdown.Item>
                                        </NavDropdown>
                                    </div>

                                    <Nav.Link href="#action1">Stats</Nav.Link>

                                    <div>
                                        <Dropdown className="dropDrown">
                                            <Dropdown.Toggle id="dropdown-custom-components" className="">
                                                <span style={{ marginRight: "10px" }}> Resources</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7.73" viewBox="0 0 10 5.73">
                                                    <g id="Group_1" data-name="Group 1" transform="translate(-18.3 -24.4)">
                                                        <g id="Icon-Chevron-Left" transform="translate(18.3 24.4)">
                                                            <path id="Fill-35" d="M-218.7-309.87l.73-.73,4.27,4.307,4.27-4.307.73.73-5,5-5-5" transform="translate(218.7 310.6)" fill="#161f30" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="1"><span>Newsroom </span></Dropdown.Item>
                                                <Dropdown.Item eventKey="2"><span>New features </span></Dropdown.Item>
                                                <Dropdown.Item eventKey="3"><span>Our founders </span></Dropdown.Item>
                                                <Dropdown.Item eventKey="4"><span>Careers  </span></Dropdown.Item>
                                                <Dropdown.Item eventKey="5"><span>Investors </span></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div> */}
              <div>
                <Dropdown
                  className="dropDrown notification"
                  align="end"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Toggle id="dropdown-custom-components" className="">
                    <div className="notifiIcon">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 28 28"
                      >
                        <g
                          id="Group_3"
                          data-name="Group 3"
                          transform="translate(-1473 -23)"
                        >
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M23.944,11.595V25.722H4.278V6.056H18.405a7.389,7.389,0,0,1-.2-1.639,7.389,7.389,0,0,1,.2-1.639H4.278A3.285,3.285,0,0,0,1,6.056V25.722A3.287,3.287,0,0,0,4.278,29H23.944a3.287,3.287,0,0,0,3.278-3.278V11.595A15.012,15.012,0,0,1,23.944,11.595Zm1.639-2.262Z"
                            transform="translate(1472 22)"
                            fill="#161f30"
                          />
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M15.833,1A4.167,4.167,0,1,0,20,5.167,4.167,4.167,0,0,0,15.833,1Z"
                            transform="translate(1481 22)"
                            fill="#068206"
                          />
                        </g>
                      </svg> */}
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0 bold fM">Notification</h5>
                      <p className="mb-0 fS primary">View all</p>
                    </div>
                    <>
                      {notification.length ? (
                        notification.map((data, key) => {
                          return (
                            <div className="content d-flex gap-2" key={key}>
                              <div className="flexAuto">
                                {/* <Image src={profile1} width={30} height={30} alt="" className="borderRadius50"/> */}
                              </div>
                              <p className="fS">
                                <Link href="/" className="">
                                  <a>
                                    <span className="bold">{data.Name}</span>
                                  </a>
                                </Link>{" "}
                                {data.content}
                              </p>
                            </div>
                          );
                        })
                      ) : (
                        <div className="ifEmpty">
                          <Image
                            alt=""
                            className={styles.contentImage}
                            src={nofiIcon}
                            width={30}
                            height={30}
                          />
                          <p className="mb-0">No new Notification</p>
                        </div>
                      )}
                    </>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {darkTheme !== undefined && (
                <>
                  <div id="themeChange">
                    <input
                      type="checkbox"
                      name="rGroup"
                      value="1"
                      id="r1"
                      checked={darkTheme}
                      onChange={handleToggle}
                    />
                    <label className="icon" htmlFor="r1"></label>
                  </div>
                </>
              )}

              <div>
                <Button
                  variant="primary"
                  className="createBtn"
                  id="setup_button"
                  aria-label="Install app"
                  title="Install app"
                  onClick={onClick}
                >
                  Install
                </Button>
              </div>
              <div>
                <DropdownButton
                  className="dropDrown profile"
                  align="end"
                  title=""
                  id="dropdown-menu-align-end"
                >
                  <div className="px-3 pt-3">
                    <div className="refCode">
                      <p className="mb-0 secondary">
                        lkjhgfdsazxcvbnmpoiuytrewq
                      </p>
                      <div className="pt-2" style={{ flex: "0 0 auto" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={copy}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>

                    <div className="curtBalance">
                      <div className="d-flex justify-content-between align-items-center secondary mb-2">
                        <span>Current Balance</span>{" "}
                      </div>

                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="d-flex align-items-center">
                          <Image
                            alt=""
                            className={styles.contentImage}
                            src={eth}
                            width={19}
                            height={20}
                          />
                        </span>
                        <span>1.65 BTC</span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <span className="d-flex align-items-center">
                          <Image
                            alt=""
                            className={styles.contentImage}
                            src={polygon}
                            width={18}
                            height={19}
                          />
                        </span>
                        <span>51.18 MATIC</span>
                      </div>

                      {/* <h3 className={`${styles.title} mb-0`}>1.65 BTC </h3> */}
                      <button
                        className={`${styles.button} ${styles.primary} ${styles.dim} w-100 mt-3`}
                        alt=""
                        type="button"
                      >
                        Add Money
                      </button>
                    </div>
                  </div>
                  <Dropdown.Item eventKey="1">
                    <Link href="/profile/profile">
                      <a>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ marginTop: "5px", marginRight: "10px" }}
                          >
                            <span className="profileIcon" />
                          </div>
                          <span className="ml-2">Profile</span>
                        </div>
                      </a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <Link href="/profile/collection">
                      <a>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ marginTop: "5px", marginRight: "10px" }}
                          >
                            <span className="collectionIcon" />
                          </div>
                          <span className="ml-2">Collections</span>
                        </div>
                      </a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    <Link href="/">
                      <a>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ marginTop: "5px", marginRight: "10px" }}
                          >
                            <span className="FavouredIcon" />
                          </div>
                          <span className="ml-2">Favoured</span>
                        </div>
                      </a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">
                    <Link href="/profile/notificationSetting">
                      <a>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ marginTop: "5px", marginRight: "10px" }}
                          >
                            <span className="SettingsIcon" />
                          </div>
                          <span className="ml-2">Settings</span>
                        </div>
                      </a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="5">
                    <Link href="/">
                      <a>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ marginTop: "5px", marginRight: "10px" }}
                          >
                            <span className="LogoutIcon" />
                          </div>
                          <span className="ml-2">Logout</span>
                        </div>
                      </a>
                    </Link>
                  </Dropdown.Item>
                  {/* <Link href="/signin"><a>Signin (Just link)</a></Link> */}
                </DropdownButton>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <p className="mb-0 text-center">
          Change this and that and try  again. Duis mollis, est non commodo
          
        </p>
      </Alert> */}
    </header>
  );
}
