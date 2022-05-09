const insert = document.body;
const keyItems = [];
const Keys = [];
const keysArr = [
    {
        className: 'Backquote',
        eng: {
            caps: '`',
            shiftDown: '`',
            shiftUp: '~',
            shiftCaps: '~',
        },
        rus: {
            caps: 'Ё',
            shiftDown: 'ё',
            shiftUp: 'Ё',
            shiftCaps: 'ё',
        },
    },
    {
        className: 'Digit1',
        eng: {
            caps: '1',
            shiftDown: '1',
            shiftUp: '!',
            shiftCaps: '!',
        },
        rus: {
            caps: '1',
            shiftDown: '1',
            shiftUp: '!',
            shiftCaps: '!',
        },
    },
    {
        className: 'Digit2',
        eng: {
            caps: '2',
            shiftDown: '2',
            shiftUp: '@',
            shiftCaps: '@',
        },
        rus: {
            caps: '2',
            shiftDown: '2',
            shiftUp: '"',
            shiftCaps: '"',
        },
    },
    {
        className: 'Digit3',
        eng: {
            caps: '3',
            shiftDown: '3',
            shiftUp: '#',
            shiftCaps: '#',
        },
        rus: {
            caps: '3',
            shiftDown: '3',
            shiftUp: '№',
            shiftCaps: '№',
        },
    },
    {
        className: 'Digit4',
        eng: {
            caps: '4',
            shiftDown: '4',
            shiftUp: '$',
            shiftCaps: '$',
        },
        rus: {
            caps: '4',
            shiftDown: '4',
            shiftUp: ';',
            shiftCaps: ';',
        },
    },
    {
        className: 'Digit5',
        eng: {
            caps: '5',
            shiftDown: '5',
            shiftUp: '%',
            shiftCaps: '%',
        },
        rus: {
            caps: '5',
            shiftDown: '5',
            shiftUp: '%',
            shiftCaps: '%',
        },
    },
    {
        className: 'Digit6',
        eng: {
            caps: '6',
            shiftDown: '6',
            shiftUp: '^',
            shiftCaps: '^',
        },
        rus: {
            caps: '6',
            shiftDown: '6',
            shiftUp: ':',
            shiftCaps: ':',
        },
    },
    {
        className: 'Digit7',
        eng: {
            caps: '7',
            shiftDown: '7',
            shiftUp: '&',
            shiftCaps: '&',
        },
        rus: {
            caps: '7',
            shiftDown: '7',
            shiftUp: '?',
            shiftCaps: '?',
        },
    },
    {
        className: 'Digit8',
        eng: {
            caps: '8',
            shiftDown: '8',
            shiftUp: '*',
            shiftCaps: '*',
        },
        rus: {
            caps: '8',
            shiftDown: '8',
            shiftUp: '*',
            shiftCaps: '*',
        },
    },
    {
        className: 'Digit9',
        eng: {
            caps: '9',
            shiftDown: '9',
            shiftUp: '(',
            shiftCaps: '(',
        },
        rus: {
            caps: '9',
            shiftDown: '9',
            shiftUp: '(',
            shiftCaps: '(',
        },
    },
    {
        className: 'Digit0',
        eng: {
            caps: '0',
            shiftDown: '0',
            shiftUp: ')',
            shiftCaps: ')',
        },
        rus: {
            caps: '0',
            shiftDown: '0',
            shiftUp: ')',
            shiftCaps: ')',
        },
    },
    {
        className: 'Minus',
        eng: {
            caps: '-',
            shiftDown: '-',
            shiftUp: '_',
            shiftCaps: '_',
        },
        rus: {
            caps: '-',
            shiftDown: '-',
            shiftUp: '_',
            shiftCaps: '_',
        },
    },
    {
        className: 'Equal',
        eng: {
            caps: '=',
            shiftDown: '=',
            shiftUp: '+',
            shiftCaps: '+',
        },
        rus: {
            caps: '=',
            shiftDown: '=',
            shiftUp: '+',
            shiftCaps: '+',
        },
    },
    {
        className: 'Backspace',
        eng: {
            shiftDown: 'Backspace',
            shiftUp: 'Backspace',
        },
        rus: {
            shiftDown: 'Backspace',
            shiftUp: 'Backspace',
        },
    },

    {
        className: 'Tab',
        eng: {
            shiftDown: 'Tab',
            shiftUp: 'Tab',
        },
        rus: {
            shiftDown: 'Tab',
            shiftUp: 'Tab',
        },
    },
    {
        className: 'KeyQ',
        eng: {
            shiftDown: 'q',
            shiftUp: 'Q',
        },
        rus: {
            shiftDown: 'й',
            shiftUp: 'Й',
        },
    },
    {
        className: 'KeyW',
        eng: {
            shiftDown: 'w',
            shiftUp: 'W',
        },
        rus: {
            shiftDown: 'ц',
            shiftUp: 'Ц',
        },
    },
    {
        className: 'KeyE',
        eng: {
            shiftDown: 'e',
            shiftUp: 'E',
        },
        rus: {
            shiftDown: 'у',
            shiftUp: 'У',
        },
    },
    {
        className: 'KeyR',
        eng: {
            shiftDown: 'r',
            shiftUp: 'R',
        },
        rus: {
            shiftDown: 'к',
            shiftUp: 'К',
        },
    },
    {
        className: 'KeyT',
        eng: {
            shiftDown: 't',
            shiftUp: 'T',
        },
        rus: {
            shiftDown: 'е',
            shiftUp: 'Е',
        },
    },
    {
        className: 'KeyY',
        eng: {
            shiftDown: 'y',
            shiftUp: 'Y',
        },
        rus: {
            shiftDown: 'н',
            shiftUp: 'Н',
        },
    },
    {
        className: 'KeyU',
        eng: {
            shiftDown: 'u',
            shiftUp: 'U',
        },
        rus: {
            shiftDown: 'г',
            shiftUp: 'Г',
        },
    },
    {
        className: 'KeyI',
        eng: {
            shiftDown: 'i',
            shiftUp: 'I',
        },
        rus: {
            shiftDown: 'ш',
            shiftUp: 'Ш',
        },
    },
    {
        className: 'KeyO',
        eng: {
            shiftDown: 'o',
            shiftUp: 'O',
        },
        rus: {
            shiftDown: 'щ',
            shiftUp: 'Щ',
        },
    },
    {
        className: 'KeyP',
        eng: {
            shiftDown: 'p',
            shiftUp: 'P',
        },
        rus: {
            shiftDown: 'з',
            shiftUp: 'З',
        },
    },
    {
        className: 'BracketLeft',
        eng: {
            caps: '[',
            shiftDown: '[',
            shiftUp: '{',
            shiftCaps: '{',
        },
        rus: {
            caps: 'Х',
            shiftDown: 'х',
            shiftUp: 'Х',
            shiftCaps: 'х',
        },
    },
    {
        className: 'BracketRight',
        eng: {
            caps: ']',
            shiftDown: ']',
            shiftUp: '}',
            shiftCaps: '}',
        },
        rus: {
            caps: 'Ъ',
            shiftDown: 'ъ',
            shiftUp: 'Ъ',
            shiftCaps: 'ъ',
        },
    },
    {
        className: 'Backslash',
        eng: {
            caps: '\\',
            shiftDown: '\\',
            shiftUp: '|',
            shiftCaps: '|',
        },
        rus: {
            caps: '\\',
            shiftDown: '\\',
            shiftUp: '/',
            shiftCaps: '/',
        },
    },
    {
        className: 'Delete',
        eng: {
            shiftDown: 'Del',
            shiftUp: 'Del',
        },
        rus: {
            shiftDown: 'Del',
            shiftUp: 'Del',
        },
    },

    {
        className: 'CapsLock',
        eng: {
            shiftDown: 'CapsLock',
            shiftUp: 'CapsLock',
        },
        rus: {
            shiftDown: 'CapsLock',
            shiftUp: 'CapsLock',
        },
    },
    {
        className: 'KeyA',
        eng: {
            shiftDown: 'a',
            shiftUp: 'A',
        },
        rus: {
            shiftDown: 'ф',
            shiftUp: 'Ф',
        },
    },
    {
        className: 'KeyS',
        eng: {
            shiftDown: 's',
            shiftUp: 'S',
        },
        rus: {
            shiftDown: 'ы',
            shiftUp: 'Ы',
        },
    },
    {
        className: 'KeyD',
        eng: {
            shiftDown: 'd',
            shiftUp: 'D',
        },
        rus: {
            shiftDown: 'в',
            shiftUp: 'В',
        },
    },
    {
        className: 'KeyF',
        eng: {
            shiftDown: 'f',
            shiftUp: 'F',
        },
        rus: {
            shiftDown: 'а',
            shiftUp: 'А',
        },
    },
    {
        className: 'KeyG',
        eng: {
            shiftDown: 'g',
            shiftUp: 'G',
        },
        rus: {
            shiftDown: 'п',
            shiftUp: 'П',
        },
    },
    {
        className: 'KeyH',
        eng: {
            shiftDown: 'h',
            shiftUp: 'H',
        },
        rus: {
            shiftDown: 'р',
            shiftUp: 'Р',
        },
    },
    {
        className: 'KeyJ',
        eng: {
            shiftDown: 'j',
            shiftUp: 'J',
        },
        rus: {
            shiftDown: 'о',
            shiftUp: 'О',
        },
    },
    {
        className: 'KeyK',
        eng: {
            shiftDown: 'k',
            shiftUp: 'K',
        },
        rus: {
            shiftDown: 'л',
            shiftUp: 'Л',
        },
    },
    {
        className: 'KeyL',
        eng: {
            shiftDown: 'l',
            shiftUp: 'L',
        },
        rus: {
            shiftDown: 'д',
            shiftUp: 'Д',
        },
    },
    {
        className: 'Semicolon',
        eng: {
            caps: ';',
            shiftDown: ';',
            shiftUp: ':',
            shiftCaps: ':',
        },
        rus: {
            caps: 'Ж',
            shiftDown: 'ж',
            shiftUp: 'Ж',
            shiftCaps: 'ж',
        },
    },
    {
        className: 'Quote',
        eng: {
            caps: "'",
            shiftDown: "'",
            shiftUp: '"',
            shiftCaps: '"',
        },
        rus: {
            caps: 'Э',
            shiftDown: 'э',
            shiftUp: 'Э',
            shiftCaps: 'э',
        },
    },
    {
        className: 'Enter',
        eng: {
            shiftDown: 'Enter',
            shiftUp: 'Enter',
        },
        rus: {
            shiftDown: 'Enter',
            shiftUp: 'Enter',
        },
    },

    {
        className: 'ShiftLeft',
        eng: {
            shiftDown: 'Shift',
            shiftUp: 'Shift',
        },
        rus: {
            shiftDown: 'Shift',
            shiftUp: 'Shift',
        },
    },
    {
        className: 'KeyZ',
        eng: {
            shiftDown: 'z',
            shiftUp: 'Z',
        },
        rus: {
            shiftDown: 'я',
            shiftUp: 'Я',
        },
    },
    {
        className: 'KeyX',
        eng: {
            shiftDown: 'x',
            shiftUp: 'X',
        },
        rus: {
            shiftDown: 'ч',
            shiftUp: 'Ч',
        },
    },
    {
        className: 'KeyC',
        eng: {
            shiftDown: 'c',
            shiftUp: 'C',
        },
        rus: {
            shiftDown: 'с',
            shiftUp: 'С',
        },
    },
    {
        className: 'KeyV',
        eng: {
            shiftDown: 'v',
            shiftUp: 'V',
        },
        rus: {
            shiftDown: 'м',
            shiftUp: 'М',
        },
    },
    {
        className: 'KeyB',
        eng: {
            shiftDown: 'b',
            shiftUp: 'B',
        },
        rus: {
            shiftDown: 'и',
            shiftUp: 'И',
        },
    },
    {
        className: 'KeyN',
        eng: {
            shiftDown: 'n',
            shiftUp: 'N',
        },
        rus: {
            shiftDown: 'т',
            shiftUp: 'Т',
        },
    },
    {
        className: 'KeyM',
        eng: {
            shiftDown: 'm',
            shiftUp: 'M',
        },
        rus: {
            shiftDown: 'ь',
            shiftUp: 'Ь',
        },
    },
    {
        className: 'Comma',
        eng: {
            caps: ',',
            shiftDown: ',',
            shiftUp: '<',
            shiftCaps: '<',
        },
        rus: {
            caps: 'Б',
            shiftDown: 'б',
            shiftUp: 'Б',
            shiftCaps: 'б',
        },
    },
    {
        className: 'Period',
        eng: {
            caps: '.',
            shiftDown: '.',
            shiftUp: '>',
            shiftCaps: '>',
        },
        rus: {
            caps: 'Ю',
            shiftDown: 'ю',
            shiftUp: 'Ю',
            shiftCaps: 'ю',
        },
    },
    {
        className: 'Slash',
        eng: {
            caps: '/',
            shiftDown: '/',
            shiftUp: '?',
            shiftCaps: '?',
        },
        rus: {
            caps: '.',
            shiftDown: '.',
            shiftUp: ',',
            shiftCaps: ',',
        },
    },
    {
        className: 'ArrowUp',
        eng: {
            shiftDown: '▲',
            shiftUp: '▲',
        },
        rus: {
            shiftDown: '▲',
            shiftUp: '▲',
        },
    },
    {
        className: 'ShiftRight',
        eng: {
            shiftDown: 'Shift',
            shiftUp: 'Shift',
        },
        rus: {
            shiftDown: 'Shift',
            shiftUp: 'Shift',
        },
    },

    {
        className: 'ControlLeft',
        eng: {
            shiftDown: 'Ctrl',
            shiftUp: 'Ctrl',
        },
        rus: {
            shiftDown: 'Ctrl',
            shiftUp: 'Ctrl',
        },
    },
    {
        className: 'MetaLeft',
        eng: {
            shiftDown: 'Win',
            shiftUp: 'Win',
        },
        rus: {
            shiftDown: 'Win',
            shiftUp: 'Win',
        },
    },
    {
        className: 'AltLeft',
        eng: {
            shiftDown: 'Alt',
            shiftUp: 'Alt',
        },
        rus: {
            shiftDown: 'Alt',
            shiftUp: 'Alt',
        },
    },
    {
        className: 'Space',
        eng: {
            shiftDown: ' ',
            shiftUp: ' ',
        },
        rus: {
            shiftDown: ' ',
            shiftUp: ' ',
        },
    },
    {
        className: 'AltRight',
        eng: {
            shiftDown: 'Alt',
            shiftUp: 'Alt',
        },
        rus: {
            shiftDown: 'Alt',
            shiftUp: 'Alt',
        },
    },
    {
        className: 'ArrowLeft',
        eng: {
            shiftDown: '◄',
            shiftUp: '◄',
        },
        rus: {
            shiftDown: '◄',
            shiftUp: '◄',
        },
    },
    {
        className: 'ArrowDown',
        eng: {
            shiftDown: '▼',
            shiftUp: '▼',
        },
        rus: {
            shiftDown: '▼',
            shiftUp: '▼',
        },
    },
    {
        className: 'ArrowRight',
        eng: {
            shiftDown: '►',
            shiftUp: '►',
        },
        rus: {
            shiftDown: '►',
            shiftUp: '►',
        },
    },
    {
        className: 'ControlRight',
        eng: {
            shiftDown: 'Ctrl',
            shiftUp: 'Ctrl',
        },
        rus: {
            shiftDown: 'Ctrl',
            shiftUp: 'Ctrl',
        },
    },
];

class Key {
    constructor(
        className,
        engCaps,
        engShiftDown,
        engShiftUp,
        engShiftCaps,
        rusCaps,
        rusShiftDown,
        rusShiftUp,
        rusShiftCaps,
        value
    ) {
        this.className = className;
        this.engCaps = engCaps || engShiftUp;
        this.engShiftDown = engShiftDown;
        this.engShiftUp = engShiftUp;
        this.engShiftCaps = engShiftCaps || engShiftDown;
        this.rusCaps = rusCaps || rusShiftUp;
        this.rusShiftDown = rusShiftDown;
        this.rusShiftUp = rusShiftUp;
        this.rusShiftCaps = rusShiftCaps || rusShiftDown;
        this.value = value;
    }
    addActiveState() {
        document
            .querySelector(`[data-event="${this.className}"]`)
            .classList.add('active');
    }
    removeActiveState() {
        document
            .querySelector(`[data-event="${this.className}"]`)
            .classList.remove('active');
    }
    static updateKeysValue() {
        Keys.forEach((element) => {
            let value;
            if (Key.lang == 'eng' && !Key.shift && !Key.caps) {
                value = element.engShiftDown;
            }
            if (Key.lang == 'eng' && Key.shift && !Key.caps) {
                value = element.engShiftUp;
            }
            if (Key.lang == 'eng' && Key.shift && Key.caps) {
                value = element.engShiftCaps;
            }
            if (Key.lang == 'eng' && !Key.shift && Key.caps) {
                value = element.engCaps;
            }
            if (Key.lang == 'rus' && !Key.shift && !Key.caps) {
                value = element.rusShiftDown;
            }
            if (Key.lang == 'rus' && Key.shift && !Key.caps) {
                value = element.rusShiftUp;
            }
            if (Key.lang == 'rus' && Key.shift && Key.caps) {
                value = element.rusShiftCaps;
            }
            if (Key.lang == 'rus' && !Key.shift && Key.caps) {
                value = element.rusCaps;
            }

            const keySelect = document.querySelector(
                `[data-event="${element.className}"]`
            );

            keySelect.innerText = value;
        });
    }
    static caps = false;
    static shift = false;
    static lang = localStorage.lang ? localStorage.lang : 'eng';
}

keysArr.forEach((element) => {
    let value =
        Key.lang == 'eng' ? element.eng.shiftDown : element.rus.shiftDown;
    Keys.push(
        new Key(
            element.className,
            element.eng.caps,
            element.eng.shiftDown,
            element.eng.shiftUp,
            element.eng.shiftCaps,
            element.rus.caps,
            element.rus.shiftDown,
            element.rus.shiftUp,
            element.rus.shiftCaps,
            value
        )
    );
});

drawKeyboard();
const textArea = document.querySelector('#textarea');

const keyboarArea = document.querySelector('#keyboard');
function drawKeyboard() {
    insert.innerHTML = '';
    let insertKeys = '';

    Keys.forEach((key) => {
        insertKeys += `
        <div class= "keyboard--key key" data-event="${key.className}">
            <span>${key.value}</span>
        </div>`;
    });

    insert.innerHTML = `
        <div class="centralizer">
    <p class="title">RSS Виртуальная клавиатура</p>
    <textarea
        class="body--textarea textarea"
        id="textarea"
        rows="5"
        cols="50"
    ></textarea>
    <div class="body--keyboard keyboard" id="keyboard">
    ${insertKeys}
     </div>
    <p class="description">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>
      </div>
`;
}

keyboarArea.addEventListener('mousedown', (event) => {
    event.preventDefault();

    if (event.target.closest('.keyboard--key')) {
        keysDownHandler(
            event.target.closest('.keyboard--key').innerText,
            event.target.closest('.keyboard--key').dataset.event,
            'mousedown'
        );
    }
});
window.addEventListener('mouseup', (event) => {
    let eventkey = event.target.closest('.keyboard--key')
        ? event.target.closest('.keyboard--key').innerText
        : null;
    let eventcode = event.target.closest('.keyboard--key')
        ? event.target.closest('.keyboard--key').dataset.event
        : null;

    keysUpHandler(eventkey, eventcode, 'mouseup');
});

window.addEventListener('keydown', (event) => {
    textArea.focus();
    keysDownHandler(event.key, event.code, 'keydown');
});
window.addEventListener('keyup', (event) => {
    keysUpHandler(event.key, event.code, 'keyup');
});

const keysDownHandler = (eventkey, eventcode, inputMode) => {
    Keys.forEach((key) => {
        if (key.className == eventcode) {
            key.addActiveState();
        }
    });

    if (event.getModifierState('Control') && event.getModifierState('Alt')) {
        Key.lang = Key.lang == 'eng' ? 'rus' : 'eng';
        localStorage.setItem('lang', Key.lang);
        Key.updateKeysValue();
    }
    if (inputMode === 'mousedown') {
        typeInTextarea(eventkey);

        function typeInTextarea(newText, el = textArea) {
            let [start, end] = [el.selectionStart, el.selectionEnd];

            switch (eventkey) {
                case 'Backspace':
                    if (start == 0) {
                        start += 1;
                    }
                    el.setRangeText('', start - 1, end);

                    break;
                case 'Del':
                    el.setRangeText('', start, end + 1);
                    // Key.updateKeysValue();
                    break;
                case '':
                    el.setRangeText(' ', start, end, 'select');
                    el.selectionStart++;
                    break;
                case 'Enter':
                    console.log('Enter');
                    el.setRangeText('\r\n', start, end, 'select');
                    el.selectionStart += 4;
                    break;
                case 'Shift':
                    break;
                case 'CapsLock':
                    break;
                case 'Ctrl':
                    break;
                case 'Win':
                    break;
                case 'Alt':
                    break;
                case 'Tab':
                    el.setRangeText('    ', start, end, 'select');
                    el.selectionStart += 4;
                    break;

                default:
                    el.setRangeText(newText, start, end, 'select');
                    el.selectionStart += newText.length;

                    break;
            }
        }
    }

    switch (eventkey) {
        case 'Shift':
            Key.shift = true;
            Key.updateKeysValue();
            break;
        case 'CapsLock':
            Key.caps = !Key.caps;

            if (Key.caps == true) {
                Keys[29].addActiveState();
            } else {
                Keys[29].removeActiveState();
            }
            Key.updateKeysValue();
            break;

        default:
            break;
    }
};
const keysUpHandler = (eventkey, eventcode, inputMode) => {
    if (inputMode == 'keyup') {
        Keys.forEach((key) => {
            if (key.className == eventcode && key.className != 'CapsLock') {
                key.removeActiveState();
            }
        });
    }
    if (inputMode == 'mouseup') {
        Keys.forEach((key) => {
            if (key.className != 'CapsLock') {
                key.removeActiveState();
            }
        });
    }
    switch (eventkey) {
        case 'Shift':
            Key.shift = false;
            Key.updateKeysValue();
            break;

        default:
            break;
    }
};
