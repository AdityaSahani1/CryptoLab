<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CryptoLab - Encryption & Decryption Tool</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">

    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <div class="container">

        <header class="header">

            <div class="logo">

                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>

                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>

                </svg>

                <h1>CryptoLab</h1>

            </div>

            <p class="tagline">Advanced Encryption & Decryption Tool</p>

        </header>



        <main class="main-content">

            <div class="algorithm-selector">

                <h3>Select Algorithm</h3>

                <div class="custom-dropdown" id="customDropdown">

                    <div class="dropdown-trigger" id="dropdownTrigger">

                        <span class="selected-value">Caesar Cipher</span>

                        <svg class="dropdown-arrow" width="14" height="8" viewBox="0 0 14 8" fill="none">

                            <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                        </svg>

                    </div>

                    <div class="dropdown-menu" id="dropdownMenu">

                        <div class="dropdown-item" data-value="caesar">

                            <span class="algo-icon">🔐</span>

                            <span class="algo-name">Caesar Cipher</span>

                        </div>

                        <div class="dropdown-item" data-value="vigenere">

                            <span class="algo-icon">🔑</span>

                            <span class="algo-name">Vigenère Cipher</span>

                        </div>

                        <div class="dropdown-item" data-value="base64">

                            <span class="algo-icon">📦</span>

                            <span class="algo-name">Base64</span>

                        </div>

                        <div class="dropdown-item" data-value="rot13">

                            <span class="algo-icon">🔄</span>

                            <span class="algo-name">ROT13</span>

                        </div>

                        <div class="dropdown-item" data-value="aes">

                            <span class="algo-icon">🛡️</span>

                            <span class="algo-name">AES-256</span>

                        </div>

                        <div class="dropdown-item" data-value="morse">

                            <span class="algo-icon">📡</span>

                            <span class="algo-name">Morse Code</span>

                        </div>

                        <div class="dropdown-item" data-value="binary">

                            <span class="algo-icon">💾</span>

                            <span class="algo-name">Binary</span>

                        </div>

                        <div class="dropdown-item" data-value="hex">

                            <span class="algo-icon">🔢</span>

                            <span class="algo-name">Hexadecimal</span>

                        </div>

                        <div class="dropdown-item" data-value="reverse">

                            <span class="algo-icon">↩️</span>

                            <span class="algo-name">Reverse String</span>

                        </div>

                        <div class="dropdown-item" data-value="atbash">

                            <span class="algo-icon">🔀</span>

                            <span class="algo-name">Atbash Cipher</span>

                        </div>

                        <div class="dropdown-item" data-value="xor">

                            <span class="algo-icon">⚡</span>

                            <span class="algo-name">XOR Cipher</span>

                        </div>

                        <div class="dropdown-item" data-value="rail">

                            <span class="algo-icon">🚂</span>

                            <span class="algo-name">Rail Fence</span>

                        </div>

                        <div class="dropdown-item" data-value="md5">

                            <span class="algo-icon">🔏</span>

                            <span class="algo-name">MD5 Hash</span>

                        </div>

                        <div class="dropdown-item" data-value="sha256">

                            <span class="algo-icon">🔒</span>

                            <span class="algo-name">SHA-256</span>

                        </div>

                        <div class="dropdown-item" data-value="sha512">

                            <span class="algo-icon">🔐</span>

                            <span class="algo-name">SHA-512</span>

                        </div>

                        <div class="dropdown-item" data-value="bcrypt">

                            <span class="algo-icon">🛡️</span>

                            <span class="algo-name">Bcrypt</span>

                        </div>

                        <div class="dropdown-item" data-value="rsa">

                            <span class="algo-icon">🗝️</span>

                            <span class="algo-name">RSA</span>

                        </div>

                        <div class="dropdown-item" data-value="blowfish">

                            <span class="algo-icon">🐡</span>

                            <span class="algo-name">Blowfish</span>

                        </div>

                    </div>

                </div>

            </div>



            <div class="crypto-section">

                <div class="input-section">

                    <div class="section-header">

                        <h3>Input Text</h3>

                        <div class="header-actions">

                            <button class="clear-btn" onclick="clearInput()">Clear</button>

                            <button class="sample-btn" onclick="loadSample()">Load Sample</button>

                        </div>

                    </div>

                    <textarea id="inputText" placeholder="Enter your text here..."></textarea>

                    

                    <div class="controls" id="controlsSection">

                        <div class="control-group" id="keyControl">

                            <label for="keyInput">Key/Shift:</label>

                            <input type="text" id="keyInput" placeholder="Enter key or shift value">

                        </div>

                    </div>



                    <div class="action-buttons">

                        <button class="btn btn-encrypt" onclick="performEncrypt()">

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>

                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>

                            </svg>

                            Encrypt

                        </button>

                        <button class="btn btn-decrypt" onclick="performDecrypt()">

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>

                                <path d="M7 11V7a5 5 0 0 1 9.9 0"></path>

                            </svg>

                            Decrypt

                        </button>

                        <button class="btn btn-show-code" onclick="toggleCode()">

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                                <polyline points="16 18 22 12 16 6"></polyline>

                                <polyline points="8 6 2 12 8 18"></polyline>

                            </svg>

                            Show Code

                        </button>

                    </div>

                </div>



                <div class="output-section">

                    <div class="section-header">

                        <h3>Output</h3>

                        <button class="copy-btn" onclick="copyOutput()">

                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>

                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>

                            </svg>

                            Copy

                        </button>

                    </div>

                    <textarea id="outputText" placeholder="Output will appear here..." readonly></textarea>

                    

                    <div class="info-section" id="infoSection">

                        <h4>Algorithm Information</h4>

                        <p id="algoInfo"></p>

                    </div>

                </div>

            </div>



        </main>



        <footer class="footer">

            <p>CryptoLab - Educational Cryptography Tool | Built with PHP & JavaScript</p>

        </footer>

    </div>



    <div class="notification" id="notification"></div>



    <!-- Code Modal -->

    <div class="code-modal" id="codeModal">

        <div class="code-modal-overlay" onclick="closeCodeModal()"></div>

        <div class="code-modal-content">

            <div class="code-modal-header">

                <h2>Implementation Code - <span id="modalAlgoName"></span></h2>

                <button class="modal-close-btn" onclick="closeCodeModal()">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                        <line x1="18" y1="6" x2="6" y2="18"></line>

                        <line x1="6" y1="6" x2="18" y2="18"></line>

                    </svg>

                </button>

            </div>

            <div class="code-modal-body">

                <div class="language-tabs" id="languageTabs">

                    <button class="lang-tab active" data-lang="javascript">JavaScript</button>

                    <button class="lang-tab" data-lang="python">Python</button>

                    <button class="lang-tab" data-lang="php">PHP</button>

                    <button class="lang-tab" data-lang="java">Java</button>

                    <button class="lang-tab" data-lang="c">C</button>

                    <button class="lang-tab" data-lang="cpp">C++</button>

                    <button class="lang-tab" data-lang="ruby">Ruby</button>

                    <button class="lang-tab" data-lang="go">Go</button>

                </div>

                <div class="code-display">

                    <button class="copy-code-btn-modal" onclick="copyModalCode()">

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>

                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>

                        </svg>

                        Copy Code

                    </button>

                    <pre><code id="modalCodeBlock" class="language-javascript"></code></pre>

                </div>

            </div>

        </div>

    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-c.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-cpp.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-ruby.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-go.min.js"></script>

    <script src="js/script.js"></script>

</body>

</html>