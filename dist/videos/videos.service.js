"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let VideosService = class VideosService {
    async obtenerVideo(campo_busqueda) {
        try {
            let response = await axios_1.default.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100000&q=' +
                campo_busqueda +
                '&key=AIzaSyAr-PaQAqS4sn2xGIXFpbcgNDr7s3bHL98');
            return { estado: 200, response: response.data.items };
        }
        catch (error) {
            return { estado: 500, response: error };
        }
    }
};
VideosService = __decorate([
    (0, common_1.Injectable)()
], VideosService);
exports.VideosService = VideosService;
//# sourceMappingURL=videos.service.js.map