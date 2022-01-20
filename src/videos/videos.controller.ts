import { Controller, Post } from '@nestjs/common';

@Controller('videos')
export class VideosController {
    @Post()
    async searchVideo(busqueda: string) {
        return 'Listado con los videos encontrados';
    }
}
