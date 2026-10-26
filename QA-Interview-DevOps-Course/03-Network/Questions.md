
## תוכן עניינים
1. [רמה 1: יסודות רשת](#רמה-1-יסודות-רשת)
2. [רמה 2: שירותי רשת ופרוטוקולי אפליקציה](#רמה-2-שירותי-רשת-ופרוטוקולי-אפליקציה)
3. [רמה 3: כלי מערכת ופתרון תקלות](#רמה-3-כלי-מערכת-ופתרון-תקלות)
4. [רמה 4: רשתות בענן (AWS)](#רמה-4-רשתות-בענן-aws)
5. [רמה 5: רשתות בקונטיינרים ותזמור (Docker & Kubernetes)](#רמה-5-רשתות-בקונטיינרים-ותזמור-docker--kubernetes)

---

## רמה 1: יסודות רשת
1. מה ההבדל העיקרי בין Layer 3 (Network) ל-Layer 4 (Transport) במודל ה-OSI?
2. מה ההבדל בין TCP ל-UDP, ומתי תשתמש בכל אחד מהם?
3. מה המשמעות של קידומת `/24` בכתובת IP?
4. מה ההבדל בין כתובת IP ציבורית (Public) לפרטית (Private)?
5. מהו Default Gateway?
6. מהו פרוטוקול ARP וכיצד הוא מקשר בין Layer 2 ל-Layer 3?
7. תאר את תהליך ה-TCP 3-Way Handshake.
8. מהם Ephemeral Ports?
9. מהו MTU (Maximum Transmission Unit) ומה קורה אם חבילת מידע גדולה ממנו?
10. מה המטרה של Subnet Mask?
11. מה ההבדל בין כתובת MAC לכתובת IP?
12. מה ההבדל בין Switch ל-Router?
13. מהו פרוטוקול ICMP והאם הוא משתמש ב-Ports?
14. הסבר את תהליך ה-DHCP (DORA).
15. מה החשיבות של כתובת ה-Loopback (localhost)?

## רמה 2: שירותי רשת ופרוטוקולי אפליקציה
1. ב-DNS, מה ההבדל בין רשומת A לרשומת CNAME?
2. מה ההבדל בין שגיאות HTTP מסוג 4xx ל-5xx?
3. מדוע SSL/TLS נחוץ אם הסיסמאות בבסיס הנתונים כבר מוצפנות?
4. מהו CORS ומדוע נתקלים בו?
5. מה ההבדל בין בקשת GET לבקשת POST?
6. מה ההבדל בין Reverse Proxy ל-Forward Proxy?
7. האם HTTP הוא Stateful או Stateless? כיצד אתרים "זוכרים" אותנו?
8. הסבר את תהליך ה-DNS Resolution.
9. מה ההבדל בין WebSocket לבקשות HTTP רגילות?
10. מה ההבדל בין קוד סטטוס 301 ל-302?
11. כיצד עובד אימות מבוסס SSH Key-Pair?
12. מה ההבדל בין VPN ל-Proxy?
13. מהו SNI ב-TLS ומדוע הוא קריטי?
14. מהו CDN וכיצד הוא משפר ביצועים?
15. מהם היתרונות של HTTP/2 על פני HTTP/1.1?

## רמה 3: כלי מערכת ופתרון תקלות
1. כיצד עובדת פקודת `traceroute`?
2. איך בודקים אם שרת מרוחק מאזין בפורט 3306?
3. איך בודקים ב-Linux איזה שירות מאזין בפורט 80?
4. איך בודקים רק את ה-HTTP Headers בעזרת `curl`?
5. איך בודקים לאיזה IP מתרגם דומיין דרך הטרמינל?
6. מה ההבדל בין "Connection Refused" ל-"Connection Timeout"?
7. מה ההבדל בין הקבצים `/etc/hosts` ו-`/etc/resolv.conf`?
8. איך תופסים תעבורת רשת בפורט 80 בעזרת `tcpdump`?
9. מהם `iptables` ב-Linux?
10. באילו פקודות מחבילת `iproute2` משתמשים היום במקום `ifconfig`?
11. ping מצליח אך SSH נכשל ב-Timeout – מה הבעיה?
12. איך מודדים זמן תגובה של שרת באמצעות `curl`?
13. מה עושה ההגדרה `net.ipv4.ip_forward=1` ומדוע היא קריטית?
14. מה תפקידו של `/etc/nsswitch.conf`?
15. איך מוצאים שרתי דואר (MX) של דומיין דרך הטרמינל?

## רמה 4: רשתות בענן (AWS)
1. מה ההבדל הארכיטקטוני בין Public Subnet ל-Private Subnet?
2. איך מאפשרים לשרת ב-Private Subnet להוריד עדכונים מהאינטרנט?
3. מה ההבדל בין Security Group ל-Network ACL?
4. מתי תבחר ב-ALB על פני NLB?
5. מה המשמעות של `0.0.0.0/0` בחוקי Firewall?
6. איך ניגשים לשירותי AWS (כמו S3) ללא NAT Gateway?
7. מה ההבדל בין VPC Peering ל-Transit Gateway?
8. מה ההבדל בין Latency Routing ל-Weighted Routing ב-Route 53?
9. מה ההבדל בין Public IP אוטומטי ל-Elastic IP?
10. מה תפקידו של Internet Gateway (IGW)?
11. מהו Bastion Host והיכן הוא ממוקם?
12. מה ההבדל בין רשומת CNAME לרשומת ALIAS ב-Route 53?
13. מה המטרה של Health Checks ב-Load Balancer?
14. מה ההבדל בין WAF ל-Security Group?
15. מה משמעות הסיומת `/32` ב-CIDR?

## רמה 5: רשתות בקונטיינרים ותזמור (Docker & Kubernetes)
1. מה עושה ה-flag `-p` ב-`docker run`?
2. מה ההבדל בין `ClusterIP` ל-`NodePort` ב-Kubernetes?
3. מדוע להשתמש ב-Ingress במקום ב-LoadBalancer לכל שירות?
4. איך קונטיינרים באותו Host צריכים לתקשר ביניהם?
5. מה תפקידו של `kube-proxy`?
6. איך עובד Service Discovery בעזרת CoreDNS?
7. מהו Headless Service ומדוע הוא נחוץ ל-StatefulSets?
8. איך מיישמים Network Policies ב-Kubernetes?
9. מהו CNI ב-Kubernetes?
10. מדוע נהוג להוציא הגדרות Ingress ל-`values.yaml` ב-Helm?
11. מה המשמעות של הרצת קונטיינר עם `--network host`?
12. מדוע שינוי IP של Pod מחייב שימוש ב-Services?
13. איך שירות מסוג `LoadBalancer` מקבל IP חיצוני בפועל?
14. מהן מדיניות "Egress" ב-Kubernetes?
15. מהו Service Mesh ואילו בעיות הוא פותר?