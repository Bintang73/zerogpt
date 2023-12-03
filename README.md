# ZeroGpt - AI Word Check Tool

## Install

Use the stable version:
```
npm install zerogpt
```

## How To Use
``` js 
const ZeroGpt = require('zerogpt');
const ZeroGpts = new ZeroGpt();

ZeroGpts.score('Hi im under the water')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

```

## Result
``` js 
{
  success: true,
  data: {
    sentences: [],
    isHuman: 100,
    additional_feedback: 'Please input more text for a more accurate result',
    h: [],
    hi: [],
    textWords: 5,
    aiWords: 0,
    fakePercentage: 0,
    specialIndexes: [],
    specialSentences: [],
    originalParagraph: 'Hi im under the water',
    input_text: 'Hi im under the water',
    detected_language: 'en'
  },
  code: 200,
  message: 'Detection complete'
};

```
