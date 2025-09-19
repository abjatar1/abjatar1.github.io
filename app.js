function getHello() {
    return {
        hello: "ciao",
        greetings: [
            "Hola",         // Spanish
            "你好",          // Mandarin Chinese
            "Hello",        // English
            "हेलो",         // Hindi
            "مرحباً",       // Arabic
            "Bonjour",      // French
            "Привет",       // Russian
            "Haloa",         // Hawaiian
            "こんにちは",    // Japanese
            "Olá",          // Portuguese
            "안녕하세요",    // Korean
            "Hallo",        // German
            "Selamat",      // Indonesian/Malay
            "Ciao",         // Italian
            "Merhaba",      // Turkish
            "สวัสดี",       // Thai
            "Xin chào",     // Vietnamese
            "Hej",          // Swedish / Danish
            "Shalom",       // Hebrew
        ],
        index: 0,
        tick() {
            this.hello = this.greetings[this.index].toLowerCase()
            this.index = (this.index + 1) % this.greetings.length
        },
        init() {
            this.interval = setInterval(() => this.tick(), 1000)
        },
        destroy() {
            clearInterval(this.interval)
        }
    }
}
