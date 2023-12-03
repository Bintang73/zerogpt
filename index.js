const fetch = require('node-fetch');
const randomUseragent = require('random-useragent');

class ZeroGpt {
  constructor() {
    this.apiUrl = 'https://api.zerogpt.com/api/detect/detectText';
    this.headers = {
      'Content-Type': 'application/json',
      'authority': 'api.zerogpt.com',
      'origin': 'https://www.zerogpt.com',
      'referer': 'https://www.zerogpt.com/',
      'user-agent': randomUseragent.getRandom()
    };
  }

  async score(text) {
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        input_text: text
      })
    });

    const data = await res.json();
    return data;
  }
}

module.exports = ZeroGpt;