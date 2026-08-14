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

module.exports = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  
  if (url.pathname === '/api/projects') {
    const projects = getProjects();
    res.status(200).json({ projects });
    return;
  }
  
  if (url.pathname === '/api/vault') {
    const info = getVaultInfo();
    res.status(200).json(info);
    return;
  }
  
  res.status(404).json({ error: 'Not found' });
};