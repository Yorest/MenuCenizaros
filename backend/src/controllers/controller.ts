import type { Request, Response, NextFunction } from 'express';
import type { Email } from '../models/email';
import { Resend } from 'resend';
import config from '../config/config';

// Create an item
export const sendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const resend = new Resend(config.API_KEY);

  try {
    const { from, subject, html } = req.body;
    const email: Email = { from, to:config.EMAIL, subject, html };

    const response = await resend.emails.send({
      ...email,
    });  

    res.status(201).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const getEmail = (res: Response) => {
  res.status(200).json({ message: 'Email sent successfully' });
};
