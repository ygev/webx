import React from "react";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import Pixelator from "../pixelator/pixelator";

import Fade from "react-reveal/Fade";
import "./aboutGallery.css";
import quotations from "../../images/about/quotations.svg";

import img1 from "../../images/about/1.png";
import img2 from "../../images/about/2.png";
import img3 from "../../images/about/3.png";
import img4 from "../../images/about/4.png";
import img5 from "../../images/about/5.png";
import img6 from "../../images/about/6.png";
import img7 from "../../images/about/7.png";
import img8 from "../../images/about/8.png";
import img9 from "../../images/about/9.png";
import img10 from "../../images/about/10.png";
import img11 from "../../images/about/11.png";
import img12 from "../../images/about/12.png";
import img13 from "../../images/about/13.png";
import img14 from "../../images/about/14.png";
import img15 from "../../images/about/15.png";
import img16 from "../../images/about/16.png";
import img17 from "../../images/about/17.png";
import img18 from "../../images/about/18.png";
import img19 from "../../images/about/19.png";
import img20 from "../../images/about/20.png";

export default (props) => (
  <>
    <Layout rows={[165, 92, 67]}>
      <Fade cascade delay={1000} duration={600}>
        <img
          src={img1}
          alt=""
          className="aboutGallery__img aboutGallery__img--1 "
        />
        <img
          src={img2}
          alt=""
          className="aboutGallery__img aboutGallery__img--2 "
        />
        <section className="aboutGallery__quote aboutGallery__quote--1">
          <img src={quotations} alt="" className="aboutGallery__quote--img" />
          <div className="aboutGallery__quote--wrapper">
            <p className="aboutGallery__quote--text">
              Because without the other pixels, the single block of pixel is
              nothing.
            </p>
            <p className="aboutGallery__quote--name">Tony Kim</p>
          </div>
        </section>
        <img
          src={img3}
          alt=""
          className="aboutGallery__img aboutGallery__img--3 "
        />
        <img
          src={img4}
          alt=""
          className="aboutGallery__img aboutGallery__img--4 "
        />

        <section className="aboutGallery__quote aboutGallery__quote--2">
          <img src={quotations} alt="" className="aboutGallery__quote--img" />
          <div className="aboutGallery__quote--wrapper">
            <p className="aboutGallery__quote--text">
              The thing that has inspired me most during my time here are my
              peers both in GD and out! I feel like I would not have been the
              designer I am today without the healthy internal competition I had
              to strive to be on the same level as my cohorts! Everyone here is
              such a talented artist and designer and being around this energy
              has been absolutely incredible, I look up to a lot of people here
              and I don’t think we will ever experience an environment like this
              again so we should savor it.
            </p>
            <p className="aboutGallery__quote--name">Xena Brar</p>
          </div>
        </section>

        <img
          src={img5}
          alt=""
          className="aboutGallery__img aboutGallery__img--5 "
        />
        <img
          src={img6}
          alt=""
          className="aboutGallery__img aboutGallery__img--6 "
        />

        <img
          src={img7}
          alt=""
          className="aboutGallery__img aboutGallery__img--7 "
        />

        <section className="aboutGallery__quote aboutGallery__quote--3">
          <img src={quotations} alt="" className="aboutGallery__quote--img" />
          <div className="aboutGallery__quote--wrapper">
            <p className="aboutGallery__quote--text">
              I chose to focus on nostalgia months ago, and I’m really grateful
              that I followed through with this topic because the shift that our
              world has seen in the past two months has made me realize how
              crucial my project is. We’re all struggling in our own ways right
              now, and I hope my project can be a reminder that we all have
              really powerful objects in our lives. This isn’t how I envisioned
              my time at MICA ending, but my project definitely helped carry me
              to the end a bit easier.
            </p>
            <p className="aboutGallery__quote--name">Hannah Ryan</p>
          </div>
        </section>

        <img
          src={img8}
          alt=""
          className="aboutGallery__img aboutGallery__img--8 "
        />

        <img
          src={img9}
          alt=""
          className="aboutGallery__img aboutGallery__img--9 "
        />
        <img
          src={img10}
          alt=""
          className="aboutGallery__img aboutGallery__img--10 "
        />

        <section className="aboutGallery__quote aboutGallery__quote--4">
          <img src={quotations} alt="" className="aboutGallery__quote--img" />
          <div className="aboutGallery__quote--wrapper">
            <p className="aboutGallery__quote--text">
              I have been impressed by the tenacity of my fellow MICA GD 2020
              graduates, whom I consider my design family. This semester has, by
              far, been the most challenging one for my classmates, faculty, and
              administration. What has always kept my head above the water is
              looking around and seeing how much talent, support, and love the
              MICA community has to offer, especially during times of hardship.
              We did it, MICA GD's Class of 2020! I am so proud to be able to
              graduate alongside all of you. Remember, you have the power to
              achieve anything you set your mind to - until we meet again.
            </p>
            <p className="aboutGallery__quote--name">Anne Xin</p>
          </div>
        </section>

        <img
          src={img11}
          alt=""
          className="aboutGallery__img aboutGallery__img--11 "
        />
        <img
          src={img12}
          alt=""
          className="aboutGallery__img aboutGallery__img--12 "
        />

        <img
          src={img13}
          alt=""
          className="aboutGallery__img aboutGallery__img--13 "
        />

        <img
          src={img14}
          alt=""
          className="aboutGallery__img aboutGallery__img--14 "
        />

        <section className="aboutPoem--wrapper aboutPoem--part1 ">
          <h3 className="aboutPoem__title">
            <Pixelator content="Pixels" />
          </h3>
          <p>By Tony Kim</p>
          <br></br>

          <ul className="aboutPoem__poem ">
            <Fade cascade delay={1000} duration={600} top>
              <li className="aboutPoem__line">
                <p>A pixel within a vast universe.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>Not knowing what to do,</p>
              </li>
              <li className="aboutPoem__line">
                <p>wanders around aimlessly.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>Worrying about</p>
              </li>
              <li className="aboutPoem__line">
                <p>its importance,</p>
              </li>
              <li className="aboutPoem__line">
                <p>its placement,</p>
              </li>
              <li className="aboutPoem__line">
                <p>its purpose,</p>
              </li>
              <li className="aboutPoem__line">
                <p>within this cruel</p>
              </li>
              <li className="aboutPoem__line">
                <p>big bad world.</p>
              </li>

              <br></br>

              <li className="aboutPoem__line">
                <p>But one day,</p>
              </li>
              <li className="aboutPoem__line">
                <p>the pixel felt assured</p>
              </li>
              <li className="aboutPoem__line">
                <p>knowing that the pixel</p>
              </li>
              <li className="aboutPoem__line">
                <p>was not alone.</p>
              </li>
            </Fade>
          </ul>
        </section>

        <section className="aboutPoem--wrapper aboutPoem--part2">
          <ul className="aboutPoem__poem ">
            <Fade cascade delay={1000} duration={600} top>
              <li className="aboutPoem__line">
                <p>Because without the other pixels,</p>
              </li>
              <li className="aboutPoem__line">
                <p>the single block of pixel was nothing.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>The world became full</p>
              </li>
              <li className="aboutPoem__line">
                <p>when all the pixels gathered together</p>
              </li>
              <li className="aboutPoem__line">
                <p>to create a complete picture.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>Our goals, our values, our beauty, </p>
              </li>
              <li className="aboutPoem__line">
                <p>our people, us, you, and me,</p>
              </li>
              <li className="aboutPoem__line">
                <p>extend out of the two-dimensional </p>
              </li>
              <li className="aboutPoem__line">
                <p>plane and into infinity.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>Because together, </p>
              </li>
              <li className="aboutPoem__line">
                <p>We can share eternal love</p>
              </li>
              <li className="aboutPoem__line">
                <p>and wholesomeness to each other</p>
              </li>
              <li className="aboutPoem__line">
                <p>to help create a beautiful world.</p>
              </li>
              <br></br>
              <li className="aboutPoem__line">
                <p>Together.</p>
              </li>
            </Fade>
          </ul>
        </section>

        <img
          src={img15}
          alt=""
          className="aboutGallery__img aboutGallery__img--15 "
        />
        <img
          src={img16}
          alt=""
          className="aboutGallery__img aboutGallery__img--16 "
        />

        <img
          src={img17}
          alt=""
          className="aboutGallery__img aboutGallery__img--17 "
        />

        <section className="aboutGallery__quote aboutGallery__faculty">
          <img src={quotations} alt="" className="aboutGallery__quote--img" />

          <div className="aboutGallery__quote--wrapper">
            <h3 className="aboutGallery__quote--title">
              <Pixelator content="Words from our faculty" />
            </h3>
            <p className="aboutGallery__quote--text">
              Seniors. While I didn't get the pleasure to have all of you in a
              class; I have had the luxury to see and experience your work,
              partake in the thoughtful ways you interact, and persevered with
              you during this strange time. You are all wonderful; fabulous
              things await you; good luck & good designing.
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Kristian Bjørnard
            </p>
            <p className="aboutGallery__quote--text">
              Congratulations to the class of 2020! It's been such an honor to
              watch your thesis projects go from "how might we...?" research
              questions to thoughtful design projects. You are such a talented
              group of designers and thinkers, please go do wonderful things in
              this difficult world!
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Siân Evans
            </p>
            <p className="aboutGallery__quote--text">
              Congratulations to the class of 2020!
            </p>
            <p className="aboutGallery__quote--text">
              Dear reader, thanks for viewing the first website of MICAGD degree
              project work. This compilation is a demonstration of
              self-initiated projects by an extraordinary group of seniors. The
              projects show a range of visions about how design can improve
              society. But they also demonstrate skills that took years to
              develop, deep curiosities, joys, intense friendships,
              transferrable skills and firm resilience.{" "}
            </p>
            <p className="aboutGallery__quote--text">
              On a personal note, I've been chair of MICA's Graphic Design
              program since these designers were in grade school—long before
              they knew about Photoshop or Helvetica— and this is my last year.
              I'm so proud to go out with the class of 2020. Thanks to my
              faculty colleagues who witnessed the development of this body of
              work and warmest congratulations to the fierce designers who
              created it!
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Brockett Horne
            </p>
            <p className="aboutGallery__quote--text">
              Hope that you ALL find what you are looking for! Congratulations
              2020 class!
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Lili Maya
            </p>
            <p className="aboutGallery__quote--text">
              Congratulations to the class of 2020! A special year for all of
              you.
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Dan Meyers
            </p>
            <p className="aboutGallery__quote--text">
              Congratulations 2020 seniors! I'm looking forward to seeing the
              next chapter. Wishing you much success and happiness.
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Esther Sheppard
            </p>
            <p className="aboutGallery__quote--text">
              To the class of 2020 — Congratulations!
            </p>
            <p className="aboutGallery__quote--text">
              May your paths drip with abundance as you
              graduate in this halted world, which you shall
              redefine!
            </p>
            <p className="aboutGallery__quote--name aboutGallery__faculty--name">
              Zvezdana Stojmirovic
            </p>
            <p className="aboutGallery__quote--text">
              Congrats class of 2020 for making moving art in an unprecedented
              time. You should be proud of what you have created this year!
            </p>
            <p className="aboutGallery__quote--name">Dare Turner</p>
          </div>
        </section>

        <img
          src={img18}
          alt=""
          className="aboutGallery__img aboutGallery__img--18 "
        />

        <img
          src={img19}
          alt=""
          className="aboutGallery__img aboutGallery__img--19 "
        />

        <img
          src={img20}
          alt=""
          className="aboutGallery__img aboutGallery__img--20 "
        />
      </Fade>
    </Layout>
  </>
);
