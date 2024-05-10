const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
// config env
// config
const { suralar } = require("./option");
console.log(suralar);
const bot = new Telegraf(process.env.BOT_TOKEN);
//
bot.start((ctx) =>
  ctx.reply(
    `Assalomu Alaykum  suralarni olish uchun /suralar  so'zin ustiga bosing! ${
      ctx.message.from.first_name
        ? ctx.message.from.first_name
        : "Assalomu Alaykum ~"
    }`
  )
);
bot.command("showsticker", (ctx) => {
  // Replace 'YOUR_STICKER_ID' with the ID of the sticker you want to send
  ctx.replyWithSticker(
    "CAACAgIAAxkBAAEKwLllVEhhDrl6WlnRDd-u8yap-TTo0gACIwADKA9qFCdRJeeMIKQGMwQ"
  );
  setTimeout(async () => {
    try {
      await ctx.deleteMessage(stickerMessage.message_id);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  }, 5000);
});
bot.command("hipster", Telegraf.reply("λ"));
bot.hears("hi", (ctx) => ctx.reply("hello"));
bot.command("suralar", (ctx) => {
  try {
    ctx.replyWithHTML(
      "Surlalardan birini tanlang... ",
      Markup.inlineKeyboard([
        [Markup.button.callback("Fotiha", "fotha")],
        [Markup.button.callback("Imran", "imran")],
        [Markup.button.callback("Nisa", "nisa")],
        [Markup.button.callback("Midah", "midah")],
        [Markup.button.callback("Anam", "anam")],
        [Markup.button.callback("Araf", "araf")],
        [Markup.button.callback("Anfal", "anfal")],
        [Markup.button.callback("Taubah", "taubah")],
        [Markup.button.callback("Yunus", "yunus")],
        [Markup.button.callback("Hud", "hud")],
        [Markup.button.callback("Yusuf", "yusuf")],
        [Markup.button.callback("Rad", "rad")],
        [Markup.button.callback("Ibrahim", "ibrahim")],
        [Markup.button.callback("Aijr", "aijr")],
        [Markup.button.callback("Nahl", "nahl")],
        [Markup.button.callback("Isra", "isra")],
        [Markup.button.callback("Kahf", "kahf")],
        [Markup.button.callback("Maryam", "maryam")],
        [Markup.button.callback("Taha", "taha")],
        [Markup.button.callback("Anbiya", "anbiya")],
        [Markup.button.callback("Hajja", "hajja")],
        [Markup.button.callback("Muminun", "muminun")],
        [Markup.button.callback("Nur", "nur")],
        [Markup.button.callback("Furqan", "furqan")],
        [Markup.button.callback("Sh'ara", "shara")],

        [Markup.button.callback("➡", "next")],
      ])
      //inline
    );
  } catch (error) {
    console.log(error);
  }
});

// Enable
bot.action("next", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    // await ctx.replyWithAudio(src, {
    //   disable_web_page_preview: true

    // })
    await ctx.replyWithHTML(
      "...",
      Markup.inlineKeyboard([
        [Markup.button.callback("Naml", "naml")],
        [Markup.button.callback("Gasas", "gasas")],
        [Markup.button.callback("Ankhabut", "ankhabut")],
        [Markup.button.callback("Rum", "rum")],
        [Markup.button.callback("Luqman", "luqman")],
        [Markup.button.callback("Sajdah", "sajdah")],
        [Markup.button.callback("Fatir", "fatir")],
        [Markup.button.callback("Yasin", "yasin")],
        [Markup.button.callback("Saffat", "saffat")],
        [Markup.button.callback("Sad", "sad")],
        [Markup.button.callback("Zumar", "zumar")],
        [Markup.button.callback("Ghafir", "ghafir")],
        [Markup.button.callback("Fassilat", "fassilat")],
        [Markup.button.callback("Shura", "shura")],
        [Markup.button.callback("Zukhruf", "zukhruf")],
        [Markup.button.callback("Dukhan", "dukhan")],
        [Markup.button.callback("Jathiyah", "jathiyah")],
        [Markup.button.callback("Ahqaf", "ahqaf")],
        [Markup.button.callback("Muhammad", "muhammad")],
        [Markup.button.callback("Fath", "fath")],
        [Markup.button.callback("Hujurat", "hujurat")],
        [Markup.button.callback("Qaf", "qaf")],
        [Markup.button.callback("Dhariyat", "dhariyat")],
        [Markup.button.callback("Tur", "tur")],
        [Markup.button.callback("Najm", "najm")],
        [Markup.button.callback("Qamar", "qamar")],
        [Markup.button.callback("Rahman", "rahman")],
        [Markup.button.callback("Waqiah", "waqiah")],

        [Markup.button.callback("➡", "townees")],
      ])
    );
  } catch (err) {
    console.log(err);
  }
});

bot.action("townees", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    // await ctx.replyWithAudio(src, {
    //   disable_web_page_preview: true

    // })
    await ctx.replyWithHTML(
      "...",
      Markup.inlineKeyboard([
        [Markup.button.callback("Hadid", "hadid")],
        [Markup.button.callback("Mujadilah", "mujadilah")],
        [Markup.button.callback("Hashr", "hashr")],
        [Markup.button.callback("Mumtahan", "mumtahanah")],
        [Markup.button.callback("Saff", "saff")],
        [Markup.button.callback("Jumuah", "jumuah")],
        [Markup.button.callback("Munafiqun", "munafiqun")],
        [Markup.button.callback("Taghabun", "taghabun")],
        [Markup.button.callback("Talaq", "talaq")],
        [Markup.button.callback("Tahrim", "tahrim")],
        [Markup.button.callback("Mulk", "mulk")],
        [Markup.button.callback("Qalam", "qalam")],
        [Markup.button.callback("Haqqah", "haqqah")],
        [Markup.button.callback("Marij", "maarij")],
        [Markup.button.callback("Nuh", "nuh")],
        [Markup.button.callback("Jinn", "jinn")],
        [Markup.button.callback("Muzammil", "muzammil")],
        [Markup.button.callback("Muddathir", "muddaththir")],
        [Markup.button.callback("Qiyamah", "qiyamah")],
        [Markup.button.callback("Insan", "insan")],
        [Markup.button.callback("Mursalat", "mursalat")],
        [Markup.button.callback("Qadr", "qadr")],
        [Markup.button.callback("Zalzalah", "zalzalah")],
        [Markup.button.callback("Qurash", "qurash")],
        [Markup.button.callback("Falaq", "falaq")],
        [Markup.button.callback("Nas", "nas")],
      ])
    );
  } catch (err) {
    console.log(err);
  }
});

function getSura(name, src) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery();
      await ctx.replyWithAudio(src, {
        disable_web_page_preview: true,
      });
    } catch (err) {
      console.log(err);
    }
  });
}
suralar.map((value) => {
  getSura(value.name, value.url);
});

bot.launch();

// Enable graceful stop
console.log(" bot is readiy 🏎");
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
