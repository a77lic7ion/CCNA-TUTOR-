---
# **CCNA 3.0 IP Connectivity: Multiple Choice Questionnaire**
*Aligned with Cisco CCNA 200-301 v1.1 Syllabus – For Shaun Gordon*

---
---
## **📌 Instructions**
Answer each question by selecting **A, B, C, or D**. These questions are **exam-type** and cover all subtopics of **3.0 IP Connectivity** as per the official CCNA 200-301 v1.1 syllabus.

---

---
## **🔹 3.1 Routing Table Components (Protocol Code, Prefix, Network Mask, Next Hop, Admin Distance, Metric, Gateway of Last Resort)**

1. What does the **routing protocol code** in a routing table indicate?
   - A) The administrative distance of the route
   - B) The **source of the route** (e.g., connected, static, OSPF, EIGRP)
   - C) The metric of the route
   - D) The next hop for the route

2. What does the **prefix** in a routing table represent?
   - A) The subnet mask
   - B) The **network address** (e.g., 192.168.1.0)
   - C) The next hop
   - D) The administrative distance

3. What does the **network mask** in a routing table define?
   - A) The range of IP addresses in the network
   - B) The **subnet mask** associated with the route
   - C) The next hop
   - D) The metric

4. What is the **next hop** in a routing table?
   - A) The IP address of the **next device** to which the packet should be forwarded
   - B) The destination network
   - C) The source of the route
   - D) The administrative distance

5. What is the **administrative distance (AD)** in a routing table?
   - A) The **trustworthiness** of a routing protocol (lower AD = more trusted)
   - B) The metric of the route
   - C) The next hop
   - D) The subnet mask

6. What is the **metric** in a routing table?
   - A) The **cost** or distance to the destination network
   - B) The administrative distance
   - C) The next hop
   - D) The subnet mask

7. What is the **gateway of last resort** in a routing table?
   - A) The **default route** (e.g., 0.0.0.0/0)
   - B) The next hop for all static routes
   - C) The next hop for all connected routes
   - D) The next hop for all OSPF routes

8. Which command is used to **view the routing table** on a Cisco router?
   - A) `show ip route`
   - B) `show route`
   - C) `show ip interface brief`
   - D) `show running-config`

---
---
## **🔹 3.2 Router Forwarding Decisions (Longest Prefix Match, Admin Distance, Routing Protocol Metric)**

9. What is **longest prefix match** in routing?
   - A) The router selects the route with the **most specific subnet mask** (longest prefix)
   - B) The router selects the route with the shortest subnet mask
   - C) The router selects the route with the lowest metric
   - D) The router selects the route with the lowest administrative distance

10. A router has two routes to the same destination network: one with a prefix length of **/24** and another with **/26**. Which route will the router use for forwarding?
    - A) The **/26** route (longest prefix match)
    - B) The /24 route
    - C) Both routes equally
    - D) The route with the lowest metric

11. A router has two routes to the same destination network: one learned via **OSPF (AD = 110)** and another via **EIGRP (AD = 90)**. Which route will the router install in its routing table?
    - A) The **EIGRP** route (lower AD)
    - B) The OSPF route
    - C) Both routes equally
    - D) The route with the lowest metric

12. What happens if a router has two routes to the same destination network with the **same administrative distance**?
    - A) The router uses the route with the **lowest metric**
    - B) The router uses the route with the highest metric
    - C) The router load-balances between the routes
    - D) The router uses the first route learned

---
---
## **🔹 3.3 IPv4 and IPv6 Static Routing (Default, Network, Host, Floating Static)**

13. What is the purpose of a **default route**?
    - A) To provide a **route for all traffic** that does not match any other route in the routing table
    - B) To provide a route for traffic to a specific network
    - C) To provide a route for traffic to a specific host
    - D) To provide a backup route for a specific network

14. Which command is used to configure a **default route** on a Cisco router?
    - A) `ip route 0.0.0.0 0.0.0.0 [next-hop]`
    - B) `ip route 192.168.1.0 255.255.255.0 [next-hop]`
    - C) `ip route 10.0.0.1 255.255.255.255 [next-hop]`
    - D) `ip route 192.168.1.0 255.255.0.0 [next-hop]`

15. What is a **network route** in static routing?
    - A) A route to a **specific network** (e.g., 192.168.1.0/24)
    - B) A route to a specific host
    - C) A route for all traffic
    - D) A backup route for a specific network

16. What is a **host route** in static routing?
    - A) A route to a **specific host** (e.g., 10.0.0.1/32)
    - B) A route to a specific network
    - C) A route for all traffic
    - D) A backup route for a specific network

17. What is a **floating static route**?
    - A) A **backup static route** with a higher administrative distance than the primary route
    - B) A static route with a lower metric than the primary route
    - C) A static route that is always active
    - D) A static route that is only active when the primary route fails

18. Which command is used to configure a **floating static route** for network 192.168.1.0/24 with a next hop of 10.0.0.2 and an AD of 200?
    - A) `ip route 192.168.1.0 255.255.255.0 10.0.0.2 200`
    - B) `ip route 192.168.1.0 255.255.255.0 10.0.0.2`
    - C) `ip route 0.0.0.0 0.0.0.0 10.0.0.2 200`
    - D) `ip route 192.168.1.0 255.255.0.0 10.0.0.2 200`

19. Which command is used to configure an **IPv6 static route** for network 2001:DB8::/64 with a next hop of 2001:DB8::1?
    - A) `ipv6 route 2001:DB8::/64 2001:DB8::1`
    - B) `ip route 2001:DB8::/64 2001:DB8::1`
    - C) `ipv6 route 2001:DB8::1/64 2001:DB8::`
    - D) `ip route 2001:DB8::/64 2001:DB8::`

---
---
## **🔹 3.4 Single Area OSPFv2 (Neighbor Adjacencies, Point-to-Point, Broadcast/DR/BDR, Router ID)**

20. What is the purpose of **OSPF (Open Shortest Path First)**?
    - A) To dynamically exchange routing information within an **Autonomous System (AS)**
    - B) To statically configure routes
    - C) To encrypt routing updates
    - D) To assign IP addresses to devices

21. What is a **neighbor adjacency** in OSPF?
    - A) A **logical connection** between two OSPF routers that exchange routing information
    - B) A physical connection between two routers
    - C) A connection between a router and a switch
    - D) A connection between a router and a host

22. In OSPF, what is the role of the **Designated Router (DR)** in a **multi-access network** (e.g., Ethernet)?
    - A) To **represent the multi-access network** in the OSPF database and reduce the number of adjacencies
    - B) To route traffic between VLANs
    - C) To encrypt traffic between routers
    - D) To assign IP addresses to devices

23. In OSPF, what is the role of the **Backup Designated Router (BDR)**?
    - A) To take over the **DR’s role** if the DR fails
    - B) To route traffic between VLANs
    - C) To encrypt traffic between routers
    - D) To assign IP addresses to devices

24. How is the **Router ID** selected in OSPF?
    - A) The **highest loopback IP address**, or if none, the highest active physical interface IP address
    - B) The lowest loopback IP address
    - C) The highest physical interface IP address
    - D) The lowest physical interface IP address

25. Which command is used to **verify OSPF neighbor adjacencies**?
    - A) `show ip ospf neighbor`
    - B) `show ospf neighbor`
    - C) `show ip ospf`
    - D) `show ospf adjacency`

26. Which command is used to **configure OSPF on a router** for network 192.168.1.0/24 in area 0?
    - A) `router ospf 1`
       `network 192.168.1.0 0.0.0.255 area 0`
    - B) `router ospf 0`
       `network 192.168.1.0 255.255.255.0 area 0`
    - C) `router ospf 1`
       `network 192.168.1.0 255.255.255.0 area 0`
    - D) `router ospf 0`
       `network 192.168.1.0 0.0.0.255 area 0`

27. In OSPF, what is a **point-to-point network**?
    - A) A network with **only two routers** connected directly (e.g., serial link)
    - B) A network with multiple routers connected via a switch
    - C) A network with multiple routers connected via a hub
    - D) A network with only one router

28. In OSPF, what is a **broadcast network**?
    - A) A network with **multiple routers** connected via a shared medium (e.g., Ethernet)
    - B) A network with only two routers connected directly
    - C) A network with only one router
    - D) A network with multiple routers connected via a hub

---
---
## **🔹 3.5 First Hop Redundancy Protocols (Purpose, Functions, Concepts)**

29. What is the purpose of **First Hop Redundancy Protocols (FHRPs)**?
    - A) To provide **redundancy for the default gateway** in a network
    - B) To route traffic between VLANs
    - C) To encrypt traffic between routers
    - D) To assign IP addresses to devices

30. Which of the following is a **First Hop Redundancy Protocol (FHRP)**?
    - A) HSRP
    - B) VRRP
    - C) GLBP
    - D) All of the above

31. What is the role of the **active router** in HSRP?
    - A) To **forward traffic** for the virtual IP address
    - B) To monitor the standby router
    - C) To encrypt traffic
    - D) To assign IP addresses to devices

32. What is the role of the **standby router** in HSRP?
    - A) To **take over** if the active router fails
    - B) To forward traffic for the virtual IP address
    - C) To encrypt traffic
    - D) To assign IP addresses to devices

33. What is the purpose of **GLBP (Gateway Load Balancing Protocol)**?
    - A) To **load balance traffic** across multiple routers using a single virtual IP address
    - B) To provide redundancy for the default gateway
    - C) To encrypt traffic between routers
    - D) To assign IP addresses to devices

---
---
## **📌 Next Steps**
1. Answer all questions to the best of your ability.
2. I will **analyze your responses**, identify gaps, and **adapt the tutoring approach** dynamically.
3. We will **focus on weak areas** and skip what you already know.
4. After each subtopic, I’ll **re-assess** to ensure retention.

---
**Ready? Start answering (e.g., "1. B", "2. A"), and I’ll begin tailoring your learning path for 3.0 IP Connectivity!**