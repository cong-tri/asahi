/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAIL_HOST: process.env.NEXT_PUBLIC_SERVER_MAIL_HOST,
        MAIL_PORT: process.env.NEXT_PUBLIC_SERVER_MAIL_PORT,
        AUTH_USER: process.env.NEXT_PUBLIC_SENDER_AUTH_USER,
        AUTH_PASS: process.env.NEXT_PUBLIC_SENDER_AUTH_PASS,
        RECEIVER_MAIL: process.env.NEXT_PUBLIC_RECEIVER_MAIL,
    },
};

export default nextConfig;
