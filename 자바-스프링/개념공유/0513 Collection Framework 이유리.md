# Collection Framework



`Java Collection Framework(JCF)`

Java에서 데이터를 저장하는 자료구조들을 한 곳에 모아 편리하게 관리하고 사용할 수 있는 환경을 제공하는 것.

- 정적 자료구조 (Static Structure)

  - 고정된 크기의 자료구조

  - 배열

  - 선언 시 크기를 명시하면 바꿀 수 없음

    

- 동적 자료구조(Dynamic Strucutre)

  - 요소의 개수에 따라 자료구조의 크기가 동적으로 증가 or 감소
  - 리스트, 스택, 큐 등



---



1. List

   - 순서가 있는 데이터의 집합.
   
   - 중복 가능

   - 인덱스로 객체를 검색, 삭제 가능

     
   
   1. Arrary List
   
      - 객체를 추가하면 객체가 인덱스로 관리된다.
      - 자바의 배열과 달리 크기 변경ㅇ
   
      ```java
      List<String> lst = new ArraryList<String>();
      
      //저장 .add()
      lst.add(1);
      lst.add(2);
      lst.add(3);
      lst.add(1, 4);  			// .add(인덱스, 값)
      
      //조회 .get(인덱스)
      lst.get(i);		// i번째 인덱스 조회
      
      //출력
      System.out.println(lst)	// [1, 4, 2, 3]
      
      //삭제 .remove(), clear()
      lst.remove(i);		// i번째 인덱스 데이터 삭제
      lst.clear()		// 저장된 모든 객체를 삭제
      
      ```

      

   2. Linked List

      - 양방향 포인터 구조로 인접하는 참조를 링크해서 체인처럼 관리.

      - 특정 인덱스에 객체를 삽입, 제거 -> 앞 뒤 링크만 변경, 나머지 링크 변경x 
   
        => 삽입, 삭제 많을수록 효율적
   
      - 스택, 큐 구현하는데 자주 사용
      
        

---



2. Set

   - `순서X 중복 X`

   - 중복된 요소를 걸러내기 위해서,

     - 객체를 저장하기 전, 객체의 hashCode()를 호출해서 해시 코드를 가져온다.
     - 저장되어 있는 객체들의 해시코드와 비교한 뒤, 같은 해ㅅ 코드가 있으면 다시 equals() 메소드로 두 객체를 비교한다.
     - 이 때, true가 나오면 동일한 객체로 판단하고 중복 저장을 하지 않는다.

     ```java
     Set<String> hset = new HashSet();
     
     hset.add(new String("구미"));
     hset.add("서울")
     hset.add("대전")
     hset.add("구미")
         
     System.out.println(hset.size());	// 크기3
     
     //삭제 
     hset.remove("대전")		// 객체 삭제
     hset.clear();			// 전체 삭제
     ```
     
     

---



3. Map

   - key와 value로 구성.

   - key 중복x,  value 중복o

   - 똑같은 key 중복 저장 -> 먼저 저장된 값은 없어지고 새로운 값으로 대체.

   - key로 데이터에 접근

     ```java
     Map<String, Integer> map = new HashMap<>();
     
     // 데이터 추가 .put(key, value)
     map.put("1월", 31일);
     map.put("2월", 28일);
     map.put("3월", 17일);
     map.put("3월", 31일);				// key 중복 -> 기존 value 수정
     
     System.out.println(map);		// {1월=31일, 2월=28일, 3월=31일}
     
     
     //크기확인 .size()
     System.out.println(map.size());
     
     
     //삭제
     map.remove("2월");
     map.clear();
     
     ```


---



정렬

1. Comparable

   - 정렬 수행 시 기본적으로 적용되는 정렬 기준이 되는 메서드를 정의하는 인터페이스

   - Java에서 제공되는 정렬이 가능한 클래스들은 모두 Comparable 인터페이스를 구현하고 있으며, 정렬 시 이에 맞게 정렬이 수행된다.

     ```java
     public interface Comparable<T> {
     	public int comparaeTo(This object);
     }
     ```

     	현재 객체 < 파라미터로 넘어온 객체: 음수 리턴 -> 자리 바꿈
     	현재 객체 == 파라미터로 넘어온 객체: 0 리턴 -> 동일 위치
     	현재 객체 > 파라미터로 넘어온 객체: 양수 리턴 -> 자리 유지

2. Comparator

   - 정렬 가능한 클래스 (Comparable 인터페이스를 구현한 클래스)들의 기본 정렬 기준과 다르게 정렬하고 싶을 때 사용하는 인터페이스
   - 기본적인 정렬 방법인 오름차순 정렬을 내림차순으로 정렬할 때 많이 사용한다.
