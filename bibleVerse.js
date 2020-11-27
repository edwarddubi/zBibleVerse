"use strict";

import Bible from "bible.js";

const getBibleVerse = async (verse) => {
    return new Promise((res, rej) =>{
        Bible.init(
            {
              versions: {
                en: {
                  source: "https://github.com/BibleJS/bible-english",
                  version: "master",
                  language: "en",
                },
              },
            }, (err) => {
              if (err) {
                rej(err);
              }
              // Create Bible instances
               const displayVerses = () => {
                return (err, data) => {
                  if (err) {
                    rej(err);
                  }
                  res(data)
                };
              };
              // Get a specific Bible verse in English
              const enBible = new Bible({ language: "en" });
              enBible.get(verse, displayVerses());
            }
          );
    })
};

export { getBibleVerse };
