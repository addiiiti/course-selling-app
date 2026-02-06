const mongoose = require("mongoose");
const { Schema } = mongoose;

const purchaseSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    priceAtPurchase: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed"
    }
  },
  { timestamps: true }
);
//prevent 1 user to but same course twice
purchaseSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model("Purchase", purchaseSchema);
