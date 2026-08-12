const franc = require("franc");


function detectLanguage(text) {

    const code = franc(text);


    const languages = {

        eng: "English",
        tam: "Tamil",
        hin: "Hindi",
        tel: "Telugu",
        mal: "Malayalam",
        kan: "Kannada",

        jpn: "Japanese",
        cmn: "Chinese",
        por: "Portuguese",
        rus: "Russian",
        spa: "Spanish",
        fra: "French",
        deu: "German",
        ita: "Italian",
        kor: "Korean",
        ara: "Arabic",
        tur: "Turkish",
        vie: "Vietnamese",
        ind: "Indonesian",
        tha: "Thai",
        ben: "Bengali",
        mar: "Marathi",
        guj: "Gujarati",
        pan: "Punjabi"

    };


    return languages[code] || "English";

}


module.exports = detectLanguage;