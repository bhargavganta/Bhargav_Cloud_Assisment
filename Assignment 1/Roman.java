import java.util.Hashmap;
import java.util.Map;
import java.util.Scanner;

public class RomannumbertoInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out,print("Enter a Roman number: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        int result = romannumbertoInteger(romanNumeral);
        System.out.println("Integer value: " + result);
    }

    public static int romannumbertoInteger(String s){
        Map<Character, Integer> romanMap = new Hashmap<>();
        romanMap.put('I',1);
        romanMap.put('V',5);
        romanMap.put('X',10);
        romanMap.put('L',50);
        romanMap.put('C',100);
        romanMap.put('D',500);
        romanMap.put('M',1000);

        int result = 0;
        int prevValue=0;
        for(int i=s.length() - 1;i>=0;i--){
            int value = romanMap.get(s.charAt(i));
            if(value < prevValue){
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }
        return result;
    }
}