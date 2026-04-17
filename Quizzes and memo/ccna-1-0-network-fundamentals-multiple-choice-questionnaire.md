---
# **CCNA 1.0 Network Fundamentals: Multiple Choice Questionnaire**
*For Shaun Gordon – Diagnostic Assessment for Adaptive Tutoring*

---

## **📌 Instructions**
Answer each question by selecting **A, B, C, or D**. This will help identify your current knowledge gaps in **1.0 Network Fundamentals** so we can focus on areas needing improvement.

---

---

## **🔹 1.1 Role and Function of Network Components**

1. What is the primary function of a **router** in a network?
   - A) To provide power to connected devices
   - B) To forward packets between different networks
   - C) To store and manage MAC addresses
   - D) To encrypt data for security

2. How does a **Layer 2 switch** differ from a **Layer 3 switch**?
   - A) A Layer 2 switch routes between VLANs, while a Layer 3 switch does not
   - B) A Layer 3 switch routes between VLANs, while a Layer 2 switch does not
   - C) A Layer 2 switch uses IP addresses, while a Layer 3 switch uses MAC addresses
   - D) There is no functional difference between Layer 2 and Layer 3 switches

3. Which device enables communication between **multiple VLANs**?
   - A) Hub
   - B) Router
   - C) Repeater
   - D) Access point

4. A user reports they can’t access the internet. You check and see their device is connected to a switch port, but the **link light is off**. What is the most likely cause?
   - A) Incorrect IP address configuration
   - B) Physical layer issue (e.g., faulty cable or port)
   - C) Firewall blocking traffic
   - D) DNS misconfiguration

5. What is the role of a **next-generation firewall (NGFW)** in a network?
   - A) Only filters traffic based on MAC addresses
   - B) Provides basic packet filtering
   - C) Inspects traffic at the application layer and can detect/prevent threats
   - D) Only blocks viruses

6. What is the function of an **access point (AP)** in a wireless network?
   - A) To connect wired devices to a network
   - B) To provide wireless connectivity to a network
   - C) To route traffic between networks
   - D) To store network data

7. What is **Power over Ethernet (PoE)** used for?
   - A) To encrypt network traffic
   - B) To provide power to devices (e.g., IP cameras, VoIP phones) over Ethernet cables
   - C) To increase network speed
   - D) To connect wireless devices

---

## **🔹 1.2 Network Topology Architectures**

8. What are the layers in a **three-tier network architecture**?
   - A) Access, Distribution, Core
   - B) Core, Distribution, Access
   - C) Edge, Core, Aggregation
   - D) Access, Core, Edge

9. What is the purpose of the **access layer** in a three-tier architecture?
   - A) To provide high-speed backbone connectivity
   - B) To connect end devices (e.g., PCs, printers) to the network
   - C) To route between VLANs
   - D) To filter traffic

10. In a **spine-leaf architecture**, how does traffic flow between two leaf switches?
    - A) Directly via point-to-point links
    - B) Through the core layer
    - C) Via a hub
    - D) Through wireless connections

11. Which protocol is often used to **prevent loops** in a spine-leaf architecture?
    - A) STP (Spanning Tree Protocol)
    - B) OSPF
    - C) BGP
    - D) RIP

12. How does a **two-tier architecture** compare to a **three-tier architecture** in terms of scalability?
    - A) More scalable
    - B) Less scalable
    - C) Equally scalable
    - D) Not related to scalability

13. What are typical components of a **SOHO (Small Office/Home Office)** network?
    - A) Router, switch, access point
    - B) Mainframe, supercomputer
    - C) Satellite, fiber optic cable
    - D) Server farm, data center

14. What is a key characteristic of a **WAN (Wide Area Network)** topology?
    - A) Connects devices in a small geographic area
    - B) Connects devices across large geographic areas (e.g., cities, countries)
    - C) Uses only wireless connections
    - D) Limited to a single building

15. What is an advantage of **cloud-based network deployments** over on-premises?
    - A) Lower initial hardware costs and scalability
    - B) Higher security
    - C) Faster data transfer speeds
    - D) No need for internet connectivity

---
## **🔹 1.3 Physical Interface and Cabling Types**

16. What is the key difference between **single-mode fiber** and **multimode fiber**?
    - A) Single-mode fiber supports shorter distances and lower bandwidth
    - B) Single-mode fiber supports longer distances and higher bandwidth
    - C) Multimode fiber uses laser light, while single-mode uses LED
    - D) There is no difference in distance or bandwidth

17. Which of the following is a common type of **copper cabling** used in Ethernet networks?
    - A) Fiber optic
    - B) Cat6
    - C) Coaxial (for cable TV)
    - D) HDMI

18. You need to connect two switches **500 meters apart** with maximum bandwidth. Which cabling type would you choose?
    - A) Cat5e
    - B) Single-mode fiber
    - C) Multimode fiber
    - D) Coaxial

19. What is the difference between **Ethernet shared media** and **point-to-point** connections?
    - A) Shared media uses a hub, while point-to-point uses a switch
    - B) Shared media allows multiple devices to share the same collision domain, while point-to-point does not
    - C) Point-to-point uses wireless connections, while shared media uses wired
    - D) There is no difference

20. A user reports **intermittent connectivity issues**. You notice the Ethernet cable is Cat5e, but the switch port is configured for **10Gbps**. What could be the issue?
    - A) Cat5e does not support 10Gbps at full length
    - B) The switch port is faulty
    - C) The user’s device is not compatible
    - D) The cable is too long

---
## **🔹 1.4 Interface and Cable Issues**

21. What are **collisions** in a network?
    - A) When two devices transmit data at the same time on a shared medium
    - B) When a switch receives a frame with an unknown MAC address
    - C) When a router drops a packet due to congestion
    - D) When a cable is physically damaged

22. What is a **duplex mismatch**?
    - A) When a device is configured for half-duplex and the switch port is configured for full-duplex (or vice versa)
    - B) When two devices use different cable types
    - C) When a switch port is misconfigured with the wrong VLAN
    - D) When a router has incorrect routing tables

23. How would you **diagnose a duplex mismatch** issue between a switch and a device?
    - A) Check the switch port status for errors (e.g., `%PM-4-ERR_DISABLE: duplex-mismatch`)
    - B) Ping the device from another network
    - C) Reboot the switch
    - D) Replace the cable

24. A switch port shows errors like `%PM-4-ERR_DISABLE: duplex-mismatch`. What is the **first step** to resolve this?
    - A) Replace the cable
    - B) Configure the switch port and device to match duplex settings (both auto, half, or full)
    - C) Reboot the device
    - D) Upgrade the switch firmware

25. What are **speed mismatch** issues in a network?
    - A) When a device is configured for 100Mbps and the switch port is configured for 1Gbps (or vice versa)
    - B) When a switch port is assigned to the wrong VLAN
    - C) When a router has incorrect ARP entries
    - D) When a cable is too short

---
## **🔹 1.5 TCP vs. UDP**

26. What is the main difference between **TCP** and **UDP**?
    - A) TCP is connection-oriented and reliable; UDP is connectionless and faster
    - B) TCP is connectionless; UDP is connection-oriented
    - C) TCP uses IP addresses; UDP uses MAC addresses
    - D) TCP is used for wireless; UDP is used for wired

27. Which protocol (TCP or UDP) uses **connection-oriented** communication?
    - A) TCP
    - B) UDP
    - C) Both
    - D) Neither

28. Which protocol would you use for **VoIP (Voice over IP)**?
    - A) TCP
    - B) UDP
    - C) Both
    - D) Neither

29. Which protocol would you use for **file transfers** (e.g., FTP)?
    - A) TCP
    - B) UDP
    - C) Both
    - D) Neither

30. A video streaming service is buffering frequently. Could this be related to **TCP or UDP**, and how?
    - A) Yes, TCP’s reliability causes delays due to retransmissions
    - B) Yes, UDP’s lack of reliability causes buffering
    - C) No, buffering is unrelated to TCP/UDP
    - D) Only if the network is wireless

---
## **🔹 1.6 IPv4 Addressing and Subnetting**

31. What is the purpose of **subnetting** in IPv4?
    - A) To increase the number of available public IP addresses
    - B) To divide a network into smaller, more manageable segments
    - C) To encrypt IP addresses for security
    - D) To connect multiple physical networks

32. What is the **subnet mask** for a /24 network?
    - A) 255.255.255.0
    - B) 255.255.0.0
    - C) 255.0.0.0
    - D) 255.255.255.252

33. Given the IP address `192.168.1.100/26`, what is the **subnet mask**?
    - A) 255.255.255.0
    - B) 255.255.255.128
    - C) 255.255.255.192
    - D) 255.255.255.224

34. Given the IP address `192.168.1.100/26`, what is the **network address**?
    - A) 192.168.1.0
    - B) 192.168.1.64
    - C) 192.168.1.96
    - D) 192.168.1.128

35. Given the IP address `192.168.1.100/26`, what is the **broadcast address**?
    - A) 192.168.1.63
    - B) 192.168.1.127
    - C) 192.168.1.191
    - D) 192.168.1.255

36. How many **usable host addresses** are available in a /30 subnet?
    - A) 2
    - B) 4
    - C) 6
    - D) 8

37. You need to divide a /24 network into **4 equal subnets**. What subnet mask would you use?
    - A) /25
    - B) /26
    - C) /27
    - D) /28

38. Two devices on the same subnet cannot ping each other. What are the **possible causes** related to IPv4 addressing?
    - A) Incorrect subnet mask
    - B) Incorrect default gateway
    - C) Duplicate IP addresses
    - D) All of the above

---
## **🔹 1.7 Private IPv4 Addressing**

39. Which of the following is a **private IPv4 address range** as defined by RFC 1918?
    - A) 10.0.0.0 – 10.255.255.255
    - B) 172.16.0.0 – 172.31.255.255
    - C) 192.168.0.0 – 192.168.255.255
    - D) All of the above

40. Why would a company use **private IPv4 addresses** internally?
    - A) To save public IP addresses and improve security
    - B) To connect directly to the internet
    - C) To encrypt internal traffic
    - D) To increase network speed

41. Can **private IPv4 addresses** be routed on the public internet?
    - A) Yes, with NAT
    - B) Yes, without any restrictions
    - C) No, they are not routable on the public internet
    - D) Only if configured with a public DNS

---
## **🔹 1.8 IPv6 Addressing and Prefix**

42. What does the **/64** in an IPv6 address like `2001:0db8:85a3::8a2e:0370/64` represent?
    - A) The host portion
    - B) The network prefix
    - C) The subnet mask
    - D) The broadcast address

43. What is the **default prefix length** for a typical IPv6 subnet?
    - A) /48
    - B) /64
    - C) /80
    - D) /128

44. How would you **shorten** the IPv6 address `2001:0db8:0000:0000:0000:ff00:0042:8329`?
    - A) 2001:db8::ff00:42:8329
    - B) 2001:db8:0:0:0:ff00:42:8329
    - C) 2001:db8::ff:42:8329
    - D) 2001:db8::ff00:0042:8329

45. What is the **loopback address** in IPv6?
    - A) ::1
    - B) 127.0.0.1
    - C) 2001::1
    - D) fe80::1

46. A device has an IPv6 address but cannot communicate with the IPv6 internet. What could be **missing** in the configuration?
    - A) Default IPv6 gateway
    - B) IPv6 DNS server
    - C) Both A and B
    - D) IPv6 firewall rules

---
## **🔹 1.9 IPv6 Address Types**

47. What is the difference between **unicast**, **anycast**, and **multicast** IPv6 addresses?
    - A) Unicast: one-to-one; Anycast: one-to-nearest; Multicast: one-to-many
    - B) Unicast: one-to-many; Anycast: one-to-one; Multicast: one-to-nearest
    - C) Unicast: one-to-nearest; Anycast: one-to-one; Multicast: one-to-many
    - D) There is no difference

48. What is the **prefix** for a **link-local IPv6 address**?
    - A) fe80::/10
    - B) ff00::/8
    - C) 2001::/16
    - D) fc00::/7

49. When would you use a **unique local IPv6 address**?
    - A) For communication within a site or organization
    - B) For global internet communication
    - C) For loopback testing
    - D) For multicast traffic

50. What is the purpose of **Modified EUI-64** in IPv6 addressing?
    - A) To generate a unique interface ID for IPv6 addresses
    - B) To encrypt IPv6 traffic
    - C) To compress IPv6 headers
    - D) To assign public IPv4 addresses

---
## **🔹 1.10 IP Parameters for Client OS**

51. How would you check the **IP address**, **subnet mask**, and **default gateway** on a **Windows** machine?
    - A) `ipconfig`
    - B) `ifconfig`
    - C) `netstat`
    - D) `ping`

52. How would you check the **IP address**, **subnet mask**, and **default gateway** on a **Linux** machine?
    - A) `ipconfig`
    - B) `ifconfig` or `ip a`
    - C) `netstat`
    - D) `ping`

53. How would you check the **IP address**, **subnet mask**, and **default gateway** on a **Mac OS** machine?
    - A) `ipconfig`
    - B) `ifconfig` or `networksetup -getinfo Wi-Fi`
    - C) `netstat`
    - D) `ping`

54. A Windows PC has an IP address of `169.254.1.1`. What does this indicate?
    - A) The PC is using a private IP address
    - B) The PC is using an **APIPA (Automatic Private IP Addressing)** address, indicating DHCP failure
    - C) The PC is connected to the internet
    - D) The PC is using a static IP address

---
## **🔹 1.11 Wireless Principles**

55. What is the purpose of **nonoverlapping Wi-Fi channels**?
    - A) To reduce interference between access points
    - B) To increase the range of the wireless signal
    - C) To encrypt wireless traffic
    - D) To assign IP addresses

56. What does **SSID** stand for?
    - A) Service Set Identifier
    - B) Secure System Identification
    - C) Signal Strength Indicator
    - D) System Security ID

57. What are the **2.4 GHz nonoverlapping channels** in Wi-Fi networks?
    - A) 1, 6, 11
    - B) 1, 3, 5, 7, 9, 11
    - C) 2, 4, 6, 8, 10
    - D) 1, 5, 9, 13

58. Why is **SSID broadcasting** sometimes disabled in enterprise networks?
    - A) To hide the network from unauthorized users
    - B) To increase signal strength
    - C) To encrypt the network
    - D) To assign static IP addresses

59. What is **RF (Radio Frequency)** in the context of wireless networks?
    - A) The technology used to transmit wireless signals
    - B) The encryption method for Wi-Fi
    - C) The protocol for wired networks
    - D) The standard for Ethernet cabling

60. What are the common **encryption types** used in Wi-Fi networks?
    - A) WEP, WPA, WPA2, WPA3
    - B) DES, AES, RSA
    - C) SSL, TLS
    - D) PPP, PPPoE

---
## **🔹 1.12 Virtualization Fundamentals**

61. What is **server virtualization**?
    - A) Running multiple virtual servers on a single physical server
    - B) Connecting multiple physical servers to a single network
    - C) Encrypting server data
    - D) Using cloud-based servers only

62. What are **containers**, and how do they differ from **virtual machines (VMs)**?
    - A) Containers share the host OS kernel, while VMs run their own OS
    - B) Containers are only used for storage, while VMs are used for computing
    - C) Containers are physical, while VMs are virtual
    - D) There is no difference

63. What is **VRF (Virtual Routing and Forwarding)**?
    - A) A technology that allows multiple instances of a routing table to coexist on the same router
    - B) A type of virtual firewall
    - C) A method for encrypting network traffic
    - D) A protocol for wireless networks

64. How does **VRF** enable network isolation in a **multi-tenant** environment?
    - A) By creating separate routing tables for each tenant
    - B) By encrypting traffic between tenants
    - C) By assigning unique IP addresses to each tenant
    - D) By using a single routing table for all tenants

---
## **🔹 1.13 Switching Concepts**

65. How does a switch **learn MAC addresses**?
    - A) By examining the source MAC address of incoming frames and adding it to its MAC address table
    - B) By examining the destination MAC address of incoming frames
    - C) By broadcasting ARP requests
    - D) By using a pre-configured list

66. What is **MAC address aging**?
    - A) The process of removing stale MAC address entries from the switch’s table after a period of inactivity
    - B) The process of updating MAC addresses with new ones
    - C) The process of assigning static MAC addresses
    - D) The process of encrypting MAC addresses

67. What is **frame switching**?
    - A) The process of forwarding frames based on the destination MAC address
    - B) The process of converting frames to packets
    - C) The process of encrypting frames
    - D) The process of storing frames

68. What is **frame flooding**?
    - A) Sending a frame to all ports except the one it arrived on, when the destination MAC is unknown
    - B) Sending a frame to a specific port based on the MAC address table
    - C) Dropping frames with unknown MAC addresses
    - D) Encrypting frames before forwarding

69. What happens when a switch receives a frame with a **destination MAC address** it doesn’t have in its table?
    - A) It floods the frame to all ports except the incoming port
    - B) It drops the frame
    - C) It sends the frame back to the source
    - D) It broadcasts the frame to all devices

70. A switch’s MAC address table is full, and new devices can’t communicate. What could be the issue, and how would you resolve it?
    - A) The table is full due to too many devices; increase the MAC address table size or reduce the aging time
    - B) The switch is faulty and needs replacement
    - C) The network is congested; upgrade the switch
    - D) The devices are using the wrong MAC addresses

---
---
## **📌 Next Steps**
1. Answer all questions to the best of your ability.
2. I will **analyze your responses**, identify gaps, and **adapt the tutoring approach** dynamically.
3. We will **focus on weak areas** and skip what you already know.
4. After each subtopic, I’ll **re-assess** to ensure retention.

**Ready? Start answering, and I’ll begin tailoring your learning path!**