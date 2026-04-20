/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject1;
import java.io.File;
import java.io.FileReader;
import java.io.FileNotFoundException;
import jakarta.json.*;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonNumber;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import jakarta.json.JsonString;

import java.io.FileWriter;



public class Mavenproject1 {

    public static void main(String[] args) {
        try{
            JsonReader();
            JsonWriter();
        }catch(Exception e){
            
        }
        
    }
    public static void JsonReader() throws Exception{
        File file = new File("E:\\ITI - PTP46\\XML & JSON\\mavenproject1\\src\\main\\java\\com\\mycompany\\mavenproject1/book.json");
        JsonReader reader = Json.createReader(new FileReader(file));
        JsonObject jsonObject = reader.readObject();

        JsonString bookNameJsonString = jsonObject.getJsonString("bookName");
        JsonNumber yearJsonNumber = jsonObject.getJsonNumber("Date");

        System.out.println(bookNameJsonString);
        System.out.println(yearJsonNumber);
    }
    
    public static void JsonWriter() throws Exception{
        JsonWriter writer = Json.createWriter(new FileWriter("E:\\ITI - PTP46\\XML & JSON\\mavenproject1\\src\\main\\java\\com\\mycompany\\mavenproject1/movie.json"));
        JsonObject jsonObject = Json
            .createObjectBuilder()
                .add("title", "The Matrix")
                .add("year", 1999)
                .add("cast", Json.createArrayBuilder()
                    .add("Keanu Reeves")
                    .add("Laurence Fishburne")
                    .add("Carrie-Anne Moss")
                )
                .build();
        writer.write(jsonObject);
        writer.close();
    }
}

