---
# **CCNA 200-301 v1.1: Complete Answer Key**
*For Shaun Gordon – Correct Answers for All Sections (1.0–6.0)*

---

---
---

## **📌 1.0 Network Fundamentals**

### **🔹 1.1 Role and Function of Network Components**
1. **B** (To forward packets between different networks)
2. **B** (A Layer 3 switch routes between VLANs, while a Layer 2 switch does not)
3. **B** (Router)
4. **B** (Physical layer issue (e.g., faulty cable or port))
5. **C** (Inspects traffic at the application layer and can detect/prevent threats)
6. **B** (To provide wireless connectivity to a network)
7. **B** (To provide power to devices over Ethernet cables)

---
### **🔹 1.2 Network Topology Architectures**
8. **A** (Access, Distribution, Core)
9. **B** (To connect end devices to the network)
10. **A** (Directly via point-to-point links)
11. **A** (STP)
12. **B** (Less scalable)
13. **A** (Router, switch, access point)
14. **B** (Connects devices across large geographic areas)

---
### **🔹 1.3 Physical Interface and Cabling Types**
15. **B** (Single-mode fiber supports longer distances and higher bandwidth)
16. **B** (Cat6)
17. **B** (Single-mode fiber)
18. **B** (Shared media allows multiple devices to share the same collision domain, while point-to-point does not)
19. **A** (Cat5e does not support 10Gbps at full length)

---
### **🔹 1.4 Interface and Cable Issues**
20. **A** (When two devices transmit data at the same time on a shared medium)
21. **A** (When a device is configured for half-duplex and the switch port is configured for full-duplex (or vice versa))
22. **A** (Check the switch port status for errors (e.g., `%PM-4-ERR_DISABLE: duplex-mismatch`))
23. **B** (Configure the switch port and device to match duplex settings (both auto, half, or full))
24. **A** (When a device is configured for 100Mbps and the switch port is configured for 1Gbps)

---
### **🔹 1.5 TCP vs. UDP**
25. **A** (TCP is connection-oriented and reliable; UDP is connectionless and faster)
26. **A** (TCP)
27. **B** (UDP)
28. **A** (TCP)
29. **A** (Yes, TCP’s reliability causes delays due to retransmissions)

---
### **🔹 1.6 IPv4 Addressing and Subnetting**
30. **B** (To divide a network into smaller, more manageable segments)
31. **A** (255.255.255.0)
32. **C** (255.255.255.192)
33. **B** (192.168.1.64)
34. **B** (192.168.1.127)
35. **A** (2)
36. **B** (/26)
37. **D** (All of the above)

---
### **🔹 1.7 Private IPv4 Addressing**
38. **D** (All of the above)
39. **A** (To save public IP addresses and improve security)
40. **C** (No, they are not routable on the public internet)

---
### **🔹 1.8 IPv6 Addressing and Prefix**
41. **B** (The network prefix)
42. **B** (/64)
43. **A** (2001:db8::ff00:42:8329)
44. **A** (::1)
45. **C** (Both A and B)

---
### **🔹 1.9 IPv6 Address Types**
46. **A** (Unicast: one-to-one; Anycast: one-to-nearest; Multicast: one-to-many)
47. **A** (fe80::/10)
48. **A** (For communication within a site or organization)
49. **A** (To generate a unique interface ID for IPv6 addresses)

---
### **🔹 1.10 IP Parameters for Client OS**
50. **A** (`ipconfig`)
51. **B** (`ifconfig` or `ip a`)
52. **B** (`ifconfig` or `networksetup -getinfo Wi-Fi`)
53. **B** (The PC is using an APIPA address, indicating DHCP failure)

---
### **🔹 1.11 Wireless Principles**
54. **A** (To reduce interference between access points)
55. **A** (Service Set Identifier)
56. **A** (1, 6, 11)
57. **A** (To hide the network from unauthorized users)
58. **A** (The technology used to transmit wireless signals)
59. **A** (WEP, WPA, WPA2, WPA3)

---
### **🔹 1.12 Virtualization Fundamentals**
60. **A** (Running multiple virtual servers on a single physical server)
61. **A** (Containers share the host OS kernel, while VMs run their own OS)
62. **A** (A technology that allows multiple instances of a routing table to coexist on the same router)
63. **A** (By creating separate routing tables for each tenant)

---
### **🔹 1.13 Switching Concepts**
64. **A** (By examining the source MAC address of incoming frames and adding it to its MAC address table)
65. **A** (The process of removing stale MAC address entries from the switch’s table after a period of inactivity)
66. **A** (The process of forwarding frames based on the destination MAC address)
67. **A** (Sending a frame to all ports except the one it arrived on, when the destination MAC is unknown)
68. **A** (It floods the frame to all ports except the incoming port)
69. **A** (The table is full due to too many devices; increase the MAC address table size or reduce the aging time)

---
---
---
## **📌 2.0 Network Access**

### **🔹 2.1 VLANs (Normal Range, Access Ports, Default VLAN, InterVLAN Connectivity)**
1. **B** (VLAN 1)
2. **B** (`switchport access vlan 20`)
3. **B** (To connect end devices to a single VLAN)
4. **B** (A router or Layer 3 switch)
5. **A** (1–1000)
6. **B** (The switch drops the frame)
7. **A** (`show vlan brief`)

---
### **🔹 2.2 Interswitch Connectivity (Trunk Ports, 802.1Q, Native VLAN)**
8. **B** (To carry traffic for multiple VLANs between switches or between a switch and a router)
9. **B** (802.1Q)
10. **A** (The VLAN that carries untagged traffic on a trunk port)
11. **D** (Both A and C)
12. **B** (It is assigned to the native VLAN)
13. **C** (`show interface switchport`)

---
### **🔹 2.3 Layer 2 Discovery Protocols (Cisco Discovery Protocol, LLDP)**
14. **A** (To discover and share information about directly connected Cisco devices)
15. **A** (`cdp run`)
16. **A** (Device ID, IP address, platform, and capabilities)
17. **A** (To discover and share information about directly connected devices from any vendor)
18. **A** (`show lldp neighbors`)

---
### **🔹 2.4 EtherChannel (LACP, Layer 2/Layer 3)**
19. **A** (To provide redundancy and increase bandwidth by bundling multiple physical links)
20. **B** (LACP)
21. **A** (`channel-group 1 mode active`)
22. **A** (Layer 2 EtherChannel bundles links for switching, while Layer 3 EtherChannel bundles links for routing)
23. **D** (All of the above)

---
### **🔹 2.5 Rapid PVST+ Spanning Tree Protocol**
24. **A** (To prevent loops in a Layer 2 network)
25. **A** (The switch with the lowest Bridge ID)
26. **A** (The port on a non-root switch with the lowest cost path to the root bridge)
27. **B** (Listening)
28. **A** (To immediately transition a port to the forwarding state if it is connected to an end device)
29. **A** (To prevent a switch from becoming the root bridge if it shouldn’t be)
30. **A** (To prevent loops by blocking a port if it stops receiving BPDUs)
31. **A** (To shut down a port if it receives a BPDU, preventing loops)
32. **A** (`spanning-tree portfast`)

---
### **🔹 2.6 Cisco Wireless Architectures and AP Modes**
33. **A** (To centrally manage multiple access points)
34. **A** (Lightweight mode)
35. **A** (To allow APs to switch client traffic locally while being managed centrally by a WLC)

---
### **🔹 2.7 Physical Infrastructure Connections of WLAN Components**
36. **A** (Via a CAPWAP tunnel)
37. **A** (To provide redundancy and increase bandwidth between a WLC and a switch)
38. **C** (Both A and B, depending on the VLAN configuration)

---
### **🔹 2.8 Network Device Management Access**
39. **B** (SSH)
40. **A** (To provide out-of-band management for initial configuration or troubleshooting)
41. **C** (AAA services)
42. **A** (To provide authentication, authorization, and accounting for network access)
43. **A** (Managing network devices via a cloud-based controller)

---
### **🔹 2.9 Wireless LAN GUI Configuration**
44. **A** (Configure the SSID and VLAN)
45. **A** (A pre-shared key authentication method for WPA2, where all users share the same password)
46. **A** (WPA2 with AES encryption and a pre-shared key)
47. **A** (To prioritize certain types of traffic)

---
---
---
## **📌 3.0 IP Connectivity**

### **🔹 3.1 Routing Table Components**
1. **B** (The source of the route)
2. **B** (The network address)
3. **B** (The subnet mask associated with the route)
4. **A** (The IP address of the next device to which the packet should be forwarded)
5. **A** (The trustworthiness of a routing protocol (lower AD = more trusted))
6. **A** (The cost or distance to the destination network)
7. **A** (The default route (e.g., 0.0.0.0/0))
8. **A** (`show ip route`)

---
### **🔹 3.2 Router Forwarding Decisions**
9. **A** (The router selects the route with the most specific subnet mask (longest prefix))
10. **A** (The /26 route)
11. **A** (The EIGRP route (lower AD))
12. **A** (The router uses the route with the lowest metric)

---
### **🔹 3.3 IPv4 and IPv6 Static Routing**
13. **A** (To provide a route for all traffic that does not match any other route in the routing table)
14. **A** (`ip route 0.0.0.0 0.0.0.0 [next-hop]`)
15. **A** (A route to a specific network)
16. **A** (A route to a specific host)
17. **A** (A backup static route with a higher administrative distance than the primary route)
18. **A** (`ip route 192.168.1.0 255.255.255.0 10.0.0.2 200`)
19. **A** (`ipv6 route 2001:DB8::/64 2001:DB8::1`)

---
### **🔹 3.4 Single Area OSPFv2**
20. **A** (To dynamically exchange routing information within an Autonomous System (AS))
21. **A** (A logical connection between two OSPF routers that exchange routing information)
22. **A** (To represent the multi-access network in the OSPF database and reduce the number of adjacencies)
23. **A** (To take over the DR’s role if the DR fails)
24. **A** (The highest loopback IP address, or if none, the highest active physical interface IP address)
25. **A** (`show ip ospf neighbor`)
26. **A** (`router ospf 1` followed by `network 192.168.1.0 0.0.0.255 area 0`)
27. **A** (A network with only two routers connected directly (e.g., serial link))
28. **A** (A network with multiple routers connected via a shared medium (e.g., Ethernet))

---
### **🔹 3.5 First Hop Redundancy Protocols**
29. **A** (To provide redundancy for the default gateway in a network)
30. **D** (All of the above)
31. **A** (To forward traffic for the virtual IP address)
32. **A** (To take over if the active router fails)
33. **A** (To load balance traffic across multiple routers using a single virtual IP address)

---
---
---
## **📌 4.0 IP Services**

### **🔹 4.1 Inside Source NAT (Static and Pools)**
1. **A** (To translate private IP addresses to public IP addresses for internet access)
2. **A** (Translating the source IP address of internal (private) devices to a public IP address)
3. **A** (`ip nat inside source static 192.168.1.10 203.0.113.1`)
4. **A** (To provide a range of public IP addresses for dynamic NAT translation)
5. **A** (`ip nat inside source list 1 pool NAT_POOL`)

---
### **🔹 4.2 NTP (Client and Server Mode)**
6. **A** (To synchronize clocks between network devices)
7. **A** (`ntp server 192.168.1.1`)
8. **A** (`ntp master [stratum]`)
9. **A** (The distance from the reference clock (lower stratum = more accurate))

---
### **🔹 4.3 Role of DHCP and DNS Within the Network**
10. **A** (To automatically assign IP addresses to devices on a network)
11. **A** (To resolve domain names (e.g., google.com) to IP addresses)
12. **A** (UDP 67 (server) and UDP 68 (client))
13. **A** (UDP 53)

---
### **🔹 4.4 Function of SNMP in Network Operations**
14. **A** (To monitor and manage network devices (e.g., collect statistics, configure devices))
15. **C** (SNMPv3)
16. **A** (To collect and analyze data from SNMP agents (e.g., routers, switches))
17. **A** (To run on network devices and provide data to the SNMP manager)
18. **A** (`snmp-server user admin admin v3 auth sha mypassword priv aes 128 myencryptionkey`)

---
### **🔹 4.5 Use of Syslog Features (Facilities and Severity Levels)**
19. **A** (To collect, store, and analyze log messages from network devices)
20. **A** (Categories of log messages (e.g., kernel, user, mail))
21. **A** (Numerical values (0–7) indicating the importance of a log message (0 = Emergency, 7 = Debug))
22. **C** (`logging host 192.168.1.100`)
23. **A** (`logging trap 4`)

---
### **🔹 4.6 Configure and Verify DHCP Client and Relay**
24. **A** (To forward DHCP requests from clients to a DHCP server on a different subnet)
25. **A** (`ip helper-address 192.168.1.1`)
26. **B** (`show ip dhcp binding`)

---
### **🔹 4.7 QoS PHB (Classification, Marking, Queuing, Congestion, Policing, Shaping)**
27. **A** (To prioritize certain types of traffic (e.g., voice, video) to improve performance)
28. **A** (Identifying and categorizing traffic (e.g., voice, video, data))
29. **A** (Tagging packets with a priority value (e.g., DSCP, CoS))
30. **A** (Managing how packets are buffered and scheduled for transmission)
31. **A** (Dropping or delaying packets that exceed a specified rate)
32. **A** (Buffering packets to smooth out traffic bursts and conform to a specified rate)

---
### **🔹 4.8 Configure Network Devices for Remote Access Using SSH**
33. **A** (To securely access and manage network devices remotely)
34. **A** (`ip ssh version 2`, `line vty 0 4`, `transport input ssh`, `login local`)
35. **A** (`ip domain-name mydomain.com`)
36. **A** (`crypto key generate rsa`)

---
### **🔹 4.9 Capabilities and Functions of TFTP/FTP in the Network**
37. **A** (To transfer files (e.g., IOS images, configurations) between devices using UDP (no authentication))
38. **A** (To transfer files between devices using TCP (with authentication))
39. **A** (UDP 69)
40. **A** (TCP 21 (control) and TCP 20 (data))

---
---
---
## **📌 5.0 Security Fundamentals**

### **🔹 5.1 Key Security Concepts (Threats, Vulnerabilities, Exploits, Mitigation Techniques)**
1. **A** (A potential danger to a network or system (e.g., malware, hackers))
2. **A** (A weakness in a system, application, or network that can be exploited by a threat)
3. **A** (A method or tool used to take advantage of a vulnerability)
4. **A** (Installing firewalls and intrusion prevention systems (IPS))
5. **A** (To fix vulnerabilities by applying updates to software and systems)

---
### **🔹 5.2 Security Program Elements (User Awareness, Training, Physical Access Control)**
6. **A** (To educate users about security risks and best practices)
7. **A** (To teach employees how to recognize and respond to security threats)
8. **A** (Restricting physical access to network devices and facilities (e.g., locks, biometrics))

---
### **🔹 5.3 Configure and Verify Device Access Control Using Local Passwords**
9. **A** (`line console 0`, `password mypassword`, `login`)
10. **A** (`enable secret mypassword`)
11. **A** (`service password-encryption`)
12. **A** (`show running-config`)

---
### **🔹 5.4 Security Password Policy Elements (Management, Complexity, Password Alternatives)**
13. **A** (Requiring passwords to include a mix of uppercase, lowercase, numbers, and symbols)
14. **A** (Regularly updating passwords and using unique passwords for different accounts)
15. **A** (Multifactor authentication (MFA))
16. **A** (Using digital certificates to verify the identity of users or devices)
17. **A** (Using fingerprint, facial recognition, or retina scans to verify identity)

---
### **🔹 5.5 IPsec Remote Access and Site-to-Site VPNs**
18. **A** (To secure communication over IP networks by encrypting and authenticating packets)
19. **A** (AH (Authentication Header) and ESP (Encapsulating Security Payload))
20. **A** (A secure connection between two or more networks (e.g., between headquarters and branch offices))
21. **A** (A secure connection for individual users to access a network remotely (e.g., employees working from home))

---
### **🔹 5.6 Configure and Verify Access Control Lists (ACLs)**
22. **A** (To filter traffic based on source/destination IP addresses, ports, or protocols)
23. **D** (Both A and C)
24. **D** (Both A and C)
25. **A** (`ip access-group 10 in`)
26. **D** (All of the above)

---
### **🔹 5.7 Configure and Verify Layer 2 Security Features (DHCP Snooping, Dynamic ARP Inspection, Port Security)**
27. **A** (To prevent rogue DHCP servers from assigning IP addresses to clients)
28. **A** (`ip dhcp snooping vlan 10`)
29. **A** (To prevent ARP spoofing attacks by validating ARP packets)
30. **A** (`ip arp inspection vlan 10`)
31. **A** (To limit the number of MAC addresses that can be learned on a switch port)
32. **A** (`switchport port-security`, `switchport port-security maximum 1`)
33. **A** (`switchport port-security mac-address sticky`)
34. **D** (All of the above)

---
### **🔹 5.8 Authentication, Authorization, and Accounting (AAA) Concepts**
35. **A** (Verifying the identity of a user or device (e.g., username/password, certificates))
36. **A** (Determining what a user or device is allowed to do (e.g., access levels, permissions))
37. **A** (Tracking the actions of a user or device (e.g., logging, auditing))
38. **A** (TACACS+)
39. **A** (TACACS+ encrypts the entire packet, while RADIUS only encrypts the password)

---
### **🔹 5.9 Wireless Security Protocols (WPA, WPA2, WPA3)**
40. **A** (To secure wireless networks by encrypting data and authenticating users)
41. **A** (WPA2 uses AES encryption, while WPA uses TKIP)
42. **A** (To provide stronger security for wireless networks, including protection against brute-force attacks)
43. **A** (SAE (Simultaneous Authentication of Equals))

---
### **🔹 5.10 Configure and Verify WLAN Within the GUI Using WPA2 PSK**
44. **A** (Navigate to WLANs and click Create New)
45. **A** (A pre-shared key authentication method for WPA2, where all users share the same password)
46. **A** (WPA2 with AES encryption and a pre-shared key)
47. **A** (To prioritize certain types of traffic (e.g., voice, video))

---
---
---
## **📌 6.0 Automation and Programmability**

### **🔹 6.1 How Automation Impacts Network Management**
1. **A** (Reduces manual configuration errors and speeds up deployment)
2. **A** (Consistency, scalability, and reduced human error)

---
### **🔹 6.2 Traditional Networks vs. Controller-Based Networking**
3. **A** (A network where each device is configured individually)
4. **A** (A network where a central controller (e.g., Cisco DNA Center, SDN controller) manages devices)
5. **A** (Centralized management and automation)
6. **A** (Manual configuration is time-consuming and prone to errors)

---
### **🔹 6.3 Controller-Based, Software-Defined Architecture**
7. **A** (A network architecture where the control plane is separated from the data plane, and a central controller manages traffic)
8. **A** (The centralized logic (e.g., controller) that makes forwarding decisions)
9. **A** (The network devices (e.g., switches, routers) that forward traffic)
10. **A** (The control plane (controller) makes decisions, while the data plane (devices) forwards traffic)
11. **A** (A virtual network built on top of an existing physical network (e.g., VPN, VXLAN))
12. **A** (The physical network infrastructure (e.g., switches, routers, cabling))
13. **A** (A logical network topology designed for high performance and scalability (e.g., spine-leaf))
14. **A** (APIs that allow applications to interact with the controller (e.g., automate tasks, request network changes))
15. **A** (APIs that allow the controller to communicate with network devices (e.g., OpenFlow, NETCONF))

---
### **🔹 6.4 AI (Generative and Predictive) and Machine Learning in Network Operations**
16. **A** (To automate tasks, predict failures, and optimize network performance)
17. **A** (AI that creates new content or solutions (e.g., generating network configurations, simulating scenarios))
18. **A** (AI that predicts network issues (e.g., congestion, failures) before they occur)
19. **A** (To analyze network data and improve performance (e.g., anomaly detection, traffic classification))

---
### **🔹 6.5 Characteristics of REST-based APIs**
20. **A** (An API that uses HTTP/HTTPS methods (e.g., GET, POST, PUT, DELETE) to interact with resources)
21. **A** (Create, Read, Update, Delete)
22. **A** (GET)
23. **A** (POST)
24. **A** (PUT)
25. **A** (DELETE)
26. **A** (The format used to represent data (e.g., JSON, XML))
27. **A** (JSON (JavaScript Object Notation))

---
### **🔹 6.6 Capabilities of Configuration Management Mechanisms (Ansible, Terraform)**
28. **A** (An open-source tool for automating configuration management, application deployment, and task automation)
29. **A** (An Infrastructure as Code (IaC) tool for provisioning and managing cloud and on-premises resources)
30. **A** (To automate the deployment and management of network devices and infrastructure)
31. **A** (Agentless architecture (uses SSH for communication))
32. **A** (Declarative configuration (defines the desired state of infrastructure))

---
### **🔹 6.7 Components of JSON-Encoded Data**
33. **A** (A lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse)
34. **A** (`{"name": "Shaun", "age": 30, "city": "Johannesburg"}`)
35. **A** (A key (string) and a value (string, number, object, array, etc.) separated by a colon)
36. **A** (To encode data in a structured format for requests and responses)
37. **A** (`[1, 2, 3, 4]`)

---
---
---
## **📌 Notes**
- This answer key is **aligned with the official CCNA 200-301 v1.1 syllabus**.
- Use this to **check your answers** after completing the questionnaires for each section.
- For **adaptive learning**, focus on the questions you answered incorrectly or guessed on.

---
**Next Steps:**
- Review the questions you struggled with and revisit the corresponding topics.
- Let me know if you’d like **detailed explanations** for any of the answers!