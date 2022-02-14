var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import express from "express";
import { languages } from "../constants/languages.js";
import { User } from "../models/User.js";
import { Meetup } from "../models/Meetup.js";
export var router = express.Router();
// create meetup
router.get("/create", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var connections;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, User.find({
                    _id: { $in: (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.connections },
                })];
            case 1:
                connections = _b.sent();
                res.render("create-meetup.ejs", {
                    title: "Create Meetup",
                    user: req.session.user,
                    connections: connections,
                    languages: languages,
                });
                return [2 /*return*/];
        }
    });
}); });
router.post("/create", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, description, invitee, date, start, duration, platform, startTime, endTime, newMeetup;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!req.session.user) {
                    res.redirect("/auth/login");
                    return [2 /*return*/];
                }
                _a = req.body, description = _a.description, invitee = _a.invitee, date = _a.date, start = _a.start, duration = _a.duration, platform = _a.platform;
                startTime = new Date(date + " " + start);
                endTime = new Date(startTime.getTime() + parseInt(duration) * 60000);
                newMeetup = new Meetup({
                    creator: req.session.user._id,
                    description: description,
                    invitee: invitee,
                    startTime: startTime,
                    endTime: endTime,
                    platform: platform,
                    cancelled: false,
                    response: "NO_RESPONSE",
                });
                console.log(newMeetup);
                return [4 /*yield*/, User.updateMany({ _id: { $in: [req.session.user._id, invitee] } }, { $push: { currentMeetups: newMeetup } })];
            case 1:
                _b.sent();
                res.redirect("/");
                return [2 /*return*/];
        }
    });
}); });
// delete meetup
router.delete("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
// edit meetup
router.get("/edit/:meetupid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
router.put("/edit", function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
// respond to meetup
router.put("/respond", function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
// read meetups
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
