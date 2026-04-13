function getHello() {
    return {
        hello: "hello",
        greetings: [
            "Hola",         // Spanish
            "你好",          // Mandarin Chinese
            "Hello",        // English
            "हेलो",         // Hindi
            "Bonjour",      // French
            "Привет",       // Russian
            "Aloha",        // Hawaiian
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
        timer: null,

        getCurrentWord() {
            if (!Array.isArray(this.greetings) || this.greetings.length === 0) {
                return "hello";
            }

            const word = this.greetings[this.index] ?? "hello";
            return String(word).toLowerCase();
        },

        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        },

        typeFromStart() {
            const word = this.getCurrentWord();
            this.hello = "\u00A0";

            let i = 0;
            const step = () => {
                if (i >= word.length) {
                    this.timer = setTimeout(() => this.deleteToEmpty(), 900);
                    return;
                }

                if (this.hello === "\u00A0") {
                    this.hello = "";
                }
                this.hello += word[i];
                i += 1;
                this.timer = setTimeout(step, 110);
            };

            step();
        },

        deleteToEmpty() {
            const step = () => {
                if (!this.hello || this.hello.length <= 1) {
                    this.hello = "\u00A0";
                    this.index = (this.index + 1) % this.greetings.length;
                    this.timer = setTimeout(() => this.typeFromStart(), 220);
                    return;
                }

                this.hello = this.hello.slice(0, -1);
                this.timer = setTimeout(step, 80);
            };

            step();
        },

        init() {
            this.clearTimer();
            this.index = 0;
            this.typeFromStart();
        },

        destroy() {
            this.clearTimer();
        }
    }
}

function getHelloBar() {
    return {
        greetings: [
            "hello",
            "hola",
            "bonjour",
            "hallo",
            "ciao",
            "namaste",
            "salaam",
            "shalom",
            "konnichiwa",
            "annyeong",
            "merhaba",
            "ola",
            "hej",
            "ahoj",
            "zdravo",
            "privet",
            "ni hao",
            "sawasdee",
            "xin chao",
            "selamat",
            "aloha",
            "kia ora"
        ],

        line: "",
        init() {
            this.greetings = this.shuffle(this.greetings);
            const base = this.greetings.join("   |   ");
            this.line = `${base}   |   ${base}   |   ${base}   |`;
        },

        shuffle(arr) {
            let array = arr.slice();
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    };
}
