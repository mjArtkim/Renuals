import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ status: "error", message: "Method not allowed" })
  }

  try {
    const { name = "", email = "", phone = "", message = "" } = req.body || {}

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ status: "error", message: "Please fill in all fields." })
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO,
      MAIL_FROM
    } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
      return res.status(500).json({ status: "error", message: "Server mail config is missing." })
    }

    const port = Number(SMTP_PORT)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: email ? { address: email, name } : undefined,
      subject: "포트폴리오에서 새 문의가 도착했습니다",
      html: `
        <strong>이름:</strong> ${name}<br>
        <strong>이메일:</strong> ${email}<br>
        <strong>전화번호:</strong> ${phone}<br><br>
        <strong>메시지:</strong><br>${String(message).replace(/\n/g, "<br>")}
      `
    })

    return res.status(200).json({ status: "success", message: "메일이 전송되었습니다." })
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "메일 전송 실패: 서버 오류가 발생했습니다."
    })
  }
}
