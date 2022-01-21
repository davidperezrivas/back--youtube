import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VideosService {
    async obtenerVideo(campo_busqueda) {
        try {
            let response = await axios.get(
                'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100000&q=' +
                    campo_busqueda +
                    '&key=AIzaSyAr-PaQAqS4sn2xGIXFpbcgNDr7s3bHL98',
            );

            return { estado: 200, response: response.data.items };
        } catch (error) {
            return { estado: 500, response: error };
        }
    }
}
