let currentAlgorithm = 'caesar';

const algorithmInfo = {
    caesar: "Caesar Cipher shifts each letter by a fixed number of positions in the alphabet. Named after Julius Caesar who used it for military communications.",
    vigenere: "Vigenère Cipher uses a keyword to shift letters by different amounts. It's a polyalphabetic substitution cipher that's more secure than Caesar.",
    base64: "Base64 encoding converts binary data into ASCII text. It's commonly used for encoding data in emails and web applications.",
    rot13: "ROT13 is a simple letter substitution cipher that replaces each letter with the letter 13 positions after it in the alphabet.",
    aes: "AES-256 (Advanced Encryption Standard) is a symmetric encryption algorithm widely used for secure data encryption. Requires a secret key.",
    morse: "Morse Code represents text as sequences of dots and dashes. Developed in the 1830s for telegraph communication.",
    binary: "Binary encoding converts text to binary (base-2) representation using 0s and 1s.",
    hex: "Hexadecimal encoding converts text to base-16 representation using digits 0-9 and letters A-F.",
    reverse: "Reverse String simply reverses the order of characters in the text.",
    atbash: "Atbash Cipher is a monoalphabetic substitution cipher where A↔Z, B↔Y, C↔X, and so on.",
    xor: "XOR Cipher uses the exclusive OR operation with a key to encrypt/decrypt data. Each bit is XORed with the corresponding key bit.",
    rail: "Rail Fence Cipher writes the message in a zigzag pattern across multiple rails, then reads off row by row.",
    md5: "MD5 (Message Digest 5) is a cryptographic hash function that produces a 128-bit hash value. Note: MD5 is not secure for cryptographic purposes.",
    sha256: "SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that produces a 256-bit hash value. Widely used for data integrity.",
    sha512: "SHA-512 produces a 512-bit hash value. Part of the SHA-2 family, it's more secure than SHA-256 but slower to compute.",
    bcrypt: "Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks.",
    rsa: "RSA (Rivest–Shamir–Adleman) is an asymmetric cryptographic algorithm using public and private key pairs.",
    blowfish: "Blowfish is a symmetric-key block cipher designed as a replacement for DES. Fast and effective for encryption."
};

const algorithmCode = {
    caesar: `function caesarCipher(text, shift, decrypt = false) {
    if (decrypt) shift = 26 - shift;
    shift = shift % 26;
    
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(
                ((code - base + shift) % 26) + base
            );
        }
        return char;
    }).join('');
}`,
    
    vigenere: `function vigenereCipher(text, key, decrypt = false) {
    key = key.toLowerCase().replace(/[^a-z]/g, '');
    let keyIndex = 0;
    
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            const keyShift = key.charCodeAt(keyIndex % key.length) - 97;
            const shift = decrypt ? 26 - keyShift : keyShift;
            keyIndex++;
            return String.fromCharCode(
                ((code - base + shift) % 26) + base
            );
        }
        return char;
    }).join('');
}`,
    
    base64: `function base64Encode(text) {
    return btoa(unescape(encodeURIComponent(text)));
}

function base64Decode(text) {
    return decodeURIComponent(escape(atob(text)));
}`,
    
    rot13: `function rot13(text) {
    return text.replace(/[a-zA-Z]/g, char => {
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(
            ((char.charCodeAt(0) - base + 13) % 26) + base
        );
    });
}`,
    
    aes: `// Using CryptoJS library
function aesEncrypt(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
}

function aesDecrypt(encrypted, key) {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}`,
    
    morse: `const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', 
    '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.'
};

function textToMorse(text) {
    return text.toUpperCase().split('').map(char => 
        morseCode[char] || char
    ).join(' ');
}`,
    
    binary: `function textToBinary(text) {
    return text.split('').map(char => 
        char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => 
        String.fromCharCode(parseInt(bin, 2))
    ).join('');
}`,
    
    hex: `function textToHex(text) {
    return text.split('').map(char => 
        char.charCodeAt(0).toString(16).padStart(2, '0')
    ).join(' ');
}

function hexToText(hex) {
    return hex.split(' ').map(h => 
        String.fromCharCode(parseInt(h, 16))
    ).join('');
}`,
    
    reverse: `function reverseString(text) {
    return text.split('').reverse().join('');
}`,
    
    atbash: `function atbashCipher(text) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(
                base + (25 - (code - base))
            );
        }
        return char;
    }).join('');
}`,
    
    xor: `function xorCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
            text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }
    return result;
}`,
    
    rail: `function railFenceEncrypt(text, rails) {
    const fence = Array(rails).fill('').map(() => []);
    let rail = 0, direction = 1;
    
    for (let char of text) {
        fence[rail].push(char);
        rail += direction;
        if (rail === 0 || rail === rails - 1) {
            direction *= -1;
        }
    }
    return fence.flat().join('');
}

function railFenceDecrypt(text, rails) {
    const fence = Array(rails).fill('').map(() => []);
    const pattern = [];
    let rail = 0, direction = 1;
    
    for (let i = 0; i < text.length; i++) {
        pattern.push(rail);
        rail += direction;
        if (rail === 0 || rail === rails - 1) direction *= -1;
    }
    
    const counts = Array(rails).fill(0);
    pattern.forEach(r => counts[r]++);
    
    let index = 0;
    for (let r = 0; r < rails; r++) {
        fence[r] = text.slice(index, index + counts[r]).split('');
        index += counts[r];
    }
    
    let result = '';
    for (let p of pattern) {
        result += fence[p].shift();
    }
    return result;
}`
};

document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.getElementById('dropdownTrigger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedValue = document.querySelector('.selected-value');
    const langTabs = document.querySelectorAll('.lang-tab');
    
    // Safety check
    if (!dropdownTrigger || !dropdownMenu) {
        console.error('Dropdown elements not found');
        return;
    }
    
    // Toggle dropdown
    dropdownTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownTrigger.classList.toggle('active');
        dropdownMenu.classList.toggle('open');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdownTrigger.classList.remove('active');
        dropdownMenu.classList.remove('open');
    });
    
    // Handle item selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove previous selection
            dropdownItems.forEach(i => i.classList.remove('selected'));
            
            // Add selection to clicked item
            this.classList.add('selected');
            
            // Update selected value display
            selectedValue.textContent = this.querySelector('.algo-name').textContent;
            
            // Update current algorithm
            currentAlgorithm = this.dataset.value;
            updateAlgorithmInfo();
            updateControls();
            
            // Close dropdown
            dropdownTrigger.classList.remove('active');
            dropdownMenu.classList.remove('open');
        });
    });
    
    // Language tabs
    langTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            langTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentLanguage = this.dataset.lang;
            updateModalCode();
        });
    });
    
    // Set initial selected state
    dropdownItems[0].classList.add('selected');
    
    updateAlgorithmInfo();
    updateControls();
});

function updateAlgorithmInfo() {
    document.getElementById('algoInfo').textContent = algorithmInfo[currentAlgorithm];
}

function updateControls() {
    const keyControl = document.getElementById('keyControl');
    const keyInput = document.getElementById('keyInput');
    
    if (['caesar', 'vigenere', 'aes', 'xor', 'rail'].includes(currentAlgorithm)) {
        keyControl.style.display = 'block';
        if (currentAlgorithm === 'caesar') {
            keyInput.placeholder = 'Enter shift value (e.g., 3)';
            keyInput.type = 'number';
        } else if (currentAlgorithm === 'rail') {
            keyInput.placeholder = 'Enter number of rails (e.g., 3)';
            keyInput.type = 'number';
        } else {
            keyInput.placeholder = 'Enter encryption key';
            keyInput.type = 'text';
        }
    } else {
        keyControl.style.display = 'none';
    }
}

function performEncrypt() {
    const input = document.getElementById('inputText').value;
    const key = document.getElementById('keyInput').value;
    let output = '';
    
    if (!input) {
        showNotification('Please enter text to encrypt', 'error');
        return;
    }
    
    try {
        switch(currentAlgorithm) {
            case 'caesar':
                const shift = parseInt(key) || 3;
                output = caesarCipher(input, shift);
                break;
            case 'vigenere':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                output = vigenereCipher(input, key);
                break;
            case 'base64':
                output = btoa(unescape(encodeURIComponent(input)));
                break;
            case 'rot13':
                output = rot13(input);
                break;
            case 'aes':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                output = CryptoJS.AES.encrypt(input, key).toString();
                break;
            case 'morse':
                output = textToMorse(input);
                break;
            case 'binary':
                output = textToBinary(input);
                break;
            case 'hex':
                output = textToHex(input);
                break;
            case 'reverse':
                output = input.split('').reverse().join('');
                break;
            case 'atbash':
                output = atbashCipher(input);
                break;
            case 'xor':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                output = Array.from(xorCipher(input, key))
                    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
                    .join(' ');
                break;
            case 'rail':
                const rails = parseInt(key) || 3;
                output = railFenceEncrypt(input, rails);
                break;
            case 'md5':
                output = CryptoJS.MD5(input).toString();
                break;
            case 'sha256':
                output = CryptoJS.SHA256(input).toString();
                break;
            case 'sha512':
                output = CryptoJS.SHA512(input).toString();
                break;
            case 'bcrypt':
            case 'rsa':
            case 'blowfish':
                showNotification('This algorithm requires additional libraries not available in browser', 'error');
                return;
        }
        
        document.getElementById('outputText').value = output;
        showNotification('Encryption successful!', 'success');
    } catch(error) {
        showNotification('Encryption failed: ' + error.message, 'error');
    }
}

function performDecrypt() {
    const input = document.getElementById('inputText').value;
    const key = document.getElementById('keyInput').value;
    let output = '';
    
    if (!input) {
        showNotification('Please enter text to decrypt', 'error');
        return;
    }
    
    try {
        switch(currentAlgorithm) {
            case 'caesar':
                const shift = parseInt(key) || 3;
                output = caesarCipher(input, 26 - shift);
                break;
            case 'vigenere':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                output = vigenereCipher(input, key, true);
                break;
            case 'base64':
                output = decodeURIComponent(escape(atob(input)));
                break;
            case 'rot13':
                output = rot13(input);
                break;
            case 'aes':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                const bytes = CryptoJS.AES.decrypt(input, key);
                output = bytes.toString(CryptoJS.enc.Utf8);
                break;
            case 'morse':
                output = morseToText(input);
                break;
            case 'binary':
                output = binaryToText(input);
                break;
            case 'hex':
                output = hexToText(input);
                break;
            case 'reverse':
                output = input.split('').reverse().join('');
                break;
            case 'atbash':
                output = atbashCipher(input);
                break;
            case 'xor':
                if (!key) {
                    showNotification('Please enter a key', 'error');
                    return;
                }
                const hexString = input.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
                output = xorCipher(hexString, key);
                break;
            case 'rail':
                const decryptRails = parseInt(key) || 3;
                output = railFenceDecrypt(input, decryptRails);
                break;
            case 'md5':
            case 'sha256':
            case 'sha512':
                showNotification('Hash functions cannot be decrypted (one-way function)', 'error');
                return;
            case 'bcrypt':
            case 'rsa':
            case 'blowfish':
                showNotification('This algorithm requires additional libraries not available in browser', 'error');
                return;
        }
        
        document.getElementById('outputText').value = output;
        showNotification('Decryption successful!', 'success');
    } catch(error) {
        showNotification('Decryption failed: ' + error.message, 'error');
    }
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function vigenereCipher(text, key, decrypt = false) {
    key = key.toLowerCase().replace(/[^a-z]/g, '');
    let keyIndex = 0;
    
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            const keyShift = key.charCodeAt(keyIndex % key.length) - 97;
            const shift = decrypt ? 26 - keyShift : keyShift;
            keyIndex++;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function rot13(text) {
    return text.replace(/[a-zA-Z]/g, char => {
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
}

const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
};

function textToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCode[char] || char).join(' ');
}

function morseToText(morse) {
    const reverseMorse = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));
    return morse.split(' ').map(code => reverseMorse[code] || '').join('');
}

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function textToHex(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
}

function hexToText(hex) {
    return hex.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

function atbashCipher(text) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(base + (25 - (code - base)));
        }
        return char;
    }).join('');
}

function xorCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function railFenceEncrypt(text, rails) {
    const fence = Array(rails).fill('').map(() => []);
    let rail = 0, direction = 1;
    
    for (let char of text) {
        fence[rail].push(char);
        rail += direction;
        if (rail === 0 || rail === rails - 1) direction *= -1;
    }
    return fence.flat().join('');
}

function railFenceDecrypt(text, rails) {
    const fence = Array(rails).fill('').map(() => []);
    const pattern = [];
    let rail = 0, direction = 1;
    
    for (let i = 0; i < text.length; i++) {
        pattern.push(rail);
        rail += direction;
        if (rail === 0 || rail === rails - 1) direction *= -1;
    }
    
    const counts = Array(rails).fill(0);
    pattern.forEach(r => counts[r]++);
    
    let index = 0;
    for (let r = 0; r < rails; r++) {
        fence[r] = text.slice(index, index + counts[r]).split('');
        index += counts[r];
    }
    
    let result = '';
    for (let p of pattern) {
        result += fence[p].shift();
    }
    return result;
}

let currentLanguage = 'javascript';

const algorithmNames = {
    caesar: 'Caesar Cipher', vigenere: 'Vigenère Cipher', base64: 'Base64', rot13: 'ROT13',
    aes: 'AES-256', morse: 'Morse Code', binary: 'Binary', hex: 'Hexadecimal',
    reverse: 'Reverse String', atbash: 'Atbash Cipher', xor: 'XOR Cipher', rail: 'Rail Fence',
    md5: 'MD5 Hash', sha256: 'SHA-256', sha512: 'SHA-512', bcrypt: 'Bcrypt',
    rsa: 'RSA', blowfish: 'Blowfish'
};

function toggleCode() {
    const modal = document.getElementById('codeModal');
    const algoName = document.getElementById('modalAlgoName');
    algoName.textContent = algorithmNames[currentAlgorithm] || currentAlgorithm;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateModalCode();
}

function closeCodeModal() {
    const modal = document.getElementById('codeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateModalCode() {
    const codeBlock = document.getElementById('modalCodeBlock');
    let code = algorithmCode[currentAlgorithm] || '// Code not available';
    
    if (currentLanguage !== 'javascript') {
        code = `// ${algorithmNames[currentAlgorithm] || currentAlgorithm} implementation in ${currentLanguage.toUpperCase()}
// Implementation varies by language
// This is a JavaScript-based tool
// See JavaScript tab for working implementation`;
    }
    
    codeBlock.textContent = code;
    codeBlock.className = `language-${currentLanguage}`;
    Prism.highlightElement(codeBlock);
}

function copyOutput() {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
    showNotification('Output copied to clipboard!', 'success');
}

function copyModalCode() {
    const code = document.getElementById('modalCodeBlock').textContent;
    navigator.clipboard.writeText(code);
    showNotification('Code copied to clipboard!', 'success');
}

function clearInput() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function loadSample() {
    const samples = {
        caesar: 'Hello World! This is a secret message.',
        vigenere: 'The quick brown fox jumps over the lazy dog.',
        base64: 'Encode this text to Base64 format!',
        rot13: 'ROT13 is a simple cipher technique.',
        aes: 'This is a secure message encrypted with AES-256.',
        morse: 'SOS HELP NEEDED',
        binary: 'Binary encoding example',
        hex: 'Hexadecimal conversion',
        reverse: 'Reverse this text completely',
        atbash: 'Atbash cipher example text',
        xor: 'XOR encryption with key',
        rail: 'Rail fence cipher pattern'
    };
    
    document.getElementById('inputText').value = samples[currentAlgorithm];
    if (['caesar', 'rail'].includes(currentAlgorithm)) {
        document.getElementById('keyInput').value = '3';
    } else if (['vigenere', 'aes', 'xor'].includes(currentAlgorithm)) {
        document.getElementById('keyInput').value = 'SECRET';
    }
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.borderColor = type === 'success' ? 'var(--success)' : 'var(--danger)';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
