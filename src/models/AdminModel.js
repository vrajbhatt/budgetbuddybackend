const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Super Admin", "Admin"], // Different levels of admins
      default: "Admin",
    },
    status: {
      type: Boolean,
      default: true, // Active by default, can be disabled by another admin
    },
    profileImage: {
      type: String, // URL for profile image
    },
    permissions: {
      manageUsers: { type: Boolean, default: true },
      viewReports: { type: Boolean, default: true },
      manageTransactions: { type: Boolean, default: false },
      manageFinancialGoals: { type: Boolean, default: false },
      sendNotifications: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true, // Automatically create 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model("admins", adminSchema);
