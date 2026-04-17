---
# **CCNA 4.0 IP Services: Multiple Choice Questionnaire**
*Aligned with Cisco CCNA 200-301 v1.1 Syllabus – For Shaun Gordon*

---
---
## **📌 Instructions**
Answer each question by selecting **A, B, C, or D**. These questions are **exam-type** and cover all subtopics of **4.0 IP Services** as per the official CCNA 200-301 v1.1 syllabus.

---

---
## **🔹 4.1 Inside Source NAT (Static and Pools)**

1. What is the purpose of **NAT (Network Address Translation)**?
   - A) To **translate private IP addresses** to public IP addresses for internet access
   - B) To encrypt traffic between networks
   - C) To assign IP addresses to devices
   - D) To route traffic between VLANs

2. What is **inside source NAT**?
   - A) Translating the **source IP address** of internal (private) devices to a public IP address
   - B) Translating the destination IP address of incoming traffic
   - C) Translating both source and destination IP addresses
   - D) Encrypting the source IP address

3. Which command is used to configure **static NAT** for an inside local address of 192.168.1.10 to an inside global address of 203.0.113.1?
   - A) `ip nat inside source static 192.168.1.10 203.0.113.1`
   - B) `ip nat outside source static 192.168.1.10 203.0.113.1`
   - C) `ip nat inside source 192.168.1.10 203.0.113.1`
   - D) `ip nat static 192.168.1.10 203.0.113.1`

4. What is the purpose of a **NAT pool**?
   - A) To **provide a range of public IP addresses** for dynamic NAT translation
   - B) To assign private IP addresses to devices
   - C) To encrypt traffic between networks
   - D) To route traffic between VLANs

5. Which command is used to configure **dynamic NAT** using a pool named `NAT_POOL` for inside source addresses matching access list 1?
   - A) `ip nat inside source list 1 pool NAT_POOL`
   - B) `ip nat outside source list 1 pool NAT_POOL`
   - C) `ip nat pool NAT_POOL`
   - D) `ip nat inside list 1 pool NAT_POOL`

---
---
## **🔹 4.2 NTP (Client and Server Mode)**

6. What is the purpose of **NTP (Network Time Protocol)**?
   - A) To **synchronize clocks** between network devices
   - B) To assign IP addresses to devices
   - C) To encrypt traffic between networks
   - D) To route traffic between VLANs

7. Which command is used to configure a Cisco router as an **NTP client** with the server IP address 192.168.1.1?
   - A) `ntp server 192.168.1.1`
   - B) `ntp client 192.168.1.1`
   - C) `ntp peer 192.168.1.1`
   - D) `ntp sync 192.168.1.1`

8. Which command is used to configure a Cisco router as an **NTP server**?
   - A) `ntp master [stratum]`
   - B) `ntp server`
   - C) `ntp enable`
   - D) `ntp start`

9. What is the **stratum level** in NTP?
   - A) The **distance from the reference clock** (lower stratum = more accurate)
   - B) The administrative distance of the NTP server
   - C) The metric of the NTP server
   - D) The next hop for the NTP server

---
---
## **🔹 4.3 Role of DHCP and DNS Within the Network**

10. What is the purpose of **DHCP (Dynamic Host Configuration Protocol)**?
    - A) To **automatically assign IP addresses** to devices on a network
    - B) To resolve domain names to IP addresses
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

11. What is the purpose of **DNS (Domain Name System)**?
    - A) To **resolve domain names** (e.g., google.com) to IP addresses
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

12. Which port does **DHCP** use?
    - A) UDP 67 (server) and UDP 68 (client)
    - B) TCP 53
    - C) UDP 53
    - D) TCP 67

13. Which port does **DNS** use?
    - A) UDP 53
    - B) TCP 53
    - C) UDP 67
    - D) TCP 67

---
---
## **🔹 4.4 Function of SNMP in Network Operations**

14. What is the purpose of **SNMP (Simple Network Management Protocol)**?
    - A) To **monitor and manage network devices** (e.g., collect statistics, configure devices)
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

15. Which **SNMP version** provides **encryption and authentication**?
    - A) SNMPv1
    - B) SNMPv2c
    - C) **SNMPv3**
    - D) All versions

16. What is the role of an **SNMP manager**?
    - A) To **collect and analyze data** from SNMP agents (e.g., routers, switches)
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

17. What is the role of an **SNMP agent**?
    - A) To **run on network devices** and provide data to the SNMP manager
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

18. Which command is used to configure **SNMPv3** on a Cisco router with a user named `admin` and authentication/encryption?
    - A) `snmp-server user admin admin v3 auth sha mypassword priv aes 128 myencryptionkey`
    - B) `snmp-server community admin v3`
    - C) `snmp-server enable v3 admin`
    - D) `snmp-server host admin v3`

---
---
## **🔹 4.5 Use of Syslog Features (Facilities and Severity Levels)**

19. What is the purpose of **syslog** in network operations?
    - A) To **collect, store, and analyze log messages** from network devices
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

20. What are **syslog facilities**?
    - A) **Categories of log messages** (e.g., kernel, user, mail)
    - B) The severity levels of log messages
    - C) The source IP addresses of log messages
    - D) The destination IP addresses of log messages

21. What are **syslog severity levels**?
    - A) **Numerical values (0–7) indicating the importance of a log message** (0 = Emergency, 7 = Debug)
    - B) The categories of log messages
    - C) The source IP addresses of log messages
    - D) The destination IP addresses of log messages

22. Which command is used to configure a Cisco router to send syslog messages to a server with IP address 192.168.1.100?
    - A) `logging 192.168.1.100`
    - B) `syslog server 192.168.1.100`
    - C) `logging host 192.168.1.100`
    - D) `syslog host 192.168.1.100`

23. Which command is used to **set the syslog severity level** to warnings and higher (level 4 and below)?
    - A) `logging trap 4`
    - B) `logging severity 4`
    - C) `logging level 4`
    - D) `logging filter 4`

---
---
## **🔹 4.6 Configure and Verify DHCP Client and Relay**

24. What is the purpose of a **DHCP relay agent**?
    - A) To **forward DHCP requests** from clients to a DHCP server on a different subnet
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

25. Which command is used to configure a Cisco router as a **DHCP relay agent** for a DHCP server with IP address 192.168.1.1?
    - A) `ip helper-address 192.168.1.1`
    - B) `ip dhcp relay 192.168.1.1`
    - C) `dhcp relay 192.168.1.1`
    - D) `helper-address 192.168.1.1`

26. Which command is used to **verify DHCP bindings** on a Cisco router?
    - A) `show dhcp binding`
    - B) `show ip dhcp binding`
    - C) `show dhcp leases`
    - D) `show ip dhcp leases`

---
---
## **🔹 4.7 QoS PHB (Classification, Marking, Queuing, Congestion, Policing, Shaping)**

27. What is **QoS (Quality of Service)**?
    - A) To **prioritize certain types of traffic** (e.g., voice, video) to improve performance
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

28. What is **classification** in QoS?
    - A) **Identifying and categorizing traffic** (e.g., voice, video, data)
    - B) Assigning IP addresses to devices
    - C) Encrypting traffic between networks
    - D) Routing traffic between VLANs

29. What is **marking** in QoS?
    - A) **Tagging packets** with a priority value (e.g., DSCP, CoS)
    - B) Assigning IP addresses to devices
    - C) Encrypting traffic between networks
    - D) Routing traffic between VLANs

30. What is **queuing** in QoS?
    - A) **Managing how packets are buffered** and scheduled for transmission
    - B) Assigning IP addresses to devices
    - C) Encrypting traffic between networks
    - D) Routing traffic between VLANs

31. What is **policing** in QoS?
    - A) **Dropping or delaying packets** that exceed a specified rate
    - B) Assigning IP addresses to devices
    - C) Encrypting traffic between networks
    - D) Routing traffic between VLANs

32. What is **shaping** in QoS?
    - A) **Buffering packets** to smooth out traffic bursts and conform to a specified rate
    - B) Assigning IP addresses to devices
    - C) Encrypting traffic between networks
    - D) Routing traffic between VLANs

---
---
## **🔹 4.8 Configure Network Devices for Remote Access Using SSH**

33. What is the purpose of **SSH (Secure Shell)**?
    - A) To **securely access and manage network devices** remotely
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

34. Which command is used to **enable SSH** on a Cisco router?
    - A) `ip ssh version 2`
       `line vty 0 4`
       `transport input ssh`
       `login local`
    - B) `ssh enable`
    - C) `remote access ssh`
    - D) `secure shell enable`

35. Which command is used to **configure a domain name** (required for SSH) on a Cisco router?
    - A) `ip domain-name mydomain.com`
    - B) `domain mydomain.com`
    - C) `set domain mydomain.com`
    - D) `domain-name mydomain.com`

36. Which command is used to **generate RSA keys** for SSH on a Cisco router?
    - A) `crypto key generate rsa`
    - B) `generate rsa keys`
    - C) `crypto rsa generate`
    - D) `rsa generate keys`

---
---
## **🔹 4.9 Capabilities and Functions of TFTP/FTP in the Network**

37. What is the purpose of **TFTP (Trivial File Transfer Protocol)**?
    - A) To **transfer files** (e.g., IOS images, configurations) between devices using UDP (no authentication)
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

38. What is the purpose of **FTP (File Transfer Protocol)**?
    - A) To **transfer files** between devices using TCP (with authentication)
    - B) To assign IP addresses to devices
    - C) To encrypt traffic between networks
    - D) To route traffic between VLANs

39. Which port does **TFTP** use?
    - A) UDP 69
    - B) TCP 21
    - C) TCP 20
    - D) UDP 21

40. Which port does **FTP** use for control and data connections?
    - A) TCP 21 (control) and TCP 20 (data)
    - B) UDP 69
    - C) TCP 22
    - D) UDP 20

---
---
## **📌 Next Steps**
1. Answer all questions to the best of your ability.
2. I will **analyze your responses**, identify gaps, and **adapt the tutoring approach** dynamically.
3. We will **focus on weak areas** and skip what you already know.
4. After each subtopic, I’ll **re-assess** to ensure retention.

---
**Ready? Start answering (e.g., "1. B", "2. A"), and I’ll begin tailoring your learning path for 4.0 IP Services!**