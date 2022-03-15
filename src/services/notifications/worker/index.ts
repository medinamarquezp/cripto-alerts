import { Dealer } from "zeromq";
import { services } from "@/src/config";
import { logger } from "@/src/shared/logger";
import { sendEmail } from "../services/mailer.service";
import { IMailerNotification } from "../interfaces/mailer-notification.interface";

async function main() {
  logger.info("Notifications worker started");

  const receiver = new Dealer();
  receiver.connect(services.NOTIFICATIONS.PATH);

  for await (const [msg] of receiver) {
    if (msg.length === 0) {
      receiver.close();
      logger.info("No message to process");
    } else {
      const message = JSON.parse(msg.toString()) as IMailerNotification;
      await sendEmail(message);
    }
  }
}

main().catch(error => {
  logger.error(`Error processing notifications queue worker: ${error.message}`);
  process.exit(1);
});
