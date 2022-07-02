// Linked List
public class LinkedListFromScratch {
    Node head;

    public void add(int data) {
        // LL is empty
        if (this.head == null) {
            this.head = new Node(data);
        } else {
            // LL is not empty
            NOde nodeToAdd = new Node(data);
            nodeToAdd.next = this.head;
            this.head = nodeToAdd;
        }
    }
    public static void main(String[] args) {
        LinkedListFromScratch myList = new LinkedListFromScratch();
        mylist.add(10);
        mylist.add(18);
        System.out.printLn(mylist.head.data);
        System.out.printLn(mylist.head.next.data);
    }
}

// Node
Class Node {
    int data:
    Node next;

    Node(int d) { this.data = d;}
}