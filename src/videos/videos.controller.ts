import { Controller, Post } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
    constructor(private _videosService: VideosService) {}
    @Post()
    async searchVideo(busqueda: string) {
        try {
            let listadoVideo = await this._videosService.obtenerVideo(busqueda);
            if (listadoVideo.estado != 200) throw new Error('Error en la busqueda del video: ' + busqueda);

            let arregloVideos = listadoVideo.response.map((video) => {
                return {
                    titulo: video.snippet.title,
                    descripcion: video.snippet.description,
                    imagen: video.snippet.thumbnails.high.url,
                };
            });
            console.log(arregloVideos);
        } catch (error) {}
    }
}
