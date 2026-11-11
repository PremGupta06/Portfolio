export const NAME = 'Prem Gupta'
export const INITIALS = NAME.split(' ').map((word) => word[0]).join('')
export const ROLE = 'SOC Analyst | Cybersecurity | Security Monitoring'
export const ABOUT =
  'Cybersecurity-focused BCA student with hands-on experience in security operations, SIEM monitoring, threat detection, vulnerability assessment and security testing through practical projects and virtual labs. Seeking entry-level roles in SOC operations, cybersecurity analysis, vulnerability assessment or information security.'

export const EMAIL = 'premgupta062006@gmail.com'
export const LOCATION = 'Mumbai, Maharashtra'
export const GITHUB = 'https://github.com/PremGupta06'
export const LINKEDIN = 'https://www.linkedin.com/in/prem-gupta-616489335/'
export const RESUME_URL = '/resume.pdf'
export const PHOTO = ''

export const TRYHACKME_USER = 'prem06'
export const TRYHACKME = 'https://tryhackme.com/p/prem06'

// Copy these numbers from your TryHackMe profile. Leave null to hide a tile.
// Rank can be text, for example 'Top 5%'.
export const THM_STATS = {
  rank: null,
  level: null,
  rooms: null,
  badges: null,
  streak: null,
}

// Optional: paste the address of your TryHackMe badge image. Leave '' to hide it.
export const THM_BADGE = '/tryhackme-badge.png'

// Paths and rooms you completed, for example ['SOC Level 1', 'Pre Security'].
export const THM_DONE = []

// Paste the real addresses here. Leave a link as '' to hide its button.
export const LINKS = {
  alertSimulatorLive: '',
  alertSimulatorRepo: '',
  sshLabRepo: 'https://github.com/PremGupta06/SOC-Home-Lab-SSH-BruteForce-Detection',
  multiStageRepo: 'https://github.com/PremGupta06/SOC-MultiStage-Attack-Detection-Lab',
}

export const BONUS = 'You found every clue, detective. Put the code word CASE-CLOSED in your message and I will reply first.'

export const TAGLINES = [
  'Detect. Investigate. Respond.',
  'Turning alerts into answers.',
  'SOC analyst in the making.',
  'Learning in public. Shipping often.',
]

export const NAV = [
  { label: 'EVIDENCE', href: '#evidence' },
  { label: 'CASES', href: '#cases' },
  { label: 'LOG', href: '#log' },
  { label: 'RECORDS', href: '#records' },
  { label: 'TRAINING', href: '#training' },
  { label: 'TERMINAL', href: '#terminal' },
  { label: 'CONTACT', href: '#contact' },
]