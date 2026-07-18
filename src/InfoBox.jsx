import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    const IMAGE_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.jpg?s=612x612&w=0&k=20&c=qv-WAGrG9YdlMwibugLBC5SGLNrNS5mYm9od0RXKIsQ=";

    return (
        <div className="InfoBox">
            <br></br>
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 
                        ? RAIN_URL
                        : info.temp > 30
                        ? HOT_URL
                        : info.temp <= 30
                        ? COLD_URL
                        : IMAGE_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{info.humidity > 80 
                        ? <ThunderstormIcon />
                        : info.temp > 30
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                        
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Minimum Temperature = {info.tempMin}</p>
                    <p>Maximum Temperature = {info.tempMax}</p>
                    <p>The Weather can be described as <i><b>{info.weather}</b></i> and it Feels Like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}