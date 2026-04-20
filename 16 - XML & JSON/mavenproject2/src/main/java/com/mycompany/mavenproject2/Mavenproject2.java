
package com.mycompany.mavenproject2;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import java.util.List;
import java.util.ArrayList;

public class Mavenproject2 {
    public static void main(String[] args) {
        try{
            Book book = new Book();
        book.bookName = "Book1";
        book.year = 2026;

        Jsonb jsonb = JsonbBuilder.create();
        String result = jsonb.toJson(book); 
        System.out.println(result);
        
        Book[] books =new Book[2];
        Book book2 = new Book();
        book2.bookName = "Book2";
        book2.year = 2020;
        books[0]= book;
        books[1] = book2;
        result=jsonb.toJson(books);
        System.out.println(result);
        
        List<Book> booksList=new ArrayList<>();
        booksList.add(book);
        booksList.add(book2);
        result=jsonb.toJson(booksList);
        System.out.println(result);
        
        }catch(Exception e){
            
        }
        
    }
}


