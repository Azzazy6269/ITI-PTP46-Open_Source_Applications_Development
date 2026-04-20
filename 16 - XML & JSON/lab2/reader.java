import java.io.File;
import java.io.FileReader;
import jakarta.json.*;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonNumber;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import jakarta.json.JsonString;


public class reader{
    public static void main (String[]args){
        File file = new File("/book.json");
        JsonReader reader = Json.createReader(new FileReader(file));
        JsonObject jsonObject = reader.readObject();

        JsonString bookNameJsonString = jsonObject.getJsonString("bookName");
        JsonNumber yearJsonNumber = jsonObject.getJsonNumber("Date");

        System.out.println(bookNameJsonString);
        System.out.println(yearJsonNumber);
    }
}