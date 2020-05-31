## Welcome to Holidaze, my exam project.

### Before getting started

Before getting started you will need to download Node and an apache host, for this I've used XAMPP.</br>
Node: [Download here](https://nodejs.org/en/)</br>
XAMPP: [Download here](https://www.apachefriends.org/index.html)

### After downloading
None of the dependencies here are uploaded to the github, so once you have downloaded the files and put them where you want to you have to CD into them and use the command `npm start`, this should open up [http://localhost:3000](http://localhost:3000) in your browser automatically.

For the forms to work you will have to put the files inside the server folder for XAMPP and run the application.

After downloading the files, you will have change a few links in a file. The file you need to change can be found in "web/src/constants/API.js". In this file you will need to change to change the first parts of the link to match your path, i. e. if it's in "example.com/test" then it should look something like this for CONTACT_DATA_SET: "http://example.com/test/server/contact-success.php" or i.e. "http://localhost/server/contact-success.php" for localhost. You will have to do this with all three constants.
