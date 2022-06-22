/*
    TUESDAY
        Create a DB in Heroku ✅
        Create basic project file structure 
            models ✅
                glossary functions ✅
                    get all request ✅
                    get by id ✅
                    SEARCH BY TAG (QUERY) ✅
                resource functions ✅
                    get all request ✅
                    get by id ✅
            routes ✅
                glossary router ✅
                    /glossary returns all glossary items ✅
                resources router ✅
                    /resources returns all resources ✅
                    /resources/week/:number returns resources with week = number ✅
                    /resources/search? ✅
            public (not neccessary?)
        
        Server up and running   
            test route ✅ 
            /glossary ✅
            /resources ✅ 

        Establish a connection to the DB 
            make a pool ✅
            create a table ✅
                sending the info to the DB ✅
            populate it ✅
            test a GET request (Postman) ✅
            BONUS: Write functions that post, put and delete for potential future functionality ✅


    WEDNESDAY
        Rewrite SQL to return only relevant columns of resources from the DB
            -Link ✅
            -Topic ✅
            -Week ✅
        Add Express Validator to project (NOT YET USEFUL)
            -Validate that search is string
            -sanitise spaces 
            -unwanted characters
        Begin to implement status codes and error handling
            Add 200 status codes to  valid response objects ✅
                glossary ✅
                resources ✅
            Add 400 status codes for invalid requests
                glossary 
                resources
            Get functions to throw errors if bad requests
                glossary
                resources
        Write SEMANTIC Console.logs for requests
            glossary route ✅
            resource route

*/

// useEffect(await fetch("http://localhost:3000/glossary"))