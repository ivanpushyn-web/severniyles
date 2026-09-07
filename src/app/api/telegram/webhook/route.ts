import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8929870836:AAHMeRayH7lwoKZX_JGVDS_G_nAn8bFkO2M";
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

// Обработчик webhook от Telegram
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Telegram webhook received:", JSON.stringify(body, null, 2));

    // Извлекаем сообщение
    const message = body.message || body.edited_message;
    if (!message) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text || "";
    const userName = message.from?.first_name || "Пользователь";

    // Простой ответ
    let replyText = "";
    
    if (text === "/start") {
      replyText = `Здравствуйте, ${userName}! 👋\n\nЯ бот Северного Леса. Чем могу помочь?\n\n` +
        `Напишите:\n` +
        `• "Баня" — узнать о банях\n` +
        `• "Дом" — узнать о домах\n` +
        `• "Цены" — открытый прайс\n` +
        `• "Контакты" — связаться с нами\n\n` +
        `Или просто опишите, что вам нужно — я передам мастеру.`;
    } else if (text.toLowerCase().includes("баня")) {
      replyText = `🌲 Бани ручной рубки от 5 800 р.\n\n` +
        `Размеры: 3×4, 5×3, 5×4, 6×6\n` +
        `Срок: 2-4 недели\n` +
        `Материал: сосна Витебской области\n\n` +
        `Подробнее: https://severniyles.by/bany\n\n` +
        `Оставьте телефон — перезвоним в течение 15 минут!`;
    } else if (text.toLowerCase().includes("дом")) {
      replyText = `🏠 Дома ручной рубки от 15 000 р.\n\n` +
        `Размеры: 6×6, 6×8, 8×10\n` +
        `Срок: 4-8 недель\n\n` +
        `Подробнее: https://severniyles.by/doma\n\n` +
        `Оставьте телефон — перезвоним!`;
    } else if (text.toLowerCase().includes("цена") || text.toLowerCase().includes("стоимость") || text.toLowerCase().includes("прайс")) {
      replyText = `💰 Открытый прайс:\n\n` +
        `Бани: 5 800 — 9 800 р. (сруб)\n` +
        `Дома: 15 000 — 35 000 р.\n` +
        `Беседки: 4 500 — 6 800 р.\n\n` +
        `Под ключ: от 12 000 р.\n\n` +
        `Все цены: https://severniyles.by/ceny`;
    } else if (text.toLowerCase().includes("контакт") || text.toLowerCase().includes("телефон") || text.toLowerCase().includes("позвонить")) {
      replyText = `📞 Контакты:\n\n` +
        `Телефон: +375 (XX) XXX-XX-XX\n` +
        `Email: info@severniyles.by\n` +
        `Адрес: Витебск, Беларусь\n\n` +
        `Работаем по всей Беларуси!\n` +
        `https://severniyles.by/kontakty`;
    } else if (text.match(/^\+?\d{10,15}$/)) {
      // Похоже на номер телефона
      replyText = `✅ Спасибо! Мы получили ваш номер.\n\n` +
        `Мастер перезвонит в течение 15 минут.\n\n` +
        `Если хотите уточнить детали — напишите сообщение.`;
      
      // Здесь можно добавить сохранение в базу или отправку уведомления
      console.log(`Заявка с телефоном: ${text} от ${userName} (chat_id: ${chatId})`);
    } else {
      replyText = `Спасибо за сообщение, ${userName}!\n\n` +
        `Я передам его мастеру. Для быстрой связи:\n` +
        `• Напишите "Цены" — узнать стоимость\n` +
        `• Оставьте телефон — перезвоним за 15 минут\n\n` +
        `Сайт: https://severniyles.by`;
    }

    // Отправляем ответ
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: replyText,
        parse_mode: "HTML",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Для проверки webhook
export async function GET() {
  return NextResponse.json({ status: "Telegram webhook endpoint is running" });
}
