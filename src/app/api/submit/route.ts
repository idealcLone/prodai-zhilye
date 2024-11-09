import { NextRequest, NextResponse } from 'next/server';

const submissionRecords = new Map<
  string,
  { count: number; timestamp: number }
>();
const RATE_LIMIT = 3;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const currentTime = Date.now();

  const record = submissionRecords.get(ip);

  if (record) {
    if (currentTime - record.timestamp > TIME_WINDOW) {
      submissionRecords.set(ip, { count: 1, timestamp: currentTime });
    } else if (record.count >= RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    } else {
      record.count += 1;
    }
  } else {
    submissionRecords.set(ip, { count: 1, timestamp: currentTime });
  }

  const { phone, name, comment } = await req.json();

  let text = `Поступила завяка для бесплатной консультации\n`;

  if (name) {
    text += `Имя: ${name}\n`;
  }

  if (phone) {
    text += `Номер: ${phone}\n`;
  }

  if (comment) {
    text += `Коммент: ${comment}`;
  }

  const response = await fetch('http://localhost:8087/bot/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      telegramUserId: '444165791',
      chatId: '444165791',
    }),
  });

  const json = await response.json();

  console.log(json);

  return NextResponse.json({ message: 'Request submitted successfully' });
}
