import React from "react";
import Image from "next/image";

import { Col, Row } from "antd";
import { CheckCircleOutlined, SettingOutlined } from "@ant-design/icons";

import RegisterForm from "./registerForm";

const RegisterPage = () => {
  return (
    <div className="bg-green-100 h-fit">
      <div className="container mx-auto">
        <Row align={"middle"} justify={"center"}>
          <Col span={13}>
            <div className="pt-20 pb-10 pl-8">
              <Row>
                <Col span={16}>
                  <Image
                    src={"/logo.png"}
                    width={200}
                    height={200}
                    alt="Logo Ahasi"
                  />
                  <h1 className="mt-4 text-3xl font-medium">
                    Giúp bạn &quot;đổi đời&quot; với cơ hội
                  </h1>
                  <h1 className="text-4xl font-medium">
                    LÀM VIỆC TẠI NHẬT BẢN
                  </h1>
                </Col>

                <Col span={8}>
                  <Image
                    src={"/register.png"}
                    className="w-full"
                    width={200}
                    quality={100}
                    height={200}
                    alt="Register"
                  />
                </Col>
              </Row>
            </div>

            <div className="mb-10">
              <div className="border-2 border-red-400 rounded-lg p-7 border-b-0 rounded-e-none rounded-b-none">
                <div className="flex items-start justify-center">
                  <h1 className="text-2xl">Thu nhập cơ bản</h1>
                  <div className="mx-4">
                    <span className="font-bold text-6xl text-red-500">
                      25 ~ 33
                    </span>
                  </div>
                  <div>
                    <h1 className="text-2xl text-red-500 font-medium">
                      TRIỆU VNĐ/tháng
                    </h1>
                    <h1 className="text-xl">(chưa tính các phụ cấp khác)</h1>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 rounded-lg p-7 rounded-t-none">
                <h1 className="text-center text-3xl text-white">
                  TUYỂN DỤNG{" "}
                  <span className="text-yellow-300 font-bold">
                    NHÂN VIÊN LÀM VIỆC TẠI NHẬT
                  </span>
                </h1>
              </div>
            </div>

            <div className="my-7 px-5">
              <Row justify={"space-around"}>
                <Col span={2}>
                  <div className="text-red-500 border text-center p-2 rounded-lg bg-red-100">
                    <SettingOutlined className="text-4xl" />
                  </div>
                </Col>
                <Col span={5}>
                  <h1 className="text-2xl font-medium pr-2 pt-2 pb-3 border-b-2 border-red-100">
                    CÁC NGÀNH
                  </h1>
                </Col>
                <Col span={15}>
                  <h1 className="text-2xl">
                    Chế biến thủy sản, Thực phẩm, Công nhân nhà máy, Xây dựng,
                    Phục vụ Khách sạn, Bảo dưỡng tòa nhà, Chăm sóc người cao
                    tuổi,...
                  </h1>
                </Col>
              </Row>
              <Row justify={"space-around"} className="mt-4">
                <Col span={2}>
                  <div className="text-red-500 border text-center p-2 rounded-lg bg-red-100">
                    <CheckCircleOutlined className="text-4xl" />
                  </div>
                </Col>
                <Col span={5} className="">
                  <h1 className="text-2xl font-medium pr-2 pt-2 pb-3 border-b-2 border-red-100">
                    ĐIỀU KIỆN
                  </h1>
                </Col>
                <Col span={15}>
                  <h1 className="text-2xl">
                    Cấp 3, Trung cấp, Cao đẳng, Đại học
                  </h1>
                </Col>
              </Row>
            </div>

            <div className="mb-10">
              <div className="border-2 border-blue-400 rounded-lg p-7 border-b-0 rounded-e-none rounded-b-none">
                <div className="flex items-start justify-center">
                  <h1 className="text-2xl">Thu nhập cơ bản</h1>
                  <div className="mx-4">
                    <span className="font-bold text-6xl text-blue-500">
                      33 ~ 50
                    </span>
                  </div>
                  <div>
                    <h1 className="text-2xl text-blue-500 font-medium">
                      TRIỆU VNĐ/tháng
                    </h1>
                    <h1 className="text-xl">(chưa tính các phụ cấp khác)</h1>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 rounded-lg p-7 rounded-t-none">
                <h1 className="text-center text-3xl text-white">
                  TUYỂN DỤNG{" "}
                  <span className="text-yellow-300 font-bold">
                    NHÂN VIÊN LÀM VIỆC TẠI NHẬT
                  </span>
                </h1>
              </div>
            </div>

            <div className="my-7 px-5">
              <Row justify={"space-around"}>
                <Col span={2}>
                  <div className="text-blue-500 border text-center p-2 rounded-lg bg-blue-100">
                    <SettingOutlined className="text-4xl" />
                  </div>
                </Col>
                <Col span={5}>
                  <h1 className="text-2xl font-medium pr-2 pt-2 pb-3 border-b-2 border-blue-100">
                    CÁC NGÀNH
                  </h1>
                </Col>
                <Col span={15}>
                  <h1 className="text-2xl">
                    Cơ khí, Điện - Điện tử, Xây dựng, Công nghệ thông tin & Các
                    ngành khác.
                  </h1>
                </Col>
              </Row>
              <Row justify={"space-around"} className="mt-4">
                <Col span={2}>
                  <div className="text-blue-500 border text-center p-2 rounded-lg bg-blue-100">
                    <CheckCircleOutlined className="text-4xl" />
                  </div>
                </Col>
                <Col span={5} className="">
                  <h1 className="text-2xl font-medium pr-2 pt-2 pb-3 border-b-2 border-blue-100">
                    ĐIỀU KIỆN
                  </h1>
                </Col>
                <Col span={15}>
                  <h1 className="text-2xl">
                    Tốt nghiệp Đại học các ngành khối Kỹ thuật <br />
                    Có quyết tâm học hỏi phát triển sự nghiệp Kỹ sư
                  </h1>
                </Col>
              </Row>
            </div>

            <div className="my-7 p-6 border border-green-600 rounded-lg">
              <h1 className="text-2xl text-green-600 font-medium">
                NGOÀI RA, Asahi còn các lựa chọn khác dành cho bạn:
              </h1>
              <ul className="list-circle ml-6">
                <li className="text-xl my-2">
                  Chương trình Lưu học (du học) Nhật Bản,{" "}
                  <span className="text-green-600 font-medium">
                    tỷ lệ đậu cao cùng học bổng lên đến 500 triệu.
                  </span>
                </li>
                <li className="text-xl my-2">
                  Các khóa học tiếng Nhật từ sơ cấp đến nâng cao,{" "}
                  <span className="text-green-600 font-medium">
                    khai giảng hàng tuần
                  </span>{" "}
                  trên 14 hệ thống toàn quốc.
                </li>
                <li className="text-xl my-2">
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
        <div className="bg-white rounded-lg h-fit my-9">
          <RegisterForm />
        </div>
        <Row align={"middle"} justify={"center"}>
          <Col span={13}>
            <div className="bg-black rounded-lg mb-5 py-3 px-10 w-fit block mx-auto">
              <h1 className="text-center text-xl text-white font-medium">
                <span className="text-6xl text-yellow-400 font-bold pb-4">
                  ~56
                </span>
                <br />
                TRIỆU VNĐ
              </h1>
            </div>

            <h1 className="text-center text-xl font-medium mb-5">
              CHI PHÍ THẤP NHẤT
            </h1>

            <h1 className="text-center text-3xl text-red-500 mb-5 font-medium">
              CHỈ CÓ TẠI ASAHI
            </h1>

            <div className="border-b-2 border-red-500 w-[300px] pb-0 px-5 mb-5 block mx-auto"></div>

            <p className="mb-5 text-xl">
              Tại Asahi, chi phí tham gia chương trình bao gồm Phí dịch vụ và
              Phí đào tạo Ngoại ngữ & Kỹ năng thấp nhất CHỈ TỪ 56 TRIỆU VNĐ. Chi
              phí sẽ thay đổi tùy vào mức lương công việc tuyển dụng, tỉ giá của
              đồng Yên và tuân thủ đúng quy định Luật pháp.
            </p>

            <div className="border-b-2 border-red-500 w-[300px] pb-0 px-5 mb-6 block mx-auto"></div>

            <h1 className="text-center text-xl font-medium mb-1">
              ASAHI GROUP
            </h1>

            <h1 className="text-center text-xl mb-1">
              15A Đống Đa, Phường 2, Quận Tân Bình, Tp.HCM
            </h1>

            <div className="block mx-auto w-[800px] my-7">
              <Row justify={"space-evenly"}>
                <Col span={5} className="text-center">
                  <Image
                    src={"/yellowStar.png"}
                    className="block mx-auto"
                    width={60}
                    height={60}
                    alt="yellow star"
                  />
                  <h1 className="text-yellow-600">158/LDTBXH-GP</h1>
                  <h1 className="text-gray-500">
                    GIẤY PHÉP ĐƯA NLĐ ĐI LÀM VIỆC Ở NƯỚC NGOÀI
                  </h1>
                </Col>
                <Col span={5} className="text-center">
                  <Image
                    src={"/yellowStar.png"}
                    className="block mx-auto"
                    width={60}
                    height={60}
                    alt="yellow star"
                  />
                  <h1 className="text-yellow-600">445/QD-GDDT-TC</h1>
                  <h1 className="text-gray-500">
                    GIẤY PHÉP ĐÀO TẠO
                  </h1>
                </Col>
                <Col span={5} className="text-center">
                  <Image
                    src={"/yellowStar.png"}
                    className="block mx-auto"
                    width={60}
                    height={60}
                    alt="yellow star"
                  />
                  <h1 className="text-yellow-600">7907-LDTBXH-GP</h1>
                  <h1 className="text-gray-500">
                    GIẤY PHÉP GIỚI THIỆU VIỆC LÀM TRONG NƯỚC
                  </h1>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </div>
      <div className="bg-black mt-10 py-3">
        <h1 className="text-white pl-10">
          Copyright &copy; 2010 ASAHI Co. Ltd. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
