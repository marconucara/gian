// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Topic: ${body.topic}\r\n
    Message: ${body.message}\r\n
  `;
  try {
    await mail.send({
      to: "marco.nucara@gmail.com",
      from: "info@gianlucasantambrogio.com",
      subject: "Nuova richiesta dal sito!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
    res.status(200).json({});
  } catch (e) {
    console.log(JSON.stringify(e));
    res.status(500).json({});
  }
};
