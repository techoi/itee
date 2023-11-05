/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { css } from "../../../styled-system/css";
import TitleLoop from "./components/TitleLoop";

const BANNERS = [
  { image: "/tee/ny-200.png", title: "ITEE IN NEWYORK CITY" },
  { image: "/tee/seoul-404.png", title: "ITEE IN SEOUL" },
  { image: "/tee/ny-302.png", title: "ITEE IN NEWYORK CITY" },
  { image: "/tee/ny-403.png", title: "ITEE IN NEWYORK CITY" },
  { image: "/tee/seoul-200.png", title: "ITEE IN SEOUL" },
  { image: "/tee/ny-404.png", title: "ITEE IN NEWYORK CITY" },
  { image: "/tee/ny-500.png", title: "ITEE IN NEWYORK CITY" },
  { image: "/tee/ny-503.png", title: "ITEE IN NEWYORK CITY" },
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
          <Link href="https://instagram.com/itee.official">
            <img
              src="/instagram-logo-white.png"
              alt="instagram"
              className={css({ height: "24px !important" })}
            />
          </Link>
        </div>
        <div
          className={css({
            display: "flex",
            padding: "20px 0 30px 20px",
            md: { padding: "20px 40px 90px" },
          })}
        >
          <div
            className={css({
              color: "white",
              fontWeight: "bold",
              fontSize: 33,
              letterSpacing: -1.5,
              md: { fontSize: 85, letterSpacing: -3.4 },
              lineHeight: 1,
            })}
          >
            Hello, I&rsquo;m a Tee
            <br />
            <div
              className={css({
                display: "flex",
                position: "relative",
                height: 50,
                md: { height: 100 },
              })}
            >
              For
              <div className={css({ width: 8, md: { width: 24 } })} />
              <TitleLoop />
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
            textAlign: "center",
          })}
        >
          출시일에 남겨주신 연락처로 알려드릴게요
          <br />
          <div
            className={css({
              fontWeight: "medium",
              fontSize: 14,
            })}
          >
            (2023.12 예정)
          </div>
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
              borderRadius: "30px",
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
          <img src="/tee-403.png" alt="tee-403" width={250} />
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
          <img src="/tee-404.png" alt="tee-404" width={250} />
          <div className={css({ fontSize: 15 })}>404 hoodie black</div>
          <div className={css({ fontSize: 24, fontWeight: "bolder" })}>
            ₩58,000
          </div>
        </div>
      </div>
      <img
        src="/main.png"
        alt="main"
        className={css({ margin: "60px auto" })}
      />
      <div
        className={css({
          height: 385,
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
            height: 385,
            animation: "bannerLoop 30s linear infinite",
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
                height: 385,
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
                height: 385,
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
            textAlign: "center",
          })}
        >
          출시일에 남겨주신 연락처로 알려드릴게요
          <br />
          <div
            className={css({
              fontWeight: "medium",
              fontSize: 14,
            })}
          >
            (2023.12 예정)
          </div>
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
              borderRadius: "30px",
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
          md: { visibility: "hidden" },
          zIndex: 99,
        })}
      >
        <Link href="https://forms.gle/9drgxxUBPcttQ4kX7">
          <div
            className={css({
              padding: "16px 36px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              textAlign: "center",
            })}
          >
            <div>사전 주문하기</div>
          </div>
        </Link>
      </div>
    </main>
  );
}
