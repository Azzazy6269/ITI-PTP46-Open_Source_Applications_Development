/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.iti.day2.streamapi;

import jakarta.json.Json;
import jakarta.json.stream.JsonGenerator;
import java.io.FileWriter;

/**
 *
 * @author MohsinDiab
 */
public class JasonGeneratorLab {
    
    public void produceJsonInStreamingFashion() throws Exception {
        JsonGenerator generator = Json.createGenerator(new FileWriter("movie.json"));

        generator.writeStartObject()                    // {
            .write("title", "The Matrix")               //      "title": "The Matrix",
            .write("year", 1999)                        //      "year": 1999,
            .writeStartArray("cast")                    //      "cast": [
                .write("Keanu Reeves")                  //          "Keanu Reeves",
                .write("Laurence Fishburne")            //          "Laurence Fishburne",
                .write("Carrie-Anne Moss")              //          "Carrie-Anne Moss"
            .writeEnd()                                 //      ]
        .writeEnd();                                    // }

        generator.flush();
        generator.close();
    }
    
}
