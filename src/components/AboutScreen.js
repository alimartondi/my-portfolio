import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function AboutScreen() {
  return (
    <section className="c_about-screen-area" id="about-screen">
      <NavBar />
      <Container>
        <Row className="c_about-me align-items-center">
          <Col lg={5} className="pt-4">
            <img
              src="https://bolaskor.com/media/83/22/24/832224ffd0b632e21bebba8ab1218558_754x.jpg"
              className="rounded-lg img-fluid"
              alt="Cerita saya"
            />
          </Col>
          <Col lg={7} className="c_about-screen-content mt-2 pl-xl-5">
            <h1 className="second-title mb-4">Sekilas Tentang Saya</h1>
            <p>
              Halo semua, nama Saya Ali Martondi, panggil saja Ali. Saya berasal
              dari Mandailing Natal, Sumatera Utara, lahir pada tanggal 11
              Desember 1995, anak ketiga dari lima bersaudara.
              <br />
              <br />
              Saya asli Mandailing, marga saya batubara.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col lg={7} className="c_about-screen-content pr-xl-5 mt-3 mt-md-4">
            <h1 className="second-title mb-4">Bisa Sampai di Jakarta</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni
              mollitia quas itaque error consequuntur atque? Aliquam nesciunt
              molestias nulla illum quisquam itaque eaque minus dicta expedita
              quos! Magni eum veritatis expedita molestiae pariatur quisquam
              officia consequuntur rem itaque sed, voluptatem sequi facilis
              voluptatibus iure assumenda odio.
            </p>
          </Col>
          <Col lg={5} className="mt-2">
            <img
              src="https://asset.kompas.com/crops/ahkmqwxeSAeOBJaz1Kcu6M7wKRg=/163x0:874x474/750x500/data/photo/2020/03/08/5e6412aec804d.jpg"
              className="img-fluid rounded-lg"
              alt=""
            />
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col lg={7} className="c_about-screen-content pl-xl-5 order-xl-2">
            <h1 className="second-title mb-4 mt-2">Kenapa Programmer?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni
              mollitia quas itaque error consequuntur atque? Aliquam nesciunt
              molestias nulla illum quisquam itaque eaque minus dicta expedita
              quos! Magni eum veritatis expedita molestiae pariatur quisquam
              officia consequuntur rem itaque sed, voluptatem sequi facilis
              voluptatibus iure assumenda odio.
              <br />
              <br />
              At, veniam neque ducimus officiis nisi explicabo culpa provident
              quia, inventore reprehenderit ab, quisquam voluptatem illum. Magni
              voluptatem deleniti itaque cumque corporis eaque sapiente dolor
              reprehenderit in delectus. Quibusdam, dolorum ea deleniti ipsam
              veniam maiores soluta voluptate obcaecati voluptas autem
              asperiores blanditiis, sed non accusamus minus, laborum repellat
              molestiae voluptatem similique officia culpa?
            </p>
          </Col>
          <Col lg={5} className="mt-2">
            <img
              src="https://asset.kompas.com/crops/xqHrjDeSrtpVX7pHItSK-DMMWto=/0x0:780x390/750x500/data/photo/2016/10/05/1949010andre-ter-stegen780x390.jpg"
              className="rounded-lg img-fluid"
              alt="Kenapa programmer"
            />
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col lg={7} className="c_about-screen-content pr-xl-5">
            <h1 className="second-title mb-4 mt-2">Almamater</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni
              mollitia quas itaque error consequuntur atque? Aliquam nesciunt
              molestias nulla illum quisquam itaque eaque minus dicta expedita
              quos! Magni eum veritatis expedita molestiae pariatur quisquam
              officia consequuntur rem itaque sed, voluptatem sequi facilis
              voluptatibus iure assumenda odio.
              <br />
              <br />
              At, veniam neque ducimus officiis nisi explicabo culpa provident
              quia, inventore reprehenderit ab, quisquam voluptatem illum. Magni
              voluptatem deleniti itaque cumque corporis eaque sapiente dolor
              reprehenderit in delectus. Quibusdam, dolorum ea deleniti ipsam
              veniam maiores soluta voluptate obcaecati voluptas autem
              asperiores blanditiis, sed non accusamus minus, laborum repellat
              molestiae voluptatem similique officia culpa?
            </p>
          </Col>
          <Col lg={5} className="mt-2">
            <img
              src="data:image/png;base64,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"
              className="rounded-lg img-fluid"
              alt="Almamater"
            />
          </Col>
        </Row>
        <Row className="principles mt-4">
          <Col lg={12}>
            <h1 className="second-title text-center mt-2">
              Tiga Prinsip Hidup
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="d-block d-md-flex mt-4 justify-content-around"
          >
            <div className="principles-card">
              <h5>Attitude</h5>
            </div>
            <div className="principles-card">
              <h5>Merasa Bodoh</h5>
            </div>
            <div className="principles-card">
              <h5>Attitude</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}
