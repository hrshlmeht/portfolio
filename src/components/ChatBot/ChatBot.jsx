import { useState, useRef, useEffect, useCallback } from 'react';
import { FiSend, FiTerminal } from 'react-icons/fi';
import { getResponse } from './chatResponses';
import styles from './ChatBot.module.css';

const COMMANDS = [
  '/experience',
  '/projects',
  '/skills',
  '/contact',
  '/about',
  '/resume',
  '/help',
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hey! I'm Harshal's portfolio assistant. Ask me about his work at **TrendAI**, **Ericsson**, or **Canada Post** — or try **/experience**, **/skills**, **/contact**. Type **/help** for all commands.",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const placeholders = [
    'Try /experience',
    'Try /projects',
    'Try /skills',
    'Try /contact',
    'Try /about',
    'Try /help',
  ];

  // Rotate placeholder text
  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(id);
  }, [placeholders.length]);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const sendMessage = useCallback(
    (text) => {
      if (!text.trim() || typing) return;
      const userMsg = { role: 'user', text: text.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setTyping(true);

      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        const response = getResponse(text.trim());
        setMessages((prev) => [...prev, { role: 'assistant', text: response }]);
        setTyping(false);
      }, delay);
    },
    [typing]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleCommand = (cmd) => {
    sendMessage(cmd);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <FiTerminal size={15} />
        <span>Ask me anything about my profile</span>
        <span className={styles.badge}>AI</span>
        <span className={styles.statusDot} />
      </div>

      <div className={styles.messages} ref={messagesContainerRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
            {msg.role === 'assistant' && (
              <div className={styles.avatar}>H</div>
            )}
            <div className={styles.bubble}>
              <MessageText text={msg.text} />
            </div>
          </div>
        ))}

        {typing && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <div className={styles.avatar}>H</div>
            <div className={styles.bubble}>
              <div className={styles.dots}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Command suggestions — only show at start */}
      {messages.length === 1 && (
        <div className={styles.suggestions}>
          {COMMANDS.slice(0, 5).map((cmd) => (
            <button
              key={cmd}
              className={styles.suggestion}
              onClick={() => handleCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      )}

      <div className={styles.inputArea}>
        <span className={styles.prompt}>~$</span>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholders[placeholderIdx]}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={typing}
        />
        <button
          className={styles.sendBtn}
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || typing}
          aria-label="Send"
        >
          <FiSend size={15} />
        </button>
      </div>
    </div>
  );
}

function MessageText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <p>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part.split('\n').map((line, j) => (
          <span key={`${i}-${j}`}>
            {j > 0 && <br />}
            {line}
          </span>
        ));
      })}
    </p>
  );
}
