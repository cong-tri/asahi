/** @format */

"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Register } from "./registerForm";

export async function handleSendMail(formData: Register) {
  if (formData) {
    try {
      const transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: true,
        auth: {
          type: "login",
          user: process.env.AUTH_USER,
          pass: process.env.AUTH_PASS,
        },
      } as SMTPTransport.Options);
      await transporter.sendMail({
        from: process.env.AUTH_USER,
        to: "daocongtri20031609@gmail.com",
        // process.env.RECEIVER_MAIL,
        subject: "Send contact to ASAHI",
        text: `
          Họ và tên: ${formData.username}\n
          Số điện thoại: ${formData.phone}\n
          Ngày tháng năm sinh : ${formData.dateOfBirth}\n
          Email: ${formData.email}\n
          Nghề nghiệp hiện tại: ${formData.currentJob}\n
          Chương trình đang quan tâm: ${formData.program}\n
        `,
      });
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      });
      transporter.close();

      return { message: "Successfully Send Contact To ASAHI" };
    } catch (error) {
      console.log(error);
      return { message: "Unsuccessfully Send Contact To ASAHI" };
    }
  }
}
