import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function AboutDetailScreen() {
  return (
    <section className="c_about-detail-area" id="about-detail">
      <div className="about-detail-header bg-light py-3 fixed-top">
        <Container>
          <Row>
            <Col lg={12}>
              <Link to="/">
                <h2>Back</h2>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="align-items-center pt-5">
          <Col lg={5}>
            <div className="about-detail-image">
              <img
                src="https://bolaskor.com/media/83/22/24/832224ffd0b632e21bebba8ab1218558_754x.jpg"
                className="rounded-lg img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col lg={7} className="c_about-detail-content mt-5 pl-xl-5">
            <h1 className="second-title">Sekilas Tentang Saya</h1>
            <p className="mt-4">
              Halo semua, nama lengkap Saya Ali Martondi, atau panggil saja Ali.
              Saya lahir di Simangambat, sebuah desa yang terletak di kabupaten
              Mandailing Natal, ujung Sumatera Utara, tepatnya perbatasan antara
              Sumatera Utara dengan Sumatera Barat, anak ketiga dari lima
              bersaudara. Saya asli orang mandailing, disebut orang batak juga
              tidak masalah, karena perbincangan mandailing bukan batak yang
              sempat heboh belakangan ini terlalu rumit untuk dibahas.
              <br />
              <br />
              Sama seperti orang batak pada umumnya, orang mandailing juga punya
              marga, dan saya bermarga Batubara. Itu sebabnya diawal saya
              sampaikan terlalu rumit menjelaskan apakah mandailing itu batak
              apa bukan, tapi seperti kata orang batak "Terserah orang itu
              sajalah", tuh kan batak lagi, kali ini boleh kali ya, lagian
              ngapain saya bahas itu yah, dah lah serahkan ke ahlinya saja.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col lg={7} className="c_about-detail-content pr-xl-5">
            <h1 className="second-title mb-4 mt-5">Bisa Sampai di Jakarta</h1>
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
          <Col lg={5}>
            <img
              src="https://asset.kompas.com/crops/ahkmqwxeSAeOBJaz1Kcu6M7wKRg=/163x0:874x474/750x500/data/photo/2020/03/08/5e6412aec804d.jpg"
              className="img-fluid rounded-lg"
              alt=""
            />
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col lg={5}>
            <img
              src="https://asset.kompas.com/crops/xqHrjDeSrtpVX7pHItSK-DMMWto=/0x0:780x390/750x500/data/photo/2016/10/05/1949010andre-ter-stegen780x390.jpg"
              className="rounded-lg img-fluid"
              alt=""
            />
          </Col>
          <Col lg={7} className="c_about-detail-content pl-xl-5">
            <h1 className="second-title mb-4 mt-5">Kenapa Programmer?</h1>
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
        </Row>
        <Row className="mt-5 align-items-center">
          <Col lg={7} className="c_about-detail-content pr-xl-5">
            <h1 className="second-title mb-4 mt-5">Almamater</h1>
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
          <Col lg={5}>
            <img
              src="https://lh3.googleusercontent.com/proxy/1tizUx3YPZFGiCIJDrLMw5jrm_ejWabONT1gc2vCJlgDrSqrWvS2DA4yJfjh0_X4bQjuY_xQ4loKDlEg-xoXbVS4IudbBfM7DZq1fJpoSg"
              className="rounded-lg img-fluid"
              alt=""
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={12}>
            <h1 className="second-title text-center">Tiga Prinsip Hidup</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}
