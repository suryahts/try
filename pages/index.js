import React, { useEffect, useState, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Reusable imports
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.scss";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

import img from "../public/img.jpg";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import fire from "../public/fire.svg";
import spark from "../public/spark.svg";
import eth from "../public/eth.svg";
import rightArrows from "../public/rightArrowMore.svg";
import gif from "../public/products/prod4.png";
import gif2 from "../public/products/prod1.png";
import collection1 from "../public/collection1.png";
import collection2 from "../public/collection2.png";

// Product images
import prod1 from "../public/products/prod1.png";
import prod2 from "../public/products/prod2.png";
import prod3 from "../public/products/prod3.png";
import prod4 from "../public/products/prod4.png";
import prod5 from "../public/products/prod5.png";
import prod6 from "../public/products/prod6.png";

const APIEndPoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps() {
  const res = await fetch(APIEndPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { results = [] } = data;

  return (
    <div>
      <Head>
        <title>Home - NFT Market App</title>
        <meta
          name="description"
          content="Binance NFT Marketplace brings artists and creators together on a single platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.homemain}>
        <section className={`${styles.banner} banner mb-50`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className={styles.leftcontent}>
                  <div className={styles.title}>
                    Discover, collect, and sell
                    <br /> extraordinary NFTs
                  </div>
                  <p className={styles.secondary}>
                    Worlds first and largest NFT marketplace
                  </p>
                  <Link href="/allCategory">
                    <a>
                      {" "}
                      <button
                        className={`${styles.button} ${styles.green}`}
                        alt=""
                        type="button"
                      >
                        Explore
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="images">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // breakpoints={{
                    //   320: {
                    //     spaceBetween: 10,
                    //   },
                    //   575: {
                    //     spaceBetween: 10,
                    //   },
                    // }}
                    modules={[Autoplay, Navigation]}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <div className={styles.content}>
                            <Link href="/productDetail">
                              <a>
                                <div
                                  className={styles.imgWraper}
                                  style={{ height: "500px" }}
                                >
                                  <Image
                                    className={styles.contentImage}
                                    alt=""
                                    placeholder="blur"
                                    src={prod4}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>
                              </a>
                            </Link>

                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-6">
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className={styles.content}>
                                <Link href="/productDetail">
                                  <a>
                                    <div
                                      className={styles.imgWraper}
                                      style={{ height: "238px" }}
                                    >
                                      <Image
                                        className={styles.contentImage}
                                        alt=""
                                        placeholder="blur"
                                        src={prod1}
                                        layout="fill"
                                        objectFit="cover"
                                      />
                                    </div>
                                    <div
                                      className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                                    >
                                      <p className={styles.contentTitle}>
                                        Alexander Aizenshtat
                                      </p>
                                      <p className={styles.contentText}>
                                        By Locus
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className={styles.content}>
                                <Link href="/productDetail">
                                  <a>
                                    <div
                                      className={styles.imgWraper}
                                      style={{ height: "238px" }}
                                    >
                                      <Image
                                        className={styles.contentImage}
                                        alt=""
                                        placeholder="blur"
                                        src={prod2}
                                        layout="fill"
                                        objectFit="cover"
                                      />
                                    </div>
                                    <div
                                      className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                                    >
                                      <p className={styles.contentTitle}>
                                        Alexander Aizenshtat
                                      </p>
                                      <p className={styles.contentText}>
                                        By Locus
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                              <div className={styles.content}>
                                <Link href="/productDetail">
                                  <a>
                                    <div
                                      className={styles.imgWraper}
                                      style={{ height: "238px" }}
                                    >
                                      <Image
                                        className={styles.contentImage}
                                        alt=""
                                        placeholder="blur"
                                        src={prod3}
                                        layout="fill"
                                        objectFit="cover"
                                      />
                                    </div>
                                    <div
                                      className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                                    >
                                      <p className={styles.contentTitle}>
                                        Alexander Aizenshtat
                                      </p>
                                      <p className={styles.contentText}>
                                        By Locus
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                              <div className={styles.content}>
                                <Link href="/productDetail">
                                  <a>
                                    <div
                                      className={styles.imgWraper}
                                      style={{ height: "238px" }}
                                    >
                                      <Image
                                        className={styles.contentImage}
                                        alt=""
                                        placeholder="blur"
                                        src={prod4}
                                        layout="fill"
                                        objectFit="cover"
                                      />
                                    </div>
                                    <div
                                      className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                                    >
                                      <p className={styles.contentTitle}>
                                        Alexander Aizenshtat
                                      </p>
                                      <p className={styles.contentText}>
                                        By Locus
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row">
                        <div className="col-md-4 col-6 mb-4">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={prod4}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 mb-4">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={img}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-6">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={prod3}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-6">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={img}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 d-none d-md-block">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={prod1}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 d-none d-md-block">
                          <div className={styles.content}>
                            <div
                              className={styles.imgWraper}
                              style={{ height: "238px" }}
                            >
                              <Image
                                className={styles.contentImage}
                                alt=""
                                placeholder="blur"
                                src={img}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                            >
                              <p className={styles.contentTitle}>
                                Alexander Aizenshtat
                              </p>
                              <p className={styles.contentText}>By Locus</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.liveBids} mb-50`}>
          <div className="container">
            <div className={`${styles.titleSection} mb-3`}>
              <div className={`${styles.title} mb-0`}>
                Just API Call <Image alt="" src={fire} width="35" height="35" />
              </div>
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px 8px",
              }}
            >
              {results.map((result) => {
                const { id, image, name } = result;
                return (
                  <li key={id}>
                    <Link href="/Detail/[id]" as={`/Detail/${id}`}>
                      <a>
                        {/* <Image src={image} alt="" width={350} height={400} layout='fill' /> */}
                        <p>{name}</p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className={`${styles.liveBids} mb-50`}>
          <div className="container">
            <div className={`${styles.titleSection} mb-3`}>
              <div className={`${styles.title} mb-0`}>
                Live Bids <Image alt="" src={fire} width="35" height="35" />
              </div>
              <Link href="/">
                <a className={`${styles.button} ${styles.border}`}>
                  <div>
                    {" "}
                    <span className="mr-2">More</span>{" "}
                    <Image alt="" src={rightArrows} width="12" height="15" />
                  </div>
                </a>
              </Link>
            </div>
            <Swiper
              className="appSwiper"
              spaceBetween={20}
              slidesPerView={4}
              modules={[Navigation]}
              navigation={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Skeleton circle={true} width="35px" height="35px" />
                    </div>
                  </div>
                  <div className={`mb-3 ${styles.imgWraperHeight}`}>
                    <Skeleton borderRadius="20px" />
                  </div>

                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-1">
                          {" "}
                          <Skeleton height="15px" width="140px" />
                        </p>
                        <Skeleton height="10px" width="110px" />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      <Skeleton height="15px" width="80px" />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Link href="/">
                        <a>
                          <Image
                            alt=""
                            className={styles.ProfileImage}
                            src={img}
                            width="30"
                            height="30"
                          />
                        </a>
                      </Link>
                      <Link href="/">
                        <a>
                          <Image
                            alt=""
                            className={styles.ProfileImage}
                            src={img}
                            width="30"
                            height="30"
                          />
                        </a>
                      </Link>

                      {/* <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      /> */}
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a className="position-relative">
                      <div className={styles.imgWraperHeight}>
                        <Image
                          className=""
                          alt=""
                          placeholder="blur"
                          src={img1}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="liveTag">Live</div>
                    </a>
                  </Link>

                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          className={styles.contentImage}
                          alt=""
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={img2}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod2}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod4}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod5}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className={`${styles.topCollection} sliderPagi mb-50`}>
          <div className="container">
            <div className={styles.title}>Notable Drops</div>

            <Swiper
              // className="sliderPagi"
              spaceBetween={20}
              slidesPerView={4}
              modules={[Pagination, Navigation]}
              navigation={{
                clickable: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.content}>
                  <Link href="/productDetail">
                    <a>
                      <div
                        className={styles.imgWraper}
                        style={{ height: "380px" }}
                      >
                        <Image
                          alt=""
                          className={styles.contentImage}
                          placeholder="blur"
                          src={prod4}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div
                        className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                      >
                        <p className={styles.contentTitle}>
                          Alexander Aizenshtat
                        </p>
                        <p className={styles.contentText}>By Locus</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.content}>
                  <Link href="/productDetail">
                    <a>
                      <div
                        className={styles.imgWraper}
                        style={{ height: "380px" }}
                      >
                        <Image
                          alt=""
                          className={styles.contentImage}
                          placeholder="blur"
                          src={img1}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div
                        className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                      >
                        <p className={styles.contentTitle}>
                          Alexander Aizenshtat
                        </p>
                        <p className={styles.contentText}>By Locus</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.content}>
                  <Link href="/productDetail">
                    <a>
                      <div
                        className={styles.imgWraper}
                        style={{ height: "380px" }}
                      >
                        <Image
                          alt=""
                          className={styles.contentImage}
                          placeholder="blur"
                          src={prod6}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div
                        className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                      >
                        <p className={styles.contentTitle}>
                          Alexander Aizenshtat
                        </p>
                        <p className={styles.contentText}>By Locus</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.content}>
                  <Link href="/productDetail">
                    <a>
                      <div
                        className={styles.imgWraper}
                        style={{ height: "380px" }}
                      >
                        <Image
                          alt=""
                          className={styles.contentImage}
                          placeholder="blur"
                          src={prod5}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div
                        className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                      >
                        <p className={styles.contentTitle}>
                          Alexander Aizenshtat
                        </p>
                        <p className={styles.contentText}>By Locus</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.content}>
                  <Link href="/productDetail">
                    <a>
                      <div
                        className={styles.imgWraper}
                        style={{ height: "380px" }}
                      >
                        <Image
                          alt=""
                          className={styles.contentImage}
                          placeholder="blur"
                          src={prod2}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div
                        className={`${styles.contentDetails} ${styles.fadeInBottom}`}
                      >
                        <p className={styles.contentTitle}>
                          Alexander Aizenshtat
                        </p>
                        <p className={styles.contentText}>By Locus</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className={`${styles.topCollection} mb-50`}>
          <div className="container">
            <div className={`${styles.titleSection} mb-3`}>
              <div className={`${styles.title} mb-0`}>Top collections</div>
              <Link href="/topNft">
                <a className={`${styles.button} ${styles.border}`}>
                  <div>
                    {" "}
                    <span className="mr-2">More</span>{" "}
                    <Image alt="" src={rightArrows} width="12" height="15" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={gif}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.pas}`}>
                      +576.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={img}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.neg}`}>
                      -30.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={img}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.pas}`}>
                      +576.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={img}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.pas}`}>
                      +576.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={gif2}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.pas}`}>
                      +576.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className={styles.mycard}>
                  1
                  <div style={{ flex: "0 0 auto", paddingTop: "5px" }}>
                    <Image
                      alt=""
                      className={styles.ProfileImage}
                      src={img}
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>Weather Report Int</div>
                    <div className={styles.price}>
                      Floor Price :{" "}
                      <span style={{ paddingTop: "5px" }}>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={`${styles.crntPrice} ${styles.pas}`}>
                      +576.00
                    </div>
                    <div className={styles.price}>
                      <Image
                        alt=""
                        className={styles.contentImage}
                        src={eth}
                        width="20"
                        height="16"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.hotCollection} sliderNavi mb-50`}>
          <div className="container">
            <div className={styles.title}>
              Hot Collection <Image alt="" src={spark} width="33" height="33" />
            </div>
            <Swiper
              className="mySwiper"
              spaceBetween={20}
              slidesPerView={4}
              modules={[Navigation]}
              navigation={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Skeleton borderRadius="20px" height="100%" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Image
                      alt=""
                      src={collection1}
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.profile}>
                    <Image
                      alt=""
                      src={img}
                      className={styles.ProfileImage}
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className={styles.detail}>
                    <div className={styles.edition}>
                      Edition 1 of 1 asdfghcvbn
                    </div>
                    <p className="mb-0 secondary bold">Highest bid 1.3ETH</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Image
                      alt=""
                      src={collection2}
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.profile}>
                    <Image
                      alt=""
                      src={gif2}
                      className={styles.ProfileImage}
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className={styles.detail}>
                    <div className={styles.edition}>
                      Edition 1 of 1 asdfghcvbn
                    </div>
                    <p className="mb-0 secondary bold">Highest bid 1.3ETH</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Image
                      alt=""
                      src={prod5}
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.profile}>
                    <Image
                      alt=""
                      src={img}
                      className={styles.ProfileImage}
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className={styles.detail}>
                    <div className={styles.edition}>
                      Edition 1 of 1 asdfghcvbn
                    </div>
                    <p className="mb-0 secondary bold">Highest bid 1.3ETH</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Image
                      alt=""
                      src={img}
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.profile}>
                    <Image
                      alt=""
                      src={gif}
                      className={styles.ProfileImage}
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className={styles.detail}>
                    <div className={styles.edition}>
                      Edition 1 of 1 asdfghcvbn
                    </div>
                    <p className="mb-0 secondary bold">Highest bid 1.3ETH</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className={`${styles.liveBids}`}>
          <div className="container">
            <div className={`${styles.titleSection} mb-3`}>
              <div className={`${styles.title} mb-0`}>
                Hot Bids <Image alt="" src={fire} width="35" height="35" />
              </div>
              <Link href="/">
                <a className={`${styles.button} ${styles.border}`}>
                  <div>
                    {" "}
                    <span className="mr-2">More</span>{" "}
                    <Image alt="" src={rightArrows} width="12" height="15" />
                  </div>
                </a>
              </Link>
            </div>
            <Swiper
              className="appSwiper"
              spaceBetween={20}
              slidesPerView={4}
              modules={[Navigation]}
              navigation={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod6}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod1}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          alt=""
                          className=""
                          placeholder="blur"
                          src={prod4}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          className=""
                          placeholder="blur"
                          src={img1}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.bitsCard}>
                  <div className={styles.top}>
                    <div className={styles.profile}>
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                      <Image
                        alt=""
                        className={styles.ProfileImage}
                        src={img}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div id="like">
                        <input type="checkbox" name="likee" value="1" id="l1" />
                        <label className="likeIcon" htmlFor="l1"></label>
                      </div>
                      <span className="ml-2 mr-3 secondary bold">2k</span>
                      <DropdownButton
                        className="dropDrown more"
                        align="end"
                        title=""
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <span>Report </span>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <span>Share</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <Link href="/productDetail">
                    <a>
                      <div className={styles.imgWraperHeight}>
                        <Image
                          className=""
                          placeholder="blur"
                          src={img}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.timer}>
                    <div>
                      <Image alt="" src={fire} width="18" height="18" /> 10: 07:
                      2022 <span>Left</span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="bold">Edition 1 of 1</div>
                        <p className="mb-0 secondary bold">
                          Highest bid 1.3ETH
                        </p>
                      </div>
                      <div>
                        <Image
                          alt=""
                          className={styles.contentImage}
                          src={eth}
                          width="20"
                          height="16"
                        />
                      </div>
                    </div>
                    <p className={`${styles.price} ${styles.mb - 0}`}>
                      Bid 1.3 ETH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
