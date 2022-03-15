import { IMailerNotification } from "@/src/services/notifications/interfaces/mailer-notification.interface";
import { sendEmail } from "@/src/services/notifications/services/mailer.service";

describe('Mail service tests', () => {
  let mailerNotification: IMailerNotification;
  beforeAll(() => {
    mailerNotification = {
      to: "test@test.es",
      subject: "Test message",
      content: "Test message content"
    }
  })

  it('should returns message id when message has been sended', async () => {
    const result = await sendEmail(mailerNotification);
    expect(result.messageSended).toBe(true);
    expect(result.messageId).toContain('criptoalerts.io')
  });
});