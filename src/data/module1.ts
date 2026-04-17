import { ModuleLessonStructure } from '../types';

export const MODULE_1_LESSONS: ModuleLessonStructure = {
  id: '1.0',
  title: 'Network Fundamentals',
  subtopics: [
    {
      id: '1.1',
      title: 'Network Components',
      objectives: [
        'Identify routers, switches, and firewalls',
        'Understand endpoints and servers',
        'Compare physical and virtual networking devices',
        'Explain the role of Controllers and PoE'
      ],
      content: `
# 1.1 Network Components

The building blocks of any network include specialized hardware devices that each perform a unique role.

### Routers
Routers operate at **Layer 3 (Network Layer)**. Their primary job is to forward packets between different networks using a routing table.

### Switches (L2/L3)
- **L2 Switches**: Forward frames based on MAC addresses.
- **L3 Switches**: Capable of both switching and inter-VLAN routing (SVI).

### Firewalls & IPS
Security devices that monitor and control traffic. **NGFWs** (Next-Generation Firewalls) inspect traffic at the application layer.

### Endpoints
Devices like PCs, Laptops, IP Phones, and IoT sensors.

### Access Points (AP)
Provide wireless connectivity to the wired infrastructure.

### Controllers
Centralized management for Wireless networks (WLC) or SDN platforms.

### Power over Ethernet (PoE)
Technology that provides power over Ethernet cables to devices like VOIP phones and cameras.
      `
    },
    {
      id: '1.2',
      title: 'Topology Architectures',
      objectives: [
        'Describe 2-tier and 3-tier designs',
        'Explain Spine-Leaf architecture',
        'Identify SOHO and cloud connectivity'
      ],
      content: `
# 1.2 Topology Architectures

### 3-Tier Architecture
1. **Core**: High-speed backbone of the network.
2. **Distribution**: Aggregation point for access switches, implements routing.
3. **Access**: Where end-user devices connect.

### 2-Tier (Collapsed Core)
Merges the Core and Distribution layers for smaller environments.

### Spine-Leaf
Used in Data Centers for high-performance and low latency. Every leaf switch connects to every spine switch.

### WAN / SOHO / Cloud
- **WAN**: Connects geographically dispersed locations.
- **SOHO**: Consumer-grade routers for Small Office/Home Office.
- **Cloud**: Moving network services and data to providers (On-prem vs Cloud).
      `
    },
    {
      id: '1.3',
      title: 'Physical Interface and Cabling',
      objectives: [
        'Compare Single-mode and Multi-mode fiber',
        'Understand Copper cabling (UTP)',
        'Identify Ethernet shared vs point-to-point'
      ],
      content: `
# 1.3 Physical Interface and Cabling

### Copper (Twisted Pair)
- **UTP (Unshielded Twisted Pair)**: Common, vulnerable to EMI.
- **STP (Shielded Twisted Pair)**: Better EMI resistance.
- **Cat5e/6/6a**: Standard Ethernet categories.

### Fiber Optic
- **Single-mode (SMF)**: Small core, long distances (up to 70km).
- **Multi-mode (MMF)**: Wider core, shorter distances (up to 550m).

### Shared Media vs Point-to-Point
- **Shared**: Like a Hub, half-duplex, collision domains.
- **Point-to-Point**: Direct link between two devices, usually full-duplex.
      `
    },
    {
      id: '1.4',
      title: 'Interface and Cable Issues',
      objectives: [
        'Identify collisions and duplex mismatches',
        'Recognize speed mismatches',
        'Troubleshoot faulty cables'
      ],
      content: `
# 1.4 Interface and Cable Issues

### Collisions
Occur when two devices transmit simultaneously on a shared medium. Mostly eliminated by modern full-duplex switches.

### Duplex Mismatch
One side is Full-Duplex, the other is Half-Duplex. Results in poor performance and interface errors.

### Speed Mismatch
Devices configured for different speeds (e.g., 100Mbps vs 1Gbps). Link will not come up if hard-coded incorrectly.

### Errors
CRC errors or input errors often indicate a faulty cable or transceiver.
      `
    },
    {
      id: '1.5',
      title: 'TCP vs. UDP',
      objectives: [
        'Explain connection-oriented vs. connectionless',
        'Identify header differences',
        'Compare reliability and speed'
      ],
      content: `
# 1.5 TCP vs. UDP

| Feature | TCP | UDP |
| :--- | :--- | :--- |
| **Reliability** | Guaranteed delivery | Best effort |
| **Connection** | Connection-oriented (SYN/ACK) | Connectionless |
| **Flow Control** | Yes (Windowing) | No |
| **Speed** | Lower (Overhead) | Higher (Fast) |
| **Examples** | HTTP, SMTP, SSH | VoIP, Streaming, DNS |
      `
    },
    {
      id: '1.6',
      title: 'IPv4 Addressing and Subnetting',
      objectives: [
        'Calculate subnet masks',
        'Identify Network and Broadcast addresses',
        'Understand VLSM'
      ],
      content: `
# 1.6 IPv4 Addressing and Subnetting

IPv4 uses 32-bit addresses in dotted-decimal format (e.g., 192.168.1.1).

### Subnetting
Breaking a large network into smaller segments to save IP addresses and reduce broadcast domains.

### Formulas
- 2^n = Number of subnets
- 2^h - 2 = Number of usable hosts per subnet
      `
    },
    {
      id: '1.7',
      title: 'Private IPv4 Addressing',
      objectives: [
          'Identify RFC 1918 ranges',
          'Explain NAT necessity'
      ],
      content: `
# 1.7 Private IPv4 Addressing

RFC 1918 addresses are not routable on the public internet.

- **Class A**: 10.0.0.0 – 10.255.255.255
- **Class B**: 172.16.0.0 – 172.31.255.255
- **Class C**: 192.168.0.0 – 192.168.255.255
      `
    },
    {
      id: '1.8',
      title: 'IPv6 Addressing and Prefix',
      objectives: [
        'Explain 128-bit structure',
        'Simplify and shorten IPv6 addresses',
        'Determine network prefix'
      ],
      content: `
# 1.8 IPv6 Addressing and Prefix

128-bit hexadecimal addresses. 8 groups of 4 hex digits.

### Shortening Rules:
1. Omit leading zeros.
2. Use :: once to represent contiguous blocks of zeros.
      `
    },
    {
      id: '1.9',
      title: 'IPv6 Address Types',
      objectives: [
          'Compare Unicast, Multicast, and Anycast',
          'Understand Link-Local and EUI-64'
      ],
      content: `
# 1.9 IPv6 Address Types

- **Global Unicast**: Routable internet address (starts with 2000::/3).
- **Link-Local**: Used for communication on the local link (FE80::/10).
- **Multicast**: One-to-many.
- **Anycast**: One-to-nearest.
- **EUI-64**: Generating the interface ID from the MAC address.
      `
    },
    {
      id: '1.10',
      title: 'IP Parameters for Client OS',
      objectives: [
          'Verify IP on Windows, Mac, and Linux',
          'Recognize APIPA addresses'
      ],
      content: `
# 1.10 IP Parameters for Client OS

- **Windows**: ipconfig / ipconfig /all
- **Linux/Mac**: ifconfig or ip addr show

### APIPA
169.254.x.x addresses indicate a client failed to reach a DHCP server.
      `
    },
    {
      id: '1.11',
      title: 'Wireless Principles',
      objectives: [
          'Explain Radio Frequency (RF)',
          'Identify 2.4GHz vs 5GHz non-overlapping channels',
          'Understand SSID and Wireless Security'
      ],
      content: `
# 1.11 Wireless Principles

### RF Concepts
- **2.4 GHz**: Longer range, higher interference (Channels 1, 6, 11 are non-overlapping).
- **5 GHz**: Shorter range, faster speeds, many more channels.

### SSID
The name of the wireless network.

### WPA/WPA2/WPA3
Standards for encrypting wireless traffic.
      `
    },
    {
      id: '1.12',
      title: 'Virtualization Fundamentals',
      objectives: [
          'Explain VMs vs Containers',
          'Understand the role of Hypervisors',
          'Define VRFs'
      ],
      content: `
# 1.12 Virtualization Fundamentals

### Virtual Machines
Full OS instances running on a Hypervisor.

### Containers
Lightweight, share the host OS kernel. (e.g., Docker).

### VRF (Virtual Routing and Forwarding)
Multiple instances of a routing table on a single physical router, providing network isolation.
      `
    },
    {
      id: '1.13',
      title: 'Switching Concepts',
      objectives: [
          'Explain MAC learning and aging',
          'Identify Frame Switching vs Flooding',
          'Verify the MAC Address Table'
      ],
      content: `
# 1.13 Switching Concepts

Switches build a **MAC Address Table** (CAM table) to forward frames efficiently.

- **Learning**: Switch records source MAC of incoming frames.
- **Flooding**: Forwarding to all ports except incoming when destination is unknown (Unknown Unicast).
- **Aging**: Removing stale entries after a timer (Default 300s).
      `
    }
  ]
};
