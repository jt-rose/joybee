import mongoose from "mongoose";
import { Connect } from "./Connect";
import { Conversation } from "./Conversation";
import { Meetup } from "./Meetup";
var userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    // img
    country: { type: String, required: true },
    cityOrState: { type: String, required: true },
    aboutMeText: { type: String, required: true },
    joinedOn: { type: Date, required: true },
    active: { type: Boolean, required: true },
    languages: [{ type: String, required: true }],
    hobbies: [{ type: String, required: true }],
    // to limit mongo's excessive data duplication, we will only
    // store recently updated fields, manage these as changes are made
    // and limit pulling data on the full data set unless needed
    updatedConnects: [Connect],
    updatedConversations: [Conversation],
    updatedMeetups: [Meetup],
});
export var User = mongoose.model("User", userSchema);