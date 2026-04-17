---
# **CCNA 2.0 Network Access: Multiple Choice Questionnaire**
*Aligned with Cisco CCNA 200-301 v1.1 Syllabus – For Shaun Gordon*

---
---
## **📌 Instructions**
Answer each question by selecting **A, B, C, or D**. These questions are **exam-type** and cover all subtopics of **2.0 Network Access** as per the official CCNA 200-301 v1.1 syllabus.

---

---
## **🔹 2.1 VLANs (Normal Range, Access Ports, Default VLAN, InterVLAN Connectivity)**

1. What is the **default VLAN** on a Cisco switch?
   - A) VLAN 0
   - B) VLAN 1
   - C) VLAN 10
   - D) VLAN 100

2. Which command is used to **assign a switch port to VLAN 20** as an access port?
   - A) `switchport mode trunk`
   - B) `switchport access vlan 20`
   - C) `vlan 20`
   - D) `switchport trunk allowed vlan 20`

3. What is the purpose of **access ports** in a VLAN?
   - A) To carry traffic for multiple VLANs
   - B) To connect end devices (e.g., PCs, printers) to a single VLAN
   - C) To connect switches to each other
   - D) To enable routing between VLANs

4. Which of the following is **required** for **InterVLAN connectivity**?
   - A) A Layer 2 switch
   - B) A router or Layer 3 switch
   - C) A hub
   - D) A repeater

5. Which VLAN range is considered the **normal range** for Cisco switches?
   - A) 1–1000
   - B) 1–4094
   - C) 1006–4094
   - D) 1–1005

6. What happens if a device connected to an **access port** sends a frame with a VLAN tag?
   - A) The switch removes the tag and forwards the frame within the VLAN
   - B) The switch drops the frame
   - C) The switch forwards the frame to all VLANs
   - D) The switch adds another tag to the frame

7. Which command is used to **verify VLAN assignments** on a Cisco switch?
   - A) `show vlan brief`
   - B) `show vlan`
   - C) `show interface vlan`
   - D) `show vlan assignments`

---
---
## **🔹 2.2 Interswitch Connectivity (Trunk Ports, 802.1Q, Native VLAN)**

8. What is the purpose of a **trunk port**?
   - A) To connect end devices to the network
   - B) To carry traffic for **multiple VLANs** between switches or between a switch and a router
   - C) To connect a switch to a hub
   - D) To enable routing between VLANs

9. Which protocol is used for **VLAN tagging** on trunk ports?
   - A) ISL
   - B) 802.1Q
   - C) VTP
   - D) STP

10. What is the **native VLAN** on a trunk port?
    - A) The VLAN that carries untagged traffic on a trunk port
    - B) The VLAN with the highest ID
    - C) The VLAN that is disabled by default
    - D) The VLAN used for management traffic

11. Which command configures a switch port as a **trunk port** and allows all VLANs?
    - A) `switchport mode trunk`
    - B) `switchport mode access`
    - C) `switchport trunk allowed vlan all`
    - D) Both A and C

12. What happens to **untagged traffic** on a trunk port?
    - A) It is dropped
    - B) It is assigned to the **native VLAN**
    - C) It is assigned to VLAN 1
    - D) It is forwarded to all VLANs

13. Which command is used to **verify trunk port configuration**?
    - A) `show interface trunk`
    - B) `show vlan brief`
    - C) `show interface switchport`
    - D) `show trunk`

---
---
## **🔹 2.3 Layer 2 Discovery Protocols (Cisco Discovery Protocol, LLDP)**

14. What is the purpose of **Cisco Discovery Protocol (CDP)**?
    - A) To discover and share information about directly connected Cisco devices
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

15. Which command is used to **enable CDP** on a Cisco switch?
    - A) `cdp run`
    - B) `cdp enable`
    - C) `enable cdp`
    - D) `cdp activate`

16. What information can **CDP** provide about a neighbor device?
    - A) Device ID, IP address, platform, and capabilities
    - B) MAC address table
    - C) Routing table
    - D) VLAN assignments

17. What is the purpose of **LLDP (Link Layer Discovery Protocol)**?
    - A) To discover and share information about directly connected devices from **any vendor**
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

18. Which command is used to **view LLDP neighbors** on a Cisco switch?
    - A) `show lldp neighbors`
    - B) `show cdp neighbors`
    - C) `show lldp`
    - D) `show neighbors`

---
---
## **🔹 2.4 EtherChannel (LACP, Layer 2/Layer 3)**

19. What is the purpose of **EtherChannel**?
    - A) To provide redundancy and increase bandwidth by bundling multiple physical links
    - B) To connect end devices to the network
    - C) To route traffic between VLANs
    - D) To encrypt traffic between switches

20. Which protocol is used to **automatically bundle links** into an EtherChannel?
    - A) STP
    - B) LACP (Link Aggregation Control Protocol)
    - C) VTP
    - D) CDP

21. Which command is used to **configure an EtherChannel** using LACP?
    - A) `channel-group 1 mode active`
    - B) `channel-group 1 mode on`
    - C) `etherchannel 1 mode lacp`
    - D) `lacp group 1`

22. What is the difference between **Layer 2 and Layer 3 EtherChannel**?
    - A) Layer 2 EtherChannel bundles links for switching, while Layer 3 EtherChannel bundles links for routing
    - B) Layer 2 EtherChannel uses LACP, while Layer 3 EtherChannel uses PAgP
    - C) There is no difference
    - D) Layer 2 EtherChannel is for wireless, while Layer 3 EtherChannel is for wired

23. Which command is used to **verify EtherChannel configuration**?
    - A) `show etherchannel summary`
    - B) `show interface etherchannel`
    - C) `show channel-group`
    - D) All of the above

---
---
## **🔹 2.5 Rapid PVST+ Spanning Tree Protocol (Root Port, Port States, PortFast, Guard Features)**

24. What is the purpose of **Spanning Tree Protocol (STP)**?
    - A) To prevent loops in a Layer 2 network
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

25. What is the **root bridge** in STP?
    - A) The switch with the lowest Bridge ID (priority + MAC address)
    - B) The switch with the highest Bridge ID
    - C) The switch connected to the most devices
    - D) The switch with the most VLANs

26. What is the **root port** in STP?
    - A) The port on a non-root switch with the **lowest cost path to the root bridge**
    - B) The port on the root bridge
    - C) The port with the highest priority
    - D) The port connected to the most devices

27. Which **port state** in STP means the port is **not forwarding traffic** but is listening for BPDUs?
    - A) Blocking
    - B) Listening
    - C) Learning
    - D) Forwarding

28. What is the purpose of **PortFast** in STP?
    - A) To immediately transition a port to the **forwarding state** if it is connected to an end device
    - B) To block a port if it receives a BPDU
    - C) To increase the STP convergence time
    - D) To encrypt traffic on the port

29. What is the purpose of **Root Guard** in STP?
    - A) To prevent a switch from becoming the root bridge if it shouldn’t be
    - B) To block a port if it receives a superior BPDU
    - C) To increase the STP convergence time
    - D) To encrypt traffic on the port

30. What is the purpose of **Loop Guard** in STP?
    - A) To prevent loops by **blocking a port if it stops receiving BPDUs**
    - B) To prevent a switch from becoming the root bridge
    - C) To increase the STP convergence time
    - D) To encrypt traffic on the port

31. What is the purpose of **BPDU Guard** in STP?
    - A) To **shut down a port** if it receives a BPDU, preventing loops
    - B) To prevent a switch from becoming the root bridge
    - C) To increase the STP convergence time
    - D) To encrypt traffic on the port

32. Which command is used to **enable PortFast** on a switch port?
    - A) `spanning-tree portfast`
    - B) `spanning-tree guard root`
    - C) `spanning-tree bpduguard enable`
    - D) `spanning-tree loopguard enable`

---
---
## **🔹 2.6 Cisco Wireless Architectures and AP Modes**

33. What is the purpose of a **wireless LAN controller (WLC)** in a Cisco wireless network?
    - A) To centrally manage multiple access points (APs)
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

34. Which **AP mode** allows an access point to **connect to a WLC** for centralized management?
    - A) Lightweight mode
    - B) Autonomous mode
    - C) Bridge mode
    - D) Repeater mode

35. What is the purpose of **Cisco FlexConnect** (formerly H-REAP)?
    - A) To allow APs to **switch client traffic locally** while being managed centrally by a WLC
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

---
---
## **🔹 2.7 Physical Infrastructure Connections of WLAN Components (AP, WLC, Access/Trunk Ports, LAG)**

36. How is a **lightweight AP** connected to a WLC?
    - A) Via a **CAPWAP (Control and Provisioning of Wireless Access Points) tunnel**
    - B) Via a direct Ethernet connection
    - C) Via a wireless connection
    - D) Via a console cable

37. What is the purpose of **LAG (Link Aggregation Group)** in a wireless network?
    - A) To provide redundancy and increase bandwidth between a WLC and a switch
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

38. Which type of port is used to connect a **lightweight AP** to a switch?
    - A) Access port
    - B) Trunk port
    - C) Both A and B, depending on the VLAN configuration
    - D) Neither; APs connect directly to the WLC

---
---
## **🔹 2.8 Network Device Management Access (Telnet, SSH, HTTP, HTTPS, Console, TACACS+/RADIUS, Cloud Managed)**

39. Which protocol is **recommended** for secure remote management of a Cisco switch?
    - A) Telnet
    - B) SSH
    - C) HTTP
    - D) SNMP

40. What is the purpose of the **console port** on a Cisco switch?
    - A) To provide **out-of-band management** for initial configuration or troubleshooting
    - B) To connect end devices to the network
    - C) To route traffic between VLANs
    - D) To encrypt traffic between switches

41. Which protocol uses **TACACS+** for authentication, authorization, and accounting (AAA)?
    - A) SSH
    - B) Telnet
    - C) AAA services (e.g., for remote access)
    - D) HTTP

42. What is the purpose of **RADIUS** in network device management?
    - A) To provide **authentication, authorization, and accounting (AAA)** for network access
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

43. What is **cloud-managed** network device management?
    - A) Managing network devices via a **cloud-based controller** (e.g., Cisco Meraki, DNA Center)
    - B) Managing devices via a local server
    - C) Managing devices via a console connection
    - D) Managing devices via Telnet

---
---
## **🔹 2.9 Wireless LAN GUI Configuration (WLAN Creation, Security Settings, QoS Profiles, Advanced Settings)**

44. What is the first step in **creating a WLAN** in a Cisco WLC GUI?
    - A) Configure the **SSID** and **VLAN**
    - B) Configure the **security settings**
    - C) Configure the **QoS profiles**
    - D) Configure the **AP groups**

45. Which **security setting** is required to secure a WLAN in an enterprise environment?
    - A) WPA2-Enterprise with **802.1X authentication**
    - B) WEP
    - C) Open authentication
    - D) MAC address filtering

46. What is the purpose of **QoS profiles** in a WLAN?
    - A) To prioritize **certain types of traffic** (e.g., voice, video)
    - B) To route traffic between VLANs
    - C) To encrypt traffic between switches
    - D) To assign IP addresses to devices

47. Which **advanced setting** in a WLAN configuration allows you to **limit the number of clients** connected to an SSID?
    - A) Client exclusion
    - B) Load balancing
    - C) Band selection
    - D) Session timeout

---
---
## **📌 Next Steps**
1. Answer all questions to the best of your ability.
2. I will **analyze your responses**, identify gaps, and **adapt the tutoring approach** dynamically.
3. We will **focus on weak areas** and skip what you already know.
4. After each subtopic, I’ll **re-assess** to ensure retention.

---
**Ready? Start answering (e.g., "1. B", "2. A"), and I’ll begin tailoring your learning path for 2.0 Network Access!**