const qBank = [
    {
        question:
        "1.'.MOV' extension refers usually to what kind of file ?",
        answers: ["Image file","Animation/movie file","Audio file","MS Office document"],
        correct: "Animation/movie file",
        questionId: "099099"
    },
    {
        question:
        "2.Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
        answers: ["Flash","Flange","Fury","FRAM"],
        correct: "flash",
        questionId: "093909"
    },
    {
        question:
        "3.In which decade was the American Institute of Electrical Engineers (AIEE) founded ?",
        answers: ["1880s", "1850s", "1950s", "1930s"],
        correct: "1880s",
        questionId: "009039"
    },
    {
        question:
        "4. What is part of a database that holds only one type of information?",
        answers: ["Report","Field","Record","File"],
        correct: "field",
        questionId: "090089"
    },
    {
        question:
        "5.What is part of a database that holds only one type of information ?",
        answers: ["Order of Significance","Open Software","Operating System","Optical Sensor"],
        correct: "Operating System",
        questionId: "01010101"
    
    
    
    ];
    
    // n = 5 to export 5 question
    export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
    