import { Category } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "General Knowledge",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2, // Correct answer is "Paris", which is at index 2
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1, // Correct answer is "Mars", which is at index 1
      },
      {
        id: 3,
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Michelangelo",
        ],
        correctAnswer: 2, // Correct answer is "Leonardo da Vinci", which is at index 2
      },
      {
        id: 4,
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1, // Correct answer is "Blue Whale", which is at index 1
      },
      {
        id: 5,
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Copper", "Gold", "Aluminum"],
        correctAnswer: 2, // Correct answer is "Gold", which is at index 2
      },
      {
        id: 6,
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Bear"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Iron", "Platinum"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: 3
      },
      {
        id: 11,
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Garlic"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What is the chemical formula of water?",
        options: ["CO2", "O2", "H2O", "CH4"],
        correctAnswer: 2
      }
    ],
  },
  {
    id: 2,
    name: "Science",
    questions: [
      {
        id: 1,
        question: "Who developed the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        correctAnswer: 1, // Correct answer is "Albert Einstein", which is at index 1
      },
      {
        id: 2,
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        correctAnswer: 1, // Correct answer is "Avocado", which is at index 1
      },
      {
        id: 3,
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "H2"],
        correctAnswer: 1, // Correct answer is "H2O", which is at index 1
      },
      {
        id: 4,
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Tiger", "Elephant"],
        correctAnswer: 0, // Correct answer is "Cheetah", which is at index 0
      },
      {
        id: 5,
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Arctic Desert"],
        correctAnswer: 3, // Correct answer is "Arctic Desert", which is at index 3
      },
      {
        id: 6,
        question: "What is the closest planet to the Earth?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 0
      },
      {
        id: 7,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What is the primary function of red blood cells?",
        options: ["Transport oxygen", "Fight infection", "Digest food", "Clot blood"],
        correctAnswer: 0
      },
      {
        id: 9,
        question: "Which of the following is the lightest element in the periodic table?",
        options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "What is the most common gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Niels Bohr"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Which organ in the human body is responsible for producing insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Stomach"],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "O2", "H2O", "O3"],
        correctAnswer: 0
      }
    ],
  },
  {
    id: 3,
    name: "History",
    questions: [
      {
        id: 1,
        question: "Who was the first man to walk on the moon?",
        options: [
          "Buzz Aldrin",
          "Neil Armstrong",
          "Yuri Gagarin",
          "John Glenn",
        ],
        correctAnswer: 1, // Correct answer is "Neil Armstrong", which is at index 1
      },
      {
        id: 2,
        question: "Who invented the telephone?",
        options: [
          "Alexander Graham Bell",
          "Thomas Edison",
          "Nikola Tesla",
          "Michael Faraday",
        ],
        correctAnswer: 0, // Correct answer is "Alexander Graham Bell", which is at index 0
      },
      {
        id: 3,
        question: "Which country was the first to land a man on the moon?",
        options: ["USA", "Russia", "China", "India"],
        correctAnswer: 0, // Correct answer is "USA", which is at index 0
      },
      {
        id: 4,
        question: "Who was the first president of the United States?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "Thomas Jefferson",
          "John Adams",
        ],
        correctAnswer: 0, // Correct answer is "George Washington", which is at index 0
      },
      {
        id: 5,
        question: "What year did World War II end?",
        options: ["1940", "1942", "1945", "1950"],
        correctAnswer: 2, // Correct answer is "1945", which is at index 2
      },
      {
        id: 6,
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correctAnswer: 0
      },
      {
        id: 7,
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1898"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "Who was the first emperor of China?",
        options: ["Qin Shi Huang", "Kangxi", "Wu Zetian", "Sun Yat-sen"],
        correctAnswer: 0
      },
      {
        id: 9,
        question: "Which ancient civilization built the pyramids?",
        options: ["Mesopotamians", "Romans", "Egyptians", "Greeks"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Who was the leader of the Soviet Union during World War II?",
        options: ["Leon Trotsky", "Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Which war was fought between the North and South regions of the United States?",
        options: ["World War I", "Civil War", "War of 1812", "Spanish-American War"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Who was the queen of France during the French Revolution?",
        options: ["Marie Antoinette", "Catherine de' Medici", "Elizabeth I", "Cleopatra"],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Roman Empire", "Ottoman Empire", "Byzantine Empire", "Mongol Empire"],
        correctAnswer: 0
      },
      {
        id: 14,
        question: "In which year did World War I begin?",
        options: ["1912", "1914", "1920", "1939"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
        correctAnswer: 0
      }
    ],
  },
  {
    id: 4,
    name: "Geography",
    questions: [
      {
        id: 1,
        question: "Which is the longest river in the world?",
        options: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River",
        ],
        correctAnswer: 1, // Correct answer is "Nile River", which is at index 1
      },
      {
        id: 2,
        question: "Which country is the largest by land area?",
        options: ["United States", "Canada", "China", "Russia"],
        correctAnswer: 3, // Correct answer is "Russia", which is at index 3
      },
      {
        id: 3,
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: 2, // Correct answer is "Tokyo", which is at index 2
      },
      {
        id: 4,
        question: "Which continent is known as the ‘Dark Continent’?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: 1, // Correct answer is "Africa", which is at index 1
      },
      {
        id: 5,
        question: "What is the largest country by population?",
        options: ["United States", "China", "India", "Russia"],
        correctAnswer: 1, // Correct answer is "China", which is at index 1
      },
      {
        id: 6,
        question: "What is the largest country by area in the world?",
        options: ["Canada", "United States", "Russia", "China"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: 3
      },
      {
        id: 11,
        question: "Which country has the most volcanoes?",
        options: ["Indonesia", "Japan", "Italy", "United States"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "What is the capital of Japan?",
        options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "Which desert is the largest hot desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
        correctAnswer: 0
      },
      {
        id: 14,
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Andes", "Rocky Mountains", "Alps"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        correctAnswer: 1
      }
    ],
  },
  {
    id: 5,
    name: "Technology",
    questions: [
      {
        id: 1,
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
        correctAnswer: 0, // Correct answer is "Charles Babbage", which is at index 0
      },
      {
        id: 2,
        question: "Which company developed the first personal computer?",
        options: ["Apple", "IBM", "Microsoft", "Compaq"],
        correctAnswer: 1, // Correct answer is "IBM", which is at index 1
      },
      {
        id: 3,
        question: "What year was the first iPhone released?",
        options: ["2005", "2007", "2009", "2010"],
        correctAnswer: 1, // Correct answer is "2007", which is at index 1
      },
      {
        id: 4,
        question: "What does ‘HTTP’ stand for?",
        options: [
          "Hyper Text Transfer Protocol",
          "Hyper Text Terminal Protocol",
          "Hyper Transfer Text Protocol",
          "High Tech Transfer Protocol",
        ],
        correctAnswer: 0, // Correct answer is "Hyper Text Transfer Protocol", which is at index 0
      },
      {
        id: 5,
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
        correctAnswer: 3, // Correct answer is "Bill Gates", which is at index 3
      },
      {
        id: 6,
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Larry Page", "Mark Zuckerberg"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Terminal Protocol", "High Transfer Text Protocol", "HyperTransfer Text Protocol"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "Which company developed the iPhone?",
        options: ["Samsung", "Apple", "Google", "Microsoft"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "What is the main programming language used for Android development?",
        options: ["Java", "Swift", "Python", "C++"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which company owns Android?",
        options: ["Google", "Apple", "Microsoft", "Amazon"],
        correctAnswer: 0
      },
      {
        id: 11,
        question: "What is the most widely used social media platform?",
        options: ["Facebook", "Twitter", "Instagram", "TikTok"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "What does the acronym 'RAM' stand for in computing?",
        options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Random Allocation Memory"],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "Which programming language is primarily used for iOS development?",
        options: ["Swift", "Java", "C#", "PHP"],
        correctAnswer: 0
      },
      {
        id: 14,
        question: "What does 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Uniform Resource Link"],
        correctAnswer: 0
      },
      {
        id: 15,
        question: "What year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: 2
      }
    ],
  },
];
