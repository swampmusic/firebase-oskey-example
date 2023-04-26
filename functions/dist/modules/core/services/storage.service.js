"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKStorageService = void 0;
const storage_controller_1 = require("../controllers/storage.controller");
class OSKStorageService {
    static async onFinalize(object, context) {
        await storage_controller_1.OSKStorageController.default.processFile(object, context);
    }
}
exports.OSKStorageService = OSKStorageService;
//# sourceMappingURL=storage.service.js.map