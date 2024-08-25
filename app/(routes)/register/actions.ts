/** @format */

"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Register } from "./registerForm";

export async function handleSendMail(formData: Register) {
  if (formData) {
    console.log(formData);

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        pool: true,
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: true,
        auth: {
          type: "login",
          user: process.env.AUTH_USER,
          pass: process.env.AUTH_PASS,
        },
        // requireTLS: true,
      } as SMTPTransport.Options);
      console.log("test >>", transporter);

      await transporter.sendMail({
        from: process.env.AUTH_USER,
        to: process.env.AUTH_USER,
        subject: "Send contact to ASAHI",
        text: `
        Xin chào và cảm ơn ASAHI:\n\n
          \tHọ và tên: ${formData.username}\n
          \tSố điện thoại: ${formData.phone}\n
          \tNgày tháng năm sinh : ${formData.dateOfBirth}\n
          \tEmail: ${formData.email}\n
          \tNghề nghiệp hiện tại: ${formData.currentJob}\n
          \tChương trình đang quan tâm: ${formData.program}\n\n
        Xin cảm ơn!
        `,
      });
      console.log("test >>");

      transporter.verify(function (error, success) {
        if (error) {
          console.log("test >>");
          console.log(error);
        } else {
          console.log(success);
          console.log("test >>");
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
