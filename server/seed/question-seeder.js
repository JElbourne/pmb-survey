const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PMPsurvey', { useMongoClient: true})

const Question = require('../models/question');

const answers = [
    {text: 'Always',        value: 5},
    {text: 'Mostly',        value: 4},
    {text: 'Sometimes',     value: 3},
    {text: 'Hardly Ever',   value: 2},
    {text: 'Never',         value: 1}
];

const questionStrings = [
    "Our leaders actively engage in innovation and quality initiatives - they clearly understand what matters to stakeholders, mind the message, communicate why change is necessary, give others an active role to play, and provide ongoing constructive insight and feedback.",
    "Our leaders model an innovative mindset - they look for positives before weaknesses of ideas, ask questions before forming opinions, and think creatively about how to overcome challenges.",
    "We take a systems thinking approach to innovation and quality by identifying opportunities to seize and problems to solve - goals, priorities, and the means to achieve them are well thought out and planned.",
    "We receive information and training on innovation and quality- resources are allocated to building the know (mindset) and the how (skillset).",
    "The people who use supports define what matters most to them, and drive the planning and decisions at the organization - participatory action research and co-design methods are used.",
    "We create new and better ways of doing things by taking a systematic approach that involves iterative cycles - think, co-design, try, evaluate.",
    "We use innovation and quality tools - co-design, creative problem-solving, appreciative inquiry.",
    "We are given enough time for new thinking, problem-solving, idea sharing, and co­-design - value is placed on making and scheduling time to be intentional about innovation and quality.",
    "We are encouraged to share and engage in healthy debate about ideas with trust and openness - the atmosphere is constructive and positive.",
    "We invite diverse people into the 'solution space' to ideate and collaborate - people supported, families, all employees, board members, partners and novel guests.",
    "We try new things and take calculated risks openly and regularly - people put their ideas forward, and the organization takes on new initiatives, including some bold endeavors.",
    "We acknowledge and reward quality work and innovation activities - putting ideas forward, rallying around other's ideas, and engaging in purposeful action to improve people's lives.",
    "We identify and measure outcomes, and make timely adaptations - results make evidence based decision-making possible.",
    "Our work space invites creativity and innovation - there is a healthy balance of shared and private space including round tables to encourage sharing and collaborating, common open areas to display, post, share thoughts and ideas, and colourful and unique materials to help generate ideas.",
    "We leverage technology to improve people's lives and make the workplace more effective and efficient - the organization stays abreast of and adopts useful IT products and service.",
    "Newness is embraced with enthusiasm - most everyone thrives on learning and evolving with the times."
];

var done = 0;
for (var i = 0; i < questionStrings.length; i++){
    var question = new Question({
        text: questionStrings[i],
        answers: answers
    });

    question.save().then((doc) => {
        done++;
        if (done === questionStrings.length) {
            exit();
        }
    }, (e) => {

        
    });
}

function exit(){
    mongoose.disconnect();
}