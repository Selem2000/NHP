const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
  title: { type: String, require: true },
  startTime: Date,
  endTime: Date,
});

module.exports = Appointment = model("appointment", appointmentSchema);
