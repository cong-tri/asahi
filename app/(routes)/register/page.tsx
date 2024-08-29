import React from "react";
import Image from "next/image";

import { Col, Row } from "antd";
import { CheckCircleOutlined, SettingOutlined } from "@ant-design/icons";

import RegisterForm from "./registerForm";

const RegisterPage = () => {
  return (
    <div className="bg-green-100 h-fit">
      <div className="container w-auto md:w-full mx-6 sm:mx-auto">
        <Row align={"middle"} justify={"center"}>
          <Col xs={24} md={24} lg={20} xl={14} xxl={20}>
            <div className="mt-32 mb-10 w-auto sm:mt-16 md:mt-20 md:mb-10 md:ml-8">
              <Row justify={"space-between"} align={"middle"}>
                <Col xs={"auto"} sm={"auto"} md={16}>
                  <Image
                    src={"/logo.png"}
                    width={250}
                    height={200}
                    quality={100}
                    className="h-24 w-32 sm:h-28 sm:w-40 md:h-36 md:w-52 2xl:w-[250px]"
                    alt="Logo Ahasi"
                  />
                </Col>

                <Col xs={"auto"} sm={"auto"} md={8}>
                  <Image
                    src={"/register.png"}
                    width={200}
                    quality={100}
                    height={200}
                    className="w-28 sm:w-[200px] md:h-full md:w-full"
                    alt="Register"
                  />
                </Col>
              </Row>

              <div className="md:my-5">
                <Image src={"/title1.png"} className="hidden sm:block" width={450} height={200} quality={100} alt="Title" />
                <Image src={"/title2.png"} className="block sm:hidden" width={300} height={200} quality={100} alt="Title" />
              </div>
            </div>

            <div className="mb-10 sm:mx-8 md:mx-10">
              <div className="border-2 sm:w-auto border-red-400 rounded-lg py-3 sm:p-5 md:p-7 border-b-0 rounded-b-none">
                <div className="text-center sm:text-left sm:flex items-start justify-center">
                  <h1 className="text-base md:text-xl">Thu nhập cơ bản</h1>
                  <div className="mx-4">
                    <span className="font-bold text-5xl md:text-6xl text-red-600">
                      25~33
                    </span>
                  </div>
                  <div>
                    <h1 className="text-base md:text-xl text-red-600 font-medium">
                      TRIỆU VNĐ/tháng
                    </h1>
                    <h1 className="text-base md:text-xl">(chưa tính các phụ cấp khác)</h1>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 rounded-lg p-3 sm:p-5 md:p-7 rounded-t-none">
                <h1 className="text-center text-xl md:text-xl text-white">
                  TUYỂN DỤNG{" "}
                  <span className="text-yellow-300 text-2xl md:text-2xl font-bold">
                    NHÂN VIÊN LÀM VIỆC TẠI NHẬT
                  </span>
                </h1>
              </div>
            </div>

            <div className="my-7 sm:mx-10 md:mx-8 md:px-5">
              <Row>
                <Col xs={4} sm={3} md={2} className="mr-5 md:mr-5">
                  <div className="text-red-500 border text-center p-2 sm:p-3 rounded-lg bg-red-100">
                    <SettingOutlined className="text-3xl md:text-4xl" />
                  </div>
                </Col>
                <Col xs={16} sm={5} md={5} className="md:mr-5">
                  <h1 className="text-base md:text-xl font-medium w-fit md:w-full md:pr-2 pt-2 pb-3 border-b-2 border-red-100">
                    CÁC NGÀNH
                  </h1>
                </Col>
                <Col xs={24} sm={15} md={15}>
                  <h1 className="text-base mt-2 md:mt-0 md:text-xl">
                    Chế biến thủy sản, Thực phẩm, Công nhân nhà máy, Xây dựng,
                    Phục vụ Khách sạn, Bảo dưỡng tòa nhà, Chăm sóc người cao
                    tuổi,...
                  </h1>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={4} sm={3} md={2} className="mr-5 md:mr-5">
                  <div className="text-red-500 border text-center p-2 rounded-lg bg-red-100">
                    <CheckCircleOutlined className="text-3xl md:text-4xl" />
                  </div>
                </Col>
                <Col xs={16} sm={5} md={5} className="md:mr-5">
                  <h1 className="text-base md:text-xl font-medium w-fit md:w-full md:pr-2 pt-2 pb-3 border-b-2 border-red-100">
                    ĐIỀU KIỆN
                  </h1>
                </Col>
                <Col xs={24} sm={15} md={15}>
                  <h1 className="text-base mt-2 md:mt-0 md:text-xl">
                    Cấp 3, Trung cấp, Cao đẳng, Đại học
                  </h1>
                </Col>
              </Row>
            </div>

            <div className="mb-10 sm:mx-8 md:mx-10">
              <div className="border-2 border-blue-400 sm:w-auto rounded-lg py-3 sm:p-5 md:p-7 border-b-0 rounded-b-none">
                <div className="sm:flex text-center sm:text-left items-start justify-center">
                  <h1 className="text-base md:text-xl">Thu nhập cơ bản</h1>
                  <div className="mx-4">
                    <span className="font-bold text-5xl md:text-6xl text-blue-500">
                      33~50
                    </span>
                  </div>
                  <div>
                    <h1 className="text-base md:text-xl text-blue-500 font-medium">
                      TRIỆU VNĐ/tháng
                    </h1>
                    <h1 className="text-base md:text-xl">(chưa tính các phụ cấp khác)</h1>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 rounded-lg p-3 sm:p-5 md:p-7 rounded-t-none">
                <h1 className="text-center text-xl md:text-xl text-white">
                  TUYỂN DỤNG{" "}
                  <span className="text-yellow-300 text-2xl md:text-2xl font-bold">
                    NHÂN VIÊN LÀM VIỆC TẠI NHẬT
                  </span>
                </h1>
              </div>
            </div>

            <div className="my-7 sm:mx-10 md:mx-8 md:px-5">
              <Row>
                <Col xs={4} sm={3} md={2} className="mr-5 md:mr-5">
                  <div className="text-blue-500 border text-center p-2 rounded-lg bg-blue-100">
                    <SettingOutlined className="text-3xl md:text-4xl" />
                  </div>
                </Col>
                <Col xs={16} sm={5} md={5} className="md:mr-5">
                  <h1 className="text-base md:text-xl font-medium w-fit md:w-full md:pr-2 pt-2 pb-3 border-b-2 border-blue-100">
                    CÁC NGÀNH
                  </h1>
                </Col>
                <Col xs={24} sm={15} md={15}>
                  <h1 className="text-base mt-2 md:mt-0 md:text-xl">
                    Cơ khí, Điện - Điện tử, Xây dựng, Công nghệ thông tin & Các
                    ngành khác.
                  </h1>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={4} sm={3} md={2} className="mr-5 md:mr-5">
                  <div className="text-blue-500 border text-center p-2 rounded-lg bg-blue-100">
                    <CheckCircleOutlined className="text-3xl md:text-4xl" />
                  </div>
                </Col>
                <Col xs={16} sm={5} md={5} className="md:mr-5">
                  <h1 className="text-base md:text-xl font-medium w-fit md:w-full md:pr-2 pt-2 pb-3 border-b-2 border-blue-100">
                    ĐIỀU KIỆN
                  </h1>
                </Col>
                <Col xs={24} sm={15} md={15}>
                  <h1 className="text-base mt-2 md:mt-0 md:text-xl">
                    Tốt nghiệp Đại học các ngành khối Kỹ thuật <br />
                    Có quyết tâm học hỏi phát triển sự nghiệp Kỹ sư
                  </h1>
                </Col>
              </Row>
            </div>

            <div className="my-7 p-5 md:p-6 sm:mx-8 md:mx-10 border border-green-600 rounded-lg">
              <h1 className="text-base md:text-xl text-green-600 font-medium">
                NGOÀI RA, Asahi còn các lựa chọn khác dành cho bạn:
              </h1>
              <ul className="list-circle ml-6">
                <li className="text-base md:text-lg my-2">
                  Chương trình Lưu học (du học) Nhật Bản,{" "}
                  <span className="text-green-600 font-medium">
                    tỷ lệ đậu cao cùng học bổng lên đến 500 triệu.
                  </span>
                </li>
                <li className="text-base md:text-lg my-2">
                  Các khóa học tiếng Nhật từ sơ cấp đến nâng cao,{" "}
                  <span className="text-green-600 font-medium">
                    khai giảng hàng tuần
                  </span>{" "}
                  trên 14 hệ thống toàn quốc.
                </li>
                <li className="text-base md:text-lg my-2">
                  Giới thiệu Việc làm trong nước hoàn toàn MIỄN PHÍ từ{" "}
                  <span className="text-green-600 font-medium">
                    phổ thông đến cao cấp được chọn lọc
                  </span>{" "}
                  từ các công ty Việt Nam hay công ty Nhật tại Việt Nam.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="bg-white rounded-lg h-fit my-9 mx-auto w-full xl:w-3/4 2xl:w-full">
          <RegisterForm />
        </div>
        <div>
          <div className="bg-black rounded-lg mb-5 py-3 px-10 w-52 md:w-56 block mx-auto">
            <h1 className="text-center text-base md:text-xl text-white font-medium">
              <span className="text-5xl md:text-6xl text-yellow-400 font-bold pb-4">
                ~56
              </span>
              <br />
              TRIỆU VNĐ
            </h1>
          </div>

          <h1 className="text-center text-base md:text-xl font-medium mb-2 md:mb-5">
            CHI PHÍ THẤP NHẤT
          </h1>

          <h1 className="text-center text-2xl md:text-3xl text-red-600 mb-5 font-medium">
            CHỈ CÓ TẠI ASAHI
          </h1>

          <div className="border-b-2 border-red-500 w-60 md:w-96 pb-0 px-5 mb-5 block mx-auto"></div>

          <div className="block mx-auto px-5 md:px-0 md:w-3/6">
            <p className="mb-5 text-base md:text-xl">
              Tại Asahi, chi phí tham gia chương trình bao gồm Phí dịch vụ và
              Phí đào tạo Ngoại ngữ & Kỹ năng thấp nhất CHỈ TỪ 56 TRIỆU VNĐ. Chi
              phí sẽ thay đổi tùy vào mức lương công việc tuyển dụng, tỉ giá của
              đồng Yên và tuân thủ đúng quy định Luật pháp.
            </p>
          </div>

          <div className="border-b-2 border-red-500 w-60 md:w-96 pb-0 px-5 mb-6 block mx-auto"></div>

          <h1 className="text-center text-base md:text-xl font-medium mb-1">
            ASAHI GROUP
          </h1>

          <h1 className="text-center text-base md:text-xl mb-1">
            9 Trần Văn Giáp, Phường Hiệp Tân, Quận Tân Phú, Tp.HCM
          </h1>
        </div>

        <div className="block mx-auto w-auto md:w-[700px] my-7">
          <Row justify={"space-evenly"}>
            <Col xs={8} md={10} className="text-center">
              <Image
                src={"/yellowStar.png"}
                className="block mx-auto h-12 w-12 md:h-[60px] md:w-[60px]"
                width={60}
                height={60}
                alt="yellow star"
              />
              <h1 className="text-yellow-600 text-sm md:text-base">445/QD-GDDT-TC</h1>
              <h1 className="text-gray-500 text-sm md:text-base">GIẤY PHÉP ĐÀO TẠO</h1>
            </Col>
            <Col xs={8} md={10} className="text-center">
              <Image
                src={"/yellowStar.png"}
                className="block mx-auto h-12 w-12 md:h-[60px] md:w-[60px]"
                width={60}
                height={60}
                alt="yellow star"
              />
              <h1 className="text-yellow-600 text-sm md:text-base">7907-LDTBXH-GP</h1>
              <h1 className="text-gray-500 text-sm md:text-base">
                GIẤY PHÉP GIỚI THIỆU VIỆC LÀM TRONG NƯỚC
              </h1>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bg-black mt-10 py-2 md:py-3">
        <h1 className="text-white text-center text-sm md:text-base md:text-left md:pl-10">
          Copyright &copy; 2010 ASAHI Co. Ltd. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
