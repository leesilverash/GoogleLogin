const bcrypt = require("bcryptjs");

// User schema
const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Username is required!"],
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
    },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Should be a vaild email address!",
      ],
      trim: true,
    },
    provider: {
      type: String,
      enum : ['google','kakao'],
      default: 'google',
    }
  },
  {
    toObject: { virtuals: true },
  }
);

