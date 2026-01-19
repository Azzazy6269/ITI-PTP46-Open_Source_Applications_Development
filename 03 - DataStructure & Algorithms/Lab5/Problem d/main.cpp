//import sys
//import heapq
//
//sys.setrecursionlimit(10**7)
//input = sys.stdin.readline
//
//
//def inp():
//    return input().strip()
//
//
//def ints():
//    return map(int, input().split())
//
//
//def ilist():
//    return list(map(int, input().split()))
//
//
//def print_arr(arr):
//    print(*arr)
//
//
//class node:
//    next = None
//    val = None
//
//    def __init__(self, _val):
//        self.val = _val
//
//
//def main():
//    cases = int(inp())
//    for _ in range(cases):
//        circle, friends = ilist()
//        root = node(1)
//        n = root
//        prev = root
//        for i in range(1, circle):
//            n = node(i + 1)
//            if i != 0:
//                prev.next = n
//            prev = n
//        n.next = root
//        n = root
//        l = []
//        for i in range(circle):
//            # print(f"{n.val} => {n.next.val}")
//            l.append(str(n.next.next.val))
//            n.next.next = n.next.next.next
//            n = n.next
//        print(" ".join(l[-friends:]))
//
//
//main()

#include<iostream>
using namespace std;

//class node:
//    next = None
//    val = None
//
//    def __init__(self, _val):
//        self.val = _val
//

class node{
public:
    node* next;
    int val;
    node(int _val)
    {
        val=_val;
    }
    //def main():
//    cases = int(inp())
//    for _ in range(cases):
//        circle, friends = ilist()
//        root = node(1)
//        n = root
//        prev = root
//        for i in range(1, circle):
//            n = node(i + 1)
//            if i != 0:
//                prev.next = n
//            prev = n
//        n.next = root
//        n = root
//        l = []
//        for i in range(circle):
//            # print(f"{n.val} => {n.next.val}")
//            l.append(str(n.next.next.val))
//            n.next.next = n.next.next.next
//            n = n.next
//        print(" ".join(l[-friends:]))
//
};

int main()
{
    int test_cases=0;
    cin>>test_cases;
    int num_of_nodes;
    int last_two_items;
    while(test_cases--)
    {
        cin>>num_of_nodes>>last_two_items;
    }
}
