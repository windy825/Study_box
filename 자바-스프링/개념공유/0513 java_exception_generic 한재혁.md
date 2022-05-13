# 예외처리와 Generic

### 예외처리

- 예외란? Error의 일종이며 프로그램이 수행시 또는 컴파일시에 불능상태를 야기함
- 예외와 에러의 공통점: 발생하면 바로 프로그램이 종료된다
- 에러와의 다른 점 => 예외처리? 시스템 및 프로그램을 정상적인 실행상태로 유지하도록 함



#### 예외처리의 종류

- 일반 예외(`Checked Exception`): 개발자가 반드시 예외 처리를 직접 진행해야 함
- 실행 예외(`Unchecked Exception, RuntimeException`): 개발자가 직접 예외 처리 하지 않아도 됨

=> 이 두 가지 예외를 처리하기 위한 최상위 부모 클래스 `java.lang.Exception`(모든 Exception의 조상)

![img](https://blog.kakaocdn.net/dn/BiChk/btqAVIydR4K/kfmFOLQqeVpEff5sVmNJbK/img.png)



#### 예외 처리 코드 및 실행 순서(Try - Catch - Finally)

- 갑작스러운 예외 Exception 발생으로 인해 시스템 및 프로그램이 불능상태에 빠지지 않고 시스템 및 프로그램이 정상실행 되도록 유지

- Try: 실제 코드가 들어가는 곳으로써 예외 Exception이 발생할 가능성이 있는 코드

- Catch: Try 블록에서 예외가 발생하면 코드 실행 순서가 Catch 쪽으로 오게 됨. 즉 예외에 대한 후처리 코드

- Finally: Try 블록에서의 예외 발생 유무와 상관 없이 무조건 수행되는 코드(선택사항)

- 코드 실행 순서
  
  ```java
  try{
  ///예외가 발생할 가능성이 있는 코드
  .... ......... ;
  .............. .. ; << 1. 여기서 예외가 발생했을 때
  .............. .... ; << 2. 예외 발생한 곳 아래는 실행하지 않고,
  }
  catch(예외클래스 e1) {
     예외 처리; << 3. catch문에서 예외처리를 한다.
  }
  // JAVA 7 부터 지원, e2 또는 e3가 발생하면 해당 catch 블록에서 처리
  catch(예외클래스 e2 | 예외클래스 e3) {
     예외 처리;
  }
  finally {
  ///무슨 일이 있든 항상 실행
  }
  ```

=> 파이썬? try(Try) - except(Catch) - else(예외 발생하지 않은 경우) - finally(Finally)



- 대표적인 예외 처리

  - **NullPointerException(java.lang.NullPointerException)**

    - **실제 참조할 대상이 null인데 참조하려고 할때 발생하는 예외**

    - ```java
      public class RuntimeExceptionExample {
          public static void main(String[] args) {
                  // 실행 예외
                  String[] array = null;
      
                  for (int i=0; i < array.length; i++) {
                      System.out.println(array[i]);
                  }
             	System.out.println("프로그램이 죽지 않고 수행될 것인가");
          }
      }
      // Exception in thread "main" java.lang.NullPointerException at RuntimeExceptionExample.main(RuntimeExceptionExample.java:7)
      
      // 코드가 수행이 가능한 이유는 컴파일 할 때 컴파일러가 따로 예외 처리 코드를 사용하라고 강제하지 않았고 개발자가 null 참조를 수행한다는 것을 놓쳤기 때문에 가능했습니다. 결국..실행 예외가 발생하였고 이를 방어할 예외 처리 코드를 적용하지 않았기 때문에 println은 찍히지 않았다. 프로그램이 그전에 죽어버린 것!
      ```

    - 실행 예외 방어

      ```java
      public class RuntimeExceptionExample {
          public static void main(String[] args) {
              try{
                  // 실행 예외
                  String[] array = null;
      
                  for (int i=0; i < array.length; i++) {
                      System.out.println(array[i]);
                  }
              } catch (NullPointer Exception e) {
                  String message = e.getMessage();
                  System.out.println("예외 발생" + message);
              } finally {
                  System.out.println("예외 상관 없이 수행 됨")
              }
             	System.out.println("프로그램이 죽지 않고 수행될 것인가");
          }
      }
      ```

      

  - **ArrayIndexOutOfBoundsException**

    - 배열에서 인덱스 범위를 초과하여 사용할 때 발생

    - ```java
      int[] arr = new int[3];
      arr[4] = 5; // ArrayIndexOutOfBoundsException
      ```

    

  - **NumberFormatException**

    - 매개값인 문자열이 숫자로 변환될 수 있다면 숫자를 정상적으로 리턴하지만, 숫자로 변환할 수 없는 문자열이 포함되어 있으면 `java.lang.NumberFormatException`을 발생

    - ```java
      String data1 = "100";
      String data2 = "이건안돼요";
      int val1 = Integer.parseInt(data1);
      int val2 = Integer.parseInt(data2); //NumberFormatException 발생
      ```

      

  - **ClassCastException**

    - 허용되지 않는데 억지로 타입 변환을 시도할 경우 발생

    - ```java
      Animal animal = new Dog();
      Dog dog = (Dog) animal; // 문제 없음
      
      RemotControl ex1 = new Television();
      Television ex2 = (Television) ex1; // 문제 없음
      
      Animal animal = new Animal();
      Dog dog = (Dog) animal; // ClassCastException 발생
      ```



#### 예외 떠넘기기 - `throws`

- 메소드 내부에서 예외가 발생할 수 있는 코드를 작성할 때, `try-catch` 블록으로 예외처리하지 않고 메소드를 호출한 곳으로 예외처리를 떠넘기는 방법
- 메소드 선언부 마지막에 `throw`를 사용해서 예외를 넘겨버리며, 예외별로 throw 뒤에 나열할 수도 있고, Exception만 작성해 모든 예외를 떠넘길 수도 있다

- 예시

  ```java
  public void method1(){
   try {
     method2(); // throws가 붙은 method2는 반드시 이렇게 try문 안에서 호출되어야 함.
     // method2가 떠넘긴 예외를 아래 catch문을 통해 처리해 주고 있다.
  }
   catch (ClassNotFoundException e1) {
    System.out.println("클래스가 존재하지 않음.");
  }
  
  public void method2() throws ClassNotFoundException {
   Class clazz = Class.forName("java.lang.String22");
  }
  ```

  

### 정리

- 슈도코드 예시

  ```
  상품발송() {
      try {
          포장();
          영수증발행();
          발송();
      }catch(예외) {
          모두취소();  // 하나라도 실패하면 모두 취소한다.
      }
  }
  
  포장() throws 예외 {
     ...
  }
  
  영수증발행() throws 예외 {
     ...
  }
  
  발송() throws 예외 {
     ...
  }
  ```

  ```
  상품발송() {
      포장();
      영수증발행();
      발송();
  }
  
  포장(){
      try {
         ...
      }catch(예외) {
         포장취소();
      }
  }
  
  영수증발행() {
      try {
         ...
      }catch(예외) {
         영수증발행취소();
      }
  }
  
  발송() {
      try {
         ...
      }catch(예외) {
         발송취소();
      }
  }
  ```

  

---

### Generic

- *Generic?* => 데이터 형식에 의존하지 않고, 하나의 값이 여러 다른 데이터 타입들을 가질 수 있도록 하는 방법

  => 클래스 내부에서 지정하는 것이 아닌 외부에서 사용자에 의해 지정되는 것

  => 특정 타입을 미리 지정해주는 것이 아닌 필요에 의해 지정할 수 있도록 하는 일반(Generic) 타입

  

- 장점

  - 잘못된 타입이 들어올 수 있는 것을 컴파일 단계에서 방지할 수 있다

  - 클래스 외부에서 타입을 지정해주기 때문에 따로 타입을 체크하고 변환해줄 필요가 없다.

    => 관리하기 편하다

  - 비슷한 기능을 지원하는 경우 코드의 재사용성이 높아진다



### 선언

```java
class name<T1,T2, .. , Tn >

public class ClassName <T> { ... }
public Interface InterfaceName <T> { ... }
```

```java
public class ClassName <T, K> { ... }

public class Main {

	public static void main(String[] args) {
		// T는 String, K는 Integer
		ClassName<String, Integer> a = new ClassName<String, Integer>();

	}

}
```

#### 주의!

- 타입 파라미터로 명시할 수 있는 것은 참조 타입(**Reference Type**)만 가능하다. 즉 `int, double, char`와 같은 primitive type은 사용할 수 없다.

- 단 참조 타입이 올 수 있기 때문에 사용자가 정의한 클래스도 타입으로 올 수 있다

  ```java
  public class ClassName <T> { ... }
  
  
  public class Student { ... }
   
  
  public class Main {
  
  	public static void main(String[] args) {
  
  		ClassName<Student> a = new ClassName<Student>();
  
  	}
  
  }
  ```

  

### 제너릭 클래스

```java
// 제네릭 클래스

class ClassName<E> {

	private E element;	// 제네릭 타입 변수
    
	void set(E element) {	// 제네릭 파라미터 메소드
		this.element = element;
	}
    
	E get() {	// 제네릭 타입 반환 메소드
		return element;
	}

}

class Main {

	public static void main(String[] args) {

		ClassName<String> a = new ClassName<String>();

		ClassName<Integer> b = new ClassName<Integer>();
	
		a.set("10");

		b.set(10);

		System.out.println("a data : " + a.get());
        // a data: 10

		// 반환된 변수의 타입 출력 

		System.out.println("a E Type : " + a.get().getClass().getName());
        // a E Type : java.lang.String

		System.out.println();

		System.out.println("b data : " + b.get());
        // b data: 10

		// 반환된 변수의 타입 출력 

		System.out.println("b E Type : " + b.get().getClass().getName())
        // b E Type : java.lang.Integer

	}

}
```



### 제너릭 메서드

```java
public <T> T genericMethod(T o) {	// 제네릭 메소드
		...
}

[접근 제어자] <제네릭타입> [반환타입] [메소드명]([제네릭타입] [파라미터]) {
	// 텍스트
}
```

```java
// 제네릭 클래스

class ClassName<E> {

	private E element;	// 제네릭 타입 변수

	void set(E element) {	// 제네릭 파라미터 메소드
		this.element = element;
	}

	E get() {	// 제네릭 타입 반환 메소드 
		return element;
	}

	<T> T genericMethod(T o) {	// 제네릭 메소드
		return o;
	}

}

public class Main {

	public static void main(String[] args) {

		ClassName<String> a = new ClassName<String>();

		ClassName<Integer> b = new ClassName<Integer>();

		a.set("10");

		b.set(10);

		System.out.println("a data : " + a.get());
        // a data: 10

		// 반환된 변수의 타입 출력 

		System.out.println("a E Type : " + a.get().getClass().getName());
        // a E Type: java.lang.String

		System.out.println();

		System.out.println("b data : " + b.get());
        // b data: 10

		// 반환된 변수의 타입 출력 

		System.out.println("b E Type : " + b.get().getClass().getName());
        // b E Type: java.lang.Integer

		System.out.println();

		// 제네릭 메소드 Integer

		System.out.println(a.genericMethod(3).getClass().getName());
        // java.lang.Integer

		// 제네릭 메소드 String

		System.out.println(a.genericMethod("ABCD").getClass().getName());
        // java.lang.String

		// 제네릭 메소드 ClassName b

		System.out.println(a.genericMethod(b).getClass().getName());
        // ClassName
        // => 클래스에서 지정한 제네릭 유형과 별도로 메소드에서 독립적으로 제네릭 유형을 선언가능

	}

}
```

- 독립적으로 제네릭 유형을 선언가능? => Why? => 정적 메소드로 선언할 때 필요
