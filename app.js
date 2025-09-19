function getHello() {
    return {
        hello: "\u00A0", // placeholder to start (non-breaking space)
        greetings: [
            "Hola",         // Spanish
            "你好",          // Mandarin Chinese
            "Hello",        // English
            "हेलो",         // Hindi
            "Bonjour",      // French
            "Привет",       // Russian
            "Haloa",        // Hawaiian
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
        typingInterval: null,
        mode: "typing", // typing or deleting

        typeText(text) {
            let word = text.toLowerCase()     // convert to lowercase here
            let i = 0
            this.hello = "\u00A0" // reset but keep placeholder
            this.mode = "typing"

            this.typingInterval = setInterval(() => {
                if (this.mode === "typing") {
                    // remove placeholder before adding first char
                    if (this.hello === "\u00A0") this.hello = ""
                    this.hello += word[i]
                    i++
                    if (i >= word.length) {
                        this.mode = "waiting"
                        clearInterval(this.typingInterval)
                        setTimeout(() => this.deleteText(), 1000) // pause before delete
                    }
                }
            }, 150) // typing speed
        },

        deleteText() {
            this.mode = "deleting"
            this.typingInterval = setInterval(() => {
                // keep at least placeholder
                if (this.hello.length > 1 || this.hello !== "\u00A0") {
                    this.hello = this.hello.slice(0, -1) || "\u00A0"
                }

                if (this.hello === "\u00A0") {
                    clearInterval(this.typingInterval)
                    this.index = (this.index + 1) % this.greetings.length
                    setTimeout(() => this.typeText(this.greetings[this.index]), 300) // pause before next word
                }
            }, 100) // deleting speed
        },

        init() {
            this.typeText(this.greetings[this.index])
        },

        destroy() {
            clearInterval(this.typingInterval)
        }
    }
}
