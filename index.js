import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const imgURL = "https://scrimba.com/links/egg-image";

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini-2024-07-18",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "I found this small egg on the ground in South Florida during spring. What type of bird could it be from?" },
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