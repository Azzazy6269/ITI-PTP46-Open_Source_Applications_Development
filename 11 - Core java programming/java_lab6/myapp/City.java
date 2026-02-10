package myapp;

public class City {

    private int id;
    private String name;
    private int population;
    private String countryCode;

    public City(int _id, String _name, int _population, String _countryCode) {
        id = _id;
        name = _name;
        population = _population;
        countryCode = _countryCode;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPopulation() {
        return population;
    }

    public String getCountryCode() {
        return countryCode;
    }

    @Override
    public String toString() {
        return "City{" +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", population=" + population +
                ", countryCode=" + countryCode +
                '}';
    }

}
