const questions = [
    {
        question: "Choose the correct preposition: He is good ___ mathematics.",
        choices: ["at", "in", "on", "to"],
        answer: "at",
        explanation: "The correct preposition is 'at' when referring to skill in a subject."
    },
    {
        "question": "She _______ to the store yesterday.",
        "choices": ["goes", "went", "going", "gone"],
        "answer": "went",
        "explanation": "The past simple tense is used for actions completed in the past."
    },
    {
        "question": "If I _______ you, I would study harder.",
        "choices": ["am", "was", "were", "be"],
        "answer": "were",
        "explanation": "The subjunctive 'were' is used in conditional sentences when referring to hypothetical situations."
    },
    {
        "question": "The books _______ on the table are mine.",
        "choices": ["lay", "lying", "lain", "lied"],
        "answer": "lying",
        "explanation": "'Lying' is the present participle used as an adjective modifying 'books'."
    },
    {
        "question": "He has _______ finished his homework.",
        "choices": ["already", "yet", "still", "ever"],
        "answer": "already",
        "explanation": "'Already' indicates that an action has been completed before now."
    },
    {
        "question": "Choose the correct pronoun: _______ are going to the party.",
        "choices": ["Us", "We", "Ours", "Our"],
        "answer": "We",
        "explanation": "'We' is the subject pronoun used when the speakers are part of the group performing the action."
    },
    {
        "question": "Which word best completes the sentence: He made a _______ decision.",
        "choices": ["fast", "quick", "rapid", "swift"],
        "answer": "quick",
        "explanation": "'Quick decision' is a common collocation meaning a decision made without delay."
    },
    {
        "question": "The company is trying to _______ its market share.",
        "choices": ["increase", "expand", "grow", "develop"],
        "answer": "expand",
        "explanation": "'Expand market share' means to increase the portion of the market controlled by the company."
    },
    {
        "question": "What is the meaning of 'to take something into account'?",
        "choices": ["To ignore", "To consider", "To reject", "To forget"],
        "answer": "To consider",
        "explanation": "To 'take something into account' means to consider or include something when making a decision."
    },
    {
        "question": "Which phrase means 'to suddenly become very angry'?",
        "choices": ["To see red", "To feel blue", "To be green", "To have a yellow streak"],
        "answer": "To see red",
        "explanation": "'To see red' is an idiom meaning to become very angry."
    },
    {
        "question": "Choose the synonym of 'arduous'.",
        "choices": ["easy", "simple", "difficult", "light"],
        "answer": "difficult",
        "explanation": "'Arduous' and 'difficult' both describe something that requires great effort."
    },
    {
        "question": "She is interested _______ learning new languages.",
        "choices": ["in", "at", "on", "to"],
        "answer": "in",
        "explanation": "The preposition 'in' is used with 'interested' to indicate the object of interest."
    },
    {
        "question": "The meeting will be held _______ Monday morning.",
        "choices": ["in", "at", "on", "to"],
        "answer": "on",
        "explanation": "The preposition 'on' is used with days of the week."
    },
    {
        "question": "Choose the correctly structured sentence:",
        "choices": ["He to the store went.", "Went he to the store.", "He went to the store.", "To the store he went."],
        "answer": "He went to the store.",
        "explanation": "The correct sentence structure is subject-verb-object/complement."
    },
    {
        "question": "They arrived _______ the airport late.",
        "choices": ["to", "at", "in", "on"],
        "answer": "at",
        "explanation": "The preposition 'at' is used with specific locations like 'the airport'."
    },
    {
        "question": "The book is _______ the shelf.",
        "choices": ["under", "on", "beside", "within"],
        "answer": "on",
        "explanation": "The preposition 'on' indicates that the book is placed on top of the shelf."
    },
    {
        "question": "He _______ been studying for three hours.",
        "choices": ["is", "has", "was", "have"],
        "answer": "has",
        "explanation": "'Has been studying' is the present perfect continuous tense."
    },
    {
        "question": "By the time we arrived, they _______ already left.",
        "choices": ["have", "had", "are", "will"],
        "answer": "had",
        "explanation": "'Had left' is the past perfect tense used to indicate an action completed before another past action."
    },
    {
        "question": "The teacher asked the students _______ quiet.",
        "choices": ["be", "to be", "being", "been"],
        "answer": "to be",
        "explanation": "'To be' is the infinitive form used after 'asked' in indirect requests."
    },
    {
        "question": "If it _______ tomorrow, we will stay home.",
        "choices": ["rains", "rained", "will rain", "rain"],
        "answer": "rains",
        "explanation": "In first conditional sentences, the present simple is used in the 'if' clause."
    },
    {
        "question": "He is _______ than his brother.",
        "choices": ["taller", "tall", "more tall", "most tall"],
        "answer": "taller",
        "explanation": "'Taller' is the comparative form of 'tall' used to compare two people."
    },
    {
        "question": "Choose the correct verb form: She _______ to the store every day.",
        "choices": ["go", "goes", "going", "gone"],
        "answer": "goes",
        "explanation": "'Goes' is the present simple form used with 'she'."
    },
    {
        "question": "The company is _______ a new product.",
        "choices": ["developing", "develop", "develops", "developed"],
        "answer": "developing",
        "explanation": "'Developing' is the present continuous form used to describe an action in progress."
    },
    {
        "question": "Choose the correct preposition: The book is _______ the table.",
        "choices": ["in", "on", "at", "to"],
        "answer": "on",
        "explanation": "The preposition 'on' is used to indicate that the book is physically touching the table."
    },
    {
        "question": "Which word best completes the sentence: She is a _______ student.",
        "choices": ["good", "well", "better", "best"],
        "answer": "good",
        "explanation": "'Good student' is the correct collocation."
    },
    {
        "question": "The company has _______ a new marketing strategy.",
        "choices": ["developed", "develop", "developing", "develops"],
        "answer": "developed",
        "explanation": "'Developed' is the past participle form used in the present perfect tense."
    },
    {
        "question": "Choose the correct pronoun: _______ are going to the party.",
        "choices": ["Us", "We", "Ours", "Our"],
        "answer": "We",
        "explanation": "'We' is the subject pronoun used when the speakers are part of the group performing the action."
    },
    {
        "question": "Which phrase means 'to be very nervous or anxious'?",
        "choices": ["To have butterflies in your stomach", "To be a cold fish", "To have a chip on your shoulder", "To be a couch potato"],
        "answer": "To have butterflies in your stomach",
        "explanation": "'To have butterflies in your stomach' is an idiom meaning to be very nervous or anxious."
    },
    {
        "question": "Choose the synonym of 'abundant'.",
        "choices": ["scarce", "plentiful", "sparse", "meager"],
        "answer": "plentiful",
        "explanation": "'Abundant' and 'plentiful' both mean existing in large quantities."
    },
    {
        "question": "She is interested _______ learning new languages.",
        "choices": ["in", "at", "on", "to"],
        "answer": "in",
        "explanation": "The preposition 'in' is used with 'interested' to indicate the object of interest."
    },
    {
        "question": "The meeting will be held _______ Monday morning.",
        "choices": ["in", "at", "on", "to"],
        "answer": "on",
        "explanation": "The preposition 'on' is used with days of the week."
    },
    {
        "question": "Choose the correctly structured sentence:",
        "choices": ["He to the store went.", "Went he to the store.", "He went to the store.", "To the store he went."],
        "answer": "He went to the store.",
        "explanation": "The correct sentence structure is subject-verb-object/complement."
    },
    {
        "question": "They arrived _______ the airport late.",
        "choices": ["to", "at", "in", "on"],
        "answer": "at",
        "explanation": "The preposition 'at' is used with specific locations like 'the airport'."
    },
    {
        "question": "The book is _______ the shelf.",
        "choices": ["under", "on", "beside", "within"],
        "answer": "on",
        "explanation": "The preposition 'on' indicates that the book is placed on top of the shelf."
    },
    {
        "question": "He _______ been studying for three hours.",
        "choices": ["is", "has", "was", "have"],
        "answer": "has",
        "explanation": "'Has been studying' is the present perfect continuous tense."
    },
    {
        "question": "By the time we arrived, they _______ already left.",
        "choices": ["have", "had", "are", "will"],
        "answer": "had",
        "explanation": "'Had left' is the past perfect tense used to indicate an action completed before another past action."
    },
    {
        "question": "The teacher asked the students _______ quiet.",
        "choices": ["be", "to be", "being", "been"],
        "answer": "to be",
        "explanation": "'To be' is the infinitive form used after 'asked' in indirect requests."
    },
    {
        "question": "If it _______ tomorrow, we will stay home.",
        "choices": ["rains", "rained", "will rain", "rain"],
        "answer": "rains",
        "explanation": "In first conditional sentences, the present simple is used in the 'if' clause."
    },
    {
        "question": "He is _______ than his brother.",
        "choices": ["taller", "tall", "more tall", "most tall"],
        "answer": "taller",
        "explanation": "'Taller' is the comparative form of 'tall' used to compare two people."
    },
    {
        "question": "Choose the correct verb form: She _______ to the store every day.",
        "choices": ["go", "goes", "going", "gone"],
        "answer": "goes",
        "explanation": "'Goes' is the present simple form used with 'she'."
    },
    {
        "question": "The company is _______ a new product.",
        "choices": ["developing", "develop", "develops", "developed"],
        "answer": "developing",
        "explanation": "'Developing' is the present continuous form used to describe an action in progress."
    },
    {
        "question": "Arrange the words to form a correct sentence: 'the / quickly / dog / ran'.",
        "choices": ["ran the dog quickly", "the dog ran quickly", "quickly ran the dog", "dog quickly the ran"],
        "answer": "the dog ran quickly",
        "explanation": "The correct order is subject-verb-adverb."
    },
    {
        "question": "Arrange: 'she / to / the / store / went'.",
        "choices": ["went she to the store", "she went the store to", "she to the store went", "she went to the store"],
        "answer": "she went to the store",
        "explanation": "Subject-verb-prepositional phrase."
    },
    {
        "question": "Arrange: 'a / beautiful / has / garden / she'.",
        "choices": ["she has a beautiful garden", "garden she has a beautiful", "beautiful she has a garden", "a garden she has beautiful"],
        "answer": "she has a beautiful garden",
        "explanation": "Subject-verb-article-adjective-noun."
    },
    {
        "question": "Arrange: 'always / on / time / they / arrive'.",
        "choices": ["they always arrive on time", "arrive they always on time", "on time they always arrive", "always they arrive on time"],
        "answer": "they always arrive on time",
        "explanation": "Adverbs of frequency usually go before the main verb."
    },
    {
        "question": "Arrange: 'yesterday / a / book / bought / I'.",
        "choices": ["I bought a book yesterday", "yesterday I bought a book", "bought I a book yesterday", "a book I bought yesterday"],
        "answer": "I bought a book yesterday",
        "explanation": "Subject-verb-object-adverbial of time."
    },
    {
        "question": "Arrange: 'to / the / park / going / are / we'.",
        "choices": ["we are going to the park", "going we are to the park", "to the park we are going", "are we going to the park"],
        "answer": "we are going to the park",
        "explanation": "Subject-auxiliary verb-main verb-prepositional phrase."
    },
    {
        "question": "Arrange: 'very / the / is / tall / building'.",
        "choices": ["the building is tall very", "is the building very tall", "the building is very tall", "very tall the building is"],
        "answer": "the building is very tall",
        "explanation": "Subject-verb-adverb-adjective."
    },
    {
        "question": "Arrange: 'her / gave / flowers / he'.",
        "choices": ["he gave flowers her", "flowers he gave her", "he gave her flowers", "her flowers he gave"],
        "answer": "he gave her flowers",
        "explanation": "Subject-verb-indirect object-direct object."
    },
    {
        "question": "Arrange: 'does / she / work / where'.",
        "choices": ["where does she work", "she does work where", "work where does she", "does where she work"],
        "answer": "where does she work",
        "explanation": "Question word-auxiliary verb-subject-main verb."
    },
    {
        "question": "Arrange: 'the / table / on / books / are'.",
        "choices": ["books are on the table", "on the table are books", "are books the table on", "the table on books are"],
        "answer": "books are on the table",
        "explanation": "Subject-verb-prepositional phrase."
    },
    {
        "question": "Arrange: 'made / a / cake / delicious / she'.",
        "choices": ["she made a delicious cake", "a delicious cake she made", "made she a delicious cake", "cake she made a delicious"],
        "answer": "she made a delicious cake",
        "explanation": "Subject-verb-article-adjective-noun."
    },
    {
        "question": "Arrange: 'often / visits / he / his / parents'.",
        "choices": ["he visits often his parents", "he often visits his parents", "his parents often he visits", "visits he often his parents"],
        "answer": "he often visits his parents",
        "explanation": "Adverbs of frequency usually go before the main verb."
    },
    {
        "question": "Arrange: 'to / learn / English / wants / she'.",
        "choices": ["she wants to learn English", "to learn she wants English", "English she wants to learn", "wants she to learn English"],
        "answer": "she wants to learn English",
        "explanation": "Subject-verb-infinitive phrase."
    },
    {
        "question": "Arrange: 'the / quickly / cat / jumped'.",
        "choices": ["jumped the cat quickly", "the cat jumped quickly", "quickly jumped the cat", "cat quickly the jumped"],
        "answer": "the cat jumped quickly",
        "explanation": "Subject-verb-adverb."
    },
    {
        "question": "Arrange: 'a / new / car / bought / they'.",
        "choices": ["they bought a new car", "a new car they bought", "bought they a new car", "car they bought a new"],
        "answer": "they bought a new car",
        "explanation": "Subject-verb-article-adjective-noun."
    },
    {
        "question": "Arrange: 'is / he / where / going'.",
        "choices": ["where is he going", "he is going where", "going he is where", "is where he going"],
        "answer": "where is he going",
        "explanation": "Question word-auxiliary verb-subject-main verb."
    },
    {
        "question": "Arrange: 'very / the / is / cold / water'.",
        "choices": ["the water is cold very", "is the water very cold", "the water is very cold", "very cold the water is"],
        "answer": "the water is very cold",
        "explanation": "Subject-verb-adverb-adjective."
    },
    {
        "question": "Arrange: 'him / a / book / gave / she'.",
        "choices": ["she gave a book him", "a book she gave him", "she gave him a book", "him a book she gave"],
        "answer": "she gave him a book",
        "explanation": "Subject-verb-indirect object-direct object."
    },
    {
        "question": "Arrange: 'does / he / live / where'.",
        "choices": ["where does he live", "he does live where", "live where does he", "does where he live"],
        "answer": "where does he live",
        "explanation": "Question word-auxiliary verb-subject-main verb."
    },
    {
        "question": "Arrange: 'in / the / park / flowers / are'.",
        "choices": ["flowers are in the park", "in the park are flowers", "are flowers the park in", "the park in flowers are"],
        "answer": "flowers are in the park",
        "explanation": "Subject-verb-prepositional phrase."
    },
    {
        "question": "If it rains, I ___ stay at home.",
        "choices": ["will", "would", "would have", "am"],
        "answer": "will",
        "explanation": "This is a Type 1 conditional (real possibility): If + present simple, will + infinitive."
    },
    {
        "question": "If I had more time, I ___ travel more.",
        "choices": ["will", "would", "would have", "am"],
        "answer": "would",
        "explanation": "This is a Type 2 conditional (hypothetical): If + past simple, would + infinitive."
    },
    {
        "question": "If she had studied harder, she ___ passed the exam.",
        "choices": ["will", "would", "would have", "am"],
        "answer": "would have",
        "explanation": "This is a Type 3 conditional (past unreal): If + past perfect, would have + past participle."
    },
    {
        "question": "If you heat water, it ___ boils.",
        "choices": ["will", "would", "would have", "always"],
        "answer": "always",
        "explanation": "This is a Type 0 conditional (general truth): If + present simple, present simple."
    },
    {
        "question": "If he ___ earlier, he wouldn't have missed the train.",
        "choices": ["arrives", "arrived", "had arrived", "will arrive"],
        "answer": "had arrived",
        "explanation": "Type 3 conditional: If + past perfect, would have + past participle."
    },
    {
        "question": "If they ___ me, I would help them.",
        "choices": ["ask", "asked", "had asked", "will ask"],
        "answer": "asked",
        "explanation": "Type 2 conditional: If + past simple, would + infinitive."
    },
    {
        "question": "If she ___ the truth, everyone would know.",
        "choices": ["tells", "told", "had told", "will tell"],
        "answer": "told",
        "explanation": "Type 2 conditional: If + past simple, would + infinitive."
    },
    {
        "question": "If you ___ to the party, you will have fun.",
        "choices": ["go", "went", "had gone", "will go"],
        "answer": "go",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "If I ___ won the lottery, I would buy a house.",
        "choices": ["am", "was", "were", "had"],
        "answer": "were",
        "explanation": "Type 2 conditional, subjunctive 'were' is correct in this context."
    },
    {
        "question": "If he ___ late again, he will be fired.",
        "choices": ["is", "was", "were", "had been"],
        "answer": "is",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "If we ___ enough money, we would have gone on vacation.",
        "choices": ["have", "had", "would have", "will have"],
        "answer": "had",
        "explanation": "Type 3 conditional: If + past perfect, would have + past participle."
    },
    {
        "question": "If you ___ the instructions, you won't make mistakes.",
        "choices": ["follow", "followed", "had followed", "will follow"],
        "answer": "follow",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "If she ___ me know, I would have helped her.",
        "choices": ["tells", "told", "had told", "will tell"],
        "answer": "had told",
        "explanation": "Type 3 conditional: If + past perfect, would have + past participle."
    },
    {
        "question": "If they ___ harder, they would succeed.",
        "choices": ["try", "tried", "had tried", "will try"],
        "answer": "tried",
        "explanation": "Type 2 conditional: If + past simple, would + infinitive."
    },
    {
        "question": "If he ___ the truth, he won't be in trouble.",
        "choices": ["tells", "told", "had told", "will tell"],
        "answer": "tells",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "If I ___ you, I wouldn't do that.",
        "choices": ["am", "was", "were", "had been"],
        "answer": "were",
        "explanation": "Type 2 conditional, subjunctive 'were' is correct in this context."
    },
    {
        "question": "If they ___ earlier, they would be on time.",
        "choices": ["leave", "left", "had left", "will leave"],
        "answer": "left",
        "explanation": "Type 2 conditional: If + past simple, would + infinitive."
    },
    {
        "question": "If she ___ the test, she will be happy.",
        "choices": ["passes", "passed", "had passed", "will pass"],
        "answer": "passes",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "If he ___ me, I would have gone.",
        "choices": ["asks", "asked", "had asked", "will ask"],
        "answer": "had asked",
        "explanation": "Type 3 conditional: If + past perfect, would have + past participle."
    },
    {
        "question": "If you ___ me, I will help you.",
        "choices": ["ask", "asked", "had asked", "will ask"],
        "answer": "ask",
        "explanation": "Type 1 conditional: If + present simple, will + infinitive."
    },
    {
        "question": "I wish I ___ studied harder for the exam.",
        "choices": ["have", "had", "would have", "will have"],
        "answer": "had",
        "explanation": "Wishes about the past use 'had' + past participle."
    },
    {
        "question": "She regrets ___ the opportunity to travel.",
        "choices": ["missing", "miss", "missed", "will miss"],
        "answer": "missing",
        "explanation": "Regrets often use 'regret' + gerund (-ing form)."
    },
    {
        "question": "If only I ___ more patient with her.",
        "choices": ["am", "was", "were", "had been"],
        "answer": "had been",
        "explanation": "Expressing regret about the past uses 'had been'."
    },
    {
        "question": "They wish they ___ more time to relax.",
        "choices": ["have", "had", "will have", "are having"],
        "answer": "had",
        "explanation": "Wishes about the present use past simple."
    },
    {
        "question": "He regrets ___ his temper.",
        "choices": ["losing", "lose", "lost", "will lose"],
        "answer": "losing",
        "explanation": "Regrets often use 'regret' + gerund (-ing form)."
    },
    {
        "question": "What ___ you do if you won the lottery? (Open)",
        "choices": ["Open question, no specific choices"],
        "answer": "Open question, no specific answer",
        "explanation": "Open question, requires a detailed response."
    },
    {
        "question": "Where ___ you go on your last vacation? (Open)",
        "choices": ["Open question, no specific choices"],
        "answer": "Open question, no specific answer",
        "explanation": "Open question, requires a detailed response."
    },
    {
        "question": "Why ___ you choose to study English? (Open)",
        "choices": ["Open question, no specific choices"],
        "answer": "Open question, no specific answer",
        "explanation": "Open question, requires a detailed response."
    },
    {
        "question": "How ___ you feel about the new policy? (Open)",
        "choices": ["Open question, no specific choices"],
        "answer": "Open question, no specific answer",
        "explanation": "Open question, requires a detailed response."
    },
    {
        "question": "Can you swim? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Did you finish your homework? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Are you coming to the party? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Have you ever traveled abroad? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Do you like chocolate? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "She wishes she ___ more friends.",
        "choices": ["has", "had", "will have", "is having"],
        "answer": "had",
        "explanation": "Wishes about the present use past simple."
    },
    {
        "question": "He regrets not ___ his parents more often.",
        "choices": ["visiting", "visit", "visited", "will visit"],
        "answer": "visiting",
        "explanation": "Regrets often use 'regret' + gerund (-ing form)."
    },
    {
        "question": "If only they ___ listened to my advice.",
        "choices": ["listen", "listened", "had listened", "will listen"],
        "answer": "had listened",
        "explanation": "Expressing regret about the past uses 'had' + past participle."
    },
    {
        "question": "I wish I ___ speak another language fluently.",
        "choices": ["can", "could", "will be able to", "am able to"],
        "answer": "could",
        "explanation": "Wishes about abilities in the present use 'could'."
    },
    {
        "question": "She regrets ___ the last train.",
        "choices": ["missing", "miss", "missed", "will miss"],
        "answer": "missing",
        "explanation": "Regrets often use 'regret' + gerund (-ing form)."
    },
    {
        "question": "Have you eaten dinner? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Did you see the movie? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Are you ready to go? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Do you have any questions? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Can you play the guitar? (Closed)",
        "choices": ["Yes", "No"],
        "answer": "Yes/No",
        "explanation": "Closed question, requires a 'yes' or 'no' answer."
    },
    {
        "question": "Direct: Where is the library?",
        "choices": ["Could you tell me where the library is?", "Where is the library?", "Do you know where is the library?", "Tell me where the library is."],
        "answer": "Where is the library?",
        "explanation": "This is a direct question asking for the location of the library."
    },
    {
        "question": "Indirect: Could you tell me ___ the library is?",
        "choices": ["where", "is where", "if where", "that where"],
        "answer": "where",
        "explanation": "Indirect questions use 'where' and maintain standard sentence order."
    },
    {
        "question": "Direct: What time does the train leave?",
        "choices": ["Can you tell me what time the train leaves?", "What time does the train leave?", "Do you know what time leaves the train?", "Tell me what time leaves the train."],
        "answer": "What time does the train leave?",
        "explanation": "This is a direct question asking for the train's departure time."
    },
    {
        "question": "Indirect: Do you know ___ the train leaves?",
        "choices": ["what time", "does what time", "if what time", "that what time"],
        "answer": "what time",
        "explanation": "Indirect questions use 'what time' and maintain standard sentence order."
    },
    {
        "question": "Direct: Are you coming to the party?",
        "choices": ["Could you tell me if you are coming to the party?", "Are you coming to the party?", "Do you know are you coming to the party?", "Tell me if you are coming to the party."],
        "answer": "Are you coming to the party?",
        "explanation": "This is a direct yes/no question."
    },
    {
        "question": "Indirect: Could you tell me ___ you are coming to the party?",
        "choices": ["if", "are", "that", "what"],
        "answer": "if",
        "explanation": "Indirect yes/no questions use 'if' or 'whether'."
    },
    {
        "question": "Direct: Did you finish the report?",
        "choices": ["Can you tell me if you finished the report?", "Did you finish the report?", "Do you know did you finish the report?", "Tell me if you finished the report."],
        "answer": "Did you finish the report?",
        "explanation": "This is a direct yes/no question in the past tense."
    },
    {
        "question": "Indirect: Do you know ___ I finished the report?",
        "choices": ["if", "did", "that", "what"],
        "answer": "if",
        "explanation": "Indirect yes/no questions use 'if' or 'whether'."
    },
    {
        "question": "Direct: Why did you leave?",
        "choices": ["Could you tell me why you left?", "Why did you leave?", "Do you know why left you?", "Tell me why left you."],
        "answer": "Why did you leave?",
        "explanation": "This is a direct question asking for a reason."
    },
    {
        "question": "Indirect: Could you tell me ___ you left?",
        "choices": ["why", "did why", "if why", "that why"],
        "answer": "why",
        "explanation": "Indirect questions use 'why' and maintain standard sentence order."
    },
    {
        "question": "She's a doctor, ___?",
        "choices": ["isn't she", "is she", "doesn't she", "does she"],
        "answer": "isn't she",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "They haven't arrived yet, ___?",
        "choices": ["have they", "haven't they", "do they", "don't they"],
        "answer": "have they",
        "explanation": "Negative statement, positive tag."
    },
    {
        "question": "You like coffee, ___?",
        "choices": ["don't you", "do you", "aren't you", "are you"],
        "answer": "don't you",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "He can swim, ___?",
        "choices": ["can't he", "can he", "doesn't he", "does he"],
        "answer": "can't he",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "We should go, ___?",
        "choices": ["shouldn't we", "should we", "don't we", "do we"],
        "answer": "shouldn't we",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "You were late, ___?",
        "choices": ["weren't you", "were you", "didn't you", "did you"],
        "answer": "weren't you",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "They won't come, ___?",
        "choices": ["will they", "won't they", "do they", "don't they"],
        "answer": "will they",
        "explanation": "Negative statement, positive tag."
    },
    {
        "question": "She has finished, ___?",
        "choices": ["hasn't she", "has she", "doesn't she", "does she"],
        "answer": "hasn't she",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "You didn't see him, ___?",
        "choices": ["did you", "didn't you", "do you", "don't you"],
        "answer": "did you",
        "explanation": "Negative statement, positive tag."
    },
    {
        "question": "We are going, ___?",
        "choices": ["aren't we", "are we", "don't we", "do we"],
        "answer": "aren't we",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "He will help, ___?",
        "choices": ["won't he", "will he", "doesn't he", "does he"],
        "answer": "won't he",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "You can swim, ___?",
        "choices": ["can't you", "can you", "don't you", "do you"],
        "answer": "can't you",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "They should go, ___?",
        "choices": ["shouldn't they", "should they", "don't they", "do they"],
        "answer": "shouldn't they",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "You were on time, ___?",
        "choices": ["weren't you", "were you", "didn't you", "did you"],
        "answer": "weren't you",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "She will come, ___?",
        "choices": ["won't she", "will she", "doesn't she", "does she"],
        "answer": "won't she",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "She has finished, ___?",
        "choices": ["hasn't she", "has she", "doesn't she", "does she"],
        "answer": "hasn't she",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "You didn't see him, ___?",
        "choices": ["did you", "didn't you", "do you", "don't you"],
        "answer": "did you",
        "explanation": "Negative statement, positive tag."
    },
    {
        "question": "We are going, ___?",
        "choices": ["aren't we", "are we", "don't we", "do we"],
        "answer": "aren't we",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "He will help, ___?",
        "choices": ["won't he", "will he", "doesn't he", "does he"],
        "answer": "won't he",
        "explanation": "Positive statement, negative tag."
    },
    {
        "question": "Direct: 'Where is the station?' Reported: He asked ___ the station was.",
        "choices": ["where", "is where", "if where", "that where"],
        "answer": "where",
        "explanation": "Reported questions maintain standard sentence order (subject-verb)."
    },
    {
        "question": "Direct: 'Are you coming?' Reported: She wanted to know ___ I was coming.",
        "choices": ["if", "am", "that", "what"],
        "answer": "if",
        "explanation": "Reported yes/no questions use 'if' or 'whether'."
    },
    {
        "question": "Direct: 'What time is it?' Reported: They asked ___ time it was.",
        "choices": ["what", "is what", "if what", "that what"],
        "answer": "what",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Did you see the movie?' Reported: He asked ___ I had seen the movie.",
        "choices": ["if", "did", "that", "what"],
        "answer": "if",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Why are you late?' Reported: She asked ___ I was late.",
        "choices": ["why", "am why", "if why", "that why"],
        "answer": "why",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Can you help me?' Reported: He asked ___ I could help him.",
        "choices": ["if", "can", "that", "what"],
        "answer": "if",
        "explanation": "'Can' changes to 'could' in reported speech."
    },
    {
        "question": "Direct: 'Where did they go?' Reported: She asked ___ they had gone.",
        "choices": ["where", "did where", "if where", "that where"],
        "answer": "where",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Will you be there?' Reported: He asked ___ I would be there.",
        "choices": ["if", "will", "that", "what"],
        "answer": "if",
        "explanation": "'Will' changes to 'would' in reported speech."
    },
    {
        "question": "Direct: 'How much does it cost?' Reported: They asked ___ it cost.",
        "choices": ["how much", "does how much", "if how much", "that how much"],
        "answer": "how much",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Have you finished?' Reported: She asked ___ I had finished.",
        "choices": ["if", "have", "that", "what"],
        "answer": "if",
        "explanation": "Present perfect changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'When will the meeting start?' Reported: He asked ___ the meeting would start.",
        "choices": ["when", "will when", "if when", "that when"],
        "answer": "when",
        "explanation": "'Will' changes to 'would' in reported speech."
    },
    {
        "question": "Direct: 'Are they coming to dinner?' Reported: She asked ___ they were coming to dinner.",
        "choices": ["if", "are", "that", "what"],
        "answer": "if",
        "explanation": "Present continuous changes to past continuous in reported speech."
    },
    {
        "question": "Direct: 'What did you buy?' Reported: He asked ___ I had bought.",
        "choices": ["what", "did what", "if what", "that what"],
        "answer": "what",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Do you know him?' Reported: She asked ___ I knew him.",
        "choices": ["if", "do", "that", "what"],
        "answer": "if",
        "explanation": "Present simple changes to past simple in reported speech."
    },
    {
        "question": "Direct: 'Where are you going?' Reported: He asked ___ I was going.",
        "choices": ["where", "are where", "if where", "that where"],
        "answer": "where",
        "explanation": "Present continuous changes to past continuous in reported speech."
    },
    {
        "question": "Direct: 'Have you seen my keys?' Reported: She asked ___ I had seen her keys.",
        "choices": ["if", "have", "that", "what"],
        "answer": "if",
        "explanation": "Present perfect changes to past perfect in reported speech, and possessive pronouns may change."
    },
    {
        "question": "Direct: 'When does the bus arrive?' Reported: He asked ___ the bus arrived.",
        "choices": ["when", "does when", "if when", "that when"],
        "answer": "when",
        "explanation": "Present simple changes to past simple in reported speech."
    },
    {
        "question": "Direct: 'Are you feeling well?' Reported: She asked ___ I was feeling well.",
        "choices": ["if", "are", "that", "what"],
        "answer": "if",
        "explanation": "Present continuous changes to past continuous in reported speech."
    },
    {
        "question": "Direct: 'Why did you call?' Reported: He asked ___ I had called.",
        "choices": ["why", "did why", "if why", "that why"],
        "answer": "why",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Can I use your phone?' Reported: She asked ___ she could use my phone.",
        "choices": ["if", "can", "that", "what"],
        "answer": "if",
        "explanation": "'Can' changes to 'could' in reported speech, and possessive pronouns may change."
    },
    {
        "question": "Direct: 'Where is the station?' Reported: He asked ___ the station was.",
        "choices": ["where", "is where", "if where", "that where"],
        "answer": "where",
        "explanation": "Reported questions maintain standard sentence order (subject-verb)."
    },
    {
        "question": "Direct: 'Are you coming?' Reported: She wanted to know ___ I was coming.",
        "choices": ["if", "am", "that", "what"],
        "answer": "if",
        "explanation": "Reported yes/no questions use 'if' or 'whether'."
    },
    {
        "question": "Direct: 'What time is it?' Reported: They asked ___ time it was.",
        "choices": ["what", "is what", "if what", "that what"],
        "answer": "what",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Did you see the movie?' Reported: He asked ___ I had seen the movie.",
        "choices": ["if", "did", "that", "what"],
        "answer": "if",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Why are you late?' Reported: She asked ___ I was late.",
        "choices": ["why", "am why", "if why", "that why"],
        "answer": "why",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Can you help me?' Reported: He asked ___ I could help him.",
        "choices": ["if", "can", "that", "what"],
        "answer": "if",
        "explanation": "'Can' changes to 'could' in reported speech."
    },
    {
        "question": "Direct: 'Where did they go?' Reported: She asked ___ they had gone.",
        "choices": ["where", "did where", "if where", "that where"],
        "answer": "where",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Will you be there?' Reported: He asked ___ I would be there.",
        "choices": ["if", "will", "that", "what"],
        "answer": "if",
        "explanation": "'Will' changes to 'would' in reported speech."
    },
    {
        "question": "Direct: 'How much does it cost?' Reported: They asked ___ it cost.",
        "choices": ["how much", "does how much", "if how much", "that how much"],
        "answer": "how much",
        "explanation": "Reported questions maintain standard sentence order."
    },
    {
        "question": "Direct: 'Have you finished?' Reported: She asked ___ I had finished.",
        "choices": ["if", "have", "that", "what"],
        "answer": "if",
        "explanation": "Present perfect changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'When will the meeting start?' Reported: He asked ___ the meeting would start.",
        "choices": ["when", "will when", "if when", "that when"],
        "answer": "when",
        "explanation": "'Will' changes to 'would' in reported speech."
    },
    {
        "question": "Direct: 'Are they coming to dinner?' Reported: She asked ___ they were coming to dinner.",
        "choices": ["if", "are", "that", "what"],
        "answer": "if",
        "explanation": "Present continuous changes to past continuous in reported speech."
    },
    {
        "question": "Direct: 'What did you buy?' Reported: He asked ___ I had bought.",
        "choices": ["what", "did what", "if what", "that what"],
        "answer": "what",
        "explanation": "Past simple changes to past perfect in reported speech."
    },
    {
        "question": "Direct: 'Do you know him?' Reported: She asked ___ I knew him.",
        "choices": ["if", "do", "that", "what"],
        "answer": "if",
        "explanation": "Present simple changes to past simple in reported speech."
    },
    {
        "question": "Direct: 'Where are you going?' Reported: He asked ___ I was going.",
        "choices": ["where", "are where", "if where", "that where"],
        "answer": "where",
        "explanation": "Present continuous changes to past continuous in reported speech."
    },
    {
        "question": "Direct: 'Have you seen my keys?' Reported: She asked ___ I had seen her keys.",
        "choices": ["if", "have", "that", "what"],
        "answer": "if",
        "explanation": "Present perfect changes to past perfect in reported speech, and possessive pronouns may change."
    },

    {
        "question": "The manager told the employees that if they didn't improve their performance, ___ would have to consider other options. Who does 'they' refer to?",
        "choices": ["The manager", "The employees", "Both the manager and employees", "It's ambiguous"],
        "answer": "The employees",
        "explanation": "In this context, 'they' refers to the employees as the subject of the conditional clause."
    },
    {
        "question": "Between John and Mary, ___ is responsible for the error?",
        "choices": ["who", "whom", "whomever", "which"],
        "answer": "who",
        "explanation": "'Who' is used as the subject of the sentence."
    },
    {
        "question": "The committee members discussed the proposal, but ___ decision remained unclear.",
        "choices": ["its", "their", "theirs", "it's"],
        "answer": "their",
        "explanation": "'Their' refers to the collective decision of the committee members."
    },
    {
        "question": "She gave the book to Sarah and myself, but then asked ___ to return it by tomorrow.",
        "choices": ["me", "I", "myself", "us"],
        "answer": "us",
        "explanation": "'Us' is the objective pronoun needed after the preposition 'to'."
    },
    {
        "question": "The students, some of ___ were late, missed the beginning of the lecture.",
        "choices": ["who", "whom", "which", "that"],
        "answer": "whom",
        "explanation": "'Whom' is used as the object of the preposition 'of'."
    },
    {
        "question": "Each of the applicants believes ___ is the most qualified.",
        "choices": ["he", "him", "themselves", "himself"],
        "answer": "himself",
        "explanation": "'Himself' is used reflexively to refer back to 'each of the applicants' individually."
    },
    {
        "question": "Neither the dog nor the cat would eat ___ food.",
        "choices": ["its", "their", "his", "hers"],
        "answer": "its",
        "explanation": "'Its' is the possessive pronoun used for non-human singular nouns."
    },
    {
        "question": "To ___ should I address this letter?",
        "choices": ["who", "whom", "whomever", "which"],
        "answer": "whom",
        "explanation": "'Whom' is used as the object of the preposition 'to'."
    },
    {
        "question": "The manager, along with his assistants, congratulated ___ on a successful project.",
        "choices": ["themselves", "himself", "them", "him"],
        "answer": "them",
        "explanation": "'Them' refers to the manager's assistants as the object of the verb 'congratulated'."
    },
    {
        "question": "It was ___ who solved the complex equation.",
        "choices": ["me", "I", "myself", "us"],
        "answer": "I",
        "explanation": "'I' is used after the verb 'was' to complete the subject complement."
    },
    {
        "question": "The team members, each bringing ___ own expertise, collaborated effectively.",
        "choices": ["their", "his", "her", "its"],
        "answer": "their",
        "explanation": "'Their' is used to refer to the team members collectively, even though each brings individual expertise."
    },
    {
        "question": "She found the missing documents between the books and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The company decided to give the award to ___ they believed had contributed the most.",
        "choices": ["whoever", "whomever", "who", "whom"],
        "answer": "whoever",
        "explanation": "'Whoever' is used as the subject of the clause 'they believed had contributed the most'."
    },
    {
        "question": "They told us that the responsibility was entirely ___.",
        "choices": ["our", "ours", "us", "we"],
        "answer": "ours",
        "explanation": "'Ours' is the possessive pronoun used as a predicate nominative."
    },
    {
        "question": "The speaker, addressing the audience, referred to ___ as the future leaders.",
        "choices": ["them", "they", "themselves", "us"],
        "answer": "them",
        "explanation": "'Them' refers to the audience as the object of the verb 'referred to'."
    },
    {
        "question": "The gift was for both my sister and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'for'."
    },
    {
        "question": "The organization, despite its challenges, maintained ___ integrity.",
        "choices": ["their", "its", "his", "her"],
        "answer": "its",
        "explanation": "'Its' is the possessive pronoun used for non-human singular nouns."
    },
    {
        "question": "The committee decided to allocate the funds to ___ they deemed most deserving.",
        "choices": ["whomever", "whoever", "who", "whom"],
        "answer": "whomever",
        "explanation": "'Whomever' is used as the object of the verb 'deemed'."
    },
    {
        "question": "Between you and ___, the truth must be told.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The group of artists, each expressing ___ unique style, created a diverse exhibition.",
        "choices": ["their", "his", "her", "its"],
        "answer": "their",
        "explanation": "'Their' is used to refer to the group of artists collectively, even though each has an individual style."
    },
    {
        "question": "She found the missing documents between the books and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The company decided to give the award to ___ they believed had contributed the most.",
        "choices": ["whoever", "whomever", "who", "whom"],
        "answer": "whoever",
        "explanation": "'Whoever' is used as the subject of the clause 'they believed had contributed the most'."
    },
    {
        "question": "They told us that the responsibility was entirely ___.",
        "choices": ["our", "ours", "us", "we"],
        "answer": "ours",
        "explanation": "'Ours' is the possessive pronoun used as a predicate nominative."
    },
    {
        "question": "The speaker, addressing the audience, referred to ___ as the future leaders.",
        "choices": ["them", "they", "themselves", "us"],
        "answer": "them",
        "explanation": "'Them' refers to the audience as the object of the verb 'referred to'."
    },
    {
        "question": "The gift was for both my sister and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'for'."
    },
    {
        "question": "The organization, despite its challenges, maintained ___ integrity.",
        "choices": ["their", "its", "his", "her"],
        "answer": "its",
        "explanation": "'Its' is the possessive pronoun used for non-human singular nouns."
    },
    {
        "question": "The committee decided to allocate the funds to ___ they deemed most deserving.",
        "choices": ["whomever", "whoever", "who", "whom"],
        "answer": "whomever",
        "explanation": "'Whomever' is used as the object of the verb 'deemed'."
    },
    {
        "question": "Between you and ___, the truth must be told.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The group of artists, each expressing ___ unique style, created a diverse exhibition.",
        "choices": ["their", "his", "her", "its"],
        "answer": "their",
        "explanation": "'Their' is used to refer to the group of artists collectively, even though each has an individual style."
    
    },
    {
        "question": "The manager told the employees that if they didn't improve their performance, ___ would have to consider other options. Who does 'they' refer to?",
        "choices": ["The manager", "The employees", "Both the manager and employees", "It's ambiguous"],
        "answer": "The employees",
        "explanation": "In this context, 'they' refers to the employees as the subject of the conditional clause."
    },
    {
        "question": "Between John and Mary, ___ is responsible for the error?",
        "choices": ["who", "whom", "whomever", "which"],
        "answer": "who",
        "explanation": "'Who' is used as the subject of the sentence."
    },
    {
        "question": "The committee members discussed the proposal, but ___ decision remained unclear.",
        "choices": ["its", "their", "theirs", "it's"],
        "answer": "their",
        "explanation": "'Their' refers to the collective decision of the committee members."
    },
    {
        "question": "She gave the book to Sarah and myself, but then asked ___ to return it by tomorrow.",
        "choices": ["me", "I", "myself", "us"],
        "answer": "us",
        "explanation": "'Us' is the objective pronoun needed after the preposition 'to'."
    },
    {
        "question": "The students, some of ___ were late, missed the beginning of the lecture.",
        "choices": ["who", "whom", "which", "that"],
        "answer": "whom",
        "explanation": "'Whom' is used as the object of the preposition 'of'."
    },
    {
        "question": "Each of the applicants believes ___ is the most qualified.",
        "choices": ["he", "him", "themselves", "himself"],
        "answer": "himself",
        "explanation": "'Himself' is used reflexively to refer back to 'each of the applicants' individually."
    },
    {
        "question": "Neither the dog nor the cat would eat ___ food.",
        "choices": ["its", "their", "his", "hers"],
        "answer": "its",
        "explanation": "'Its' is the possessive pronoun used for non-human singular nouns."
    },
    {
        "question": "To ___ should I address this letter?",
        "choices": ["who", "whom", "whomever", "which"],
        "answer": "whom",
        "explanation": "'Whom' is used as the object of the preposition 'to'."
    },
    {
        "question": "The manager, along with his assistants, congratulated ___ on a successful project.",
        "choices": ["themselves", "himself", "them", "him"],
        "answer": "them",
        "explanation": "'Them' refers to the manager's assistants as the object of the verb 'congratulated'."
    },
    {
        "question": "It was ___ who solved the complex equation.",
        "choices": ["me", "I", "myself", "us"],
        "answer": "I",
        "explanation": "'I' is used after the verb 'was' to complete the subject complement."
    },
    {
        "question": "The team members, each bringing ___ own expertise, collaborated effectively.",
        "choices": ["their", "his", "her", "its"],
        "answer": "their",
        "explanation": "'Their' is used to refer to the team members collectively, even though each brings individual expertise."
    },
    {
        "question": "She found the missing documents between the books and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The company decided to give the award to ___ they believed had contributed the most.",
        "choices": ["whoever", "whomever", "who", "whom"],
        "answer": "whoever",
        "explanation": "'Whoever' is used as the subject of the clause 'they believed had contributed the most'."
    },
    {
        "question": "They told us that the responsibility was entirely ___.",
        "choices": ["our", "ours", "us", "we"],
        "answer": "ours",
        "explanation": "'Ours' is the possessive pronoun used as a predicate nominative."
    },
    {
        "question": "The speaker, addressing the audience, referred to ___ as the future leaders.",
        "choices": ["them", "they", "themselves", "us"],
        "answer": "them",
        "explanation": "'Them' refers to the audience as the object of the verb 'referred to'."
    },
    {
        "question": "The gift was for both my sister and ___.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'for'."
    },
    {
        "question": "The organization, despite its challenges, maintained ___ integrity.",
        "choices": ["their", "its", "his", "her"],
        "answer": "its",
        "explanation": "'Its' is the possessive pronoun used for non-human singular nouns."
    },
    {
        "question": "The committee decided to allocate the funds to ___ they deemed most deserving.",
        "choices": ["whomever", "whoever", "who", "whom"],
        "answer": "whomever",
        "explanation": "'Whomever' is used as the object of the verb 'deemed'."
    },
    {
        "question": "Between you and ___, the truth must be told.",
        "choices": ["I", "me", "myself", "us"],
        "answer": "me",
        "explanation": "'Me' is used as the object of the preposition 'between'."
    },
    {
        "question": "The group of artists, each expressing ___ unique style, created a diverse exhibition.",
        "choices": ["their", "his", "her", "its"],
        "answer": "their",
        "explanation": "'Their' is used to refer to the group of artists collectively, even though each has an individual style."
    },

    {
        "question": "Which of the following sentences uses an adjective in its most nuanced comparative form to express a subtle difference?",
        "choices": ["This apple is slightly redder than that one.", "The ocean is more vast than the lake.", "He is the most intelligent person I know.", "She is quite taller than her sister."],
        "answer": "This apple is slightly redder than that one.",
        "explanation": "'Slightly redder' implies a subtle difference, showcasing nuanced comparison."
    },
    {
        "question": "In the sentence, 'The somewhat ambiguous statement left the audience perplexed,' which adjective modifies the noun with an implied negative connotation?",
        "choices": ["somewhat", "ambiguous", "perplexed", "left"],
        "answer": "ambiguous",
        "explanation": "'Ambiguous' implies a lack of clarity, leading to confusion (negative connotation)."
    },
    {
        "question": "Which adjective best describes a quality that is both subjective and context-dependent?",
        "choices": ["objective", "tangible", "ephemeral", "aesthetically pleasing"],
        "answer": "aesthetically pleasing",
        "explanation": "Aesthetic appeal is subjective and varies based on context and individual preferences."
    },
    {
        "question": "Select the sentence that uses a compound adjective to convey a complex emotional state.",
        "choices": ["He was tired.", "She felt happy.", "The long-awaited decision was finally made.", "The world-weary traveler sighed."],
        "answer": "The world-weary traveler sighed.",
        "explanation": "'World-weary' is a compound adjective expressing a complex emotional state."
    },
    {
        "question": "Which sentence uses an adjective in a way that creates an oxymoron?",
        "choices": ["The loud music was playing.", "The silent scream echoed in his mind.", "She wore a colorful dress.", "He had a cold drink."],
        "answer": "The silent scream echoed in his mind.",
        "explanation": "'Silent scream' combines contradictory terms to create an oxymoron."
    },
    {
        "question": "Choose the sentence that employs an adjective to create a synesthetic effect.",
        "choices": ["The sky was blue.", "The music was loud.", "The warm colors filled the room.", "The velvety voice painted a vivid picture."],
        "answer": "The velvety voice painted a vivid picture.",
        "explanation": "'Velvety voice' uses tactile imagery to describe an auditory experience (synesthesia)."
    },
    {
        "question": "Which of the following uses an adjective to create a paradox?",
        "choices": ["The sunny day was bright.", "The dark room was quiet.", "The heavy lightness of the situation weighed on him.", "The tall building stood proudly."],
        "answer": "The heavy lightness of the situation weighed on him.",
        "explanation": "'Heavy lightness' presents a paradoxical combination of qualities."
    },
    {
        "question": "In the sentence, 'The seemingly innocuous remark sparked a heated debate,' which adjective implies a deceptive appearance?",
        "choices": ["seemingly", "innocuous", "sparked", "heated"],
        "answer": "seemingly",
        "explanation": "'Seemingly' suggests that the remark appeared harmless but was not."
    },
    {
        "question": "Which adjective best describes a quality that is both intangible and pervasive?",
        "choices": ["solid", "visible", "ubiquitous", "concrete"],
        "answer": "ubiquitous",
        "explanation": "'Ubiquitous' describes something that is present everywhere, often intangibly."
    },
    {
        "question": "Select the sentence that uses an adjective to create a chiasmus (inverted parallelism).",
        "choices": ["He was tall and she was short.", "He was a great leader and a wise counselor.", "He was a generous friend and a friend generous.", "He was happy and she was sad."],
        "answer": "He was a generous friend and a friend generous.",
        "explanation": "The phrase 'a generous friend' is inverted to 'a friend generous' to create a chiasmus."
    },
    {
        "question": "Which sentence uses an adjective to create a zeugma (a figure of speech in which one word applies to two others in different senses)?",
        "choices": ["She wore a red dress.", "He lost his keys and his temper.", "The sun was shining.", "The flowers were blooming."],
        "answer": "He lost his keys and his temper.",
        "explanation": "'Lost' applies to both 'keys' (physically) and 'temper' (emotionally) in different senses."
    },
    {
        "question": "In the sentence, 'The subtly dissonant melody created an unsettling atmosphere,' which adjective implies a barely perceptible but disturbing quality?",
        "choices": ["subtly", "dissonant", "unsettling", "created"],
        "answer": "dissonant",
        "explanation": "'Dissonant' implies a lack of harmony, leading to an unsettling feeling."
    },
    {
        "question": "Which adjective best describes a quality that is both transient and transformative?",
        "choices": ["permanent", "stable", "mutable", "consistent"],
        "answer": "mutable",
        "explanation": "'Mutable' implies a quality that is subject to change and transformation over time."
    },
    {
        "question": "Select the sentence that uses an adjective to create a complex metonymy (substituting the name of an attribute or adjunct for that of the thing meant).",
        "choices": ["The sun was bright.", "The crown spoke to the people.", "The birds were singing.", "The trees were green."],
        "answer": "The crown spoke to the people.",
        "explanation": "'The crown' represents the monarch or royal authority, creating a metonymy."
    },
    {
        "question": "Which sentence uses an adjective to create a complex allegory?",
        "choices": ["The sky was blue.", "The city was busy.", "The dark forest represented the unknown.", "The river flowed smoothly."],
        "answer": "The dark forest represented the unknown.",
        "explanation": "The 'dark forest' serves as an allegory for the unknown, creating a symbolic representation."
    },
    {
        "question": "In the sentence, 'The deceptively simple question revealed a profound complexity,' which adjective implies a hidden depth?",
        "choices": ["deceptively", "simple", "revealed", "profound"],
        "answer": "deceptively",
        "explanation": "'Deceptively' suggests that the question appeared easy but was actually complex."
    },
    {
        "question": "Which adjective best describes a quality that is both inherent and paradoxical?",
        "choices": ["acquired", "external", "intrinsic", "superficial"],
        "answer": "intrinsic",
        "explanation": "'Intrinsic' describes a quality that is inherent, but can also be paradoxical in its manifestation."
    },
    {
        "question": "Select the sentence that uses an adjective to create a complex anastrophe (inversion of the usual order of words or clauses).",
        "choices": ["He was a good man.", "The man good was he.", "The bird flew high.", "The car was fast."],
        "answer": "The man good was he.",
        "explanation": "The usual order ('he was a good man') is inverted to 'the man good was he' to create an anastrophe."
    },
    {
        "question": "Which sentence uses an adjective to create a complex hypallage (an interchange of two words in a phrase)?",
        "choices": ["The sun shone brightly.", "The tired road led home.", "The flowers bloomed.", "The rain fell softly."],
        "answer": "The tired road led home.",
        "explanation": "The adjective 'tired' is logically associated with the traveler, not the road, creating a hypallage."
    },
    {
        "question": "In the sentence, 'The seemingly benign observation masked a critical judgment,' which adjective implies a hidden criticism?",
        "choices": ["seemingly", "benign", "masked", "critical"],
        "answer": "benign",
        "explanation": "'Benign' suggests a harmless appearance that hides a critical assessment."
    },
    {
        "question": "Which adverbial phrase most effectively conveys a sense of meticulous precision in the following sentence: 'The surgeon operated ___.'",
        "choices": ["quickly", "carefully", "with unparalleled dexterity", "merely"],
        "answer": "with unparalleled dexterity",
        "explanation": "This phrase suggests a high degree of skill and precision."
    },
    {
        "question": "In the sentence, 'The witness testified ___ under duress,' which adverb implies a lack of genuine volition?",
        "choices": ["freely", "reluctantly", "voluntarily", "openly"],
        "answer": "reluctantly",
        "explanation": "Reluctantly suggests the action was performed against one's will."
    },
    {
        "question": "Which adverb best modifies 'evolved' to suggest a gradual yet profound transformation?",
        "choices": ["suddenly", "rapidly", "imperceptibly", "momentarily"],
        "answer": "imperceptibly",
        "explanation": "Imperceptibly implies a slow, gradual change that is difficult to notice."
    },
    {
        "question": "Select the adverbial clause that most accurately conveys a condition of extreme improbability: 'He succeeded ___.'",
        "choices": ["easily", "with great effort", "against all odds", "normally"],
        "answer": "against all odds",
        "explanation": "This phrase indicates a highly improbable success."
    },
    {
        "question": "Which adverbial phrase best communicates a sense of calculated strategy in the following sentence: 'The chess player moved ___.'",
        "choices": ["randomly", "impulsively", "with deliberate intent", "casually"],
        "answer": "with deliberate intent",
        "explanation": "This phrase suggests a planned and strategic action."
    },
    {
        "question": "In the sentence, 'The evidence was presented ___ to sway the jury,' which adverb implies a manipulative intent?",
        "choices": ["objectively", "fairly", "strategically", "honestly"],
        "answer": "strategically",
        "explanation": "Strategically implies a calculated effort to influence the outcome."
    },
    {
        "question": "Which adverb best modifies 'analyzed' to suggest a thorough and exhaustive examination?",
        "choices": ["briefly", "superficially", "meticulously", "haphazardly"],
        "answer": "meticulously",
        "explanation": "Meticulously implies a detailed and careful analysis."
    },
    {
        "question": "Select the adverbial phrase that most accurately conveys a sense of unexpected immediacy: 'The news arrived ___.'",
        "choices": ["eventually", "gradually", "without warning", "predictably"],
        "answer": "without warning",
        "explanation": "This phrase suggests a sudden and unexpected occurrence."
    },
    {
        "question": "Which adverbial phrase best communicates a sense of profound irony in the following sentence: 'He spoke ___.'",
        "choices": ["sincerely", "earnestly", "with feigned sincerity", "truthfully"],
        "answer": "with feigned sincerity",
        "explanation": "This phrase implies a deceptive or ironic manner of speaking."
    },
    {
        "question": "In the sentence, 'The project was executed ___ to maximize efficiency,' which adverb implies a focus on optimizing results?",
        "choices": ["randomly", "inefficiently", "methodically", "spontaneously"],
        "answer": "methodically",
        "explanation": "Methodically suggests a systematic and efficient approach."
    },
    {
        "question": "Which adverb best modifies 'interpreted' to suggest a subjective and biased viewpoint?",
        "choices": ["objectively", "neutrally", "subjectively", "impartially"],
        "answer": "subjectively",
        "explanation": "Subjectively implies an interpretation based on personal feelings or opinions."
    },
    {
        "question": "Select the adverbial clause that most accurately conveys a sense of inevitable consequence: 'The decision was made ___.'",
        "choices": ["arbitrarily", "unpredictably", "as a foregone conclusion", "tentatively"],
        "answer": "as a foregone conclusion",
        "explanation": "This phrase indicates an outcome that was certain to happen."
    },
    {
        "question": "Which adverbial phrase best communicates a sense of subtle manipulation in the following sentence: 'He persuaded her ___.'",
        "choices": ["directly", "forcefully", "with subtle persuasion", "openly"],
        "answer": "with subtle persuasion",
        "explanation": "This phrase implies a gentle but effective form of influence."
    },
    {
        "question": "In the sentence, 'The data was analyzed ___ to reveal hidden patterns,' which adverb implies a deep dive into the information?",
        "choices": ["briefly", "cursorily", "thoroughly", "casually"],
        "answer": "thoroughly",
        "explanation": "Thoroughly suggests a comprehensive and in-depth analysis."
    },
    {
        "question": "Which adverb best modifies 'presented' to suggest a deceptive or misleading manner?",
        "choices": ["honestly", "transparently", "deceptively", "forthrightly"],
        "answer": "deceptively",
        "explanation": "Deceptively implies an intention to mislead or deceive."
    },
    {
        "question": "Select the adverbial clause that most accurately conveys a sense of unexpected disruption: 'The meeting was interrupted ___.'",
        "choices": ["routinely", "predictably", "abruptly", "gradually"],
        "answer": "abruptly",
        "explanation": "Abruptly suggests a sudden and unexpected interruption."
    },
    {
        "question": "Which adverbial phrase best communicates a sense of profound contemplation in the following sentence: 'She pondered ___.'",
        "choices": ["briefly", "superficially", "with deep introspection", "casually"],
        "answer": "with deep introspection",
        "explanation": "This phrase implies a thoughtful and reflective consideration."
    },
    {
        "question": "In the sentence, 'The plan was executed ___ to minimize risk,' which adverb implies a cautious and careful approach?",
        "choices": ["recklessly", "impulsively", "prudently", "haphazardly"],
        "answer": "prudently",
        "explanation": "Prudently suggests a careful and cautious execution."
    },
    {
        "question": "Which adverb best modifies 'communicated' to suggest a veiled or indirect message?",
        "choices": ["explicitly", "directly", "obliquely", "openly"],
        "answer": "obliquely",
        "explanation": "Obliquely implies an indirect or veiled communication."
    },
    {
        "question": "Select the adverbial clause that most accurately conveys a sense of inevitable decline: 'The situation deteriorated ___.'",
        "choices": ["suddenly", "unexpectedly", "inexorably", "momentarily"],
        "answer": "inexorably",
        "explanation": "Inexorably suggests an unstoppable and inevitable decline."
    },
    {
        "question": "He ran ___.",
        "choices": ["quickly", "slow", "sad", "happy"],
        "answer": "quickly",
        "explanation": "Quickly describes how he ran."
    },
    {
        "question": "She spoke ___.",
        "choices": ["loudly", "quiet", "red", "blue"],
        "answer": "loudly",
        "explanation": "Loudly describes how she spoke."
    },
    {
        "question": "They arrived ___.",
        "choices": ["late", "early", "green", "yellow"],
        "answer": "late",
        "explanation": "Late describes when they arrived."
    },
    {
        "question": "The cat jumped ___.",
        "choices": ["high", "low", "soft", "hard"],
        "answer": "high",
        "explanation": "High describes how the cat jumped."
    },
    {
        "question": "He smiled ___.",
        "choices": ["happily", "sad", "big", "small"],
        "answer": "happily",
        "explanation": "Happily describes how he smiled."
    },
    {
        "question": "She sang ___.",
        "choices": ["beautifully", "bad", "hot", "cold"],
        "answer": "beautifully",
        "explanation": "Beautifully describes how she sang."
    },
    {
        "question": "The rain fell ___.",
        "choices": ["heavily", "light", "fast", "slowly"],
        "answer": "heavily",
        "explanation": "Heavily describes how the rain fell."
    },
    {
        "question": "The children played ___.",
        "choices": ["outside", "inside", "tired", "hungry"],
        "answer": "outside",
        "explanation": "Outside describes where the children played."
    },
    {
        "question": "He finished the task ___.",
        "choices": ["quickly", "late", "angry", "sleepy"],
        "answer": "quickly",
        "explanation": "Quickly describes how he finished the task."
    },
    {
        "question": "She looked at him ___.",
        "choices": ["sadly", "happy", "big", "small"],
        "answer": "sadly",
        "explanation": "Sadly describes how she looked at him."
    },
    {
        "question": "The dog barked ___.",
        "choices": ["loudly", "quiet", "red", "blue"],
        "answer": "loudly",
        "explanation": "Loudly describes how the dog barked."
    },
    {
        "question": "They walked ___.",
        "choices": ["slowly", "fast", "hot", "cold"],
        "answer": "slowly",
        "explanation": "Slowly describes how they walked."
    },
    {
        "question": "He spoke ___ to his friend.",
        "choices": ["kindly", "mean", "big", "small"],
        "answer": "kindly",
        "explanation": "Kindly describes how he spoke."
    },
    {
        "question": "She wrote the letter ___.",
        "choices": ["carefully", "bad", "hot", "cold"],
        "answer": "carefully",
        "explanation": "Carefully describes how she wrote the letter."
    },
    {
        "question": "The wind blew ___.",
        "choices": ["strongly", "weak", "green", "yellow"],
        "answer": "strongly",
        "explanation": "Strongly describes how the wind blew."
    },
    {
        "question": "They ate their dinner ___.",
        "choices": ["quickly", "slow", "sad", "happy"],
        "answer": "quickly",
        "explanation": "Quickly describes how they ate their dinner."
    },
    {
        "question": "He listened ___ to the music.",
        "choices": ["carefully", "noisy", "red", "blue"],
        "answer": "carefully",
        "explanation": "Carefully describes how he listened."
    },
    {
        "question": "She danced ___.",
        "choices": ["gracefully", "bad", "hot", "cold"],
        "answer": "gracefully",
        "explanation": "Gracefully describes how she danced."
    },
    {
        "question": "The car moved ___.",
        "choices": ["slowly", "fast", "green", "yellow"],
        "answer": "slowly",
        "explanation": "Slowly describes how the car moved."
    },
    {
        "question": "He spoke ___ about his trip.",
        "choices": ["enthusiastically", "boring", "big", "small"],
        "answer": "enthusiastically",
        "explanation": "Enthusiastically describes how he spoke."
    },
    {
        "question": "She sang ___ at the concert.",
        "choices": ["beautifully", "bad", "hot", "cold"],
        "answer": "beautifully",
        "explanation": "Beautifully describes how she sang."
    },
    {
        "question": "The rain fell ___ during the storm.",
        "choices": ["heavily", "light", "fast", "slowly"],
        "answer": "heavily",
        "explanation": "Heavily describes how the rain fell."
    },
    {
        "question": "The children played ___ in the park.",
        "choices": ["outside", "inside", "tired", "hungry"],
        "answer": "outside",
        "explanation": "Outside describes where the children played."
    },
    {
        "question": "He finished the task ___ before the deadline.",
        "choices": ["quickly", "late", "angry", "sleepy"],
        "answer": "quickly",
        "explanation": "Quickly describes how he finished the task."
    },
    {
        "question": "She looked at him ___ with tears in her eyes.",
        "choices": ["sadly", "happy", "big", "small"],
        "answer": "sadly",
        "explanation": "Sadly describes how she looked at him."
    },
    {
        "question": "The dog barked ___ at the mailman.",
        "choices": ["loudly", "quiet", "red", "blue"],
        "answer": "loudly",
        "explanation": "Loudly describes how the dog barked."
    },
    {
        "question": "They walked ___ through the forest.",
        "choices": ["slowly", "fast", "hot", "cold"],
        "answer": "slowly",
        "explanation": "Slowly describes how they walked."
    },
    {
        "question": "He spoke ___ to his friend.",
        "choices": ["kindly", "mean", "big", "small"],
        "answer": "kindly",
        "explanation": "Kindly describes how he spoke."
    },
    {
        "question": "She wrote the letter ___ on the delicate paper.",
        "choices": ["carefully", "bad", "hot", "cold"],
        "answer": "carefully",
        "explanation": "Carefully describes how she wrote the letter."
    },
    {
        "question": "You ___ submit your assignment by Friday.",
        "choices": ["must", "may", "might", "could"],
        "answer": "must",
        "explanation": "'Must' expresses obligation or necessity."
    },
    {
        "question": "___ I borrow your pen, please?",
        "choices": ["Can", "Must", "Will", "Should"],
        "answer": "Can",
        "explanation": "'Can' is used for asking permission in informal situations."
    },
    {
        "question": "She ___ be at home; I saw her leave a few minutes ago.",
        "choices": ["must", "may", "might", "should"],
        "answer": "must",
        "explanation": "'Must' expresses strong probability or certainty."
    },
    {
        "question": "They ___ have arrived by now; their flight was on time.",
        "choices": ["must", "may", "might", "could"],
        "answer": "must",
        "explanation": "'Must have' expresses a logical conclusion about the past."
    },
    {
        "question": "You ___ not talk during the exam.",
        "choices": ["must", "may", "might", "could"],
        "answer": "must",
        "explanation": "'Must not' expresses prohibition."
    },
    {
        "question": "If you want to improve, you ___ practice regularly.",
        "choices": ["should", "may", "might", "could"],
        "answer": "should",
        "explanation": "'Should' expresses advice or recommendation."
    },
    {
        "question": "It ___ rain later; take an umbrella.",
        "choices": ["may", "must", "will", "should"],
        "answer": "may",
        "explanation": "'May' expresses possibility."
    },
    {
        "question": "He ___ swim when he was younger.",
        "choices": ["could", "must", "will", "should"],
        "answer": "could",
        "explanation": "'Could' expresses past ability."
    },
    {
        "question": "We ___ leave now, or we'll miss the train.",
        "choices": ["have to", "may", "might", "could"],
        "answer": "have to",
        "explanation": "'Have to' expresses necessity or obligation."
    },
    {
        "question": "___ you mind closing the window?",
        "choices": ["Would", "Must", "Will", "Should"],
        "answer": "Would",
        "explanation": "'Would' is used for polite requests."
    },
    {
        "question": "She ___ have known about the party; she looked surprised.",
        "choices": ["can't", "must", "may", "might"],
        "answer": "can't",
        "explanation": "'Can't have' expresses impossibility or disbelief about the past."
    },
    {
        "question": "They ___ have taken a taxi; they arrived so quickly.",
        "choices": ["must", "may", "might", "should"],
        "answer": "must",
        "explanation": "'Must have' expresses a logical deduction about the past."
    },
    {
        "question": "You ___ apologize for your behavior.",
        "choices": ["should", "may", "might", "could"],
        "answer": "should",
        "explanation": "'Should' expresses advice or recommendation."
    },
    {
        "question": "He ___ be telling the truth; I don't believe him.",
        "choices": ["can't", "must", "may", "might"],
        "answer": "can't",
        "explanation": "'Can't' expresses disbelief or impossibility in the present."
    },
    {
        "question": "___ you please pass the salt?",
        "choices": ["Could", "Must", "Will", "Should"],
        "answer": "Could",
        "explanation": "'Could' is used for polite requests."
    },
    {
        "question": "We ___ have finished the project by now, but we had some delays.",
        "choices": ["should", "may", "might", "could"],
        "answer": "should",
        "explanation": "'Should have' expresses an unfulfilled obligation or expectation in the past."
    },
    {
        "question": "She ___ play the piano very well when she was young.",
        "choices": ["could", "must", "will", "should"],
        "answer": "could",
        "explanation": "'Could' expresses past ability."
    },
    {
        "question": "They ___ not enter the building without authorization.",
        "choices": ["must", "may", "might", "could"],
        "answer": "must",
        "explanation": "'Must not' expresses prohibition."
    },
    {
        "question": "You ___ try the new restaurant; it's excellent.",
        "choices": ["should", "may", "might", "could"],
        "answer": "should",
        "explanation": "'Should' expresses advice or recommendation."
    },
    {
        "question": "He ___ have been mistaken; he's usually very accurate.",
        "choices": ["might", "must", "can't", "will"],
        "answer": "might",
        "explanation": "'Might have' expresses a possibility or speculation about the past."
    },
    {
        "question": "If you want to succeed, you ___ work hard.",
        "choices": ["have to", "may", "might", "could"],
        "answer": "have to",
        "explanation": "'Have to' expresses necessity or obligation."
    },
    {
        "question": "___ you please help me with this problem?",
        "choices": ["Would", "Must", "Will", "Should"],
        "answer": "Would",
        "explanation": "'Would' is used for polite requests."
    },
    {
        "question": "She ___ have forgotten about the meeting; she's usually very organized.",
        "choices": ["can't", "must", "may", "might"],
        "answer": "can't",
        "explanation": "'Can't have' expresses impossibility or disbelief about the past."
    },
    {
        "question": "They ___ have taken the wrong turn; they're lost.",
        "choices": ["must", "may", "might", "should"],
        "answer": "must",
        "explanation": "'Must have' expresses a logical deduction about the past."
    },
    {
        "question": "You ___ be more careful when handling delicate items.",
        "choices": ["should", "may", "might", "could"],
        "answer": "should",
        "explanation": "'Should' expresses advice or recommendation."
    },
    {
        "question": "He ___ be telling the truth; his story doesn't add up.",
        "choices": ["can't", "must", "may", "might"],
        "answer": "can't",
        "explanation": "'Can't' expresses disbelief or impossibility in the present."
    },
    {
        "question": "___ you mind passing me the salt?",
        "choices": ["Could", "Must", "Will", "Should"],
        "answer": "Could",
        "explanation": "'Could' is used for polite requests."
    },
    {
        "question": "We ___ have finished the project by now if we had worked faster.",
        "choices": ["should", "may", "might", "could"],
        "answer": "could",
        "explanation": "'Could have' expresses a possibility or ability in the past."
    },
    {
        "question": "She ___ play the guitar when she was younger.",
        "choices": ["could", "must", "will", "should"],
        "answer": "could",
        "explanation": "'Could' expresses past ability."
    },
    {
        "question": "Active: The dog chased the cat. Passive: The cat ___ by the dog.",
        "choices": ["chased", "was chased", "is chased", "chases"],
        "answer": "was chased",
        "explanation": "Passive voice uses 'was/were' + past participle."
    },
    {
        "question": "Active: She writes letters. Passive: Letters ___ by her.",
        "choices": ["write", "are written", "wrote", "writing"],
        "answer": "are written",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The cake was eaten by him. Active: He ___ the cake.",
        "choices": ["eats", "ate", "is eating", "will eat"],
        "answer": "ate",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The teacher taught the students. Passive: The students ___ by the teacher.",
        "choices": ["teach", "are taught", "were taught", "teaching"],
        "answer": "were taught",
        "explanation": "Passive voice uses 'was/were' + past participle."
    },
    {
        "question": "Passive: The window is cleaned by her. Active: She ___ the window.",
        "choices": ["clean", "cleans", "cleaned", "cleaning"],
        "answer": "cleans",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: They build houses. Passive: Houses ___ by them.",
        "choices": ["build", "are built", "built", "building"],
        "answer": "are built",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The car was driven by him. Active: He ___ the car.",
        "choices": ["drives", "drove", "is driving", "will drive"],
        "answer": "drove",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The chef cooks the meal. Passive: The meal ___ by the chef.",
        "choices": ["cook", "is cooked", "cooked", "cooking"],
        "answer": "is cooked",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The song is sung by her. Active: She ___ the song.",
        "choices": ["sing", "sings", "sang", "singing"],
        "answer": "sings",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The boy broke the glass. Passive: The glass ___ by the boy.",
        "choices": ["break", "is broken", "was broken", "breaking"],
        "answer": "was broken",
        "explanation": "Passive voice uses 'was/were' + past participle."
    },
    {
        "question": "Passive: The flowers are watered by them. Active: They ___ the flowers.",
        "choices": ["water", "waters", "watered", "watering"],
        "answer": "water",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: She reads books. Passive: Books ___ by her.",
        "choices": ["read", "are read", "reading", "reads"],
        "answer": "are read",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The letter was sent by him. Active: He ___ the letter.",
        "choices": ["send", "sent", "sending", "sends"],
        "answer": "sent",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The baker makes bread. Passive: Bread ___ by the baker.",
        "choices": ["make", "is made", "made", "making"],
        "answer": "is made",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The picture is drawn by her. Active: She ___ the picture.",
        "choices": ["draw", "draws", "drew", "drawing"],
        "answer": "draws",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: They sell fruits. Passive: Fruits ___ by them.",
        "choices": ["sell", "are sold", "sold", "selling"],
        "answer": "are sold",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The door was opened by him. Active: He ___ the door.",
        "choices": ["open", "opened", "opening", "opens"],
        "answer": "opened",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The student answers the question. Passive: The question ___ by the student.",
        "choices": ["answer", "is answered", "answered", "answering"],
        "answer": "is answered",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The story is told by her. Active: She ___ the story.",
        "choices": ["tell", "tells", "told", "telling"],
        "answer": "tells",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The artist paints pictures. Passive: Pictures ___ by the artist.",
        "choices": ["paint", "are painted", "painted", "painting"],
        "answer": "are painted",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The book is read by her. Active: She ___ the book.",
        "choices": ["read", "reads", "reading", "readed"],
        "answer": "reads",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: They repair cars. Passive: Cars ___ by them.",
        "choices": ["repair", "are repaired", "repaired", "repairing"],
        "answer": "are repaired",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The house was built by him. Active: He ___ the house.",
        "choices": ["build", "built", "building", "builds"],
        "answer": "built",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Active: The chef cooks the meal. Passive: The meal ___ by the chef.",
        "choices": ["cook", "is cooked", "cooked", "cooking"],
        "answer": "is cooked",
        "explanation": "Passive voice uses 'is/are' + past participle."
    },
    {
        "question": "Passive: The song is sung by her. Active: She ___ the song.",
        "choices": ["sing", "sings", "sang", "singing"],
        "answer": "sings",
        "explanation": "Active voice focuses on the doer of the action."
    },
    {
        "question": "Which sentence demonstrates the most effective use of a subordinate clause to create a complex periodic sentence?",
        "choices": [
            "He went to the store, and he bought milk.",
            "Because the weather was inclement, the event was postponed, which disappointed many.",
            "The event, which was postponed, disappointed many because of the inclement weather.",
            "The event was postponed; many were disappointed because of the weather."],
        "answer": "Because the weather was inclement, the event was postponed, which disappointed many.",
        "explanation": "This sentence delays the main clause ('the event was postponed') until after the subordinate clause ('Because the weather was inclement') and the relative clause ('which disappointed many'), creating a periodic structure."
    },
    {
        "question": "Which of the following sentences effectively employs a zeugma to create a rhetorical effect?",
        "choices": [
            "She ate cake and ice cream.",
            "He lost his keys and his temper.",
            "They went to the park and the zoo.",
            "I saw the dog and the cat."],
        "answer": "He lost his keys and his temper.",
        "explanation": "Zeugma uses one word to govern two or more others in a sentence, where the governing word has a different meaning for each. 'Lost' applies to keys (physical object) and temper (emotional state) differently."
    },
    {
        "question": "In the following sentence, 'The obsequious sycophant proffered his unsolicited advice,' which word choice contributes most to the negative connotation?",
        "choices": ["obsequious", "sycophant", "proffered", "unsolicited"],
        "answer": "sycophant",
        "explanation": "A 'sycophant' is a person who tries to gain favor by flattering influential people, which carries a strong negative connotation."
    },
    {
        "question": "Which sentence demonstrates the most sophisticated use of anaphora for rhetorical impact?",
        "choices": [
            "I like apples, I like oranges, I like bananas.",
            "We will fight, we will struggle, we will overcome.",
            "He came, he saw, he conquered.",
            "She sings, she dances, she acts."],
        "answer": "We will fight, we will struggle, we will overcome.",
        "explanation": "Anaphora is the repetition of a word or phrase at the beginning of successive clauses. This sentence uses it to build a powerful and emotional message."
    },
    {
        "question": "Which of the following sentences effectively uses hypallage to create a unique semantic effect?",
        "choices": [
            "The sun shone brightly.",
            "The tired road led home.",
            "The flowers bloomed.",
            "The river flowed smoothly."],
        "answer": "The tired road led home.",
        "explanation": "Hypallage is the interchange of two words in a phrase. 'Tired' logically applies to the traveler, not the road, creating a unique effect."
    },
    {
        "question": "In the sentence, 'The ostensibly benign remark masked a critical judgment,' which word choice suggests a hidden meaning?",
        "choices": ["ostensibly", "benign", "masked", "critical"],
        "answer": "masked",
        "explanation": "'Masked' implies that the remark hid a critical judgment, suggesting deception."
    },
    {
        "question": "Which sentence best demonstrates the use of a chiasmus for rhetorical balance and contrast?",
        "choices": [
            "He was tall and she was short.",
            "He was a great leader and a wise counselor.",
            "Ask not what your country can do for you; ask what you can do for your country.",
            "She sings and he dances."],
        "answer": "Ask not what your country can do for you; ask what you can do for your country.",
        "explanation": "Chiasmus is an inverted parallelism. This sentence inverts the order of 'your country' and 'you' to create a balanced contrast."
    },
    {
        "question": "Which of the following sentences effectively uses a metonymy to convey a complex concept?",
        "choices": [
            "The sun was bright.",
            "The crown spoke to the people.",
            "The birds were singing.",
            "The trees were green."],
        "answer": "The crown spoke to the people.",
        "explanation": "'The crown' represents the monarch or royal authority, using a metonymy to convey a complex concept."
    },
    {
        "question": "In the sentence, 'The inscrutable expression on his face belied his true intentions,' which word choice suggests an unreadable quality?",
        "choices": ["inscrutable", "expression", "belied", "intentions"],
        "answer": "inscrutable",
        "explanation": "'Inscrutable' means impossible to understand or interpret, suggesting an unreadable quality."
    },
    {
        "question": "Which sentence demonstrates the most effective use of an antithesis for rhetorical contrast?",
        "choices": [
            "He was happy and she was sad.",
            "It was the best of times, it was the worst of times.",
            "They went to the store and the park.",
            "I like apples and oranges."],
        "answer": "It was the best of times, it was the worst of times.",
        "explanation": "Antithesis is the juxtaposition of contrasting ideas in balanced phrases. This sentence uses direct opposites ('best' and 'worst') to create a strong contrast."
    },
    {
        "question": "Which sentence effectively uses a complex allegory to convey a deeper meaning?",
        "choices": [
            "The sky was blue.",
            "The city was busy.",
            "The dark forest represented the unknown, where hidden dangers and unforeseen challenges awaited.",
            "The river flowed smoothly."],
        "answer": "The dark forest represented the unknown, where hidden dangers and unforeseen challenges awaited.",
        "explanation": "This sentence uses the 'dark forest' as an allegory for the unknown, creating a symbolic representation of deeper meaning."
    },
    {
        "question": "In the sentence, 'The ephemeral beauty of the cherry blossoms reminded him of the transient nature of life,' which word choice conveys the idea of fleetingness?",
        "choices": ["ephemeral", "beauty", "cherry blossoms", "transient"],
        "answer": "ephemeral",
        "explanation": "'Ephemeral' means lasting for a very short time, conveying the idea of fleetingness."
    },
    {
        "question": "Which sentence demonstrates the most effective use of a polysyndeton to create a sense of overwhelming accumulation?",
        "choices": [
            "He ate apples, oranges, and bananas.",
            "He ran and jumped and swam.",
            "He came and he saw and he conquered.",
            "He ran and he jumped and he swam and he climbed."],
        "answer": "He ran and he jumped and he swam and he climbed.",
        "explanation": "Polysyndeton is the repetition of conjunctions in close succession. This sentence uses 'and' repeatedly to create a sense of overwhelming accumulation."
    },
    {
        "question": "Which sentence effectively uses a complex paradox to challenge conventional understanding?",
        "choices": [
            "The sun was bright.",
            "The dark room was quiet.",
            "The beginning of the end was now.",
            "The tall building stood proudly."],
        "answer": "The beginning of the end was now.",
        "explanation": "This sentence uses a paradox by combining 'beginning' and 'end' to create a thought-provoking contradiction."
    },
    {
        "question": "In the sentence, 'The insidious rumor spread like wildfire, poisoning the atmosphere,' which word choice suggests a subtle and harmful quality?",
        "choices": ["insidious", "rumor", "wildfire", "poisoning"],
        "answer": "insidious",
        "explanation": "'Insidious' means proceeding in a gradual, subtle way, but with harmful effects, suggesting a hidden danger."
    },
    {
        "question": "Which sentence demonstrates the most effective use of a litotes to create an understated rhetorical effect?",
        "choices": [
            "He was very happy.",
            "He was not unhappy.",
            "He was sad.",
            "He was joyful."],
        "answer": "He was not unhappy.",
        "explanation": "Litotes is an understatement in which an affirmative is expressed by the negative of the contrary. This sentence uses a double negative to understate a positive sentiment."
    },
    {
        "question": "Which sentence effectively uses a complex anastrophe to create a unique stylistic effect?",
        "choices": [
            "He was a good man.",
            "A man good was he.",
            "The bird flew high.",
            "The car was fast."],
        "answer": "A man good was he.",
        "explanation": "Anastrophe is the inversion of the usual order of words or clauses. This sentence inverts the typical subject-verb-object order to create a unique stylistic effect."
    },
    {
        "question": "In the sentence, 'The enigmatic stranger vanished into the night, leaving behind a trail of unanswered questions,' which word choice suggests a mysterious and puzzling quality?",
        "choices": ["enigmatic", "stranger", "vanished", "unanswered"],
        "answer": "enigmatic",
        "explanation": "'Enigmatic' means mysterious and difficult to understand, suggesting a puzzling quality."
    },
    {
        "question": "Which sentence demonstrates the most effective use of a rhetorical question to engage the reader?",
        "choices": [
            "What is the meaning of life?",
            "Is the sky blue?",
            "Do you want to go to the store?",
            "Are you listening to me?"],
        "answer": "What is the meaning of life?",
        "explanation": "This question is open-ended and invites contemplation, effectively engaging the reader."
    },
    {
        "question": "Which sentence effectively uses a complex oxymoron to create a striking contrast?",
        "choices": [
            "The sun was bright.",
            "The dark room was quiet.",
            "The deafening silence filled the room.",
            "The tall building stood proudly."],
        "answer": "The deafening silence filled the room.",
        "explanation": "Oxymoron is a figure of speech that combines contradictory terms. 'Deafening silence' creates a striking contrast between loudness and quietness."
    },
    {
        "question": "In the sentence, 'The cacophony of voices filled the room, drowning out all other sounds,' which word choice suggests a harsh and discordant quality?",
        "choices": ["cacophony", "voices", "filled", "drowning"],
        "answer": "cacophony",
        "explanation": "'Cacophony' means a harsh, discordant mixture of sounds, suggesting a jarring and unpleasant quality."
    },
    {
        "question": "Which sentence demonstrates the most effective use of a complex simile to create a vivid comparison?",
        "choices": [
            "He was tall.",
            "He was like a tree.",
            "The sun was bright.",
            "The river flowed smoothly."],
        "answer": "He was like a tree.",
        "explanation": "A simile is a comparison using 'like' or 'as.' This sentence vividly compares the person's height to a tree, creating a clear and evocative image."
    },
    {
        "question": "Which sentence effectively uses a complex allusion to reference a well-known literary work?",
        "choices": [
            "The sun was bright.",
            "The city was busy.",
            "He was like Romeo, pining for his lost love.",
            "The river flowed smoothly."],
        "answer": "He was like Romeo, pining for his lost love.",
        "explanation": "An allusion is a reference to a well-known literary work or historical event. This sentence alludes to Shakespeare's 'Romeo and Juliet,' adding depth and meaning to the comparison."
    },
    {
        "question": "In the sentence, 'The ominous clouds loomed overhead, signaling an approaching storm,' which word choice suggests a threatening and foreboding quality?",
        "choices": ["ominous", "clouds", "loomed", "approaching"],
        "answer": "ominous",
        "explanation": "'Ominous' means giving the impression that something bad or unpleasant is going to happen, suggesting a threatening and foreboding quality."
    },
    {
        "question": "Which sentence demonstrates the most nuanced use of correlative conjunctions to express a complex condition and its consequence?",
        "choices": [
            "Either he will come, or she will come.",
            "Not only did the evidence suggest culpability, but also the witness testimony implied guilt.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "Not only did the evidence suggest culpability, but also the witness testimony implied guilt.",
        "explanation": "This sentence uses 'not only...but also' to connect two complex ideas, showing a layered argument with nuanced implications."
    },
    {
        "question": "Which sentence effectively uses a subordinate conjunction to create a periodic sentence with a delayed main clause and a complex dependent clause?",
        "choices": [
            "He ran because he was late.",
            "Although the data was inconclusive, the researchers published their findings, which led to widespread debate.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Although the data was inconclusive, the researchers published their findings, which led to widespread debate.",
        "explanation": "This sentence begins with a subordinate clause ('Although...') and delays the main clause ('the researchers published...') until after a relative clause ('which led...'), creating a complex, periodic structure."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses with an implied contrast or concession?",
        "choices": [
            "He came, and she left.",
            "She was tired, yet she continued working.",
            "They ate and drank.",
            "I saw him, for he was there."],
        "answer": "She was tired, yet she continued working.",
        "explanation": "'Yet' connects two clauses with an implied contrast, indicating a concession despite the initial statement."
    },
    {
        "question": "Which sentence effectively uses a correlative conjunction to create a balanced structure with a sophisticated parallel construction?",
        "choices": [
            "He likes both apples and oranges.",
            "Whether he comes or not, I will go.",
            "The more you study, the more you learn.",
            "Neither the students nor the teacher came."],
        "answer": "The more you study, the more you learn.",
        "explanation": "This sentence uses 'the more...the more' to create a balanced structure, showing a direct correlation between two actions with sophisticated parallelism."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that significantly alters the interpretation of the main clause, creating a complex conditional relationship?",
        "choices": [
            "He ran because he was late.",
            "Unless the evidence is reevaluated, the verdict will stand, which could have serious implications.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Unless the evidence is reevaluated, the verdict will stand, which could have serious implications.",
        "explanation": "'Unless' introduces a condition that dramatically changes the outcome, and the relative clause adds further complexity."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a causal relationship, even though it is not explicitly stated?",
        "choices": [
            "He was late, so he missed the bus.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "She studied hard, for she wanted to pass.",
        "explanation": "'For' implies a causal relationship, even though it is not as direct as 'because' or 'so'."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex disjunctive argument with nuanced distinctions?",
        "choices": [
            "Either he will come, or she will come.",
            "Whether the data is valid or not, the conclusions remain contested.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "Whether the data is valid or not, the conclusions remain contested.",
        "explanation": "'Whether...or not' creates a complex disjunctive argument, highlighting the uncertainty and nuanced distinctions in the argument."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex temporal context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "While the debate raged, the committee deliberated, which ultimately led to a compromise.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "While the debate raged, the committee deliberated, which ultimately led to a compromise.",
        "explanation": "'While' introduces a temporal context that significantly affects the understanding of the committee's deliberation and outcome."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a sequential relationship, even though it is not explicitly stated?",
        "choices": [
            "He came, and he saw, and he conquered.",
            "She cooked, and he ate.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "She cooked, and he ate.",
        "explanation": "'And' implies a sequential relationship, as cooking typically precedes eating."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex comparative argument with nuanced parallels?",
        "choices": [
            "He likes both apples and oranges.",
            "The sooner you start, the sooner you finish.",
            "Whether he comes or not, I will go.",
            "Neither the students nor the teacher came."],
        "answer": "The sooner you start, the sooner you finish.",
        "explanation": "'The sooner...the sooner' creates a complex comparative argument, showing a direct and nuanced parallel between two actions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex spatial context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Wherever the evidence led, the detective followed, which revealed a complex conspiracy.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Wherever the evidence led, the detective followed, which revealed a complex conspiracy.",
        "explanation": "'Wherever' introduces a spatial context that significantly affects the understanding of the detective's investigation and its findings."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a contrast with a complex explanation?",
        "choices": [
            "He was tired, yet he continued working.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "He was tired, yet he continued working.",
        "explanation": "'Yet' implies a contrast with a complex explanation, as continuing despite tiredness requires further context."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex conditional argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "So long as the data is valid, the conclusions remain uncontested.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "So long as the data is valid, the conclusions remain uncontested.",
        "explanation": "'So long as' creates a complex conditional argument, showing a direct and nuanced implication between two conditions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex hypothetical context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Supposing the evidence were to change, the verdict would be overturned, which would lead to widespread reform.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Supposing the evidence were to change, the verdict would be overturned, which would lead to widespread reform.",
        "explanation": "'Supposing' introduces a hypothetical context that significantly affects the understanding of the verdict and its implications."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex conclusion with a nuanced explanation?",
        "choices": [
            "He was late, so he missed the bus.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "He was late, so he missed the bus.",
        "explanation": "'So' implies a complex conclusion with a nuanced explanation, as missing the bus could be due to various reasons beyond just being late."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex additive argument with nuanced distinctions?",
        "choices": [
            "Either he will come, or she will come.",
            "Not only did he apologize, but also he offered to make amends.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "Not only did he apologize, but also he offered to make amends.",
        "explanation": "'Not only...but also' creates a complex additive argument, showing a layered apology with nuanced distinctions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex concessive context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Though the evidence was compelling, the jury remained unconvinced, which highlighted the complexities of the case.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Though the evidence was compelling, the jury remained unconvinced, which highlighted the complexities of the case.",
        "explanation": "'Though' introduces a concessive context that significantly affects the understanding of the jury's decision and the case's complexities."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex contrast with a nuanced explanation?",
        "choices": [
            "He was tired, yet he continued working.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "He was tired, yet he continued working.",
        "explanation": "'Yet' implies a complex contrast with a nuanced explanation, as continuing despite tiredness requires further context and motivation."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex alternative argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "Whether you agree or disagree, the impact of the decision is undeniable.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "Whether you agree or disagree, the impact of the decision is undeniable.",
        "explanation": "'Whether...or' creates a complex alternative argument, showing a nuanced implication that the impact transcends individual opinions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex causal context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Since the evidence was inconclusive, the case remains open, which has led to ongoing investigations.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Since the evidence was inconclusive, the case remains open, which has led to ongoing investigations.",
        "explanation": "'Since' introduces a causal context that significantly affects the understanding of the case's status and the need for further investigations."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex comparison with a nuanced explanation?",
        "choices": [
            "He was late, so he missed the bus.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "She studied hard, for she wanted to pass.",
        "explanation": "'For' implies a complex comparison with a nuanced explanation, as the motivation for studying hard goes beyond just wanting to pass."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex causal argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "As the evidence suggests, the conclusions are clear and uncontested.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "As the evidence suggests, the conclusions are clear and uncontested.",
        "explanation": "'As...so' creates a complex causal argument, showing a direct and nuanced implication between the evidence and the conclusions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex conditional context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "If the evidence were to change, the outcome would be different, which could alter the course of the investigation.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "If the evidence were to change, the outcome would be different, which could alter the course of the investigation.",
        "explanation": "'If' introduces a conditional context that significantly affects the understanding of the investigation's potential outcomes and implications."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex condition with a nuanced explanation?",
        "choices": [
            "He was tired, yet he continued working.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "He was tired, yet he continued working.",
        "explanation": "'Yet' implies a complex condition with a nuanced explanation, as continuing despite tiredness requires further context and motivation."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex temporal argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "When the evidence is reevaluated, the truth will be revealed.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "When the evidence is reevaluated, the truth will be revealed.",
        "explanation": "'When...then' creates a complex temporal argument, showing a direct and nuanced implication between the reevaluation of evidence and the revelation of truth."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex concessive context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Although the evidence was compelling, the jury remained unconvinced, which highlighted the complexities of the case.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Although the evidence was compelling, the jury remained unconvinced, which highlighted the complexities of the case.",
        "explanation": "'Although' introduces a concessive context that significantly affects the understanding of the jury's decision and the case's complexities."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex contrast with a nuanced explanation?",
        "choices": [
            "He was tired, yet he continued working.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "He was tired, yet he continued working.",
        "explanation": "'Yet' implies a complex contrast with a nuanced explanation, as continuing despite tiredness requires further context and motivation."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex alternative argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "Whether you agree or disagree, the impact of the decision is undeniable.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "Whether you agree or disagree, the impact of the decision is undeniable.",
        "explanation": "'Whether...or' creates a complex alternative argument, showing a nuanced implication that the impact transcends individual opinions."
    },
    {
        "question": "Which sentence uses a subordinate conjunction to introduce a clause that provides a complex causal context, impacting the interpretation of the main clause?",
        "choices": [
            "He ran because he was late.",
            "Since the evidence was inconclusive, the case remains open, which has led to ongoing investigations.",
            "She sang, and he danced.",
            "If he comes, then she will leave."],
        "answer": "Since the evidence was inconclusive, the case remains open, which has led to ongoing investigations.",
        "explanation": "'Since' introduces a causal context that significantly affects the understanding of the case's status and the need for further investigations."
    },
    {
        "question": "In which sentence does a coordinate conjunction connect two clauses that imply a complex comparison with a nuanced explanation?",
        "choices": [
            "He was late, so he missed the bus.",
            "She studied hard, for she wanted to pass.",
            "They ate and drank.",
            "He fell, and he hurt himself."],
        "answer": "She studied hard, for she wanted to pass.",
        "explanation": "'For' implies a complex comparison with a nuanced explanation, as the motivation for studying hard goes beyond just wanting to pass."
    },
    {
        "question": "Which sentence effectively uses correlative conjunctions to create a complex causal argument with nuanced implications?",
        "choices": [
            "Either he will come, or she will come.",
            "As the evidence suggests, the conclusions are clear and uncontested.",
            "He was both tired and hungry.",
            "Neither the rain nor the wind deterred them."],
        "answer": "As the evidence suggests, the conclusions are clear and uncontested.",
        "explanation": "'As...so' creates a complex causal argument, showing a direct and nuanced implication between the evidence and the conclusions."
    },
    {
        "question": "In the sentence, 'I know what you did,' the clause 'what you did' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "The clause acts as the direct object of the verb 'know'."
    },
    {
        "question": "In the sentence, 'The book that I borrowed was interesting,' the clause 'that I borrowed' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adjective clause",
        "explanation": "The clause modifies the noun 'book'."
    },
    {
        "question": "In the sentence, 'He left when the rain started,' the clause 'when the rain started' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adverb clause",
        "explanation": "The clause modifies the verb 'left', indicating when."
    },
    {
        "question": "Which of the following sentences contains a noun clause functioning as the subject of the sentence?",
        "choices": ["I know where he lives.", "Where he lives is a mystery.", "He lives where it is warm.", "The house where he lives is big."],
        "answer": "Where he lives is a mystery.",
        "explanation": "The clause 'Where he lives' acts as the subject of the verb 'is'."
    },
    {
        "question": "In the sentence, 'Give the book to whoever needs it,' the clause 'whoever needs it' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "The clause acts as the object of the preposition 'to'."
    },
    {
        "question": "Which sentence contains an adjective clause modifying a noun acting as the object of a preposition?",
        "choices": ["The man who came is my friend.", "I live where it is quiet.", "Give the book to the person whom you trust.", "That he came is surprising."],
        "answer": "Give the book to the person whom you trust.",
        "explanation": "The clause 'whom you trust' modifies 'person', which is the object of 'to'."
    },
    {
        "question": "In the sentence, 'She will go wherever you go,' the clause 'wherever you go' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adverb clause",
        "explanation": "The clause modifies the verb 'will go', indicating where."
    },
    {
        "question": "Which of the following sentences contains a noun clause functioning as a predicate nominative?",
        "choices": ["I know what he said.", "What he said is true.", "My belief is that he is honest.", "He said that he would come."],
        "answer": "My belief is that he is honest.",
        "explanation": "The clause 'that he is honest' renames the subject 'belief'."
    },
    {
        "question": "In the sentence, 'The reason why he left is unclear,' the clause 'why he left' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "The clause acts as a predicate nominative, renaming the subject 'reason'."
    },
    {
        "question": "Which sentence contains an adjective clause modifying a noun acting as the subject of the sentence?",
        "choices": ["I saw him when he arrived.", "The book that was on the table is mine.", "He knows what he wants.", "She will go wherever you go."],
        "answer": "The book that was on the table is mine.",
        "explanation": "The clause 'that was on the table' modifies 'book', which is the subject."
    },
    {
        "question": "In the sentence, 'He spoke as if he knew everything,' the clause 'as if he knew everything' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adverb clause",
        "explanation": "The clause modifies the verb 'spoke', indicating how."
    },
    {
        "question": "Which of the following sentences contains a noun clause functioning as a direct object?",
        "choices": ["I know that he is coming.", "That he is coming is obvious.", "He is coming because he was invited.", "The place where he is coming is far."],
        "answer": "I know that he is coming.",
        "explanation": "The clause 'that he is coming' is the direct object of 'know'."
    },
    {
        "question": "In the sentence, 'The place where we met is beautiful,' the clause 'where we met' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adjective clause",
        "explanation": "The clause modifies the noun 'place'."
    },
    {
        "question": "Which sentence contains an adverb clause modifying an adjective?",
        "choices": ["He ran because he was late.", "She is as beautiful as a rose.", "I know what he wants.", "The book that I read was interesting."],
        "answer": "She is as beautiful as a rose.",
        "explanation": "The clause 'as a rose' modifies the adjective 'beautiful'."
    },
    {
        "question": "In the sentence, 'Tell me what you think,' the clause 'what you think' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "The clause is the direct object of the verb 'tell'."
    },
    {
        "question": "Which sentence contains an adjective clause modifying a pronoun?",
        "choices": ["The man who came is my friend.", "Whoever studies hard will succeed.", "He knows what he wants.", "She will go wherever you go."],
        "answer": "Whoever studies hard will succeed.",
        "explanation": "The clause 'whoever studies hard' modifies the pronoun 'whoever'."
    },
    {
        "question": "In the sentence, 'He arrived before the sun rose,' the clause 'before the sun rose' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adverb clause",
        "explanation": "The clause modifies the verb 'arrived', indicating when."
    },
    {
        "question": "Which of the following sentences contains a noun clause functioning as an appositive?",
        "choices": ["I know what he said.", "He said that he would come.", "His idea, that we should leave early, was wise.", "He left because he was tired."],
        "answer": "His idea, that we should leave early, was wise.",
        "explanation": "The clause 'that we should leave early' renames the noun 'idea'."
    },
    {
        "question": "In the sentence, 'The time when we met was memorable,' the clause 'when we met' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adjective clause",
        "explanation": "The clause modifies the noun 'time'."
    },
    {
        "question": "Which sentence contains an adverb clause modifying another adverb?",
        "choices": ["He ran because he was late.", "She spoke more softly than usual.", "I know what he wants.", "The book that I read was interesting."],
        "answer": "She spoke more softly than usual.",
        "explanation": "The clause 'than usual' modifies the adverb 'softly'."
    },
    {
        "question": "In the sentence, 'He will come if he is invited,' the clause 'if he is invited' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "adverb clause",
        "explanation": "The clause modifies the verb 'will come', indicating under what condition."
    },
    {
        "question": "Which of the following sentences contains a noun clause functioning as an indirect object?",
        "choices": ["I know what he said.", "What he said is true.", "He said that he would come.", "The house where he lives is big."],
        "answer": "He said that he would come.",
        "explanation": "The clause 'that he would come' is the indirect object of 'said'."
    },
    {
        "question": "In the sentence, 'The reason that he left is unclear,' the clause 'that he left' functions as a(n) ___.",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "The clause acts as a predicate nominative, renaming the subject 'reason'."
    },
    {
        "question": "In the sentence, 'The old dog barked loudly,' what is the subject?",
        "choices": ["dog", "old dog", "barked", "loudly"],
        "answer": "old dog",
        "explanation": "'Old dog' is the complete subject of the sentence."
    },
    {
        "question": "In the sentence, 'She gave him a book,' what is the indirect object?",
        "choices": ["she", "gave", "him", "book"],
        "answer": "him",
        "explanation": "'Him' is the recipient of the direct object 'book'."
    },
    {
        "question": "In the sentence, 'They elected him president,' what is the object complement?",
        "choices": ["they", "elected", "him", "president"],
        "answer": "president",
        "explanation": "'President' renames or describes the direct object 'him'."
    },
    {
        "question": "In the sentence, 'The weather is cold,' what is the subject complement?",
        "choices": ["the weather", "is", "cold", "weather"],
        "answer": "cold",
        "explanation": "'Cold' describes the subject 'weather'."
    },
    {
        "question": "Which of the following is a simple sentence?",
        "choices": ["He ran and jumped.", "He ran, but she walked.", "He ran quickly.", "Because he was late, he ran."],
        "answer": "He ran quickly.",
        "explanation": "A simple sentence contains one independent clause."
    },
    {
        "question": "Which of the following is a compound sentence?",
        "choices": ["He ran quickly.", "He ran, but she walked.", "Because he was late, he ran.", "He ran and jumped quickly."],
        "answer": "He ran, but she walked.",
        "explanation": "A compound sentence contains two or more independent clauses joined by a coordinating conjunction."
    },
    {
        "question": "Which of the following is a complex sentence?",
        "choices": ["He ran quickly.", "He ran, but she walked.", "Because he was late, he ran.", "He ran and jumped quickly."],
        "answer": "Because he was late, he ran.",
        "explanation": "A complex sentence contains one independent clause and one or more dependent clauses."
    },
    {
        "question": "In the sentence, 'Running quickly, he caught the bus,' what is the participial phrase?",
        "choices": ["running quickly", "he caught", "the bus", "he"],
        "answer": "running quickly",
        "explanation": "'Running quickly' is a participial phrase modifying 'he'."
    },
    {
        "question": "In the sentence, 'To finish the project, they worked late,' what is the infinitive phrase?",
        "choices": ["to finish the project", "they worked", "late", "they"],
        "answer": "to finish the project",
        "explanation": "'To finish the project' is an infinitive phrase functioning as an adverb."
    },
    {
        "question": "In the sentence, 'The book, which was old, had yellowed pages,' what is the relative clause?",
        "choices": ["the book", "which was old", "had yellowed pages", "book"],
        "answer": "which was old",
        "explanation": "'Which was old' is a relative clause modifying 'book'."
    },
    {
        "question": "In the sentence, 'He asked if she would come,' what type of clause is 'if she would come'?",
        "choices": ["adjective clause", "adverb clause", "noun clause", "independent clause"],
        "answer": "noun clause",
        "explanation": "'If she would come' acts as the direct object of 'asked'."
    },
    {
        "question": "In the sentence, 'The man wearing a hat is my uncle,' what is the appositive phrase?",
        "choices": ["the man", "wearing a hat", "is my uncle", "man"],
        "answer": "wearing a hat",
        "explanation": "'Wearing a hat' is a participial phrase, but also acting as an appositive to 'man'."
    },
    {
        "question": "In the sentence, 'She is considered a good teacher,' what is the predicate adjective?",
        "choices": ["she", "is", "considered", "good"],
        "answer": "good",
        "explanation": "'Good' describes the subject 'she'."
    },
    {
        "question": "In the sentence, 'He painted the wall blue,' what is the direct object?",
        "choices": ["he", "painted", "the wall", "blue"],
        "answer": "the wall",
        "explanation": "'The wall' is the receiver of the action 'painted'."
    },
    {
        "question": "In the sentence, 'They walked to the park,' what is the prepositional phrase?",
        "choices": ["they walked", "to the park", "walked", "they"],
        "answer": "to the park",
        "explanation": "'To the park' is a prepositional phrase acting as an adverb."
    },
    {
        "question": "In the sentence, 'The student, diligently studying, passed the exam,' what is the absolute phrase?",
        "choices": ["the student", "diligently studying", "passed the exam", "student"],
        "answer": "diligently studying",
        "explanation": "'Diligently studying' is an absolute phrase, modifying the whole sentence."
    },
    {
        "question": "In the sentence, 'She found the keys under the table,' what is the adverbial phrase?",
        "choices": ["she found", "the keys", "under the table", "found"],
        "answer": "under the table",
        "explanation": "'Under the table' is an adverbial phrase modifying 'found'."
    },
    {
        "question": "In the sentence, 'The car, a vintage model, was expensive,' what is the appositive?",
        "choices": ["the car", "a vintage model", "was expensive", "car"],
        "answer": "a vintage model",
        "explanation": "'A vintage model' renames 'car'."
    },
    {
        "question": "In the sentence, 'He gave the flowers to her,' what is the prepositional object?",
        "choices": ["he", "the flowers", "to her", "flowers"],
        "answer": "her",
        "explanation": "'Her' is the object of the preposition 'to'."
    },
    {
        "question": "In the sentence, 'The teacher made the lesson interesting,' what is the object complement?",
        "choices": ["the teacher", "made", "the lesson", "interesting"],
        "answer": "interesting",
        "explanation": "'Interesting' describes the direct object 'the lesson'."
    },
    {
        "question": "In the sentence, 'The tall man walked quickly,' which word is an adverbial modifier?",
        "choices": ["the", "tall", "man", "quickly"],
        "answer": "quickly",
        "explanation": "Quickly modifies the verb 'walked'."
    },
    {
        "question": "In the sentence, 'She is a talented singer,' which word is an adjectival modifier?",
        "choices": ["she", "is", "talented", "singer"],
        "answer": "talented",
        "explanation": "Talented modifies the noun 'singer'."
    },
    {
        "question": "In the sentence, 'He made the room bright,' what is the object complement?",
        "choices": ["he", "made", "the room", "bright"],
        "answer": "bright",
        "explanation": "Bright describes the direct object 'room'."
    },
    {
        "question": "In the sentence, 'The weather is cold,' what is the subject complement?",
        "choices": ["the weather", "is", "cold", "weather"],
        "answer": "cold",
        "explanation": "Cold describes the subject 'weather'."
    },
    {
        "question": "Which of the following is an adjectival modifier phrase?",
        "choices": ["running quickly", "to finish the project", "the book on the table", "he ran"],
        "answer": "the book on the table",
        "explanation": "'On the table' modifies 'book'."
    },
    {
        "question": "Which of the following is an adverbial modifier clause?",
        "choices": ["the book that I read", "he ran when it rained", "she is a good singer", "they are friends"],
        "answer": "he ran when it rained",
        "explanation": "'When it rained' modifies 'ran'."
    },
    {
        "question": "In the sentence, 'The student, diligently studying, passed the exam,' what is the participial modifier?",
        "choices": ["the student", "diligently studying", "passed the exam", "student"],
        "answer": "diligently studying",
        "explanation": "Diligently studying modifies 'student'."
    },
    {
        "question": "In the sentence, 'To finish the project, they worked late,' what type of modifier is 'to finish the project'?",
        "choices": ["adjectival", "adverbial", "noun", "prepositional"],
        "answer": "adverbial",
        "explanation": "'To finish the project' modifies 'worked'."
    },
    {
        "question": "In the sentence, 'He considers her a good friend,' what is the object complement?",
        "choices": ["he", "considers", "her", "a good friend"],
        "answer": "a good friend",
        "explanation": "'A good friend' renames or describes 'her'."
    },
    {
        "question": "In the sentence, 'The cake, delicious and moist, was eaten quickly,' what type of modifier is 'delicious and moist'?",
        "choices": ["adverbial", "adjectival", "noun", "prepositional"],
        "answer": "adjectival",
        "explanation": "'Delicious and moist' modifies 'cake'."
    },
    {
        "question": "Which of the following is a predicate adjective functioning as a subject complement?",
        "choices": ["the running dog", "the dog is fast", "running quickly", "to run fast"],
        "answer": "the dog is fast",
        "explanation": "'Fast' describes the subject 'dog'."
    },
    {
        "question": "In the sentence, 'She found the keys under the table,' what is the prepositional phrase functioning as an adverbial modifier?",
        "choices": ["she found", "the keys", "under the table", "found"],
        "answer": "under the table",
        "explanation": "'Under the table' modifies 'found'."
    },
    {
        "question": "In the sentence, 'The man, a skilled carpenter, built the house,' what is the appositive functioning as an adjectival modifier?",
        "choices": ["the man", "a skilled carpenter", "built the house", "man"],
        "answer": "a skilled carpenter",
        "explanation": "'A skilled carpenter' renames 'man'."
    },
    {
        "question": "In the sentence, 'He painted the wall blue,' what is the object complement?",
        "choices": ["he", "painted", "the wall", "blue"],
        "answer": "blue",
        "explanation": "Blue describes the direct object 'wall'."
    },
    {
        "question": "Which of the following is an infinitive phrase functioning as an adverbial modifier?",
        "choices": ["the book to read", "to read carefully", "reading quickly", "he reads"],
        "answer": "to read carefully",
        "explanation": "'To read carefully' modifies an implied verb."
    },
    {
        "question": "In the sentence, 'The student, having studied hard, aced the test,' what is the absolute phrase functioning as an adverbial modifier?",
        "choices": ["the student", "having studied hard", "aced the test", "student"],
        "answer": "having studied hard",
        "explanation": "'Having studied hard' modifies the entire sentence."
    },
    {
        "question": "In the sentence, 'The car, a vintage model, was expensive,' what is the appositive functioning as an adjectival modifier?",
        "choices": ["the car", "a vintage model", "was expensive", "car"],
        "answer": "a vintage model",
        "explanation": "'A vintage model' renames 'car'."
    },
    {
        "question": "In the sentence, 'She considers him a good friend,' what is the object complement?",
        "choices": ["she", "considers", "him", "a good friend"],
        "answer": "a good friend",
        "explanation": "'A good friend' renames or describes 'him'."
    },
    {
        "question": "Which of the following is a prepositional phrase functioning as an adjectival modifier?",
        "choices": ["to run quickly", "running fast", "the book with a red cover", "he runs"],
        "answer": "the book with a red cover",
        "explanation": "'With a red cover' modifies 'book'."
    },
    {
        "question": "In the sentence, 'The teacher made the lesson interesting,' what is the object complement?",
        "choices": ["the teacher", "made", "the lesson", "interesting"],
        "answer": "interesting",
        "explanation": "'Interesting' describes the direct object 'lesson'."
    },
    {
        "question": "Read the sentence: 'The cat sat on the mat.' What is the main subject of this sentence?",
        "choices": ["cat", "mat", "sat", "on"],
        "answer": "cat",
        "explanation": "The 'cat' is the subject performing the action."
    },
    {
        "question": "Read the sentence: 'The sun is bright and warm.' What two adjectives describe the sun?",
        "choices": ["cat, mat", "bright, warm", "is, bright", "sat, on"],
        "answer": "bright, warm",
        "explanation": "'Bright' and 'warm' are the adjectives describing the sun."
    },
    {
        "question": "Read the paragraph: 'Dogs are loyal animals. They like to play fetch. They also enjoy going for walks.' What is the main idea of this paragraph?",
        "choices": ["Dogs like walks.", "Dogs play fetch.", "Dogs are loyal.", "Dogs are animals."],
        "answer": "Dogs are loyal.",
        "explanation": "The paragraph focuses on the loyalty of dogs."
    },
    {
        "question": "Read the paragraph: 'Apples grow on trees. They can be red, green, or yellow. They are a healthy snack.' What is one detail that supports the main idea?",
        "choices": ["Apples grow on bushes.", "Apples are unhealthy.", "Apples can be red.", "Apples are blue."],
        "answer": "Apples can be red.",
        "explanation": "This is a detail that supports the description of apples."
    },
    {
        "question": "Read the sentence: 'She walked slowly to the store.' Which word tells how she walked?",
        "choices": ["she", "walked", "slowly", "store"],
        "answer": "slowly",
        "explanation": "'Slowly' is an adverb describing how she walked."
    },
    {
        "question": "Read the paragraph: 'Birds can fly. They build nests in trees. They eat seeds and insects.' What is one thing birds do?",
        "choices": ["Swim", "Fly", "Run", "Climb"],
        "answer": "Fly",
        "explanation": "The paragraph states that birds can fly."
    },
    {
        "question": "Read the sentence: 'The big, brown bear slept in the cave.' How many adjectives are in this sentence?",
        "choices": ["1", "2", "3", "4"],
        "answer": "2",
        "explanation": "'Big' and 'brown' are the adjectives."
    },
    {
        "question": "Read the paragraph: 'Books are fun to read. They can teach you new things. They can also take you to far-off places.' What is one benefit of reading books?",
        "choices": ["They are heavy.", "They are expensive.", "They teach you new things.", "They are only for children."],
        "answer": "They teach you new things.",
        "explanation": "The paragraph explicitly states that books teach you new things."
    },
    {
        "question": "Read the sentence: 'He kicked the ball over the fence.' What did he kick?",
        "choices": ["himself", "the fence", "the ball", "the ground"],
        "answer": "the ball",
        "explanation": "The object of the verb 'kicked' is 'the ball'."
    },
    {
        "question": "Read the paragraph: 'Flowers grow in gardens. They come in many colors. They smell nice.' What is one characteristic of flowers?",
        "choices": ["They are made of metal.", "They are only black.", "They smell nice.", "They are only found in houses."],
        "answer": "They smell nice.",
        "explanation": "The paragraph mentions the nice smell of flowers."
    },
    {
        "question": "Read the sentence: 'The little girl laughed loudly.' Which word is a verb?",
        "choices": ["little", "girl", "laughed", "loudly"],
        "answer": "laughed",
        "explanation": "'Laughed' is the action word."
    },
    {
        "question": "Read the paragraph: 'Rain helps plants grow. It waters the soil. It makes the air cooler.' What is the purpose of rain?",
        "choices": ["To make the air hot.", "To stop plants from growing.", "To help plants grow.", "To make the soil dry."],
        "answer": "To help plants grow.",
        "explanation": "The paragraph states that rain helps plants grow."
    },
    {
        "question": "Read the sentence: 'The car drove fast down the road.' Which word tells where the car drove?",
        "choices": ["fast", "down", "the road", "drove"],
        "answer": "down",
        "explanation": "'Down' is a preposition indicating direction."
    },
    {
        "question": "Read the paragraph: 'Cats like to sleep. They often nap in sunny spots. They purr when they are happy.' What do cats do when they are happy?",
        "choices": ["Bark", "Meow", "Purr", "Growl"],
        "answer": "Purr",
        "explanation": "The paragraph states that cats purr when they are happy."
    },
    {
        "question": "Read the sentence: 'The tall tree swayed in the wind.' What is the subject of the sentence?",
        "choices": ["wind", "tree", "swayed", "tall"],
        "answer": "tree",
        "explanation": "'Tree' is the noun the sentence is about."
    },
    {
        "question": "Read the paragraph: 'Bees make honey. They collect nectar from flowers. They live in hives.' What do bees collect?",
        "choices": ["Water", "Rocks", "Nectar", "Leaves"],
        "answer": "Nectar",
        "explanation": "The paragraph states that bees collect nectar from flowers."
    },
    {
        "question": "Read the sentence: 'The old house stood on the hill.' Which word tells where the house stood?",
        "choices": ["old", "house", "stood", "on"],
        "answer": "on",
        "explanation": "'On' is a preposition indicating location."
    },
    {
        "question": "Read the paragraph: 'Fish live in water. They swim with fins. They breathe with gills.' What do fish use to swim?",
        "choices": ["Legs", "Wings", "Fins", "Feet"],
        "answer": "Fins",
        "explanation": "The paragraph mentions that fish swim with fins."
    },
    {
        "question": "Read the sentence: 'The red balloon floated up into the sky.' Which word describes the balloon's color?",
        "choices": ["red", "balloon", "floated", "sky"],
        "answer": "red",
        "explanation": "'Red' is the adjective describing the balloon's color."
    },
    {
        "question": "Read the paragraph: 'Stars shine at night. They are very far away. They twinkle in the dark sky.' What do stars do at night?",
        "choices": ["Hide", "Shine", "Sleep", "Fall"],
        "answer": "Shine",
        "explanation": "The paragraph states that stars shine at night."
    },
    {
        "question": "Read the sentence: 'The cat chased the mouse under the bed.' Which word tells where the cat chased the mouse?",
        "choices": ["cat", "chased", "mouse", "under"],
        "answer": "under",
        "explanation": "'Under' is a preposition indicating location."
    },
    {
        "question": "Read the paragraph: 'Dogs bark. They wag their tails. They are loyal pets.' What do dogs do?",
        "choices": ["Bark", "Swim", "Fly", "Climb"],
        "answer": "Bark",
        "explanation": "The paragraph states that dogs bark."
    },
    {
        "question": "Read the sentence: 'The sun is bright and warm.' Which word is a noun?",
        "choices": ["sun", "bright", "warm", "is"],
        "answer": "sun",
        "explanation": "'Sun' is the name of the object."
    },
    {
        "question": "Read the paragraph: 'Birds can fly. They build nests in trees. They eat seeds and insects.' What do birds eat?",
        "choices": ["Rocks", "Seeds and insects", "Water", "Leaves"],
        "answer": "Seeds and insects",
        "explanation": "The paragraph states that birds eat seeds and insects."
    },
    {
        "question": "Read the sentence: 'The big, brown bear slept in the cave.' Which word tells how the bear slept?",
        "choices": ["big", "brown", "bear", "slept"],
        "answer": "slept",
        "explanation": "'Slept' is the verb describing the bear's action."
    },
    {
        "question": "Read the paragraph: 'Rain helps plants grow. It waters the soil. It makes the air cooler.' What does rain do to the air?",
        "choices": ["Make it hot", "Make it cold", "Make it cooler", "Make it warm"],
        "answer": "Make it cooler",
        "explanation": "The paragraph states that rain makes the air cooler."
    },
    {
        "question": "Read the sentence: 'She walked slowly to the store.' Which word tells where she walked?",
        "choices": ["she", "walked", "slowly", "store"],
        "answer": "store",
        "explanation": "'Store' is the object of the preposition 'to'."
    },
    {
        "question": "Read the paragraph: 'Cats like to sleep. They often nap in sunny spots. They purr when they are happy.' What do cats do when they are happy?",
        "choices": ["Bark", "Meow", "Purr", "Growl"],
        "answer": "Purr",
        "explanation": "The paragraph states that cats purr when they are happy."
    },
    {
        "question": "Read the sentence: 'The tall tree swayed in the wind.' Which word tells where the tree swayed?",
        "choices": ["tall", "tree", "swayed", "wind"],
        "answer": "wind",
        "explanation": "'Wind' is the object of the preposition 'in'."
    },
    {
        "question": "Read the paragraph: 'Bees make honey. They collect nectar from flowers. They live in hives.' What do bees collect?",
        "choices": ["Water", "Rocks", "Nectar", "Leaves"],
        "answer": "Nectar",
        "explanation": "The paragraph states that bees collect nectar from flowers."
    },
    {
        "question": "Read the sentence: 'The old house stood on the hill.' Which word tells where the house stood?",
        "choices": ["old", "house", "stood", "hill"],
        "answer": "hill",
        "explanation": "'Hill' is the object of the preposition 'on'."
    },
    {
        "question": "Read the paragraph: 'Fish live in water. They swim with fins. They breathe with gills.' What do fish use to swim?",
        "choices": ["Legs", "Wings", "Fins", "Feet"],
        "answer": "Fins",
        "explanation": "The paragraph mentions that fish swim with fins."
    },
    {
        "question": "Read the sentence: 'The red balloon floated up into the sky.' Which word describes the balloon's color?",
        "choices": ["red", "balloon", "floated", "sky"],
        "answer": "red",
        "explanation": "'Red' is the adjective describing the balloon's color."
    },

    {
        "question": "Discuss the impact of social media on modern political discourse.",
        "choices": ["Analyze the evolution of social media's role in politics.", "Argue for or against the regulation of political content on social media.", "Describe a typical day of a political campaign using social media.", "Compare and contrast two different political campaigns' social media strategies."],
        "answer": "Argue for or against the regulation of political content on social media."
    },
    {
        "question": "Examine the role of artificial intelligence in healthcare.",
        "choices": ["Explain how AI is currently being used in healthcare.", "Evaluate the ethical implications of AI in medical diagnoses.", "Tell a story about a future where AI is fully integrated into healthcare.", "Compare AI's role in healthcare to its role in another industry."],
        "answer": "Evaluate the ethical implications of AI in medical diagnoses."
    },
    {
        "question": "Analyze the effects of climate change on coastal communities.",
        "choices": ["Describe the physical changes occurring in coastal areas due to climate change.", "Present a case for or against government intervention in protecting coastal communities.", "Imagine a scenario where a coastal city is completely submerged.", "Compare the impact of climate change on two different coastal regions."],
        "answer": "Compare the impact of climate change on two different coastal regions."
    },
    {
        "question": "Discuss the merits and drawbacks of standardized testing in education.",
        "choices": ["Explain the history and purpose of standardized testing.", "Argue whether standardized tests are beneficial or detrimental to students.", "Narrate a personal experience with taking a standardized test.", "Analyze the differences between standardized testing and alternative assessment methods."],
        "answer": "Argue whether standardized tests are beneficial or detrimental to students."
    },
    {
        "question": "Evaluate the influence of globalization on local cultures.",
        "choices": ["Describe the various ways globalization impacts local traditions.", "Present an argument for or against cultural preservation in the face of globalization.", "Tell a story about a culture that has been significantly changed by globalization.", "Compare the effects of globalization on two distinct cultural groups."],
        "answer": "Compare the effects of globalization on two distinct cultural groups."
    },
    {
        "question": "Analyze the role of literature in shaping societal values.",
        "choices": ["Explain how specific literary works reflect or challenge societal values.", "Argue for or against the censorship of literature.", "Tell a story about how a book changed someone's life.", "Compare the impact of literature to the impact of film on societal values."],
        "answer": "Explain how specific literary works reflect or challenge societal values."
    },
    {
        "question": "Discuss the impact of technology on interpersonal relationships.",
        "choices": ["Describe how technology has changed the way people communicate.", "Argue whether technology strengthens or weakens interpersonal connections.", "Narrate a situation where technology caused a misunderstanding between people.", "Compare and contrast communication styles before and after the advent of smartphones."],
        "answer": "Compare and contrast communication styles before and after the advent of smartphones."
    },
    {
        "question": "Examine the ethical considerations surrounding genetic engineering.",
        "choices": ["Explain the scientific processes involved in genetic engineering.", "Evaluate the moral dilemmas associated with modifying human genes.", "Imagine a world where genetic engineering is commonplace.", "Compare the ethical debates around genetic engineering to those around another scientific advancement."],
        "answer": "Evaluate the moral dilemmas associated with modifying human genes."
    },
    {
        "question": "Analyze the effects of urbanization on environmental sustainability.",
        "choices": ["Describe the environmental challenges faced by urban areas.", "Present a case for or against sustainable urban planning.", "Tell a story about a city that has successfully implemented eco-friendly policies.", "Compare the environmental impact of urban and rural lifestyles."],
        "answer": "Compare the environmental impact of urban and rural lifestyles."
    },
    {
        "question": "Discuss the role of art in social movements.",
        "choices": ["Explain how art has been used to convey messages of social change.", "Argue whether art is an effective tool for social activism.", "Tell a story about an artist whose work inspired a social movement.", "Compare the role of art in two different social movements."],
        "answer": "Compare the role of art in two different social movements."
    },
    {
        "question": "Evaluate the impact of economic inequality on social stability.",
        "choices": ["Describe the various forms of economic inequality.", "Argue for or against government policies aimed at reducing economic inequality.", "Narrate a scenario where economic inequality leads to social unrest.", "Compare the effects of economic inequality in two different countries."],
        "answer": "Compare the effects of economic inequality in two different countries."
    },
    {
        "question": "Analyze the influence of media on public opinion.",
        "choices": ["Explain how different media outlets shape public perceptions.", "Argue whether media bias is a significant problem in modern society.", "Tell a story about how a news report changed someone's opinion.", "Compare the influence of traditional media to that of social media on public opinion."],
        "answer": "Argue whether media bias is a significant problem in modern society."
    },
    {
        "question": "Discuss the ethical considerations of animal testing in scientific research.",
        "choices": ["Describe the procedures used in animal testing.", "Argue for or against the use of animals in scientific experiments.", "Tell a story about a scientific breakthrough that resulted from animal testing.", "Compare the ethical arguments for animal testing in medical research versus cosmetic testing."],
        "answer": "Compare the ethical arguments for animal testing in medical research versus cosmetic testing."
    },
    {
        "question": "Evaluate the impact of cultural diversity on workplace productivity.",
        "choices": ["Describe the benefits and challenges of a culturally diverse workplace.", "Present an argument for or against diversity initiatives in the workplace.", "Tell a story about a team that overcame cultural differences to achieve success.", "Compare the workplace cultures of two companies with different diversity policies."],
        "answer": "Compare the workplace cultures of two companies with different diversity policies."
    },
    {
        "question": "Analyze the effects of overpopulation on resource scarcity.",
        "choices": ["Describe the ways overpopulation contributes to resource depletion.", "Argue whether population control measures are necessary.", "Tell a story about a community struggling with resource scarcity due to overpopulation.", "Compare the effects of overpopulation in developed versus developing countries."],
        "answer": "Compare the effects of overpopulation in developed versus developing countries."
    },
    {
        "question": "Discuss the role of education in fostering social mobility.",
        "choices": ["Explain how education can break cycles of poverty.", "Argue whether access to quality education should be a fundamental right.", "Tell a story about someone who overcame adversity through education.", "Compare the educational systems of two countries with different levels of social mobility."],
        "answer": "Compare the educational systems of two countries with different levels of social mobility."
    },
    {
        "question": "Evaluate the impact of tourism on local economies.",
        "choices": ["Describe the economic benefits and drawbacks of tourism.", "Present an argument for or against government subsidies for the tourism industry.", "Tell a story about a town that transformed its economy through tourism.", "Compare the effects of tourism on two different types of destinations."],
        "answer": "Compare the effects of tourism on two different types of destinations."
    },
    {
        "question": "Analyze the influence of historical events on contemporary political ideologies.",
        "choices": ["Explain how specific historical events have shaped current political beliefs.", "Argue whether historical revisionism is harmful or beneficial.", "Tell a story about how a historical event influenced a political leader.", "Compare the impact of two different historical events on modern political thought."],
        "answer": "Compare the impact of two different historical events on modern political thought."
    },
    {
        "question": "Discuss the ethical considerations of data privacy in the digital age.",
        "choices": ["Describe the various ways personal data is collected and used.", "Argue for or against stricter regulations on data privacy.", "Tell a story about someone whose privacy was violated online.", "Compare data privacy laws in two different countries."],
        "answer": "Compare data privacy laws in two different countries."
    },
    {
        "question": "Evaluate the impact of renewable energy on global sustainability.",
        "choices": ["Describe the different types of renewable energy and their benefits.", "Present an argument for or against government investment in renewable energy technologies.", "Tell a story about a community that transitioned to 100% renewable energy.", "Compare the sustainability of renewable energy sources to that of traditional fossil fuels."],
        "answer": "Compare the sustainability of renewable energy sources to that of traditional fossil fuels."
    },
    {
        "question": "Synthesize the philosophical underpinnings of existentialism and postmodernism, and evaluate their relevance in interpreting contemporary social anxieties.",
        "choices": ["Analyze the historical development of existentialist and postmodern thought.", "Critically assess the validity of applying existentialist and postmodern concepts to explain modern social anxieties.", "Construct a narrative exploring a character grappling with existential and postmodern dilemmas.", "Compare and contrast the socio-political implications of existentialism and postmodernism in the 21st century."],
        "answer": "Critically assess the validity of applying existentialist and postmodern concepts to explain modern social anxieties."
    },
    {
        "question": "Deconstruct the role of cognitive biases in shaping international diplomatic negotiations, and propose strategies for mitigating their influence.",
        "choices": ["Describe the various cognitive biases that can affect diplomatic negotiations.", "Argue for or against the implementation of specific protocols to counteract cognitive biases in international relations.", "Create a hypothetical scenario where cognitive biases lead to a diplomatic crisis.", "Compare the impact of cognitive biases in bilateral versus multilateral negotiations."],
        "answer": "Argue for or against the implementation of specific protocols to counteract cognitive biases in international relations."
    },
    {
        "question": "Critically evaluate the efficacy of postcolonial literary theory in analyzing contemporary global power dynamics.",
        "choices": ["Trace the evolution of postcolonial literary theory and its key concepts.", "Assess the strengths and limitations of postcolonial theory as a tool for understanding global power dynamics.", "Write a fictional narrative that explores themes of postcolonialism in a modern context.", "Compare the application of postcolonial theory to the analysis of different forms of media."],
        "answer": "Assess the strengths and limitations of postcolonial theory as a tool for understanding global power dynamics."
    },
    {
        "question": "Analyze the interplay between quantum physics and consciousness studies, and discuss the potential implications for our understanding of reality.",
        "choices": ["Explain the fundamental principles of quantum physics and consciousness studies.", "Debate the plausibility of integrating quantum physics into theories of consciousness.", "Imagine a future where quantum physics has revolutionized our understanding of consciousness.", "Compare the approaches of quantum physics and neuroscience to the study of consciousness."],
        "answer": "Debate the plausibility of integrating quantum physics into theories of consciousness."
    },
    {
        "question": "Deconstruct the semiotic codes embedded within contemporary digital art, and evaluate their impact on cultural perception.",
        "choices": ["Describe the various semiotic codes used in digital art.", "Evaluate the effectiveness of digital art in conveying complex cultural messages.", "Create a digital artwork that utilizes semiotic codes to challenge cultural norms.", "Compare the semiotic codes used in digital art to those found in traditional art forms."],
        "answer": "Evaluate the effectiveness of digital art in conveying complex cultural messages."
    },
    {
        "question": "Synthesize the principles of ecological economics and political ecology, and propose a framework for sustainable urban development.",
        "choices": ["Explain the core concepts of ecological economics and political ecology.", "Argue for or against the integration of ecological principles into urban planning policies.", "Design a sustainable urban development plan based on ecological economics and political ecology.", "Compare the sustainability initiatives of two different urban areas."],
        "answer": "Design a sustainable urban development plan based on ecological economics and political ecology."
    },
    {
        "question": "Critically evaluate the role of algorithmic bias in perpetuating social inequalities within artificial intelligence systems.",
        "choices": ["Describe the different types of algorithmic bias and their origins.", "Debate the ethical responsibilities of AI developers in addressing algorithmic bias.", "Create a scenario where algorithmic bias leads to discriminatory outcomes.", "Compare the impact of algorithmic bias in different AI applications."],
        "answer": "Debate the ethical responsibilities of AI developers in addressing algorithmic bias."
    },
    {
        "question": "Deconstruct the narrative structures employed in transmedia storytelling, and analyze their impact on audience engagement.",
        "choices": ["Explain the key elements of transmedia storytelling and its various forms.", "Assess the effectiveness of transmedia storytelling in creating immersive audience experiences.", "Develop a transmedia storytelling project that spans multiple platforms.", "Compare the narrative structures of transmedia storytelling to those of traditional storytelling."],
        "answer": "Assess the effectiveness of transmedia storytelling in creating immersive audience experiences."
    },
    {
        "question": "Synthesize the principles of network theory and social capital, and evaluate their relevance in understanding the dynamics of online communities.",
        "choices": ["Describe the fundamental concepts of network theory and social capital.", "Argue for or against the use of network theory to analyze online community dynamics.", "Create a network analysis of an online community and evaluate its social capital.", "Compare the social capital dynamics of different types of online communities."],
        "answer": "Create a network analysis of an online community and evaluate its social capital."
    },
    {
        "question": "Critically evaluate the application of biopolitical theory to analyze the governance of public health crises.",
        "choices": ["Explain the key tenets of biopolitical theory and its application to public health.", "Debate the ethical implications of biopolitical approaches to managing public health crises.", "Create a case study analyzing a public health crisis through the lens of biopolitics.", "Compare the biopolitical strategies used in different public health crises."],
        "answer": "Create a case study analyzing a public health crisis through the lens of biopolitics."
    },
    {
        "question": "Deconstruct the rhetorical strategies employed in contemporary political propaganda, and evaluate their impact on public discourse.",
        "choices": ["Describe the various rhetorical strategies used in political propaganda.", "Assess the effectiveness of propaganda in shaping public opinion in the digital age.", "Create a rhetorical analysis of a contemporary political propaganda campaign.", "Compare the rhetorical strategies used in different political propaganda campaigns."],
        "answer": "Assess the effectiveness of propaganda in shaping public opinion in the digital age."
    },
    {
        "question": "Synthesize the principles of complexity theory and systems thinking, and propose a framework for understanding and managing global supply chain disruptions.",
        "choices": ["Explain the core concepts of complexity theory and systems thinking.", "Argue for or against the application of complexity theory to supply chain management.", "Develop a model for managing global supply chain disruptions using complexity theory.", "Compare the resilience of different supply chain models to disruptions."],
        "answer": "Develop a model for managing global supply chain disruptions using complexity theory."
    },
    {
        "question": "Critically evaluate the role of cultural memory in shaping national identity and historical narratives.",
        "choices": ["Describe the various forms of cultural memory and their impact on identity.", "Debate the ethical implications of using cultural memory to construct historical narratives.", "Create an analysis of a specific cultural memory and its impact on national identity.", "Compare the role of cultural memory in shaping the identities of different nations."],
        "answer": "Create an analysis of a specific cultural memory and its impact on national identity."
    },
    {
        "question": "Deconstruct the linguistic strategies employed in online disinformation campaigns, and analyze their impact on information consumption.",
        "choices": ["Describe the various linguistic strategies used in online disinformation.", "Assess the effectiveness of these strategies in manipulating information consumption.", "Create a linguistic analysis of an online disinformation campaign.", "Compare the linguistic strategies used in different types of online disinformation."],
        "answer": "Assess the effectiveness of these strategies in manipulating information consumption."
    },
    {
        "question": "Synthesize the principles of behavioral economics and nudging, and propose a framework for designing effective public policy interventions.",
        "choices": ["Explain the key concepts of behavioral economics and nudging.", "Argue for or against the ethical implications of using nudging in public policy.", "Develop a public policy intervention using behavioral economics and nudging principles.", "Compare the effectiveness of different nudging strategies in achieving policy goals."],
        "answer": "Develop a public policy intervention using behavioral economics and nudging principles."
    },
    {
        "question": "Critically evaluate the application of psychoanalytic theory to analyze the motivations of political leaders.",
        "choices": ["Describe the fundamental principles of psychoanalytic theory and its application to political analysis.", "Debate the validity of using psychoanalytic theory to understand political leadership.", "Create a psychoanalytic profile of a political leader and analyze their motivations.", "Compare the psychoanalytic interpretations of different political leaders."],
        "answer": "Create a psychoanalytic profile of a political leader and analyze their motivations."
    },
    {
        "question": "Deconstruct the visual rhetoric employed in contemporary advertising campaigns, and evaluate their impact on consumer behavior.",
        "choices": ["Describe the various visual rhetoric strategies used in advertising.", "Assess the effectiveness of these strategies in influencing consumer behavior.", "Create a visual rhetoric analysis of a contemporary advertising campaign.", "Compare the visual rhetoric strategies used in different advertising campaigns."],
        "answer": "Assess the effectiveness of these strategies in influencing consumer behavior."
    },
    {
        "question": "Synthesize the principles of game theory and strategic communication, and propose a framework for managing international conflicts.",
        "choices": ["Explain the key concepts of game theory and strategic communication.", "Argue for or against the use of game theory in international conflict management.", "Develop a strategic communication plan for resolving an international conflict using game theory.", "Compare the strategic communication approaches used in different international conflicts."],
        "answer": "Develop a strategic communication plan for resolving an international conflict using game theory."
    },
    {
        "question": "Critically evaluate the application of neuroaesthetics to analyze the cognitive and emotional responses to architectural design.",
        "choices": ["Describe the fundamental principles of neuroaesthetics and their application to architecture.", "Debate the validity of using neuroaesthetics to inform architectural design.", "Create a neuroaesthetic analysis of a specific architectural design and its impact on users.", "Compare the neuroaesthetic responses to different architectural styles."],
        "answer": "Create a neuroaesthetic analysis of a specific architectural design and its impact on users."
    },
    {
        "question": "Deconstruct the narrative strategies employed in virtual reality experiences, and evaluate their impact on user immersion and emotional engagement.",
        "choices": ["Describe the various narrative strategies used in virtual reality.", "Assess the effectiveness of these strategies in creating immersive user experiences.", "Create a narrative design for a virtual reality experience that maximizes user immersion.", "Compare the narrative strategies used in virtual reality to those used in traditional media."],
        "answer": "Assess the effectiveness of these strategies in creating immersive user experiences."
    },
    {
        "question": "Which of the following sentences violates the typical Subject-Verb-Object (SVO) word order in English?",
        "choices": ["The cat chased the mouse.", "Chased the mouse, the cat.", "She read the book.", "They ate the cake."],
        "answer": "Chased the mouse, the cat.",
        "explanation": "English generally follows SVO order, and this sentence inverts it."
    },
    {
        "question": "Which sentence demonstrates correct subject-verb agreement?",
        "choices": ["The dogs barks loudly.", "The dog bark loudly.", "The dogs bark loudly.", "The dog barks loudly."],
        "answer": "The dogs bark loudly.",
        "explanation": "Plural subjects require plural verbs."
    },
    {
        "question": "In the sentence, 'She gave the book to him,' what part of speech is 'to him'?",
        "choices": ["Noun phrase", "Verb phrase", "Prepositional phrase", "Adjective phrase"],
        "answer": "Prepositional phrase",
        "explanation": "'To' is a preposition, and 'him' is its object."
    },
    {
        "question": "Which sentence contains a dependent clause?",
        "choices": ["He ran quickly.", "She ate and he slept.", "Because it rained, they stayed inside.", "They went to the store."],
        "answer": "Because it rained, they stayed inside.",
        "explanation": "'Because it rained' is a dependent clause introduced by 'because'."
    },
    {
        "question": "Which of the following is a compound sentence?",
        "choices": ["He ran.", "She sang, and he danced.", "Because he was tired, he slept.", "Running quickly, he arrived."],
        "answer": "She sang, and he danced.",
        "explanation": "Two independent clauses joined by 'and'."
    },
    {
        "question": "Which sentence demonstrates correct pronoun-antecedent agreement?",
        "choices": ["The student studied their lesson.", "The students studied his lesson.", "The students studied their lessons.", "The student studied her lessons."],
        "answer": "The students studied their lessons.",
        "explanation": "Plural antecedents require plural possessive pronouns."
    },
    {
        "question": "In the sentence, 'The very old house,' what part of speech is 'very old'?",
        "choices": ["Noun phrase", "Verb phrase", "Adjective phrase", "Adverb phrase"],
        "answer": "Adjective phrase",
        "explanation": "'Very old' modifies 'house'."
    },
    {
        "question": "Which sentence contains an independent clause?",
        "choices": ["Because she was late.", "When he arrived.", "She walked to the store.", "Although he tried."],
        "answer": "She walked to the store.",
        "explanation": "It can stand alone as a complete sentence."
    },
    {
        "question": "Which of the following is a complex sentence?",
        "choices": ["He ran fast.", "She sang, and he danced.", "Although he was tired, he slept.", "They ate and drank."],
        "answer": "Although he was tired, he slept.",
        "explanation": "Contains one independent and one dependent clause."
    },
    {
        "question": "Which sentence demonstrates correct use of a coordinating conjunction?",
        "choices": ["He ran, because she walked.", "She sang, and he danced.", "They ate, although they were full.", "He slept, when he was tired."],
        "answer": "She sang, and he danced.",
        "explanation": "'And' joins two independent clauses correctly."
    },
    {
        "question": "In the sentence, 'Running quickly,' what part of speech is 'running quickly'?",
        "choices": ["Noun phrase", "Verb phrase", "Participial phrase", "Prepositional phrase"],
        "answer": "Participial phrase",
        "explanation": "'Running' is a participle modifying an implied subject."
    },
    {
        "question": "Which sentence violates the rule of forming a proper question in English?",
        "choices": ["Did he go?", "Where she went?", "Why did they leave?", "Can you help?"],
        "answer": "Where she went?",
        "explanation": "Question word order should be 'Where did she go?'"
    },
    {
        "question": "Which sentence contains an adverb phrase?",
        "choices": ["The old house.", "He ran very quickly.", "She ate the cake.", "They are friends."],
        "answer": "He ran very quickly.",
        "explanation": "'Very quickly' modifies 'ran'."
    },
    {
        "question": "Which sentence correctly uses a subordinating conjunction?",
        "choices": ["He ran, and she walked.", "She sang, or he danced.", "Because he was late, he missed the bus.", "They ate, but they were hungry."],
        "answer": "Because he was late, he missed the bus.",
        "explanation": "'Because' introduces a dependent clause correctly."
    },
    {
        "question": "In the sentence, 'The book on the table,' what part of speech is 'on the table'?",
        "choices": ["Noun phrase", "Verb phrase", "Prepositional phrase", "Adjective phrase"],
        "answer": "Prepositional phrase",
        "explanation": "'On' is a preposition, and 'the table' is its object."
    },
    {
        "question": "Which sentence demonstrates correct use of a relative clause?",
        "choices": ["He saw the man, who she went.", "The book, that I read it, was good.", "She met the person whom she admired.", "They ate, which it was delicious."],
        "answer": "She met the person whom she admired.",
        "explanation": "'Whom she admired' correctly modifies 'person'."
    },
    {
        "question": "Which sentence violates the rule of using a preposition correctly?",
        "choices": ["He went to the store.", "She sat on the chair.", "They talked about the movie.", "He arrived in yesterday."],
        "answer": "He arrived in yesterday.",
        "explanation": "Should be 'He arrived yesterday' or 'He arrived in the morning'."
    },
    {
        "question": "In the sentence, 'To finish the project,' what part of speech is 'to finish the project'?",
        "choices": ["Noun phrase", "Verb phrase", "Infinitive phrase", "Prepositional phrase"],
        "answer": "Infinitive phrase",
        "explanation": "'To finish' is an infinitive, and 'the project' is its object."
    },
    {
        "question": "Which sentence demonstrates correct use of a compound-complex sentence?",
        "choices": ["He ran.", "She sang, and he danced.", "Although he was tired, he slept.", "She sang, and he danced, because they were happy."],
        "answer": "She sang, and he danced, because they were happy.",
        "explanation": "Two independent clauses and a dependent clause."
    },
    {
        "question": "Which sentence demonstrates correct use of an appositive phrase?",
        "choices": ["He ran, which was fast.", "She met the person, who she admired.", "My friend, a doctor, arrived.", "They ate, that was delicious."],
        "answer": "My friend, a doctor, arrived.",
        "explanation": "'A doctor' renames 'my friend' correctly."
    }
];

const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");

function displayQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.choices.forEach(choice => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${choice}">
                    ${choice}
                </label>
            `;
        });

        questionContainer.appendChild(questionDiv);

        const radioButtons = questionDiv.querySelectorAll(`input[name="question${index}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener("change", () => {
                checkSingleAnswer(index);
            });
        });
    });
}

function checkSingleAnswer(questionIndex) {
    const selectedAnswer = document.querySelector(`input[name="question${questionIndex}"]:checked`);
    const question = questions[questionIndex];
    const resultDiv = document.getElementById(`result-${questionIndex}`); // Create a result div for each question.

    if (!resultDiv) {
        const newResultDiv = document.createElement("div");
        newResultDiv.id = `result-${questionIndex}`;
        document.querySelectorAll(".question")[questionIndex].appendChild(newResultDiv);
    }

    const currentResultDiv = document.getElementById(`result-${questionIndex}`);

    if (selectedAnswer) {
        if (selectedAnswer.value === question.answer) {
            currentResultDiv.innerHTML = `<p style="color: green;">Correct! ${question.explanation}</p>`;
        } else {
            currentResultDiv.innerHTML = `<p style="color: red;">Incorrect. Correct answer: ${question.answer}. ${question.explanation}</p>`;
        }
    } else {
        currentResultDiv.innerHTML = ""; // Clear feedback if no answer is selected.
    }
}
function checkAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.answer) {
            score++;
        }
    });

    resultContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;

    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        let userAnswer = "Not Answered";
        if (selectedAnswer){
            userAnswer = selectedAnswer.value;
        }

        resultContainer.innerHTML += `
            <div class="question-result">
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer}</p>
                <p><strong>Correct Answer:</strong> ${q.answer}</p>
                <p><strong>Explanation:</strong> ${q.explanation}</p>
            </div>
        `;
    });
}

function eachAnswer(){
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        let userAnswer = "Not Answered";
        if (selectedAnswer){
            userAnswer = selectedAnswer.value;
        }
    });
}

function offButton(){
    const anchorOff = document.querySelectorAll(".each-course");
    anchorOff.forEach((off) =>{
        off.style.display = "none";
    })
    

}

eachAnswer();
displayQuestions();
submitBtn.addEventListener("click", checkAnswers);