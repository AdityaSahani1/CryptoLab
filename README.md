# CryptoLab - Encryption & Decryption Tool

## Overview

A comprehensive cryptography web application built with PHP and JavaScript that provides multiple encryption and decryption algorithms. Features a modern dark-themed interface with syntax-highlighted code display and copy functionality.

## Project Purpose

CryptoLab is an educational cryptography tool designed to:
- Perform various encryption and decryption operations
- Demonstrate how different cryptographic algorithms work
- Display the implementation code for each algorithm
- Provide an interactive learning experience for cryptography enthusiasts

## User Preferences

Preferred communication style: Simple, everyday language.

## Technology Stack

### Frontend
- **HTML5**: Semantic structure
- **CSS3**: Modern dark theme with gradients and animations
- **JavaScript**: Cryptography implementations and UI interactions
- **CryptoJS**: AES-256 encryption library
- **Prism.js**: Syntax highlighting for code display

### Backend
- **PHP 8.4**: Server-side processing

### Fonts & Libraries
- **Inter**: Primary UI font
- **JetBrains Mono**: Monospace font for code and text areas
- **Prism Tomorrow Theme**: Dark syntax highlighting theme

## Architecture

### File Structure
```
/
├── index.php          # Main application interface
├── css/
│   └── style.css     # Complete styling with dark theme
├── js/
│   └── script.js     # All cryptography implementations
└── .gitignore        # Project ignore file
```

### Design System

**Color Palette**:
- Primary: Cyan (#00d4ff) - Main accent color
- Secondary: Purple (#7c3aed) - Secondary accent
- Success: Green (#10b981) - Encrypt button
- Danger: Red (#ef4444) - Error states
- Dark backgrounds: #0a0a0f, #1a1a2e, #2a2a3e
- Text: #e4e4e7, #a1a1aa (dimmed)
- Borders: #3f3f46

**Typography**:
- UI Text: Inter (300-700 weight)
- Code/Monospace: JetBrains Mono (400-700 weight)

## Implemented Algorithms

### 1. Caesar Cipher
- Classic substitution cipher
- Shifts letters by fixed positions
- Configurable shift value (key)

### 2. Vigenère Cipher
- Polyalphabetic substitution cipher
- Uses keyword for encryption
- More secure than Caesar cipher

### 3. Base64
- Binary-to-text encoding
- Commonly used for data transmission
- No key required

### 4. ROT13
- Special case of Caesar cipher (shift 13)
- Self-inverse operation
- No key required

### 5. AES-256
- Advanced Encryption Standard
- Symmetric encryption algorithm
- Requires secret key
- Uses CryptoJS library

### 6. Morse Code
- Text to Morse and vice versa
- Dots, dashes, and spaces
- No key required

### 7. Binary
- Text to binary conversion
- 8-bit representation
- No key required

### 8. Hexadecimal
- Text to hex conversion
- Base-16 representation
- No key required

### 9. Reverse String
- Simple character reversal
- No encryption, just reversal
- No key required

### 10. Atbash Cipher
- Monoalphabetic substitution
- A↔Z, B↔Y, C↔X pattern
- No key required

### 11. XOR Cipher
- Bitwise XOR operation
- Requires encryption key
- Output in hexadecimal

### 12. Rail Fence Cipher
- Transposition cipher
- Zigzag pattern writing
- Configurable number of rails

## Key Features

### 1. Algorithm Selector
- 12 different cryptography algorithms
- Visual button grid with hover effects
- Active state indication
- Easy switching between algorithms

### 2. Input/Output Interface
- Large text areas for input and output
- Monospace font for better readability
- Clear and Load Sample buttons
- Algorithm information display

### 3. Encryption/Decryption Controls
- Dedicated Encrypt and Decrypt buttons
- Dynamic key input (shows only when needed)
- Different input types (text/number) per algorithm
- Visual feedback with color coding

### 4. Show Code Feature
- Displays implementation code for each algorithm
- Syntax highlighting with Prism.js
- Copy code button for easy sharing
- Collapsible code section

### 5. Copy Functionality
- Copy output text to clipboard
- Copy implementation code to clipboard
- Visual notification on copy success

### 6. Notifications
- Toast-style notifications
- Success/Error states
- Auto-dismiss after 3 seconds
- Smooth slide-in animation

### 7. Sample Data Loading
- Pre-filled sample text per algorithm
- Auto-fills appropriate keys
- Quick testing functionality

## Algorithm Information Display

Each algorithm includes:
- Description of how it works
- Historical context or use cases
- Security characteristics
- Implementation details via Show Code

## Code Implementation Examples

All algorithms include viewable implementation code:
- Caesar Cipher: Character shifting logic
- Vigenère: Keyword-based encryption
- Base64: btoa/atob encoding
- AES-256: CryptoJS implementation
- Morse Code: Character mapping
- Binary/Hex: Number base conversion
- And more...

## User Interface

### Dark Theme Design
- Professional dark background
- High contrast for readability
- Gradient accents (cyan to purple)
- Smooth transitions and animations

### Responsive Layout
- Two-column layout for desktop
- Single column for mobile/tablet
- Flexible grid system
- Touch-friendly buttons

### Interactive Elements
- Hover effects on buttons
- Focus states for inputs
- Active state indicators
- Smooth animations

## Security Considerations

**Educational Purpose**:
- Tool designed for learning
- Not for production encryption
- Client-side processing
- Visible implementation code

**Input Handling**:
- No server-side storage
- All processing in browser
- Error handling for invalid inputs
- Clear error messages

## Workflow Configuration

**Server Workflow**:
- Name: `Server`
- Command: `php -S 0.0.0.0:5000`
- Port: 5000 (Replit standard)
- Type: Webview
- Status: Running

## Development Status

**Completed**: October 12, 2025
- 18 cryptography algorithms implemented (expanded from original 12)
- Multi-language code modal popup (JavaScript, Python, PHP, Java, C, C++, Ruby, Go)
- Custom styled dropdown menu with icons and animations
- Copy functionality for output and code
- Responsive dark theme interface
- All features tested and working
- Clean, organized codebase

## Usage Instructions

1. **Select Algorithm**: Click on any algorithm button
2. **Enter Text**: Type or paste text in input area
3. **Add Key** (if needed): Enter encryption key/shift value
4. **Encrypt/Decrypt**: Click appropriate button
5. **View Code**: Click "Show Code" to see implementation
6. **Copy**: Use copy buttons for output or code

## Future Enhancement Ideas

- Add more algorithms (RSA, Blowfish, DES)
- File encryption/decryption support
- Hash functions (MD5, SHA-256)
- Password strength analyzer
- Encryption history
- Dark/Light theme toggle
- Export results to file
- Multi-language support
- Algorithm comparison tool
- Performance benchmarks

## Notes

- All encryption happens client-side
- No data is stored on server
- Educational tool, not for production use
- Code examples use vanilla JavaScript
- AES encryption requires CryptoJS library
- Syntax highlighting via Prism.js
