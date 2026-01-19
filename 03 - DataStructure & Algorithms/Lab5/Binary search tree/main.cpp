#include <iostream>

using namespace std;

class BST
{
public:
    class Node{
        public:
        int val;
        Node* right;
        Node* left;
        Node(int _val){
            val =_val;
            right = nullptr;
            left = nullptr;
        }
        Node(){
            right = nullptr;
            left = nullptr;
        }
    };
    Node* root =nullptr;
    void Insert(int _val){
        Node * newNode =new Node(_val);
        if(root == nullptr){
            root = newNode;
        }else{
            Node * temp = root;
            while(true){
                if(newNode->val > temp->val){
                    if(temp->right == nullptr){
                        temp->right = newNode;
                        break;
                    }else{
                        temp = temp->right;
                    }
                }else{
                    if(temp->left == nullptr){
                        temp->left = newNode;
                        break;
                    }else{
                        temp = temp->left;
                    }
                }
            }
        }
    }

    Node* Search(int _val){
        Node * temp = root;
        while(true){
            if(temp == nullptr)
                return nullptr;
            if(temp->val == _val)
                return temp;
            if(temp->val < _val){
                temp = temp->right;
            }else{
                temp = temp->left;
            }

        }
    }

    void deleteNode(int _val){
         Node * parent = nullptr;
         Node * temp = root;
        while(true){
            if(temp == nullptr)
                return ;
            if(temp->val == _val)
                break;
            if(temp->val < _val){
                parent = temp;
                temp = temp->right;
            }else{
                parent = temp;
                temp = temp->left;
            }

        }
        if(temp->left == nullptr &&temp->right == nullptr){
            if(temp == root){
                root = nullptr;
            }else if(parent->left == temp){
                parent->left = nullptr;
            }else{
                parent->right = nullptr;
            }
            delete temp;
        }else if(temp->left == nullptr){
            if(temp == root){
                root = temp->right;
            }
            else if(parent->val > temp->val){
                parent->left = temp->right;
            }else{
                parent->right = temp->right;
            }
            delete temp;
        }else if(temp->right == nullptr){
            if(root == temp){
                root = temp->left;
            }
            else if(parent->val > temp->val){
                parent->left = temp->left;
            }else{
                parent->right = temp->left;
            }
            delete temp;
        }else{

                Node * parentSuccessor = temp;
            Node* successor = parentSuccessor->right;
            while(successor->left != nullptr){
                parentSuccessor = successor;
                successor = successor->left;
            }
            temp->val = successor->val;
            if(parentSuccessor->left == successor){
                if(successor->right ==nullptr){
                    parentSuccessor->left = nullptr;
                }else{
                    parentSuccessor->left = successor->right;
                }


            }else{
                if(successor->right ==nullptr){
                    parentSuccessor->right = nullptr;
                }else{
                    parentSuccessor->right = successor->right;
                }

            }

            delete successor;
        }
    }

    void inOrder(Node * node){
        if(node == nullptr)
            return;
        inOrder(node->left);
        cout << node->val<<endl;
        inOrder(node->right);
    }
    void PreOrder(Node * node){
        if(node == nullptr)
            return;
        cout << node->val<<endl;
        PreOrder(node->left);
        PreOrder(node->right);
    }
    void postOrder(Node * node){
        if(node == nullptr)
            return;
        postOrder(node->left);
        postOrder(node->right);
        cout << node->val<<endl;
    }
};

int main()
{
    BST tree;

    cout << "===== INSERT =====\n";
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int v : values)
        tree.Insert(v);

    cout << "\nInOrder (Sorted):\n";
    tree.inOrder(tree.root);

    cout << "\nPreOrder:\n";
    tree.PreOrder(tree.root);

    cout << "\nPostOrder:\n";
    tree.postOrder(tree.root);


    cout << "\n===== SEARCH =====\n";
    cout << "Search 40: "
         << (tree.Search(40) ? "Found" : "Not Found") << endl;

    cout << "Search 100: "
         << (tree.Search(100) ? "Found" : "Not Found") << endl;


    cout << "\n===== DELETE LEAF =====\n";
    cout << "Delete 20\n";
    tree.deleteNode(20);
    tree.inOrder(tree.root);


    cout << "\n===== DELETE ONE CHILD =====\n";
    cout << "Delete 30\n";
    tree.deleteNode(30);
    tree.inOrder(tree.root);


    cout << "\n===== DELETE TWO CHILDREN =====\n";
    cout << "Delete 70\n";
    tree.deleteNode(70);
    tree.inOrder(tree.root);


    cout << "\n===== DELETE ROOT =====\n";
    cout << "Delete 50\n";
    tree.deleteNode(50);
    tree.inOrder(tree.root);

    return 0;
}

