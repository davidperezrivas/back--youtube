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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let VideosController = class VideosController {
    async searchVideo(busqueda) {
        try {
            let response = await axios_1.default.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100000&q=Tu Jardin con enanitos&key=AIzaSyAr-PaQAqS4sn2xGIXFpbcgNDr7s3bHL98');
            console.log(response.data.items);
        }
        catch (error) {
            console.log(error);
        }
        return 'Todo ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "searchVideo", null);
VideosController = __decorate([
    (0, common_1.Controller)('videos')
], VideosController);
exports.VideosController = VideosController;
//# sourceMappingURL=videos.controller.js.map