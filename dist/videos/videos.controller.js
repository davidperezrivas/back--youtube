"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosController = void 0;
const common_1 = require("@nestjs/common");
const videos_service_1 = require("./videos.service");
let VideosController = class VideosController {
    constructor(_videosService) {
        this._videosService = _videosService;
    }
    async searchVideo(busqueda) {
        try {
            if (busqueda == '')
                throw new Error('Texto a buscar es necesario');
            let listadoVideo = await this._videosService.obtenerVideo(busqueda);
            if (listadoVideo.estado != 200)
                throw new Error('Error en la busqueda del video: ' + busqueda);
            return listadoVideo.response.map((video) => {
                return {
                    titulo: video.snippet.title,
                    descripcion: video.snippet.description,
                    imagen: video.snippet.thumbnails.high.url,
                };
            });
        }
        catch (error) {
            return { status: 500, message: error.message };
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "searchVideo", null);
VideosController = __decorate([
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [videos_service_1.VideosService])
], VideosController);
exports.VideosController = VideosController;
//# sourceMappingURL=videos.controller.js.map