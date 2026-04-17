---
# **CCNA 5.0 Security Fundamentals: Multiple Choice Questionnaire**
*Aligned with Cisco CCNA 200-301 v1.1 Syllabus – For Shaun Gordon*

---
---
## **📌 Instructions**
Answer each question by selecting **A, B, C, or D**. These questions are **exam-type** and cover all subtopics of **5.0 Security Fundamentals** as per the official CCNA 200-301 v1.1 syllabus.

---

---
## **🔹 5.1 Key Security Concepts (Threats, Vulnerabilities, Exploits, Mitigation Techniques)**

1. What is a **threat** in network security?
   - A) A **potential danger** to a network or system (e.g., malware, hackers)
   - B) A weakness in a system that can be exploited
   - C) A tool used to exploit vulnerabilities
   - D) A method to prevent attacks

2. What is a **vulnerability** in network security?
   - A) A **weakness** in a system, application, or network that can be exploited by a threat
   - B) A potential danger to a network or system
   - C) A tool used to exploit weaknesses
   - D) A method to prevent attacks

3. What is an **exploit** in network security?
   - A) A **method or tool** used to take advantage of a vulnerability
   - B) A potential danger to a network or system
   - C) A weakness in a system
   - D) A method to prevent attacks

4. Which of the following is a **mitigation technique** for network threats?
   - A) Installing firewalls and intrusion prevention systems (IPS)
   - B) Ignoring vulnerabilities
   - C) Disabling all security features
   - D) Using weak passwords

5. What is the purpose of **patch management** in network security?
   - A) To **fix vulnerabilities** by applying updates to software and systems
   - B) To exploit vulnerabilities
   - C) To disable security features
   - D) To ignore threats

---
---
## **🔹 5.2 Security Program Elements (User Awareness, Training, Physical Access Control)**

6. What is the purpose of **user awareness** in network security?
   - A) To **educate users** about security risks and best practices
   - B) To exploit vulnerabilities
   - C) To disable security features
   - D) To ignore threats

7. What is the purpose of **security training** for employees?
   - A) To **teach employees** how to recognize and respond to security threats
   - B) To exploit vulnerabilities
   - C) To disable security features
   - D) To ignore threats

8. What is **physical access control** in network security?
   - A) **Restricting physical access** to network devices and facilities (e.g., locks, biometrics)
   - B) Controlling access to network resources via passwords
   - C) Encrypting network traffic
   - D) Monitoring network traffic

---
---
## **🔹 5.3 Configure and Verify Device Access Control Using Local Passwords**

9. Which command is used to **set a password for the console line** on a Cisco router?
   - A) `line console 0`
      `password mypassword`
      `login`
   - B) `console password mypassword`
   - C) `set console password mypassword`
   - D) `password console mypassword`

10. Which command is used to **set a password for the enable (privileged EXEC) mode** on a Cisco router?
    - A) `enable secret mypassword`
    - B) `enable password mypassword`
    - C) `privilege password mypassword`
    - D) `set enable password mypassword`

11. Which command is used to **encrypt all plaintext passwords** in the running configuration?
    - A) `service password-encryption`
    - B) `encrypt passwords`
    - C) `password encryption`
    - D) `enable password-encryption`

12. Which command is used to **verify local password configurations** on a Cisco router?
    - A) `show running-config`
    - B) `show passwords`
    - C) `show local passwords`
    - D) `show enable password`

---
---
## **🔹 5.4 Security Password Policy Elements (Management, Complexity, Password Alternatives)**

13. What is **password complexity** in network security?
    - A) Requiring passwords to include a **mix of uppercase, lowercase, numbers, and symbols**
    - B) Using the same password for all accounts
    - C) Using short and simple passwords
    - D) Sharing passwords among users

14. What is **password management** in network security?
    - A) **Regularly updating passwords** and using unique passwords for different accounts
    - B) Using the same password for all accounts
    - C) Sharing passwords among users
    - D) Writing passwords down and storing them in a visible location

15. Which of the following is a **password alternative** for stronger authentication?
    - A) **Multifactor authentication (MFA)**
    - B) Using the same password for all accounts
    - C) Using short and simple passwords
    - D) Sharing passwords among users

16. What is **certificate-based authentication**?
    - A) Using **digital certificates** to verify the identity of users or devices
    - B) Using passwords for authentication
    - C) Using biometrics for authentication
    - D) Using tokens for authentication

17. What is **biometric authentication**?
    - A) Using **fingerprint, facial recognition, or retina scans** to verify identity
    - B) Using passwords for authentication
    - C) Using certificates for authentication
    - D) Using tokens for authentication

---
---
## **🔹 5.5 IPsec Remote Access and Site-to-Site VPNs**

18. What is the purpose of **IPsec (Internet Protocol Security)**?
    - A) To **secure communication** over IP networks by encrypting and authenticating packets
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

19. What are the two main components of **IPsec**?
    - A) **AH (Authentication Header)** and **ESP (Encapsulating Security Payload)**
    - B) SSL and TLS
    - C) Firewalls and IDS
    - D) VPNs and proxies

20. What is a **site-to-site VPN**?
    - A) A **secure connection** between two or more networks (e.g., between headquarters and branch offices)
    - B) A secure connection for remote users
    - C) A connection for encrypting email traffic
    - D) A connection for monitoring network traffic

21. What is a **remote access VPN**?
    - A) A **secure connection** for individual users to access a network remotely (e.g., employees working from home)
    - B) A secure connection between two or more networks
    - C) A connection for encrypting email traffic
    - D) A connection for monitoring network traffic

---
---
## **🔹 5.6 Configure and Verify Access Control Lists (ACLs)**

22. What is the purpose of an **ACL (Access Control List)** on a Cisco router?
    - A) To **filter traffic** based on source/destination IP addresses, ports, or protocols
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

23. Which command is used to create a **standard ACL** on a Cisco router?
    - A) `access-list 10 permit 192.168.1.0 0.0.0.255`
    - B) `access-list 110 permit tcp any any eq 80`
    - C) `ip access-list standard 10`
       `permit 192.168.1.0 0.0.0.255`
    - D) Both A and C

24. Which command is used to create an **extended ACL** on a Cisco router?
    - A) `access-list 110 permit tcp 192.168.1.0 0.0.0.255 any eq 80`
    - B) `access-list 10 permit 192.168.1.0 0.0.0.255`
    - C) `ip access-list extended 110`
       `permit tcp 192.168.1.0 0.0.0.255 any eq 80`
    - D) Both A and C

25. Which command is used to **apply an ACL to an interface** for inbound traffic?
    - A) `ip access-group 10 in`
    - B) `access-group 10 in`
    - C) `apply access-list 10 in`
    - D) `access-list in 10`

26. Which command is used to **verify ACL configurations** on a Cisco router?
    - A) `show access-lists`
    - B) `show ip interface`
    - C) `show running-config`
    - D) All of the above

---
---
## **🔹 5.7 Configure and Verify Layer 2 Security Features (DHCP Snooping, Dynamic ARP Inspection, Port Security)**

27. What is the purpose of **DHCP snooping**?
    - A) To **prevent rogue DHCP servers** from assigning IP addresses to clients
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

28. Which command is used to **enable DHCP snooping** on a VLAN?
    - A) `ip dhcp snooping vlan 10`
    - B) `dhcp snooping vlan 10`
    - C) `enable dhcp snooping vlan 10`
    - D) `snooping dhcp vlan 10`

29. What is the purpose of **Dynamic ARP Inspection (DAI)**?
    - A) To **prevent ARP spoofing attacks** by validating ARP packets
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

30. Which command is used to **enable Dynamic ARP Inspection** on a VLAN?
    - A) `ip arp inspection vlan 10`
    - B) `arp inspection vlan 10`
    - C) `enable arp inspection vlan 10`
    - D) `inspection arp vlan 10`

31. What is the purpose of **port security** on a Cisco switch?
    - A) To **limit the number of MAC addresses** that can be learned on a switch port
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

32. Which command is used to **enable port security** on a switch port and allow only one MAC address?
    - A) `switchport port-security`
       `switchport port-security maximum 1`
    - B) `port-security max 1`
    - C) `switchport security max 1`
    - D) `security port max 1`

33. Which command is used to **configure a switch port to learn MAC addresses dynamically** and store them in the running configuration?
    - A) `switchport port-security mac-address sticky`
    - B) `port-security sticky mac-address`
    - C) `switchport security sticky`
    - D) `sticky mac-address port-security`

34. Which command is used to **verify port security configurations** on a Cisco switch?
    - A) `show port-security`
    - B) `show switchport port-security`
    - C) `show port-security interface [interface]`
    - D) All of the above

---
---
## **🔹 5.8 Authentication, Authorization, and Accounting (AAA) Concepts**

35. What is **authentication** in network security?
    - A) **Verifying the identity** of a user or device (e.g., username/password, certificates)
    - B) Determining what a user or device is allowed to do
    - C) Tracking the actions of a user or device
    - D) Encrypting network traffic

36. What is **authorization** in network security?
    - A) **Determining what a user or device is allowed to do** (e.g., access levels, permissions)
    - B) Verifying the identity of a user or device
    - C) Tracking the actions of a user or device
    - D) Encrypting network traffic

37. What is **accounting** in network security?
    - A) **Tracking the actions** of a user or device (e.g., logging, auditing)
    - B) Verifying the identity of a user or device
    - C) Determining what a user or device is allowed to do
    - D) Encrypting network traffic

38. Which protocol is commonly used for **AAA services** in Cisco networks?
    - A) **TACACS+**
    - B) SNMP
    - C) DHCP
    - D) NTP

39. What is the difference between **TACACS+** and **RADIUS**?
    - A) **TACACS+ encrypts the entire packet**, while RADIUS only encrypts the password
    - B) TACACS+ uses UDP, while RADIUS uses TCP
    - C) TACACS+ is used for DHCP, while RADIUS is used for SNMP
    - D) There is no difference

---
---
## **🔹 5.9 Wireless Security Protocols (WPA, WPA2, WPA3)**

40. What is the purpose of **WPA (Wi-Fi Protected Access)**?
    - A) To **secure wireless networks** by encrypting data and authenticating users
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

41. What is the main difference between **WPA2** and **WPA**?
    - A) **WPA2 uses AES encryption**, while WPA uses TKIP
    - B) WPA2 uses TKIP, while WPA uses AES
    - C) WPA2 is less secure than WPA
    - D) There is no difference

42. What is the purpose of **WPA3**?
    - A) To **provide stronger security** for wireless networks, including protection against brute-force attacks
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

43. Which encryption method is used by **WPA3**?
    - A) **SAE (Simultaneous Authentication of Equals)**
    - B) TKIP
    - C) AES
    - D) WEP

---
---
## **🔹 5.10 Configure and Verify WLAN Within the GUI Using WPA2 PSK**

44. What is the first step to **create a WLAN** in a Cisco WLC GUI?
    - A) Navigate to **WLANs** and click **Create New**
    - B) Configure the SSID
    - C) Configure the security settings
    - D) Configure the QoS profiles

45. What is **WPA2 PSK**?
    - A) A **pre-shared key** authentication method for WPA2, where all users share the same password
    - B) A method for assigning IP addresses to devices
    - C) A method for routing traffic between VLANs
    - D) A method for monitoring network traffic

46. Which security setting is required to **secure a WLAN with WPA2 PSK**?
    - A) **WPA2 with AES encryption** and a **pre-shared key (PSK)**
    - B) Open authentication
    - C) WEP encryption
    - D) MAC address filtering

47. What is the purpose of **QoS profiles** in a WLAN?
    - A) To **prioritize certain types of traffic** (e.g., voice, video) over others
    - B) To assign IP addresses to devices
    - C) To route traffic between VLANs
    - D) To monitor network traffic

---
---
## **📌 Next Steps**
1. Answer all questions to the best of your ability.
2. I will **analyze your responses**, identify gaps, and **adapt the tutoring approach** dynamically.
3. We will **focus on weak areas** and skip what you already know.
4. After each subtopic, I’ll **re-assess** to ensure retention.

---
**Ready? Start answering (e.g., "1. B", "2. A"), and I’ll begin tailoring your learning path for 5.0 Security Fundamentals!**