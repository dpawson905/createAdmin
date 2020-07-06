# Create Admin CMD Tool

## Desc:
This tool was created to easily create an admin user for your app. It uses mongoose and passport-local-mongoose.

### Steps
1) rename .example_env to .env
2) add your mongodb uri to DB_URL in .env
3) You can either use the user model file supplied or edit it to your liking.
    a) if you change the model make sure to update /lib/inquirer.js to match your model
4) run npm i and then run node setup.js

Thats it.