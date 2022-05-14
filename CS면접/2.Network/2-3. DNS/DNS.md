# DNS

### DNS란?

-  `www.example.com`과 같이 사람이 읽을 수 있는 이름(Domain Name)을 `192.0.2.1`과 같은 숫자 IP로 컴퓨터가 서로 통신할 수 있도록 변환해주는 시스템이자 TCP/IP 주소
  - 인터넷 DNS 시스템은 이름과 숫자 간의 매핑을 관리 => 전화번호부
- 도메인 이름과 IP주소를 대응해주는 계층 구조를 가지는 분산 DB 형태의 저장소
  - 이름에 대한 요청을 IP 주소로 변환하여 최종 사용자가 도메인 이름을 웹 브라우저에 입력할 때 해당 사용자를 어떤 서버에 연결할 것인지 제어 => 쿼리



### 구조

- 인터넷 상에서 사용되는 도메인은 전 세계적으로 고유하게 존재
- 정해진 규칙 및 체계에 따라야 하며, 임의로 변경되거나 생성될 수 없음
- 모든 도메인은 `.(dot)` 또는 `루트(root)`라 불리는 도메인 아래에 역트리 구조로 계층적으로 구성되어 있음
- 루트 도메인 => 1단계 도메인/ TLD(Top Level Domain) => SLD(Second Level Domain)
  - TLD는 다시 gTLD(일반최상위), ccTLD(국가최상위)로 구분될 수 있으며, gTLD는 Sponsored TLD와 Unsponsored TLD로 구분

![img](https://t1.daumcdn.net/cfile/tistory/997DA9405BDFB7B71E)

![도메인 계층](https://user-images.githubusercontent.com/49037411/133917384-800f25f0-6b20-424e-8dc5-675f0ec42987.png)

<br>

### DNS 서비스 유형

- 신뢰할 수 있는 DNS => 수행자
  - 개발자 퍼블릭 DNS 이름을 관리하는데 사용하는 업데이트 메커니즘을 제공하며, 이를 통해 DNS 쿼리에 응답하여 도메인 이름을 IP 주소로 변환
  - 신뢰할 수 있는 DNS는 도메인에 대해 최종 권한이 있으며 재귀적 DNS 서버에 IP 주소 정보가 담긴 답을 제공할 책임이 있음
- 재귀적 DNS => 중간자
  - 보통 클라이언트는 신뢰할 수 있는 DNS 서비스에 직접 쿼리를 수행하지 않고, 해석기 또는 재귀적 DNS 서비스라고 알려진 다른 유형의 DNS 서비스에 연결하는 경우가 일반적임
  - 일정 기간 동안 캐시된 또는 저장된 DNS reference을 가지고 있는 경우, 소스 또는 IP 정보를 제공하여 DNS 쿼리에 답을 하거나, 해당 정보를 찾기 위해 쿼리를 하나 이상 신뢰할 수 있는 DNS 서버에 저장

### DNS 동작 원리

![img](https://t1.daumcdn.net/cfile/tistory/99C16C455BDFBB2A23)

```
1. 도메인을 먼저 Local DNS 서버에 "www.naver.com" query
2. Local DNS 서버에 정보가 없다면 Root DNS 서버에 "www.naver.com" query
3. Root DNS 서버에서 "com" 도메인을 관리하는 TLD 서버 정보 전달
4. TLD Name 서버에 "www.naver.com" query
5. TLD Name 서버에서 "name.com"을 관리하는 DNS 정보 전달
6. "naver.com" 도메인을 관리하는 DNS 서버에 "www.naver.com"에 대한 주소 query
7. Local DNS 서버에게 222.122.195.6을 응답
8. Local DNS는 www.naver.com에 대한 IP 주소를 캐싱하고 IP 주소 정보 전달
```

- Local DNS Server(Recursive DNS Server)

  - 사용자가 가장 먼저 접근하는 DNS 서버. DNS 쿼리를 통해 얻은 데이터를 일정 기간 캐시로 저장해둔다.
  - 일반적으로 통신사의 ISP DNS서버를 사용

- Root Domain

  - Root Name Server(Root DNS Server)

    국제인터넷주소관리기구(ICANN)에서 직접 관리하는 서버로 인터넷상의 모든 TLD 서버 IP 주소를 저장, 전 세계 13개가 존재했으나, 현재는 통신 방식을 바꾸어 1034개까지 늘어남(멀티캐스트 => 애니캐스트)

  - Root DNS Mirror Server

    기존 루트 DNS 서버를 복사한 것으로 미러 서버가 있는 국가는 외국의 루트 서버 없이 자체적으로 인터넷 통신을 관리할 수 있음

- TLD Name Server(Top-Level-Domain DNS Server)

  - ICANN의 지사인 인터넷 할당 번호 관리기관(IANA)에서 관리하는 서버로 Authoritative Name Server의 주소를 저장해둔다.
  - Authoritavtive Name Server: 실제 도메인과 IP 주소를 매칭한 정보가 저장/변경되는 서버로써 도메인/ 호스팅 업체의 네임서버와 개인이 구축한 DNS 서버가 저장됨



### DNS Query(주로 나오는 질문)

##### 반복적 질의(Iterative Query)

![img](https://user-images.githubusercontent.com/49037411/133917371-a6ade083-67e3-40c6-bfcf-ab66da7314e5.png)

- 사용자가 Local DNS 서버에 query를 보내면 Local DNS 서버가 Root name 서버에 query를 보내 TLD 서버의 주소를 반환받고, 다시 TLD 서버에 query를 보낸다. 이를 최종 IP 주소를 받을 때까지 요청과 응답을 계속해서 Local DNS 서버가 반복하는 방법



##### 재귀적 질의(Recursive Query)

![img](https://user-images.githubusercontent.com/49037411/133917392-cd194259-7aaf-4d01-9a04-e249364b27f8.png)

- 사용자가 Local DNS 서버에 query를 보내면 Local DNS server가 Root name 서버에 query를 보내고, Root 서버는 자신의 서버에 없으면 해당 TLD 서버에 요청한다. 이렇게 재귀적으로 실제 도메인 정보를 가지고 있는 서버까지 query가 이동하여 IP 주소를 얻는 방법 => Root 서버에 큰 부담을 주는 단점

=> 실제 DNS서버는 두 가지 방식을 함께 사용하며 Local DNS 서버에는 재귀, Root와 TLD 서버에는 반복, Authoritative 서버에는 재귀/반복 두 가지 모두 사용한다



[*쿼리가 가지고 있는 내용은 여기로*](http://contents.kocw.or.kr/document/lec/2012/AnDong/ChungJoongSoo/5-2.pdf)



### 면접 질문 예시

#### DNS란?

#### Domain Name의 구조

#### Domain Name System의 과정

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

- **DNS란?**

  Domain Name System의 약자로 도메인 이름과 IP 주소를 대응해주는 분산 DB 형태의 저장소를 운영하는 저장소이자 또 다르게는 우리가 사용하는 언어로 이루어진 도메인 이름을 실제 IP주소로 변환해주거나, 그 반대의 변환을 해주는 서비스를 의미

- **Domain Name의 구조**

  ![DNS란](https://github.com/SSAFY-CS-STUDY/Tech_interview/raw/main/01.network/kmj/images/dnsServer.png)

  Root DNS server는 Top level의 주소를 알고 있고, Top level 서버는 second level의 주소, second level 서버는 sub의 주소를 알고 있습니다. 모든 DNS 서버는 루트의 주소를 알고 있고, sub(마지막 레벨) 서버가 Domain Name의 최종 ip 주소를 알려줍니다

- **Domain Name System의 과정을 설명해주세요**

  - 사용자가 컴퓨터의 운영체제가 host에 ip주소가 저장되었는지 확인합니다.
  - 없으면 Local DNS 서버에 요청하고, Local DNS도 없다면 Root 서버에게 요청합니다
  - root 서버는 "com"의 top level 서버 주소를 알려줍니다
  - 받은 주소로 사용자가 top level 서버에게 요청합니다 top level은 "example.com"의 second level 서버 주소를 알려줍니다
  - 이번엔 사용자가 second level 서버에게 요청합니다. second level은 "blog.example.com"의 sub 서버 주소를 알려줍니다
  - 사용자가 sub 서버에 요청합니다. sub 서버는 사용자에게 최종적으로 "blog.example.com"의 ip주소를 알려줍니다

---

참고:

[DNS 동작원리](https://ijbgo.tistory.com/27)

[DNS](https://github.com/hongcheol/CS-study/tree/main/Network#dns
)

[DNS에 대한 설명](https://hwan-shell.tistory.com/320)

[DNS 질문](https://github.com/SSAFY-CS-STUDY/Tech_interview/blob/main/01.network/kmj/21.01.16.md)