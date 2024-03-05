//// create your own resume data in Json format
const resume1 = 
{
    "name": "Cubert Jerry",
    "profession": "Full stack Developer",
    "location": "Chennai",
    "education": [
        {
            "degree": "Bachelors",
            "university": "Madras University",
            "year": 2018
        },
        {
            "degree": "12th STD",
            "university": "Don Bosco Matriculation HIGR SEC SCHOOL",
            "year": 2013
        },
        {
            "degree": "10th STD",
            "university": "ST JOSEPH HIGH SCHOOL",
            "year": 2010
        }
    ],
    "experience": [
        {
            "position": "Programmer Analyst",
            "company": "Infotech",
            "year": "2019-Present",
            "description": "Provide natural language understanding and generation capabilities, assisting users across various tasks and domains."
        }
    ],
    "skills": [
        "Natural Language Processing",
        "Conversational AI",
        "Deep Learning",
        "Machine Learning",
        "Python",
        "TensorFlow",
        "PyTorch",
        "Data Mining"
    ],
    "languages": [
        "English",
        "Tamil"
    ],
    "interests": [
        "Advancing AI technologies",
        "Language understanding and generation",
        "Human-computer interaction",
        "Robotics",
        "Philosophy of mind"
    ]
};    
    
//// read about the difference between window, screen and document in JavaScript
    
//In JavaScript, the window, screen, and document objects represent different aspects of the browser environment and provide various functionalities:
    ////Window Object:
    
    // The window object represents the browser window or tab in which the JavaScript code is running.
    // It serves as the global object in the browser's JavaScript environment, providing access to various properties and methods.
    // The window object includes properties and methods for manipulating the browser window, such as resizing, moving, opening new windows, accessing browser history, setting timeouts, and handling events.
    // Any global variables or functions declared in JavaScript are automatically added as properties and methods of the window object.
    // Screen Object:
    
    // //The screen object represents the user's screen or monitor.
    // It provides information about the screen's dimensions, color depth, pixel density, and other characteristics.
    // Developers can access properties of the screen object to adjust the layout or presentation of their web pages based on the user's screen resolution or capabilities.
    // Common properties of the screen object include width, height, availWidth, availHeight, colorDepth, and pixelDepth.
    // Document Object:
    
    // //The document object represents the HTML document loaded in the browser window or tab.
    // It provides access to the content and structure of the web page, including elements like text, images, forms, and scripts.
    // Developers can manipulate the document's content and structure using methods and properties of the document object, such as selecting elements, modifying their attributes or content, adding or removing elements, and handling events.
    // The document object also provides access to other important objects and collections, such as window, location, history, forms, links, and images, allowing developers to interact with various aspects of the web page.
    
    //sIn summary, while the window object represents the browser window or tab, the screen object represents the user's screen, and the document object represents the HTML document loaded in the browser window or tab. These objects play distinct roles in JavaScript programming and can be used to create dynamic and interactive web applications.
    
    
    
    ////for above the Json iterate over all for loops(for,for in, for of, for each)
    
    // Using for loop:
    
    const resume = {
        "name": "Cubert Jerry",
        "profession": "Full stack Developer",
        "location": "Chennai",
        "education": [
            {
                "degree": "Bachelors",
                "university": "Madras University",
                "year": 2018
            },
            {
                "degree": "12th STD",
                "university": "Don Bosco Matriculation HIGR SEC SCHOOL",
                "year": 2013
            },
            {
                "degree": "10th STD",
                "university": "ST JOSEPH HIGH SCHOOL",
                "year": 2010
            }
        ],
        "experience": [
            {
                "position": "Programmer Analyst",
                "company": "Infotech",
                "year": "2019-Present",
                "description": "Provide natural language understanding and generation capabilities, assisting users across various tasks and domains."
            }
        ],
        "skills": [
            "Natural Language Processing",
            "Conversational AI",
            "Deep Learning",
            "Machine Learning",
            "Python",
            "TensorFlow",
            "PyTorch",
            "Data Mining"
        ],
        "languages": [
            "English",
            "Tamil"
        ],
        "interests": [
            "Advancing AI technologies",
            "Language understanding and generation",
            "Human-computer interaction",
            "Robotics",
            "Philosophy of mind"
        ]
    };    
    
    
    // Using for loop
    console.log("Using for loop:");
    for (let i = 0; i < resume.education.length; i++) {
        console.log(resume.education[i]);
    }
    
    // Using for...in loop
    console.log("Using for...in loop:");
    for (let key in resume) {
        if (Array.isArray(resume[key])) {
            console.log(`${key}:`);
            for (let i = 0; i < resume[key].length; i++) {
                console.log(resume[key][i]);
            }
        }
    }
    
    // Using for...of loop
    console.log("Using for...of loop:");
    for (let item of resume.education) {
        console.log(item);
    }
    
    
    // Using forEach method
    console.log("Using forEach method:");
    resume.education.forEach((item) => {
        console.log(item);
    });