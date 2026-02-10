
package myapp;

public class Country {

    private String code;
    private String name;
    private String continent;
    private double surfaceArea;
    private int population;
    private double gnp;
    private int capital;

    public Country(String _code, String _name, String _continent, double _surfaceArea, int _population, double _gnp,
            int _capital) {
        code = _code;
        name = _name;
        continent = _continent;
        surfaceArea = _surfaceArea;
        population = _population;
        gnp = _gnp;
        capital = _capital;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getContinent() {
        return continent;
    }

    public double getSurfaceArea() {
        return surfaceArea;
    }

    public int getPopulation() {
        return population;
    }

    public double getGnp() {
        return gnp;
    }

    public int getCapital() {
        return capital;
    }

    @Override
    public String toString() {
        return "Country{" +
                "code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", continent='" + continent + '\'' +
                ", surfaceArea=" + surfaceArea + '\'' +
                ", population=" + population + '\'' +
                ", gnp=" + gnp + '\'' +
                ", capital=" + capital + '\'' +
                '}';
    }
}
