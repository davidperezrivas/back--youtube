import { Body, Controller, Post } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
    constructor(private _videosService: VideosService) {}
    @Post()
    async searchVideo(@Body('busqueda') busqueda: string) {
        try {
            if (busqueda == '') throw new Error('Texto a buscar es necesario');
            let listadoVideo = await this._videosService.obtenerVideo(busqueda);
            if (listadoVideo.estado != 200) throw new Error('Error en la busqueda del video: ' + busqueda);

            return listadoVideo.response.map((video) => {
                return {
                    titulo: video.snippet.title,
                    descripcion: video.snippet.description,
                    imagen: video.snippet.thumbnails.high.url,
                };
            });
        } catch (error) {
            return { status: 500, message: error.message };
        }
    }
}
