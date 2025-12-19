const indexPageText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to FoxCloud!</title>
  <style>
    :root {
      --primary-color: #3498db;
      --secondary-color: #2c3e50;
      --accent-color: #1abc9c;
      --light-bg: #f8f9fa;
      --dark-bg: #212529;
      --text-light: #f8f9fa;
      --text-dark: #212529;
      --success-color: #27ae60;
      --warning-color: #f39c12;
      --error-color: #e74c3c;
      --border-radius: 8px;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
    }

    [data-theme="dark"] {
      --light-bg: #212529;
      --dark-bg: #f8f9fa;
      --text-light: #212529;
      --text-dark: #f8f9fa;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      background-color: var(--light-bg);
      transition: var(--transition);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    header {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
      padding: 2rem 0;
      box-shadow: var(--box-shadow);
      margin-bottom: 2rem;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .theme-toggle {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: var(--border-radius);
      color: white;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .card {
      background: white;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 2rem;
      margin-bottom: 2rem;
      transition: var(--transition);
    }

    [data-theme="dark"] .card {
      background: #343a40;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    h2 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    [data-theme="dark"] h2 {
      color: var(--accent-color);
    }

    p {
      margin-bottom: 1rem;
    }

    a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
    }

    a:hover {
      color: var(--accent-color);
      text-decoration: underline;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .feature-card {
      background: white;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 1.5rem;
      transition: var(--transition);
    }

    [data-theme="dark"] .feature-card {
      background: #343a40;
    }

    .feature-card:hover {
      transform: translateY(-3px);
    }

    .feature-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .btn {
      display: inline-block;
      background: var(--primary-color);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: var(--border-radius);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn:hover {
      background: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    footer {
      margin-top: auto;
      text-align: center;
      padding: 2rem 0;
      color: var(--text-dark);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    [data-theme="dark"] footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        text-align: center;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .container {
        width: 95%;
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="header-content">
        <div>
          <h1>Welcome to FoxCloud!</h1>
          <p class="subtitle">High-performance proxy server running on Cloudflare Workers</p>
        </div>
        <button class="theme-toggle" id="themeToggle">🌓 Toggle Theme</button>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="card">
      <h2>System Status</h2>
      <p>If you see this page, the FoxCloud proxy server is successfully installed and working. Further configuration is required.</p>
      
      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Built on Cloudflare's global network for minimal latency.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Secure</h3>
          <p>Enterprise-grade encryption and security protocols.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>Global Network</h3>
          <p>Access from anywhere with 200+ data centers worldwide.</p>
        </div>
      </div>
      
      <a href="https://developers.cloudflare.com/workers/" class="btn">View Documentation</a>
    </div>
    
    <div class="card">
      <h2>Getting Started</h2>
      <p>For online documentation and support please refer to the official Cloudflare Workers Documentation.</p>
      <p>Commercial support is available through Cloudflare.</p>
      <p>Configure your proxy settings to begin using FoxCloud.</p>
    </div>
  </main>

  <footer>
    <div class="container">
      <p><em>Thank you for using FoxCloud.</em></p>
      <p>Version 1.0.0</p>
    </div>
  </footer>

  <script>
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  </script>
</body>
</html>`

const errorPageText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error - FoxCloud</title>
  <style>
    :root {
      --primary-color: #3498db;
      --secondary-color: #2c3e50;
      --accent-color: #1abc9c;
      --error-color: #e74c3c;
      --light-bg: #f8f9fa;
      --dark-bg: #212529;
      --text-light: #f8f9fa;
      --text-dark: #212529;
      --border-radius: 8px;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
    }

    [data-theme="dark"] {
      --light-bg: #212529;
      --dark-bg: #f8f9fa;
      --text-light: #212529;
      --text-dark: #f8f9fa;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      background-color: var(--light-bg);
      transition: var(--transition);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .container {
      width: 90%;
      max-width: 800px;
      text-align: center;
    }

    .error-card {
      background: white;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 3rem 2rem;
      margin-bottom: 2rem;
      transition: var(--transition);
    }

    [data-theme="dark"] .error-card {
      background: #343a40;
    }

    .error-icon {
      font-size: 4rem;
      color: var(--error-color);
      margin-bottom: 1.5rem;
    }

    h1 {
      color: var(--error-color);
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    [data-theme="dark"] h2 {
      color: var(--accent-color);
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .btn {
      display: inline-block;
      background: var(--primary-color);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: var(--border-radius);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      border: none;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 1rem;
    }

    .btn:hover {
      background: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    footer {
      text-align: center;
      padding: 2rem 0;
      color: var(--text-dark);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    [data-theme="dark"] footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .error-card {
        padding: 2rem 1rem;
      }
      
      h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="error-card">
      <div class="error-icon">⚠️</div>
      <h1>Server Error</h1>
      <h2>Something went wrong</h2>
      <p>Sorry, the page you are looking for is currently unavailable.<br>
      Please try again later.</p>
      <p>If you are the system administrator of this resource then you should check the error log for details.</p>
      <button class="btn" onclick="window.location.reload()">Retry</button>
    </div>
  </div>

  <footer>
    <p><em>Faithfully yours, FoxCloud.</em></p>
  </footer>

  <script>
    // Theme toggle functionality based on system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>
</body>
</html>`

  const subscriptionPageTextMaker = subscription => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FoxCloud Subscription</title>
  <style>
    :root {
      --primary-color: #3498db;
      --secondary-color: #2c3e50;
      --accent-color: #1abc9c;
      --light-bg: #f8f9fa;
      --dark-bg: #121212;
      --card-bg: #ffffff;
      --text-light: #f8f9fa;
      --text-dark: #212529;
      --success-color: #27ae60;
      --warning-color: #f39c12;
      --error-color: #e74c3c;
      --border-radius: 12px;
      --box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
    }

    [data-theme="dark"] {
      --light-bg: #121212;
      --dark-bg: #1e1e1e;
      --card-bg: #2d2d2d;
      --text-light: #f8f9fa;
      --text-dark: #f8f9fa;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      background-color: var(--light-bg);
      transition: var(--transition);
      min-height: 100vh;
      padding: 1rem;
      overflow-x: hidden; /* Prevent horizontal scrolling */
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      overflow-x: hidden; /* Prevent horizontal scrolling */
    }

    header {
      text-align: center;
      margin-bottom: 1.5rem;
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }

    .subtitle {
      font-size: 1rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    .theme-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--card-bg);
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      z-index: 100;
    }

    .theme-toggle:hover {
      transform: rotate(15deg);
    }

    .info-box {
      background: var(--card-bg);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .info-box h2 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .subscription-url-container {
      background: var(--primary-color);
      color: white;
      border-radius: var(--border-radius);
      padding: 1rem;
      margin: 1rem 0;
      word-break: break-all;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
      overflow-x: hidden; /* Prevent horizontal scrolling */
    }

    .card {
      background: var(--card-bg);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 1.5rem;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      overflow-x: hidden; /* Prevent horizontal overflow */
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    [data-theme="dark"] .card-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card-title {
      font-size: 1.2rem;
      color: var(--primary-color);
    }

    .card-id {
      font-size: 0.8rem;
      background: var(--primary-color);
      color: white;
      padding: 0.2rem 0.5rem;
      border-radius: 20px;
    }

    .tabs {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      flex-wrap: wrap;
    }

    .tab {
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      cursor: pointer;
      white-space: nowrap;
      font-size: 0.9rem;
      flex: 1;
      text-align: center;
      min-width: 70px;
    }

    [data-theme="dark"] .tab {
      background: rgba(255, 255, 255, 0.1);
    }

    .tab.active {
      background: var(--primary-color);
      color: white;
    }

    .tab-content {
      display: none;
    }

    .tab-content.active {
      display: block;
    }

    .qr-container {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
    }

    .qr-code {
      width: 180px;
      height: 180px;
      background: white;
      padding: 8px;
      border-radius: var(--border-radius);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .config-container {
      background: rgba(0, 0, 0, 0.03);
      border-radius: var(--border-radius);
      padding: 1rem;
      margin: 1rem 0;
      overflow-x: auto;
      font-family: 'Courier New', monospace;
      font-size: 0.75rem;
      line-height: 1.4;
      max-height: 200px;
      overflow-y: auto;
      word-break: break-all;
      white-space: pre-wrap;
    }
    
    .config-container div {
      white-space: pre-wrap;
      word-break: break-all;
      margin: 0;
      padding: 0;
    }
    
    .config-hint {
      text-align: center;
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: #666;
    }
    
    .config-container div {
      white-space: pre-wrap;
      word-break: break-all;
    }
    
    .config-container pre {
      white-space: pre-wrap;
      word-break: break-all;
      margin: 0;
      padding: 0;
    }

    [data-theme="dark"] .config-container {
      background: rgba(255, 255, 255, 0.05);
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      margin-top: auto;
    }

    .btn {
      flex: 1;
      background: var(--primary-color);
      color: white;
      padding: 0.7rem 1rem;
      border-radius: var(--border-radius);
      border: none;
      cursor: pointer;
      font-weight: 500;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    .btn:hover {
      background: var(--accent-color);
      transform: translateY(-2px);
    }

    .btn-copy {
      background: var(--success-color);
    }

    .btn-copy:hover {
      background: #219653;
    }

    .btn-sub {
      background: var(--warning-color);
    }

    .btn-sub:hover {
      background: #d48806;
    }

    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--success-color);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      transform: translateX(200%);
      transition: transform 0.3s ease;
      z-index: 1000;
      max-width: 300px;
    }

    .notification.show {
      transform: translateX(0);
    }

    .notification.error {
      background: var(--error-color);
    }

    footer {
      text-align: center;
      padding: 1.5rem 0;
      color: var(--text-dark);
      opacity: 0.7;
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      body {
        padding: 0.5rem;
      }
      
      .cards-container {
        grid-template-columns: 1fr;
      }
      
      h1 {
        font-size: 1.5rem;
      }
      
      .subtitle {
        font-size: 0.9rem;
      }
      
      .actions {
        flex-direction: column;
      }
      
      .tab {
        min-width: 60px;
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .card {
        padding: 1rem;
      }
      
      .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      
      .qr-code {
        width: 150px;
        height: 150px;
      }
      
      .config-container {
        font-size: 0.7rem;
        max-width: 100%;
        overflow-x: auto;
        word-break: break-all;
        white-space: pre-wrap;
        max-height: 150px; /* Reduce height on mobile */
      }
      
      .config-container div {
        white-space: pre-wrap;
        word-break: break-all;
      }
      
      .config-container pre {
        white-space: pre-wrap;
        word-break: break-all;
      }
      
      .btn {
        font-size: 0.8rem;
        padding: 0.6rem 0.8rem;
      }
      
      .tab {
        min-width: 50px;
        padding: 0.3rem 0.5rem;
        font-size: 0.75rem;
      }
      
      /* Fix for mobile VLESS tab overflow */
      .tab-content {
        overflow-x: auto;
      }
      
      /* Additional mobile improvements */
      body {
        padding: 0.5rem;
        overflow-x: hidden;
      }
      
      .container {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <button class="theme-toggle" id="themeToggle">🌓</button>
  
  <div class="container">
    <header>
      <h1>FoxCloud Subscription</h1>
      <p class="subtitle">Your secure proxy configuration is ready. Copy the configuration to import on your client.</p>
    </header>

    <!-- Removed the subscription URL card as requested -->

    <div class="cards-container">
      ${subscription ? `
        <div class="card" data-uuid="${subscription.uuid}">
          <div class="card-header">
            <h2 class="card-title">🦊 VLESS Configuration</h2>
            <span class="card-id">${subscription.uuid.substring(0, 8)}...</span>
          </div>
          
          <div class="config-container">
            <div style="white-space: pre-wrap; word-break: break-all;">${escapeHtml(subscription.link)}</div>
          </div>
          <div class="config-hint" style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: #666;">
            <small>💡 On mobile devices, scroll horizontally to view the full configuration</small>
          </div>
          <div class="actions">
            <button class="btn btn-copy" data-config="${escapeHtml(subscription.link)}">
              📋 Copy VLESS
            </button>
          </div>
        </div>
      ` : ''}
    </div>
    
    <footer>
      <p>FoxCloud - Secure, Fast, Global Proxy Service</p>
      <p>Running on Cloudflare Workers</p>
    </footer>
  </div>
  
  <div class="notification" id="notification">Configuration copied to clipboard!</div>

  <script>
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    // Tab switching functionality
    // Removed tab functionality since we're only showing VLESS config now
    
    // Copy to clipboard functionality
    document.querySelectorAll('.btn-copy').forEach(button => {
      button.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        let config = button.getAttribute('data-config');
        
        if (config) {
          try {
            await navigator.clipboard.writeText(config);
            showNotification('VLESS configuration copied to clipboard!');
          } catch (err) {
            // Fallback for older browsers
            try {
              const textArea = document.createElement('textarea');
              textArea.value = config;
              textArea.style.position = 'fixed';
              textArea.style.left = '-999999px';
              textArea.style.top = '-999999px';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);
              showNotification('VLESS configuration copied to clipboard!');
            } catch (fallbackErr) {
              showNotification('Failed to copy to clipboard!', true);
              console.error('Copy error:', fallbackErr);
            }
          }
        } else {
          showNotification('Failed to copy configuration!', true);
        }
      });
    });
    
    // Show notification
    function showNotification(message, isError = false) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.className = 'notification';
      if (isError) {
        notification.classList.add('error');
      }
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
    }
    
    // QR Code generation using a real QR code library
    // Removed QR code generation since we're not showing QR codes anymore
  </script>
  <!-- Removed QR Code library script since we're not using it anymore -->
</body>
</html>`

// Properly escape strings for HTML/JavaScript
const escapeHtml = (str: string) => {
return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
};

export async function indexPage(): Promise<Response> {
  return new Response(indexPageText, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

export async function errorPage(): Promise<Response> {
  return new Response(errorPageText, {
    status: 500,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

// Subscription page with enhanced UI
export async function subscriptionPage(env: any, request: Request): Promise<Response> {
  const { splitAndFilter } = await import('../utils/array.ts')
  const { generateSubscription, generateVlessConfig } = await import('../services/subscription.ts')
  
  const uuids = splitAndFilter(env.UUID || '', ',')
  const url = new URL(request.url)
  
  // Generate subscription links for each UUID
  const subscriptions = uuids.map((uuid: string) => ({
    uuid,
    link: generateSubscription(uuid, url),
    vlessJson: JSON.stringify(generateVlessConfig(uuid, url), null, 2)
  }))

  let targetSubscription = null;
  for (const sub of subscriptions) {
    if (url.pathname.includes(sub.uuid)) {
      targetSubscription = sub;
      break;
    }
  }

  if (targetSubscription) {
    const subscriptionPageText = subscriptionPageTextMaker(targetSubscription)

    return new Response(subscriptionPageText, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } else {
      return errorPage()
  }

}
