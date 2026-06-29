import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Message {
  sender: string;
  message: string;
  timestamp?: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  
  const latestTimestampRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (messages.length > 0) {
      latestTimestampRef.current = messages[messages.length - 1].timestamp;
    }
  }, [messages]);

  useEffect(() => {
    let isMounted = true;

    const listenForMessages = async () => {
      if (!isMounted) return;
      try {
        const response = await axios.get('http://localhost:5000/message', {
          params: { since: latestTimestampRef.current }
        });
        
        if (isMounted) {
          setMessages(response.data);
          listenForMessages();
        }
      } catch (error) {
        console.error("خطأ في جلب الرسائل", error);
        if (isMounted) {
          setTimeout(listenForMessages, 3000);
        }
      }
    };

    listenForMessages();

    return () => {
      isMounted = false;
    };
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender || !message) return alert("اكتب اسمك ورسالتك الأول!");

    try {
      await axios.post('http://localhost:5000/message', { sender, message });
      setMessage('');
    } catch (error) {
      console.error("خطأ في إرسال الرسالة", error);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', 
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '550px', 
        direction: 'rtl', 
        backdropFilter: 'blur(16px) saturate(180%)', 
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(30, 41, 59, 0.7)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '25px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 12px #10b981' }}></div>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#f8fafc' }}>غرفة الدردشة الجماعية</h2>
          <span style={{ marginRight: 'auto', fontSize: '11px', color: '#e2e8f0', backgroundColor: 'rgba(99,102,241,0.2)', padding: '4px 10px', borderRadius: '20px' }}>Long Polling Active</span>
        </div>
        
        <div style={{ 
          height: '400px', 
          overflowY: 'auto', 
          padding: '10px 5px', 
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          scrollBehavior: 'smooth'
        }}>
          {messages.map((msg, index) => {
            const colors = [
              { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.3)', text: '#a5b4fc' },
              { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)', text: '#fbcfe8' },
              { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.3)', text: '#99f6e4' },
              { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fde047' }
            ];
            const colorIndex = msg.sender.charCodeAt(0) % colors.length;
            const theme = colors[colorIndex];

            return (
              <div key={index} style={{ 
                padding: '12px 16px', 
                backgroundColor: theme.bg,
                border: `1px solid ${theme.border}`,
                borderRadius: '16px 16px 0px 16px', 
                width: 'fit-content',
                maxWidth: '85%',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                animation: 'fadeIn 0.3s ease-in-out'
              }}>
                <div style={{ fontWeight: '700', fontSize: '13px', color: theme.text, marginBottom: '4px', display: 'block' }}>
                  {msg.sender}
                </div>
                <div style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: '1.5', wordBreak: 'break-word' }}>
                  {msg.message}
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={sendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input 
            type="text" 
            placeholder="👤 اكتب اسمك المستعار..." 
            value={sender} 
            onChange={(e) => setSender(e.target.value)} 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '14px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              fontSize: '14px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              color: '#fff',
              outline: 'none',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#6366f1'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="💬 اكتب رسالتك هنا..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              style={{ 
                flex: 1, 
                padding: '14px 16px', 
                borderRadius: '14px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                fontSize: '14px',
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                color: '#fff',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button type="submit" style={{ 
              padding: '0 24px', 
              borderRadius: '14px', 
              border: 'none', 
              background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)', 
              color: 'white', 
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)',
              transition: 'transform 0.1s, opacity 0.2s'
            }}>
              إرسال
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Chat;