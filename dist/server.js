"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Core transformation function
const transform = (sentence) => {
    if (!sentence?.trim())
        return { error: "Please enter a sentence" };
    const words = sentence.trim().split(/\s+/);
    return {
        word_count: words.length,
        unique_words: [...new Set(words.map(w => w.toLowerCase()))],
        reversed_sentence: [...words].reverse().join(' ')
    };
};
// Required POST endpoint
app.post('/api/transform', (req, res) => {
    res.json(transform(req.body.sentence));
});
// This magic line → /api/transform/anything-you-type
app.get('/api/transform/:sentence(*)', (req, res) => {
    const sentence = req.params.sentence;
    res.json(transform(decodeURIComponent(sentence)));
});
// UI
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running → http://localhost:${PORT}`);
});
