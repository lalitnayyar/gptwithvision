import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const imgURL = "https://scrimba.com/links/menu-image";

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini-2024-07-18",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "I want to order one of each item on this menu for my company party. How much would that cost?" },
        {
          type: "image_url",
          image_url: {
            url: imgURL
          }
        }
      ]
    }
  ]
});
console.log(response.choices[0]);

document.body.innerHTML = `<img src="${imgURL}" alt="Image to analyze">`;