import { Dealer } from 'zeromq';
import { Queue } from '@/src/brokers/queue/queue';

describe('Brokers - Queue tests', () => {
  let queue: Queue;

  const dealerSendMock = jest.spyOn(Dealer.prototype, 'send')
    .mockImplementation(async () => undefined);

  beforeEach(() => {
    const dealer = new Dealer();
    const maxMessages = 2;
    queue = new Queue(dealer, maxMessages);
  });

  it('should create a new queue instance', () => {
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.QueueSize).toBe(0);
  });

  it('should enqueue a new message', () => {
    queue.trySend = jest.fn();
    queue.send('Test message');
    expect(queue.trySend).toBeCalled();
    expect(queue.QueueSize).toBe(1);
  });

  it('should throw an error when queue is full', () => {
    queue.trySend = jest.fn();
    queue.send('Test message 1');
    queue.send('Test message 2');
    expect(() => queue.send('Test message 3')).toThrow('Queue is full');
  });

  it('should dequeue messages after has been processed', () => {
    queue.send('Test message 1');
    expect(dealerSendMock).toBeCalledWith('Test message 1');
    expect(queue.QueueSize).toBe(0);
  });
});
