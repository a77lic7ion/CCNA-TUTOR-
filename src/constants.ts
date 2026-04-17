export const CCNA_DOMAINS = [
  {
    id: '1.0',
    title: 'Network Fundamentals',
    description: 'Basic network components, topologies, physical interfaces, and cabling.',
    subtopics: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10', '1.11', '1.12', '1.13']
  },
  {
    id: '2.0',
    title: 'Network Access',
    description: 'VLANs, interswitch connectivity, Layer 2 discovery protocols, and EtherChannel.',
    subtopics: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9']
  },
  {
    id: '3.0',
    title: 'IP Connectivity',
    description: 'Routing tables, router forwarding, static routing, and OSPFv2.',
    subtopics: ['3.1', '3.2', '3.3', '3.4', '3.5']
  },
  {
    id: '4.0',
    title: 'IP Services',
    description: 'NAT, NTP, DHCP, DNS, SNMP, Syslog, QoS, and SSH.',
    subtopics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']
  },
  {
    id: '5.0',
    title: 'Security Fundamentals',
    description: 'Security concepts, program elements, device access control, and Layer 2 security.',
    subtopics: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10']
  },
  {
    id: '6.0',
    title: 'Automation & Programmability',
    description: 'Network management, controller-based networking, REST APIs, and configuration management.',
    subtopics: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7']
  }
];

export const AI_MODELS = [
  { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash (Fast)', description: 'Optimized for speed and general CCNA theory.' },
  { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro (Heavy)', description: 'Advanced reasoning for complex labs and troubleshooting.' },
  { id: 'ollama-local', name: 'Ollama (Local Host)', description: 'Run privacy-focused models locally (127.0.0.1:11434).' },
];
