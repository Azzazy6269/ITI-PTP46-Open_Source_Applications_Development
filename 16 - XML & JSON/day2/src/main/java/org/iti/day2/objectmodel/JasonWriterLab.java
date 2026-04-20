/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.iti.day2.objectmodel;

import java.io.FileWriter;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonWriter;

/**
 *
 * @author MohsinDiab
 */
public class JasonWriterLab {
    
    public void produceJsonUsingJasonWriter() throws Exception {
        JsonWriter writer = Json.createWriter(new FileWriter("movie.json"));

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
