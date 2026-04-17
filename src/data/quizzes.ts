import { Quiz } from '../types';

export const ALL_QUIZZES: Quiz[] = [
  {
    id: '1.0',
    title: 'Network Fundamentals',
    domain: '1.0 Network Fundamentals',
    questions: [
      {
        id: 1,
        question: "What is the primary function of a router in a network?",
        options: {
          A: "To provide power to connected devices",
          B: "To forward packets between different networks",
          C: "To store and manage MAC addresses",
          D: "To encrypt data for security"
        },
        correctAnswer: "B",
        explanation: "Routers operate at Layer 3 and provide path determination and packet switching between different networks."
      },
      {
        id: 2,
        question: "How does a Layer 2 switch differ from a Layer 3 switch?",
        options: {
          A: "A Layer 2 switch routes between VLANs, while a Layer 3 switch does not",
          B: "A Layer 3 switch routes between VLANs, while a Layer 2 switch does not",
          C: "A Layer 2 switch uses IP addresses, while a Layer 3 switch uses MAC addresses",
          D: "There is no functional difference between Layer 2 and Layer 3 switches"
        },
        correctAnswer: "B",
        explanation: "Layer 3 switches are capable of Inter-VLAN routing (switching at Layer 2 and routing at Layer 3)."
      },
      {
        id: 3,
        question: "Which device enables communication between multiple VLANs?",
        options: {
          A: "Hub",
          B: "Router",
          C: "Repeater",
          D: "Access point"
        },
        correctAnswer: "B",
        explanation: "Communication between VLANs requires a Layer 3 device, either a Router (Router-on-a-Stick) or a Layer 3 switch."
      },
      {
        id: 4,
        question: "A user reports they can’t access the internet. You check and see their device is connected to a switch port, but the link light is off. What is the most likely cause?",
        options: {
          A: "Incorrect IP address configuration",
          B: "Physical layer issue (e.g., faulty cable or port)",
          C: "Firewall blocking traffic",
          D: "DNS misconfiguration"
        },
        correctAnswer: "B",
        explanation: "A missing link light almost always indicates a Layer 1 (Physical) issue."
      },
      {
        id: 5,
        question: "What is the role of a next-generation firewall (NGFW) in a network?",
        options: {
          A: "Only filters traffic based on MAC addresses",
          B: "Provides basic packet filtering",
          C: "Inspects traffic at the application layer and can detect/prevent threats",
          D: "Only blocks viruses"
        },
        correctAnswer: "C",
        explanation: "NGFWs go beyond simple packet filtering by inspecting application-layer data and integrating IPS/IDS features."
      },
      {
        id: 6,
        question: "What is the function of an access point (AP) in a wireless network?",
        options: {
          A: "To connect wired devices to a network",
          B: "To provide wireless connectivity to a network",
          C: "To route traffic between networks",
          D: "To store network data"
        },
        correctAnswer: "B",
        explanation: "Access points act as a bridge between wireless clients and the wired infrastructure."
      },
      {
        id: 7,
        question: "What is Power over Ethernet (PoE) used for?",
        options: {
          A: "To encrypt network traffic",
          B: "To provide power to devices (e.g., IP cameras, VoIP phones) over Ethernet cables",
          C: "To increase network speed",
          D: "To connect wireless devices"
        },
        correctAnswer: "B",
        explanation: "PoE (802.3af/at/bt) allows network cables to carry electrical power."
      },
      {
        id: 8,
        question: "What are the layers in a three-tier network architecture?",
        options: {
          A: "Access, Distribution, Core",
          B: "Core, Distribution, Access",
          C: "Edge, Core, Aggregation",
          D: "Access, Core, Edge"
        },
        correctAnswer: "A",
        explanation: "The classic Cisco hierarchical model consists of Access, Distribution, and Core layers."
      },
      {
        id: 9,
        question: "What is the purpose of the access layer in a three-tier architecture?",
        options: {
          A: "To provide high-speed backbone connectivity",
          B: "To connect end devices (e.g., PCs, printers) to the network",
          C: "To route between VLANs",
          D: "To filter traffic"
        },
        correctAnswer: "B",
        explanation: "The access layer provides local and remote workgroup-access to the network."
      },
      {
        id: 10,
        question: "In a spine-leaf architecture, how does traffic flow between two leaf switches?",
        options: {
          A: "Directly via point-to-point links",
          B: "Through the core layer",
          C: "Via a hub",
          D: "Through wireless connections"
        },
        correctAnswer: "B",
        explanation: "In a spine-leaf design, leaf switches connect to all spine switches (the spine acts as the high-speed core backplane)."
      },
      {
        id: 11,
        question: "Which protocol is often used to prevent loops in a spine-leaf architecture?",
        options: {
          A: "STP (Spanning Tree Protocol)",
          B: "OSPF",
          C: "BGP",
          D: "RIP"
        },
        correctAnswer: "A",
        explanation: "STP is the primary loop prevention mechanism at Layer 2."
      },
      {
        id: 12,
        question: "How does a two-tier architecture compare to a three-tier architecture in terms of scalability?",
        options: {
          A: "More scalable",
          B: "Less scalable",
          C: "Equally scalable",
          D: "Not related to scalability"
        },
        correctAnswer: "B",
        explanation: "A two-tier (collapsed core) design is less scalable than a full three-tier design but more cost-effective for smaller networks."
      },
      {
        id: 13,
        question: "What are typical components of a SOHO (Small Office/Home Office) network?",
        options: {
          A: "Router, switch, access point",
          B: "Mainframe, supercomputer",
          C: "Satellite, fiber optic cable",
          D: "Server farm, data center"
        },
        correctAnswer: "A",
        explanation: "SOHO networks typically use integrated devices that combine routing, switching, and wireless AP functions."
      },
      {
        id: 14,
        question: "What is a key characteristic of a WAN (Wide Area Network) topology?",
        options: {
          A: "Connects devices in a small geographic area",
          B: "Connects devices across large geographic areas (e.g., cities, countries)",
          C: "Uses only wireless connections",
          D: "Limited to a single building"
        },
        correctAnswer: "B",
        explanation: "WANs operate over broad distances to connect LANs, typically using leased service provider links."
      },
      {
        id: 15,
        question: "What is an advantage of cloud-based network deployments over on-premises?",
        options: {
          A: "Lower initial hardware costs and scalability",
          B: "Higher security",
          C: "Faster data transfer speeds",
          D: "No need for internet connectivity"
        },
        correctAnswer: "A",
        explanation: "Cloud deployments shift CaPex to OpEx and offer elastic scaling."
      },
      {
        id: 16,
        question: "What is the key difference between single-mode fiber and multimode fiber?",
        options: {
          A: "Single-mode fiber supports shorter distances and lower bandwidth",
          B: "Single-mode fiber supports longer distances and higher bandwidth",
          C: "Multimode fiber uses laser light, while single-mode uses LED",
          D: "There is no difference in distance or bandwidth"
        },
        correctAnswer: "B",
        explanation: "Single-mode fiber (SMF) has a smaller core and uses lasers, allowing much longer distance runs than multimode fiber (MMF)."
      },
      {
        id: 17,
        question: "Which of the following is a common type of copper cabling used in Ethernet networks?",
        options: {
          A: "Fiber optic",
          B: "Cat6",
          C: "Coaxial (for cable TV)",
          D: "HDMI"
        },
        correctAnswer: "B",
        explanation: "Cat6 is the standard twisted-pair copper cable for modern Gigabit/10G Ethernet."
      },
      {
        id: 18,
        question: "Which cabling type would you choose to connect two switches 500 meters apart?",
        options: {
          A: "Cat5e",
          B: "Single-mode fiber",
          C: "Multimode fiber",
          D: "Coaxial"
        },
        correctAnswer: "B",
        explanation: "At 500m, MMF might reach its limit depending on the standard, while SMF easily handles it. For maximum reliability at that distance, SMF is preferred."
        // Choice B according to answer key
      },
      {
        id: 19,
        question: "What is the difference between Ethernet shared media and point-to-point connections?",
        options: {
          A: "Shared media uses a hub, while point-to-point uses a switch",
          B: "Shared media allows multiple devices to share the same collision domain, while point-to-point does not",
          C: "Point-to-point uses wireless connections, while shared media uses wired",
          D: "There is no difference"
        },
        correctAnswer: "B",
        explanation: "Shared media (Hubs/early Wireless) is half-duplex and shares a collision domain."
      },
      {
        id: 20,
        question: "A user reports intermittent connectivity issues. The cable is Cat5e, but the switch port is configured for 10Gbps. What is the issue?",
        options: {
          A: "Cat5e does not support 10Gbps at full length",
          B: "The switch port is faulty",
          C: "The user’s device is not compatible",
          D: "The cable is too long"
        },
        correctAnswer: "A",
        explanation: "Cat5e is rated for 1Gbps. 10Gbps requires Cat6 (short distance) or Cat6a/7."
      },
      {
        id: 21,
        question: "What is a duplex mismatch?",
        options: {
          A: "When a device is configured for half-duplex and the switch port is configured for full-duplex (or vice versa)",
          B: "When two devices use different cable types",
          C: "When a switch port is misconfigured with the wrong VLAN",
          D: "When a router has incorrect routing tables"
        },
        correctAnswer: "A",
        explanation: "A mismatch between Auto-negotiation and hard-coded duplex settings often leads to interface collisions and errors."
      },
      {
        id: 22,
        question: "How would you diagnose a duplex mismatch issue between a switch and a device?",
        options: {
          A: "Check the switch port status for errors (e.g., %PM-4-ERR_DISABLE: duplex-mismatch)",
          B: "Ping the device from another network",
          C: "Reboot the switch",
          D: "Replace the cable"
        },
        correctAnswer: "A",
        explanation: "Cisco switches log duplex mismatches via CDP or by detecting excessive collisions on a full-duplex port."
      },
      {
        id: 23,
        question: "A switch port shows duplex-mismatch errors. What is the first step to resolve this?",
        options: {
          A: "Replace the cable",
          B: "Configure the switch port and device to match duplex settings",
          C: "Reboot the device",
          D: "Upgrade the switch firmware"
        },
        correctAnswer: "B",
        explanation: "Both ends of a link must agree on Speed and Duplex. Correct the configuration mismatch."
      },
      {
        id: 24,
        question: "What are speed mismatch issues in a network?",
        options: {
          A: "When a device is configured for 100Mbps and the switch port is configured for 1Gbps",
          B: "When a switch port is assigned to the wrong VLAN",
          C: "When a router has incorrect ARP entries",
          D: "When a cable is too short"
        },
        correctAnswer: "A",
        explanation: "Speed mismatch prevents the link from negotiating successfully (Line Protocol Down)."
      },
      {
        id: 25,
        question: "What is the main difference between TCP and UDP?",
        options: {
          A: "TCP is connection-oriented and reliable; UDP is connectionless and faster",
          B: "TCP is connectionless; UDP is connection-oriented",
          C: "TCP uses IP addresses; UDP uses MAC addresses",
          D: "TCP is used for wireless; UDP is used for wired"
        },
        correctAnswer: "A",
        explanation: "TCP uses a three-way handshake and handles sequencing/retransmission."
      },
      {
        id: 26,
        question: "Which protocol uses connection-oriented communication?",
        options: {
          A: "TCP",
          B: "UDP",
          C: "Both",
          D: "Neither"
        },
        correctAnswer: "A",
        explanation: "TCP is connection-oriented (stateful)."
      },
      {
        id: 27,
        question: "Which protocol would you use for VoIP (Voice over IP)?",
        options: {
          A: "TCP",
          B: "UDP",
          C: "Both",
          D: "Neither"
        },
        correctAnswer: "B",
        explanation: "UDP is used for real-time traffic like Voice/Video where speed is prioritized over reliability (retransmissions cause jitter)."
      },
      {
        id: 28,
        question: "Which protocol would you use for file transfers (e.g., FTP)?",
        options: {
          A: "TCP",
          B: "UDP",
          C: "Both",
          D: "Neither"
        },
        correctAnswer: "A",
        explanation: "FTP requires reliable delivery of data, making TCP the correct choice."
      },
      {
        id: 29,
        question: "A video streaming service is buffering frequently. Could this be related to TCP or UDP, and how?",
        options: {
          A: "Yes, TCP’s reliability causes delays due to retransmissions",
          B: "Yes, UDP’s lack of reliability causes buffering",
          C: "No, buffering is unrelated to TCP/UDP",
          D: "Only if the network is wireless"
        },
        correctAnswer: "A",
        explanation: "If you use TCP for streaming, dropped packets cause retransmissions which block the stream, resulting in buffering."
      },
      {
        id: 30,
        question: "What is the purpose of subnetting in IPv4?",
        options: {
          A: "To increase the number of available public IP addresses",
          B: "To divide a network into smaller, more manageable segments",
          C: "To encrypt IP addresses for security",
          D: "To connect multiple physical networks"
        },
        correctAnswer: "B",
        explanation: "Subnetting improves efficiency and security by grouping hosts and limiting broadcast traffic."
      },
      {
        id: 31,
        question: "What is the subnet mask for a /24 network?",
        options: {
          A: "255.255.255.0",
          B: "255.255.0.0",
          C: "255.0.0.0",
          D: "255.255.255.252"
        },
        correctAnswer: "A",
        explanation: "A /24 network has 24 network bits (11111111.11111111.11111111.00000000)."
      },
      {
        id: 32,
        question: "Given the IP address 192.168.1.100/26, what is the subnet mask?",
        options: {
          A: "255.255.255.0",
          B: "255.255.255.128",
          C: "255.255.255.192",
          D: "255.255.255.224"
        },
        correctAnswer: "C",
        explanation: "/26 = 11111111.11111111.11111111.11000000 = 255.255.255.192."
      },
      {
        id: 33,
        question: "Given the IP address 192.168.1.100/26, what is the network address?",
        options: {
          A: "192.168.1.0",
          B: "192.168.1.64",
          C: "192.168.1.96",
          D: "192.168.1.128"
        },
        correctAnswer: "B",
        explanation: "With a block size of 64 (256-192), subnets are .0, .64, .128. .100 falls in the .64 subnet."
      },
      {
        id: 34,
        question: "Given the IP address 192.168.1.100/26, what is the broadcast address?",
        options: {
          A: "192.168.1.63",
          B: "192.168.1.127",
          C: "192.168.1.191",
          D: "192.168.1.255"
        },
        correctAnswer: "B",
        explanation: "Next subnet is .128, so broadcast of previous is .127."
      },
      {
        id: 35,
        question: "How many usable host addresses are available in a /30 subnet?",
        options: {
          A: "2",
          B: "4",
          C: "6",
          D: "8"
        },
        correctAnswer: "A",
        explanation: "2^(32-30) - 2 = 2^2 - 2 = 2 usable hosts."
      },
      {
        id: 36,
        question: "You need to divide a /24 network into 4 equal subnets. What subnet mask would you use?",
        options: {
          A: "/25",
          B: "/26",
          C: "/27",
          D: "/28"
        },
        correctAnswer: "B",
        explanation: "Adding 2 bits (2^2=4 subnets) to a /24 results in a /26 mask."
      },
      {
        id: 37,
        question: "Which of the following is a private IPv4 address range as defined by RFC 1918?",
        options: {
          A: "10.0.0.0 – 10.255.255.255",
          B: "172.16.0.0 – 172.31.255.255",
          C: "192.168.0.0 – 192.168.255.255",
          D: "All of the above"
        },
        correctAnswer: "D",
        explanation: "All three are established private ranges."
      },
      {
        id: 38,
        question: "Can private IPv4 addresses be routed on the public internet?",
        options: {
          A: "Yes, with NAT",
          B: "Yes, without any restrictions",
          C: "No, they are not routable on the public internet",
          D: "Only if configured with a public DNS"
        },
        correctAnswer: "C",
        explanation: "Private IP addresses (RFC 1918) are strictly for internal use and dropped by ISPs routers."
      },
      {
        id: 39,
        question: "What does the /64 in an IPv6 address represent?",
        options: {
          A: "The host portion",
          B: "The network prefix",
          C: "The subnet mask",
          D: "The broadcast address"
        },
        correctAnswer: "B",
        explanation: "The first 64 bits typically represent the network/subnet prefix."
      },
      {
        id: 40,
        question: "What is the default prefix length for a typical IPv6 subnet?",
        options: {
          A: "/48",
          B: "/64",
          C: "/80",
          D: "/128"
        },
        correctAnswer: "B",
        explanation: "/64 is the standard prefix length for IPv6 local subnets."
      }
    ]
  },
  {
    id: '2.0',
    title: 'Network Access',
    domain: '2.0 Network Access',
    questions: [
      {
        id: 1,
        question: "What is the default VLAN on a Cisco switch?",
        options: {
          A: "VLAN 0",
          B: "VLAN 1",
          C: "VLAN 10",
          D: "VLAN 100"
        },
        correctAnswer: "B",
        explanation: "By default, all ports on a Cisco switch are members of VLAN 1."
      },
      {
        id: 2,
        question: "Which command is used to assign a switch port to VLAN 20 as an access port?",
        options: {
          A: "switchport mode trunk",
          B: "switchport access vlan 20",
          C: "vlan 20",
          D: "switchport trunk allowed vlan 20"
        },
        correctAnswer: "B",
        explanation: "The command 'switchport access vlan [id]' assigns an interface to a specific VLAN."
      },
      {
        id: 3,
        question: "Which protocol is used for VLAN tagging on trunk ports?",
        options: {
          A: "ISL",
          B: "802.1Q",
          C: "VTP",
          D: "STP"
        },
        correctAnswer: "B",
        explanation: "IEEE 802.1Q is the industry-standard encapsulation for VLAN tagging."
      },
      {
        id: 4,
        question: "What is the purpose of Spanning Tree Protocol (STP)?",
        options: {
          A: "To prevent loops in a Layer 2 network",
          B: "To route traffic between VLANs",
          C: "To encrypt traffic between switches",
          D: "To assign IP addresses to devices"
        },
        correctAnswer: "A",
        explanation: "STP prevents bridging loops by placing redundant ports in a blocking state."
      },
      {
        id: 5,
        question: "Which protocol is used to automatically bundle links into an EtherChannel?",
        options: {
          A: "STP",
          B: "LACP",
          C: "VTP",
          D: "CDP"
        },
        correctAnswer: "B",
        explanation: "LACP (802.3ad) is the open-standard protocol for link aggregation."
      }
    ]
  },
  {
    id: '3.0',
    title: 'IP Connectivity',
    domain: '3.0 IP Connectivity',
    questions: [
      {
        id: 1,
        question: "Which code in a routing table indicates a route learned via OSPF?",
        options: {
          A: "C",
          B: "S",
          C: "O",
          D: "D"
        },
        correctAnswer: "O",
        explanation: "In 'show ip route', O represents OSPF, D represents EIGRP, S represents Static, and C represents Connected."
      },
      {
        id: 2,
        question: "What is the default Administrative Distance (AD) of OSPF?",
        options: {
          A: "90",
          B: "100",
          C: "110",
          D: "120"
        },
        correctAnswer: "C",
        explanation: "OSPF has an AD of 110. (Connected=0, Static=1, EIGRP=90, RIP=120)."
      },
      {
        id: 3,
        question: "Which command would you use to verify the OSPF neighbor relationships?",
        options: {
          A: "show ip protocols",
          B: "show ip ospf neighbor",
          C: "show ip interfaces",
          D: "show run | section ospf"
        },
        correctAnswer: "B",
        explanation: "The command 'show ip ospf neighbor' displays details about established OSPF adjacencies."
      }
    ]
  }
];
