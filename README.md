![Initial app image](https://imgur.com/aB3DRep)

# Create Admin CMD Tool

## Desc:
This tool was created to easily create an admin user for your app. It uses mongoose and passport-local-mongoose.

To use, just install with `npm i create-admin-cli` and run using `create-admin-cli`.

### Config
The model file is under `models/user.js` and can be configured to your liking. The current model file looks like this:

```
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
    roles: {
      dev_admin: {
        type: Boolean,
        default: false,
      },
      admin: {
        type: Boolean,
        default: false,
      },
      manager: {
        type: Boolean,
        default: false,
      },
      basic: {
        type: Boolean,
        default: true,
      },
    }
  },
  { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose, {
  limitAttempts: true,
  interval: 100,
  // 300000ms is 5 min
  maxInterval: 300000,
  // This will completely lock out an account and requires user intervention.
  maxAttempts: 10,
});

module.exports = mongoose.model("User", UserSchema);

```

Any changes made to this file will need to be updated in `lib/inquirer.js`. The name value in this file matches the object value in the model file. They must match for it to work.

Enjoy

![Completed App](https://imgur.com/Ed8z9YY)