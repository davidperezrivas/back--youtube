import { VideosService } from './videos.service';
export declare class VideosController {
    private _videosService;
    constructor(_videosService: VideosService);
    searchVideo(busqueda: string): Promise<any>;
}
