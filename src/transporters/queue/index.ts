/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dealer } from "zeromq";
import { Queue } from "./queue";

export async function send<T>(address: string, message: T) {
  const sender = new Dealer();
  await sender.bind(address);
  const queue = new Queue(sender);
  queue.send(JSON.stringify(message));
}