// const translate = require("google-translate-api");
const fs = require("fs");
const path = require("path");

const translateText = async (text, targetLang) => {
  try {
    return text;
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error("err:", error.message);
    return null;
  }
};

const tranlate = async () => {
  const textToTranslate = "un texto de prueba.";
  const targetLanguage = "en";

  const outputFile = path.join(__dirname, "translations.txt");

  const translatedText = await translateText(textToTranslate, targetLanguage);

  if (translatedText) {
    fs.writeFile(outputFile, translatedText, (err) => {
      if (err) {
        console.error("error:", err.message);
      } else {
        console.log("success.");
      }
    });
  }
};

tranlate();
