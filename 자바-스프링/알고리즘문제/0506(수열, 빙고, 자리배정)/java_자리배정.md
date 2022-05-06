```java
import java.io.BufferedReader 
```

-> 이건 자바에서 buffer을 이용해서 읽을 수 있도록 해주는 함수입니다. sys.stdin과 같이 엔터만 경계로 인식하고 받은 데이터가 string으로 고정될 수 있도록 해주는 함수입니다. Scanner는 띄어쓰기, 엔터를 경계로 입력값을 인식 받습니다.

```java
import java.io.IOException
```

-> BufferedReader을 사용하기 위해서 사용하는 예외처리 기능입니다. 

![image-20220506193225205](C:\Users\socia\AppData\Roaming\Typora\typora-user-images\image-20220506193225205.png)

RuntimeException 클래스를 상속받는 자식 클래스들은 주로 치명적인 예외 상황을 발생시키지 않는 예외들로 구성됩니다.

따라서 try / catch 문을 사용하기보다는 프로그램을 작성하면서 예외가 발생하지 않도록 주의를 기울이는 편이 좋습니다.

```java
import java.io.InputStreamReader
```

-> system.in은 byte 단위 입력이 이루어지고, bufferedReader는 Char단위 입력이 이루어 진다.  

버퍼에 입력되있는 값들을 InputStream이 Reader을 통해서 변환하는 값입니다

```
import java.util.StringTokenizer;
```

->  엔터로 입력을 받아 왔기 때문에 str을 기준에 따라서 나누기 위한 함수



![image-20220506194521329](C:\Users\socia\AppData\Roaming\Typora\typora-user-images\image-20220506194521329.png)

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

# 
public class Main {
    // 여기서 throws IOException을 넣어줘야한다.
    public static void main(String[] args) throws IOException {
        // br로 버퍼를 읽어온것을 저장하기
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
		// st에 readLine()을 이용해서 한줄 받아오기
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        // 현재 st에는 C, R 두개가 str로 저장되어 있다.
        // 그러므로 한자씩 받아오기
        int C = Integer.parseInt(st.nextToken());
        int R = Integer.parseInt(st.nextToken());
		
        // K는 한자 밖에 없으므로 그대로 받아오기
        int K = Integer.parseInt(br.readLine());

        // 이 문제에서 대기 순번안에 못 앉을 수 있으므로
        // 그럴경우 0을 출력하기
        if (K > C * R) {
            System.out.println(0);
            return;
        }
		
        // dx, dy에 delta방식으로 이동방향 넣기(상,우,하,좌)
        int dx[] = {-1, 0, 1, 0};
        int dy[] = {0, 1, 0, -1};
		
        // 방문 check를 하기위한 arr 만들기(boolean형으로)
        boolean[][] visit = new boolean[R][C];
		
        
        // cnt -> 셀 값들, x, y는 좌측젤밑에 값, dir이동방향
        // C는 가로, R은 세로
        int cnt = 0, x = R - 1, y = 0, dir = 0;
        while (++cnt != K) {
            visit[x][y] = true;
            int nx = x + dx[dir];
            int ny = y + dy[dir];

            if (nx < 0 || ny < 0 || nx >= R || ny >= C || visit[nx][ny]) {
                dir = ++dir % 4;
                nx = x + dx[dir];
                ny = y + dy[dir];
            }

            x = nx;
            y = ny;
        }
		// 출력값은 실제 좌표 x와 y 값이기 때문에 반대로 출력하기
        System.out.println((y + 1) + " " + (R - x));
    }
}
```

