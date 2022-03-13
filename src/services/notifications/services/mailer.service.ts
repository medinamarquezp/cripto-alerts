import { createTransport } from "nodemailer";
import { mailer } from "@/src/config";
import { logger } from "@/src/shared/logger";
import { template } from "../templates/base-notification.template";
import { IMailerNotification } from "../dtos/mailer-notification.dto";

const transporter = createTransport({
  host: mailer.HOST,
  port: mailer.PORT,
  secure: false,
  auth: {
    user: mailer.USER,
    pass: mailer.PASSWORD
  }
});

export const sendEmail = async (message: IMailerNotification): Promise<void> => {
  const { to, subject, content } = message;
  try {
    const email = await transporter.sendMail({
      from: mailer.FROM,
      to: `${to}, ${to}`,
      subject,
      html: template(content),
    });
    logger.info(`Email with subject "${subject}" has been send to "${to}" with message id "${email.messageId}"`);
  } catch (err) {
    const error = err as Error;
    logger.error(`Error on sending email to "${to}" with subject "${subject}": ${error.message}`);
  }
};
