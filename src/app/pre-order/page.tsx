/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { css } from "../../../styled-system/css";

const BANNERS = [
  { image: "/itee/ny-403-2.jpg", title: "ITEE IN NEWYORK CITY" },
  { image: "/itee/seoul-403-2.jpg", title: "ITEE IN SEOUL" },
  { image: "/itee/ny-403-3.jpg", title: "ITEE IN NEWYORK CITY" },
  { image: "/itee/ny-403.jpg", title: "ITEE IN NEWYORK CITY" },
  { image: "/itee/seoul-403.jpg", title: "ITEE IN SEOUL" },
  { image: "/itee/ny-404-2.jpg", title: "ITEE IN NEWYORK CITY" },
  { image: "/itee/ny-404.jpg", title: "ITEE IN NEWYORK CITY" },
  { image: "/itee/ny-500.jpg", title: "ITEE IN NEWYORK CITY" },
];

export default function Home() {
  return (
    <main className={css({ fontFamily: "helvetica" })}>
      <div className={css({ backgroundColor: "black" })}>
        <div className={css({ display: "flex", padding: "24px 26px" })}>
          <div
            className={css({
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              margin: "auto",
              justifyContent: "center",
            })}
          >
            itee
          </div>
          <img
            src="/instagram-logo-white.png"
            alt="instagram"
            className={css({ height: "24px !important" })}
          />
        </div>
        <div
          className={css({
            display: "flex",
            padding: "20px 40px 90px",
          })}
        >
          <div
            className={css({
              color: "white",
              fontWeight: "bold",
              fontSize: 40,
              md: { fontSize: 90 },
              lineHeight: 1,
            })}
          >
            Hello, I&rsquo;m Tee
            <br />
            <div
              className={css({
                display: "flex",
                position: "relative",
                height: 40,
                md: { height: 90 },
                width: "80vw",
              })}
            >
              For
              <div
                className={css({
                  position: "relative",
                  marginLeft: 40,
                  width: "100%",
                  overflow: "hidden",
                })}
              >
                {/* <div
                  className={css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 10,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: 55,
                  })}
                /> */}
                <div
                  className={css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    whiteSpace: "nowrap",
                    animation: "rolling 8s linear infinite",
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <div>UX Designer</div>
                  <div>Developer</div>
                  <div>Data Analyst</div>
                  <div>Product Owner</div>
                  <div>UX Designer</div>
                  <div>Developer</div>
                  <div>Data Analyst</div>
                  <div>Product Owner</div>
                </div>
                {/* <div
                  className={css({
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 10,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: 55,
                  })}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          paddingTop: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <div
          className={css({
            fontWeight: "bold",
            fontSize: 20,
            md: { fontSize: 24 },
            lineHeight: 1,
          })}
        >
          2023 First Collection Pre-Order
        </div>
        <div
          className={css({
            fontWeight: "bold",
            fontSize: 32,
            md: { fontSize: 48 },
            lineHeight: 1.2,
          })}
        >
          Coming soon
        </div>
        <div
          className={css({
            fontWeight: "medium",
            fontSize: 18,
            margin: "10px 0 24px",
            opacity: 0.5,
          })}
        >
          출시일에 남겨주신 연락처로 알려드릴게요
        </div>
        <Link
          href="https://forms.gle/9drgxxUBPcttQ4kX7"
          className={css({
            visibility: "hidden",
            height: 0,
            md: { visibility: "visible", height: "auto" },
          })}
        >
          <div
            className={css({
              padding: "16px 36px",
              borderRadius: "26px",
              backgroundColor: "black",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            })}
          >
            <div>사전 주문하기</div>
          </div>
        </Link>
      </div>
      <div
        className={css({
          marginTop: 16,
          display: "flex",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <img src="/tee-403.jpg" alt="tee-403" width={250} />
          <div className={css({ fontSize: 15 })}>403 hoodie black</div>
          <div className={css({ fontSize: 24, fontWeight: "bolder" })}>
            ₩58,000
          </div>
        </div>
        <div className={css({ width: 32 })} />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <img src="/tee-404.jpg" alt="tee-404" width={250} />
          <div className={css({ fontSize: 15 })}>404 hoodie black</div>
          <div className={css({ fontSize: 24, fontWeight: "bolder" })}>
            ₩58,000
          </div>
        </div>
      </div>
      <img
        src="/main.jpg"
        alt="main"
        className={css({ margin: "60px auto" })}
      />
      <div
        className={css({
          height: 380,
          position: "relative",
          overflow: "hidden",
        })}
      >
        <div
          className={css({
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "nowrap",
            height: 380,
            animation: "bannermove 30s linear infinite",
            display: "flex",
          })}
        >
          {BANNERS.map((banner, index) => (
            <div
              key={index}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 360,
                height: 380,
              })}
            >
              <img
                src={banner.image}
                alt={`banner-${index}`}
                className={css({ width: 360 })}
              />
              <div
                className={css({
                  fontSize: 10,
                  fontWeight: "bold",
                  margin: "10px auto",
                })}
              >
                {banner.title}
              </div>
            </div>
          ))}
          {BANNERS.map((banner, index) => (
            <div
              key={index}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 360,
                height: 380,
              })}
            >
              <img
                src={banner.image}
                alt={`banner-${index}`}
                className={css({ width: 360 })}
              />
              <div
                className={css({
                  fontSize: 10,
                  fontWeight: "bold",
                  margin: "10px auto",
                })}
              >
                {banner.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={css({
          padding: "120px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <div
          className={css({
            fontWeight: "bold",
            fontSize: 20,
            md: { fontSize: 24 },
            lineHeight: 1,
          })}
        >
          2023 First Collection Pre-Order
        </div>
        <div
          className={css({
            fontWeight: "bold",
            fontSize: 32,
            md: { fontSize: 48 },
            lineHeight: 1.2,
          })}
        >
          Coming soon
        </div>
        <div
          className={css({
            fontWeight: "medium",
            fontSize: 18,
            margin: "10px 0 24px",
            opacity: 0.5,
          })}
        >
          출시일에 남겨주신 연락처로 알려드릴게요
        </div>
        <Link
          href="https://forms.gle/9drgxxUBPcttQ4kX7"
          className={css({
            visibility: "hidden",
            height: 0,
            md: { visibility: "visible", height: "auto" },
          })}
        >
          <div
            className={css({
              padding: "16px 36px",
              borderRadius: "26px",
              backgroundColor: "black",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            })}
          >
            <div>사전 주문하기</div>
          </div>
        </Link>
      </div>
      <div
        className={css({
          display: "flex",
          width: "100%",
          marginBottom: 100,
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            md: {
              gridTemplateColumns: "1fr 1fr 1fr",
            },
          })}
        >
          <div className={css({ textAlign: "center" })}>© 2023 itee co.</div>
          <div className={css({ textAlign: "center" })}>
            contact: itee.kr@gmail.com
          </div>
          <div className={css({ textAlign: "center" })}>
            instagram: itee.official
          </div>
        </div>
      </div>
      <div
        className={css({
          position: "fixed",
          bottom: 0,
          padding: 24,
          width: "100%",
          visibility: "visible",
          height: "auto",
          md: { visibility: "none", height: 0 },
          zIndex: 99,
        })}
      >
        <div
          className={css({
            padding: "16px 36px",
            borderRadius: "26px",
            backgroundColor: "black",
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            textAlign: "center",
          })}
        >
          <div>사전 주문하기</div>
        </div>
      </div>
    </main>
  );
}