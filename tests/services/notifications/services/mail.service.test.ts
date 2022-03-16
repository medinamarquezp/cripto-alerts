import { IMailerNotification } from "@/src/services/notifications/interfaces/mailer-notification.interface";
import { sendEmail } from "@/src/services/notifications/services/mailer.service";
import { createTransport } from "nodemailer";

describe('Mail service tests', () => {
  let mailerNotification: IMailerNotification;
  beforeAll(() => {
    mailerNotification = {
      to: "test@test.es",
      subject: "Test message",
      content: "Test message content"
    }
  })

  it('should returns message id when notification has been sended', async () => {
    const result = await sendEmail(mailerNotification);
    expect(result.messageSended).toBe(true);
    expect(result.messageId).toContain('criptoalerts.io')
  });

  it('should returns an error message if they are any issue', async () => {
    const fakeTransport = createTransport({ host: '0.0.0.0', port: 0 })
    const result = await sendEmail(mailerNotification, fakeTransport);
    expect(result.messageSended).toBe(false);
    expect(result.errorMessage).toBe('connect ECONNREFUSED 0.0.0.0:587');
  });
});