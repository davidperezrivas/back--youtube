import { Controller, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('videos')
export class VideosController {
    @Post()
    async searchVideo(busqueda: string) {
        try {
            let response = await axios.get(
                'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100000&q=Tu Jardin con enanitos&key=AIzaSyAr-PaQAqS4sn2xGIXFpbcgNDr7s3bHL98',
            );
            console.log(response.data.items);
        } catch (error) {
            console.log(error);
        }
        return 'Todo ok';
    }
}
