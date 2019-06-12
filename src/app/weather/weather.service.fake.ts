import { IWeatherService } from './weather.service';
import { of } from 'rxjs';
import { ICurrentWeather } from '../icurrent-weather';

export class WeatherServiceFake implements IWeatherService{
    private fakeweather: ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temprature: 280.32,
        description: 'light intensity drizzle'
    }
    public getCurrentWeather(search: string | number, country?: string){
        return of(this.fakeweather);
    }
}