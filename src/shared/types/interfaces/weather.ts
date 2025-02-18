export interface Weather {
  name: string;
  id: number;
  main: {
    temp: number;
    humidity: 71;
  };
  coord: {
    lat: number;
    lon: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
}
