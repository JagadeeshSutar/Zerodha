const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  price:Number,
  percent: Number,
  isDown: Boolean,
});

module.exports = { OrdersSchema };
