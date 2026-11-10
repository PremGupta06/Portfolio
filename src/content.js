import { LINKS } from './config'

const only = (links) => links.filter((link) => link.href)

export const EVIDENCE = [
  { id: 'cyber', title: 'CYBERSECURITY', items: ['Security monitoring', 'Incident investigation', 'Threat detection', 'Vulnerability assessment', 'Log analysis'], x: 16, y: 16, rot: -3 },
  { id: 'siem', title: 'SIEM AND MONITORING', items: ['Splunk Enterprise', 'Security event analysis', 'Alert triage'], x: 84, y: 16, rot: 3 },
  { id: 'network', title: 'NETWORK SECURITY', items: ['TCP/IP and OSI model', 'DNS, HTTP/HTTPS, SSH', 'VPN and NAT', 'Traffic analysis'], x: 16, y: 50, rot: 2 },
  { id: 'frameworks', title: 'FRAMEWORKS', items: ['MITRE ATT&CK', 'Cyber Kill Chain', 'OWASP API Top 10'], x: 84, y: 50, rot: -2 },
  { id: 'tools', title: 'TOOLS', items: ['Wireshark', 'Nmap', 'Burp Suite', 'Kali Linux', 'Hydra', 'Cisco Packet Tracer'], x: 16, y: 84, rot: -3 },
  { id: 'code', title: 'PROGRAMMING', items: ['Python', 'Bash scripting', 'JavaScript', 'Flask and React'], x: 84, y: 84, rot: 3 },
]

export const PROJECTS = [
  {
    id: 'simulator',
    number: '001',
    codename: 'ALERT SIMULATOR',
    status: 'SOLVED',
    clearance: 'PUBLIC',
    title: 'SOC Alert Simulator',
    summary: 'An interactive SOC analyst training platform. Triage simulated phishing, brute-force, malware and C2 alerts, then get scored like a real analyst.',
    brief: [
      'Built an interactive SOC analyst training platform with simulated security alerts.',
      'Implemented phishing, brute-force, malware and C2 attack scenarios.',
      'Alert triage with True Positive, False Positive, Escalate and Close actions.',
      'MITRE ATT&CK mapping, an analyst scoring system and incident reports generated from investigation outcomes.',
    ],
    secret: 'every scenario is mapped to a MITRE ATT&CK technique',
    stack: ['JavaScript', 'MITRE ATT&CK', 'Alert triage', 'Incident reporting'],
    links: only([
      { label: 'LIVE DEMO', href: LINKS.alertSimulatorLive },
      { label: 'SOURCE CODE', href: LINKS.alertSimulatorRepo },
    ]),
  },
  {
    id: 'ssh-lab',
    number: '002',
    codename: 'BRUTE FORCE',
    status: 'SOLVED',
    clearance: 'PUBLIC',
    title: 'SOC Home Lab: SSH Brute Force Detection',
    summary: 'Simulated SSH brute-force attacks against Ubuntu targets in a controlled lab, then detected and investigated them with Linux logs and Splunk.',
    brief: [
      'Simulated SSH brute-force attacks using Hydra against Ubuntu targets in a controlled SOC lab.',
      'Investigated authentication failures using Linux auth.log and Splunk Enterprise.',
      'Mapped the attack activity to MITRE ATT&CK T1110 (Brute Force).',
      'Prepared SOC-style incident reports with findings, indicators of compromise and remediation recommendations.',
    ],
    secret: 'every report ends with indicators of compromise and a fix list',
    stack: ['Hydra', 'Ubuntu', 'Splunk Enterprise', 'Linux auth.log', 'MITRE ATT&CK'],
    links: only([{ label: 'SOURCE CODE', href: LINKS.sshLabRepo }]),
  },
  {
    id: 'multi-stage',
    number: '003',
    codename: 'MULTI-STAGE',
    status: 'SOLVED',
    clearance: 'PUBLIC',
    title: 'SOC Multi-Stage Attack Detection Lab',
    summary: 'Simulated reconnaissance followed by brute force in a virtual lab, then traced the whole attack chain through network traffic and Linux logs.',
    brief: [
      'Simulated reconnaissance and brute-force attacks using Nmap and Hydra in a virtual lab.',
      'Investigated network traffic using Wireshark and analysed Linux authentication logs.',
      'Identified SYN scans, SSH authentication attempts and suspicious network activity.',
      'Documented attack timelines, indicators of compromise and mitigation recommendations.',
    ],
    secret: 'every case file includes a full attack timeline',
    stack: ['Nmap', 'Hydra', 'Wireshark', 'Linux logs', 'Virtual lab'],
    links: only([{ label: 'SOURCE CODE', href: LINKS.multiStageRepo }]),
  },
  {
    id: 'argus',
    number: '004',
    codename: 'ARGUS',
    status: 'SOLVED',
    clearance: 'PUBLIC',
    title: 'Argus: API Security Scanner',
    summary: 'A full-stack API security scanner. Import an OpenAPI spec, run OWASP API Top 10 checks and read a live, prioritised report.',
    brief: [
      'Developed an automated API security scanner using Python, Flask, React and Tailwind CSS.',
      'Implemented 6 security checks based on the OWASP API Top 10, including BOLA, Broken Authentication and Mass Assignment.',
      'Integrated OpenAPI 3 parsing, real-time scan monitoring and vulnerability risk scoring.',
      'Generated JSON and HTML security reports with severity ratings, evidence and remediation.',
    ],
    secret: 'the live demo only scans safe, built-in lab APIs',
    stack: ['Python', 'Flask', 'React', 'Tailwind CSS', 'Docker'],
    links: [
      { label: 'LIVE DEMO', href: 'https://argus-api-scanner.onrender.com' },
      { label: 'SOURCE CODE', href: 'https://github.com/PremGupta06/Argus-API-Scanner' },
    ],
  },
]

export const LOG = [
  { date: 'HSC', title: 'Higher secondary done', text: 'Completed the Higher Secondary Certificate at CHM College, Ulhasnagar, with 75%.' },
  { date: 'BCA', title: 'Joined Somaiya Vidyavihar University', text: 'Started the Bachelor of Computer Applications and chose cybersecurity as the direction.' },
  { date: 'CERTIFIED', title: 'Credentials earned', text: 'Completed the Google Cybersecurity Professional Certificate, AWS Cloud Technical Essentials and ethical hacking courses.' },
  { date: 'LAB WORK', title: 'Built the SOC home labs', text: 'Simulated SSH brute-force and multi-stage attacks, investigated them with Splunk and Wireshark, and wrote incident reports.' },
  { date: '2026', title: 'Argus goes live', text: 'Built and deployed a full-stack API security scanner with a live dashboard.' },
  { date: 'NOW', title: 'The investigation continues', text: 'In Semester 5 with a 9.04 CGPA after Semester 4, and looking for an entry-level SOC analyst role.' },
]

export const EDUCATION = [
  {
    school: 'Somaiya Vidyavihar University',
    degree: 'Bachelor of Computer Applications',
    detail: 'BCA. Currently in Semester 5.',
    score: '9.04',
    scoreLabel: 'SEM 4 CGPA',
  },
  {
    school: 'CHM College, Ulhasnagar',
    degree: 'Higher Secondary Certificate',
    detail: 'HSC',
    score: '75%',
    scoreLabel: 'PERCENTAGE',
  },
]

export const CERTS = [
  'Google Cybersecurity Professional Certificate',
  'AWS Cloud Technical Essentials',
  'Ethical Hacking Fundamentals',
  'Introduction to Ethical Hacking Principles',
  'Introduction to Artificial Intelligence',
]