/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package org.iti.day2;

import org.iti.day2.jasonb.JasonBLab;
import org.iti.day2.objectmodel.JasonReaderLab;
import org.iti.day2.objectmodel.JasonWriterLab;
import org.iti.day2.streamapi.JasonGeneratorLab;
import org.iti.day2.streamapi.JasonParserLab;



/**
 *
 * @author MohsinDiab
 */
public class Day2 {

    public static void main(String[] args) throws Exception {
        
       JasonParserLab jpl=new JasonParserLab();
       jpl.consumeJsonInStreamingFashion();
       
       JasonGeneratorLab jgl=new JasonGeneratorLab();
       jgl.produceJsonInStreamingFashion();

        JasonReaderLab jrl=new JasonReaderLab();
        jrl.consumeJsonUsingJasonReader();
        
        JasonWriterLab jwl=new JasonWriterLab();
        jwl.produceJsonUsingJasonWriter();
        
        new JasonBLab();
        
    }
    
}
