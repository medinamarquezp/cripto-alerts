import { createTransport, Transporter } from "nodemailer";
import { mailer } from "@/src/config";
import { logger } from "@/src/modules/shared/logger";
import { template } from "../templates/base-notification.template";
import { IMailerNotification } from "../interfaces/mailer-notification.interface";
import { IMailerResult } from "../interfaces/mailer-result.interface";

const baseTransporter = createTransport({
  host: mailer.HOST,
  port: mailer.PORT,
  secure: false,
  auth: {
    user: mailer.USER,
    pass: mailer.PASSWORD
  }
});

export const sendEmail = async (message: IMailerNotification, customTransporter?: Transporter): Promise<IMailerResult> => {
  const transporter = customTransporter ? customTransporter : baseTransporter;
  const { to, subject, content } = message;
  try {
    const email = await transporter.sendMail({
      from: mailer.FROM,
      to: `${to}, ${to}`,
      subject,
      html: template(content)
    });
    logger.info(`Email with subject "${subject}" has been send to "${to}" with message id "${email.messageId}"`);
    return { messageSended: true, messageId: email.messageId };
  } catch (err) {
    const error = err as Error;
    logger.error(`Error on sending email to "${to}" with subject "${subject}": ${error.message}`);
    return { messageSended: false, errorMessage: error.message };
  }
};
