const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    }
})
const adminSchema=new Schema({
   name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    }
})

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    thumbnail: {
      type: String // image URL
    },

    creator: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true
    },

    isPublished: {
      type: Boolean,
      default: false
    }
})

const purchaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },

    priceAtPurchase: {
      type: Number,
      required: true
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed"
    }
});

// prevent same user buying same course twice
purchaseSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Admin", adminSchema);
module.exports = mongoose.model("Purchase", purchaseSchema);
module.exports = mongoose.model("Course", courseSchema);
