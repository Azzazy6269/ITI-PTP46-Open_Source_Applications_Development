package program;

import myapp.*;
import java.io.*;
import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Program {

    public static void main(String[] args) {
        System.out.println("Program started");

        //reading the data from csv files
        ArrayList<Country> countries = readCountriesFromCSV("Countries.csv");
        System.out.println("Total countries: " + countries.size());
        

        ArrayList<City> cities = readCitiesFromCSV("Cities.csv");
        System.out.println("Total cities: " + cities.size());


        //////////////////////////////////////////
        //1- most Populated Cities In Each Country
        ArrayList<City> mostPopulatedCitiesInEachCountry = new ArrayList<>(
                cities.stream()
                        .collect(Collectors.toMap(
                            city -> city.getCountryCode(),
                            city -> city,
                            (c1,c2) -> c1.getPopulation() > c2.getPopulation() ? c1 : c2
                        )).values()
                    );
        for (City city : mostPopulatedCitiesInEachCountry) {
         System.out.println(city);
        }


        ///////////////////////////////////////////
        //2-most populated city from each continent
        ArrayList<City> mostPopulatedCityInEachContinent =new ArrayList<City>();
        List<String> continents = 
        mostPopulatedCitiesInEachCountry.stream()
        .map(city -> getCountryContinent(city.getCountryCode(),countries))
        .distinct()
        .collect(Collectors.toList())
        ;
        for (String continent : continents) {
            City maxCity = mostPopulatedCitiesInEachCountry.stream()
            .filter(city -> getCountryContinent(city.getCountryCode(), countries).equals(continent))
            .max(Comparator.comparingInt(City::getPopulation))
            .orElse(null);

            if (maxCity != null) {  
                mostPopulatedCityInEachContinent.add(maxCity);
            }
        }
        for (City city : mostPopulatedCityInEachContinent) {
            String continent = getCountryContinent(city.getCountryCode(), countries);
            System.out.println(continent + ": " + city.getName());
        }


        /////////////////////////////////////
        //3- highest populated capital city
         City mostPopulatedCapital =
            cities.stream()
                  .filter(city -> IsCapital(city.getId(), countries))
                  .max(Comparator.comparingInt(city -> city.getPopulation()))
                  .orElse(null)
        ;
        System.out.println(mostPopulatedCapital);
    }




    public static boolean IsCapital (int cityCode , ArrayList<Country> countries) {
        for(Country country : countries){
            if(country.getCapital() == cityCode)
                return true;
        }
        return false;
    }

    public static String getCountryContinent(String CountryCode , ArrayList<Country> countries){
        return countries.stream()
        .filter(country -> country.getCode().equals(CountryCode))
        .map(country -> country.getContinent())
        .findFirst()
        .orElse("Unkown") ;
    }

    public static ArrayList<Country> readCountriesFromCSV(String filename) {
        ArrayList<Country> countries = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            boolean firstLine = true;

            while ((line = br.readLine()) != null) {
                if (firstLine) {
                    firstLine = false;
                    continue;
                }

                String[] values = line.split(",");

                if (values.length >= 7) {
                    try {
                        String code = values[0].trim();
                        String name = values[1].trim();
                        String continent = values[2].trim();
                        double surfaceArea = Double.parseDouble(values[3].trim());
                        int population = (int) Double.parseDouble(values[4].trim());
                        double gnp = Double.parseDouble(values[5].trim());
                        int capital = (int) Double.parseDouble(values[6].trim())
                        Country country = new Country(code, name, continent,
                                surfaceArea, population, gnp, capital);
                        countries.add(country);
                    } catch (NumberFormatException e) {
                        System.err.println("Error parsing line: " + line);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }

        return countries;
    }

    public static ArrayList<City> readCitiesFromCSV(String filename) {
        ArrayList<City> cities = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            boolean firstLine = true;

            while ((line = br.readLine()) != null) {
                if (firstLine) {
                    firstLine = false;
                    continue;
                }

                String[] values = line.split(",");

                if (values.length >= 4) {
                    try {
                        int id = (int) Double.parseDouble(values[0].trim());
                        String name = values[1].trim();
                        int population = (int) Double.parseDouble(values[2].trim());
                        String countryCode = values[3].trim();

                        City city = new City(id, name, population, countryCode);
                        cities.add(city);
                    } catch (NumberFormatException e) {
                        System.err.println("Error parsing line: " + line);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }

        return cities;
    }

}
