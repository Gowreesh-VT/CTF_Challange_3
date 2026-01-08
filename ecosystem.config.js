module.exports = {
  apps: [{
    name: 'ctf-nextjs-app',
    script: 'npm',
    args: 'start',
    cwd: '/Users/gowreeshvt/Documents/GitHub/CTF_Challange_3',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
