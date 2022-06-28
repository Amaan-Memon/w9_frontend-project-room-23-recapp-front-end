# Welcome to the RECAPP Docs!

 - **INTRO**
    
    Greetings! This is the documentation for Recapp, an application created to provide useful resources and information for School of Code Bootcampers who may be feeling overwhelmed by the immensity of information available on the internet. 
    
    It provides a more curated, relevent array of resources based on what week of the bootcamp the user is on, as well as helpful glossary terms, and a set of links to practice sites. 

    These docs will guide you through setting up the App in development mode, and then delve into the functionality of the code. Finally, we set out the styling conventions to allow you to create consistent designs within new components and pages. We recommend this order so that you will become familiar with the project strucuture- then as you begin coding, you will be able to see your changes in real time.

---

 - **PROJECT INFORMATION**

    * Front-end created with [React JS](https://beta.reactjs.org/).
    * Back-end created with [Express](https://expressjs.com/), [Nodemon](https://nodemon.io/), and [PostgreSQL](https://www.postgresql.org/docs/).
    * Tests written with [Jest](https://jestjs.io/docs/getting-started), [Supertest](https://www.npmjs.com/package/supertest), and [Cypress](https://docs.cypress.io/).
    * To create, populate and test your database, we recommend using [Heroku](https://devcenter.heroku.com/categories/reference) and [Postman](https://learning.postman.com/docs/getting-started/introduction/), but these are not neccessary.

---

 - **SETTING UP**

    * *CREATING THE DATABASE*

        For security purposes, we do not include our database credentials, so you will need to create your own. We recommend using Heroku Postgres, which you can read more about [here](https://devcenter.heroku.com/articles/heroku-postgresql).

        Create an account if you haven't already, create a new App, and select Heroku Postgres as an add-on. Then, from settings, access your Database Credentials. We will be using these later.

    ---

    * *CONNECTING YOUR DATABASE* 

        Clone this repository and open it up in your favourite code editor. Our project is split into two main folders: 'backend' and 'recapp-app'.

        In your terminal, navigate into the 'backend' folder, and install the required node modules.

        ```
        cd backend
        ```
        ```
        npm i
        ```

        This may take a few minutes, so feel free to lean back, check your phone- maybe look out the window wistfully.

        Once that's all done, go ahead and create a new file in the root of this folder. call it 
        
        ```
        .env
        ```

        Now we are going to add your Database credentials to this file.
        
        Using the template below, take the relevant information from your Heroku Database and add it in, so it will look something like this:

        ```
        PGUSER = "eyjafjallajokull"
        PGHOST = "ab1-23-456-7-89.eu-west-1.compute.amazonaws.com"
        PGDATABASE = "abcde1fg23h4hi"
        PGPASSWORD = "password123"
        PGPORT = 1234
        ```

        Congratulations- your Database is now connected!

        **Just a heads up- Heroku is an amazing service for providing free Database hosting- but the trade-off is that the credentials will be randomly changed from time to time. Every time you come back to this app, just double check that your Heroku credentials match up with your .env file.**
        
    ---

    * *CREATING YOUR TABLES*
    
        Your database is now connected to the server- but you don't have any tables in the database yet. 

        To make this easy for you, our backend has pre-written scripts for creating and populating these tables. 
        
        All you need to do is run them!

        In your terminal, enter these commands (you can find these in the package.json)

        ```
        npm run db:createGlossaryTable
        ```
        ```
        npm run db:createResourcesTable
        ```
        You should receive console.logs that these have been created.

        And checking in Heroku, you should be able to see that your database now contains 2 tables.

        We are almost done- next we need to populate these tables with data, so the App has something to fetch.
    ---
    * *POPULATING THE TABLES*

        Open the **data.js** file that exists within the **backend/libs** folder.

        You will find the basic objects that you are going to insert into the rows of your tables. 

        Feel free to edit the values, or leave them as they are. 

        In the **Back End** section of these docs, there will be more information about editing and updating your tables. 

        Once this data is to your liking, simply paste these commands in your terminal-

        ```
        npm run db:populateGlossaryTable
        ```
        ```
        npm run db:populateResourcesTable
        ```
        Again, you should receive console.logs that these have been successful. 

        If you want to be sure that these rows have been added, you can check on Heroku using a [dataclip](https://devcenter.heroku.com/articles/dataclips#viewing-results). 
    ---
    * *SPINNING UP THE SERVER*

        I'm not sure if that's the correct terminology, but *spinning up* sounds cool.

        Anyways, type

        ```
        npm run dev
        ```
        in your terminal. You should be told that 
        ```
        server is listening on port 5500
        ```

        To confirm everything is working, open your browser and visit
        
        http://localhost:5500

        You should see that the test route is working.

        next, head to 

        http://localhost:5500/resources

        and

        http://localhost:5500/glossary

        And that's the back-end set up, folks! Check out the back-end section later in the docs for more information on our CRUD routes- for now, familiarise yourself with our folder structure.
        Try to find out what the other routes are and see what they return when you visit them in the browser.

        Once you're feeling confident, head on to the next section to get your front-end up and running!
    ---
    * *SETTING UP THE FRONT-END*
        Assuming you are still in the backend folder in your terminal, navigate into the other folder, *recapp-app*, and install the node modules
        ```
        cd ../recapp-app
        ```
        ```
        npm i
        ```


 * Running the backend
 * Starting the frontend


 - FRONT END 


 - BACK END


