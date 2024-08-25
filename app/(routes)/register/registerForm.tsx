"use client";
import React, { ReactNode, useActionState, useState } from "react";
import { useFormState } from "react-dom";

import { handleSendMail } from "./actions";

import { Button, Col, DatePicker, Form, Input, message, Row, Select } from "antd";
import type { FormProps } from "antd";
import type { DatePickerProps } from 'antd';

export type Register = {
    username: string;
    phone: string;
    email?: string;
    dateOfBirth: string;
    currentJob: string;
    program: string;
};

type ListSelect = {
    value: string;
    label: ReactNode;
};

const listJobs: ListSelect[] = [
    {
        value: "sample",
        label: <h1 className="text-base md:text-xl text-green-600">Chọn công việc</h1>,
    },
    {
        value: "no_job",
        label: (
            <h1 className="text-base md:text-xl text-green-600">Chưa có việc làm/ Thất nghiệp</h1>
        ),
    },
    {
        value: "work_at_factory",
        label: <h1 className="text-base md:text-xl text-green-600">Đang làm tại nhà máy</h1>,
    },
    {
        value: "work_at_construction",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Đang làm tại công trình - xây dựng
            </h1>
        ),
    },
    {
        value: "work_at_service/business_establishments",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Đang làm tại các cơ sở dịch vụ - kinh doanh
            </h1>
        ),
    },
    {
        value: "work_at_office",
        label: <h1 className="text-base md:text-xl text-green-600">Đang làm tại văn phòng</h1>,
    },
    {
        value: "work_have_technique/expertise",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Đang làm việc có Kỹ thuật - Chuyên môn
            </h1>
        ),
    },
    {
        value: "different_job",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Khác (Không thuộc danh sách trên)
            </h1>
        ),
    },
];

const listPrograms: ListSelect[] = [
    {
        value: "sample",
        label: <h1 className="text-base md:text-xl text-green-600">Chọn chương trình</h1>,
    },
    {
        value: "program_1-3-5_year_interns_work_in_Japan",
        label: (
            <h1 className="text-base md:text-xl text-green-600">Thực tập sinh 1 - 3 - 5 năm làm việc tại Nhật</h1>
        ),
    },
    {
        value: "program_Study_Abroad_Program_study_abroad_in_Japan",
        label: <h1 className="text-base md:text-xl text-green-600">Chương trình Lưu học (du học) Nhật Bản</h1>,
    },
    {
        value: "program_Engineer_working_in_Japan",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Kỹ sư làm việc tại Nhật
            </h1>
        ),
    },
    {
        value: "program_Japanese_teacher_training_course",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Khóa đào tạo giáo viên tiếng Nhật
            </h1>
        ),
    },
    {
        value: "program_Japanese_courses_at_levels_N4-N3-N2",
        label: <h1 className="text-base md:text-xl text-green-600">Khóa tiếng Nhật các trình độ N4, N3, N2</h1>,
    },
    {
        value: "program_Introducing_jobs_in_Vietnam",
        label: (
            <h1 className="text-base md:text-xl text-green-600">
                Giới thiệu việc làm tại Việt Nam
            </h1>
        ),
    },
];


const RegisterForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState<string>()

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDateOfBirth(dateString as string ?? "")
    };

    const onFinish: FormProps<Register>["onFinish"] = async (values: Register) => {
        if (!values) return

        const { valueJob } = checkValueJob(values.currentJob)
        const { valueProgram } = checkValueProgram(values.program);

        if (valueJob === "Vui lòng chọn nghề nghiệp của bạn") {
            message.error(valueJob, 2)
            return
        }

        if (valueProgram === "Vui lòng chọn chương trình mà bạn quan tâm") {
            message.error(valueProgram, 2)
            return
        }

        const formData: Register = {
            username: values.username,
            phone: values.phone,
            email: values.email,
            dateOfBirth: dateOfBirth ?? "",
            currentJob: valueJob ?? "",
            program: valueProgram ?? "",
        }

        const result = await handleSendMail(formData);
        console.log(result);

        message.info(result?.message)

    };

    const checkValueJob = (currentJob: string) => {

        let valueJob = ""

        switch (currentJob) {
            case "sample":
                valueJob = "Vui lòng chọn nghề nghiệp của bạn";
                break;
            case "no_job":
                valueJob = "Chưa có việc làm/ Thất nghiệp"
                break;
            case "work_at_factory":
                valueJob = "Đang làm tại nhà máy";
                break;
            case "work_at_construction":
                valueJob = "Đang làm tại công trình - xây dựng"
                break;
            case "work_at_service/business_establishments":
                valueJob = "Đang làm tại các cơ sở dịch vụ - kinh doanh";
                break;
            case "work_at_office":
                valueJob = "Đang làm tại văn phòng";
                break;
            case "work_have_technique/expertise":
                valueJob = "Đang làm việc có Kỹ thuật - Chuyên môn";
                break;
            case "different_job":
                valueJob = "Khác (Không thuộc danh sách trên)";
                break;
            default:
                break;
        }
        return { valueJob }
    }

    const checkValueProgram = (program: string) => {

        let valueProgram = ""

        switch (program) {
            case "sample":
                valueProgram = "Vui lòng chọn chương trình mà bạn quan tâm";
                break;
            case "program_1-3-5_year_interns_work_in_Japan":
                valueProgram = "Thực tập sinh 1 - 3 - 5 năm làm việc tại Nhật"
                break;
            case "program_Study_Abroad_Program_study_abroad_in_Japan":
                valueProgram = "Chương trình Lưu học (du học) Nhật Bản";
                break;
            case "program_Engineer_working_in_Japan":
                valueProgram = "Kỹ sư làm việc tại Nhật"
                break;
            case "program_Japanese_teacher_training_course":
                valueProgram = "Khóa đào tạo giáo viên tiếng Nhật";
                break;
            case "program_Japanese_courses_at_levels_N4-N3-N2":
                valueProgram = "Khóa tiếng Nhật các trình độ N4, N3, N2";
                break;
            case "program_Introducing_jobs_in_Vietnam":
                valueProgram = "Giới thiệu việc làm tại Việt Nam";
                break;
            default:
                break;
        }
        return { valueProgram }
    }
    return (
        <div className="py-6 sm:py-8 sm:px-5 md:px-0">
            <Row align={"middle"} justify={"center"}>
                <Col xs={24} md={20} xl={12} className="px-4 md:px-0">
                    <h1 className="text-base md:text-xl font-medium">
                        Chỉ cần điền vài thông tin bên dưới, nhân viên tư vấn sẽ gọi lại sớm
                        nhất có thể để tư vấn trực tiếp & chọn công việc phù hợp nhé!
                    </h1>
                    <h1 className="text-base md:text-xl text-red-500 text-end my-2 md:my-3 italic">
                        * thông tin cần phải nhập
                    </h1>
                    <div className="my-0 md:my-5">
                        <Form
                            name="register"
                            style={{ maxWidth: "100%" }}
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                            <h1 className="text-sm md:text-xl mb-2 pl-6">
                                Họ tên bạn <span className="text-red-500 font-medium">*</span>
                            </h1>
                            <Form.Item<Register>
                                name="username"
                                rules={[
                                    { required: true, message: "Vui lòng hãy nhập tên của bạn!" },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Họ và tên của bạn"
                                    style={{ padding: "14px" }}
                                />
                            </Form.Item>

                            <h1 className="text-sm md:text-xl mb-2 pl-6">
                                Điện thoại <span className="text-red-500 font-medium">*</span>
                            </h1>
                            <Form.Item<Register>
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng hãy nhập số đt của bạn!",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Số điện thoại của bạn"
                                    style={{ padding: "14px" }}

                                />
                            </Form.Item>

                            <h1 className="text-sm md:text-xl mb-2 pl-6">Địa chỉ Email</h1>
                            <Form.Item<Register>
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        message: "Vui lòng hãy nhập đúng email của bạn!",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email của bạn"
                                    style={{ paddingTop: 16, paddingBottom: 16 }}
                                />
                            </Form.Item>

                            <h1 className="text-sm md:text-xl mb-2 pl-6">
                                Ngày tháng năm sinh{" "}
                                <span className="text-red-500 font-medium">*</span>
                            </h1>
                            <Form.Item<Register>
                                name="dateOfBirth"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng hãy chọn ngày sinh của bạn!",
                                    },
                                ]}
                            >
                                <DatePicker
                                    size="large"
                                    className="w-full"
                                    onChange={onChange}
                                    format={{
                                        format: 'YYYY-MM-DD',
                                        type: 'mask',
                                    }}
                                    needConfirm
                                    style={{ paddingTop: 16, paddingBottom: 16 }}
                                />
                            </Form.Item>

                            <h1 className="text-sm md:text-xl mb-2 pl-6">
                                Công việc hiện tại{" "}
                                <span className="text-red-500 font-medium">*</span>
                            </h1>
                            <Form.Item<Register>
                                name="currentJob"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng hãy chọn nghề nghiệp của bạn!",
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    defaultValue={"sample"}
                                    options={listJobs}
                                />
                            </Form.Item>

                            <h1 className="text-sm md:text-xl mb-2 pl-6">
                                Bạn quan tâm chương trình nào{" "}
                                <span className="text-red-500 font-medium">*</span>
                            </h1>
                            <Form.Item<Register>
                                name="program"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng hãy chọn chương trình mà bạn quan tâm!",
                                    },
                                ]}
                            >
                                <Select size="large" defaultValue={"sample"} options={listPrograms} />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="w-full mt-5" size="large">ĐĂNG KÝ NGAY</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterForm;
