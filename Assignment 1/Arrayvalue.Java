//  A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Random;

public class ChangeArray {
    public static void main(String[] args) {
        int[] values = {1,2,3,4,5,6,7};
        changeArray(values);
        System.out.print(" Changed array list : ");
        for (int num: values){
            System.out.print(num + " ");
        }
    }

    public static void changeArray(int[] values) {
        Random rand = new Random();
        for(int i = values.length - 1 ; i>0; i--){
            int j = rand.nextInt(i + 1);
            int temp = values[i];
            values[i] = values[j];
            values[j] = temp;
        }
    }
}