

const INITIAL_STATE = { 
     data : [ {
        question  : "What does HTML stand for?",
        option : ["Home Tool Markup Language", "Hyperlink Markup Language","HyperText Markup Language", "HyperStar Markup Language"],
        anwser : "HyperText Markup Language"
      },
      {
        question : "Who is making the Web standards?",
        option : ["Mozilla FireFox","The World  Wide Web Consortium","Google","MicroSoft"],
        anwser : "The World  Wide Web Consortium"
      },
      {
      question : "Choose the correct HTML element for the largest heading?",
      option : ["<h1>","<Head>","<Heading>","<H6>"],
      anwser : "<h1>"
      },
    ]
}



const reducer = (state = INITIAL_STATE , action) =>state;



export default reducer;