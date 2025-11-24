"use client"

export default function IframeContent() {
  return (
    <html>
      <head>
        <style>{`
          body { 
            font-family: system-ui; 
            padding: 16px; 
            margin: 0;
          }
          button { 
            padding: 8px 16px; 
            background: #3b82f6; 
            color: white; 
            border: none; 
            border-radius: 6px; 
            cursor: pointer;
          }
          button:hover { 
            background: #2563eb; 
          }
          input {
            padding: 8px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            width: 100%;
            margin-top: 8px;
          }
        `}</style>
      </head>
      <body>
        <h3>Inside Iframe fdsa</h3>
        <button
          data-testid="iframe-button"
          onClick={() => {
            if (window.parent) {
              window.parent.postMessage("iframe-click", "*")
            }
          }}
        >
          Click Me Inside Iframe
        </button>
        <input
          data-testid="iframe-input"
          placeholder="Type in iframe..."
          onChange={() => {
            if (window.parent) {
              window.parent.postMessage("iframe-fill", "*")
            }
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          document.querySelector('[data-testid="iframe-button"]').addEventListener('click', function() {
            window.parent.postMessage('iframe-click', '*');
          });
          document.querySelector('[data-testid="iframe-input"]').addEventListener('change', function() {
            window.parent.postMessage('iframe-fill', '*');
          });
        `,
          }}
        />
      </body>
    </html>
  )
}
