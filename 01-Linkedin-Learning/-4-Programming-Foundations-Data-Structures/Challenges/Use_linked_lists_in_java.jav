import java.util.LinkedList;

public class MyClass {
    public static void main(String args[]) {
        LinkedList travelBucketList = new LinkedList();

        // Add Itams
        travelBucketList.add("Santorini, Greece");
        travelBucketList.addFirst("Barcelona, Spain");
        travelBucketList.addLast("Tokyo, Japan");
        travelBucketList.add(2, "Galapagos Islands, Ecuador");
        System.out.printLn(travelBucketList);

        // Access
        System.out.printLn(travelBucketList.get(2));
        System.out.printLn(travelBucketList.getFirst());

        System.out.printLn(travelBucketList.contains("Barcelona, Spain"));

        // Remove Items
        travelBucketList.removeFirst();
        travelBucketList.removeLast();
        System.out.printLn(travelBucketList);

        travelBucketList.removeFirst("Santorini, Greece");
        travelBucketList.remove(0);
        System.out.printLn(travelBucketList);
    }
}
