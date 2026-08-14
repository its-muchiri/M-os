const http = require('http');
const fs = require('fs');
const path = require('path');

const vaultPath = process.env.VAULT_PATH || "C:\\\\Users\\\\KIMISH\\\\Desktop\\\\M-os";

function getProjects() {
  const projectsDir = path.join(vaultPath, "06-Projects", "Active");
  let projects = [];
  
  try {
    if (fs.existsSync(projectsDir)) {
      const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter(item => item.isDirectory());
      
      for (const folder of projectFolders) {
        const readmePath = path.join(projectsDir, folder.name, "README.md");
        if (fs.existsSync(readmePath)) {
          const content = fs.readFileSync(readmePath, "utf-8");
          const titleMatch = content.match(/^# (.+)$/m);
          const title = titleMatch ? titleMatch[1] : folder.name;
          
          projects.push({
            id: folder.name,
            title,
            status: "active"
          });
        }
      }
    }
  } catch (e) {
    console.error("Error reading projects:", e);
  }
  
  return projects;
}

function getVaultInfo() {
  try {
    const stats = fs.statSync(vaultPath);
    const markdownFiles = fs.readdirSync(vaultPath)
      .filter(f => f.endsWith('.md'));
    
    return {
      vaultPath,
      markdownCount: markdownFiles.length,
      status: "healthy"
    };
  } catch (e) {
    return {
      vaultPath,
      markdownCount: 0,
      status: "error"
    };
  }
}

const server = http.createServer((req, res) => {
  const url = require('url').parse(req.url, true);
  
  // API endpoint for projects
  if (url.pathname === '/api/projects') {
    const projects = getProjects();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ projects }));
    return;
  }
  
  // API endpoint for vault info
  if (url.pathname === '/api/vault') {
    const info = getVaultInfo();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info));
    return;
  }
  
  // Serve index.html for all other routes
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const html = fs.readFileSync('index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }
  
  // Serve index.html for any other path (SPA routing)
  if (url.pathname.startsWith('/dashboard')) {
    const html = fs.readFileSync('index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }
  
  res.writeHead(404);
  res.end('Not found');
});

server.listen(3000, () => {
  console.log('Muchiri-OS Dashboard API running on http://localhost:3000');
  console.log('Vault path:', vaultPath);
});