/* Local teaching content imported from week 3-4.docx. */
window.COURSE = {
  "3": {
    "slides": [
      {
        "number": 1,
        "title": "Introduction to Functional Programming",
        "subtitle": "What is a different way to think about a program?",
        "paragraphs": [
          "In Week 1, we saw imperative programming, where we normally think about a sequence of commands.",
          "For example:",
          "x = 5\nx = x + 3\nprint(x)",
          "Functional programming gives us another way of thinking. Instead of focusing mainly on changing variables step by step, we focus more on functions, inputs, and outputs.",
          "For example, instead of thinking:",
          "Store 5 → change it → display it",
          "we can think:",
          "Give values to a function → function performs an operation → receive a result.",
          "A simple functional idea is:",
          "5 and 3 → addition function → 8",
          "Main idea: Functional programming focuses on solving problems using functions and transformations."
        ],
        "source": [
          "In Week 1, we saw imperative programming, where we normally think about a sequence of commands.",
          "For example:",
          "x = 5x = x + 3print(x)",
          "Functional programming gives us another way of thinking. Instead of focusing mainly on changing variables step by step, we focus more on functions, inputs, and outputs.",
          "For example, instead of thinking:",
          "Store 5 → change it → display it",
          "we can think:",
          "Give values to a function → function performs an operation → receive a result.",
          "A simple functional idea is:",
          "5 and 3 → addition function → 8",
          "Main idea: Functional programming focuses on solving problems using functions and transformations."
        ]
      },
      {
        "number": 2,
        "title": "Introduction to Functional Programming",
        "subtitle": "Imperative Programming vs Functional Programming",
        "paragraphs": [
          "Consider a simple problem:",
          "Add 5 and 3.",
          "An imperative-style solution may use a variable:",
          "x = 5\nx = x + 3\nprint(x)",
          "We start with x, change its value, and then display the result.",
          "A functional-style expression can focus directly on the operation:",
          "(+ 5 3)",
          "The result is:",
          "8",
          "The problem is the same, but the way we think about the solution is different.",
          "Imperative: What operations should happen step by step?",
          "Functional: What function should transform the input into the required output?",
          "At this stage, the important point is not which style is better. They are different ways of organizing computation."
        ],
        "source": [
          "Consider a simple problem:",
          "Add 5 and 3.",
          "An imperative-style solution may use a variable:",
          "x = 5x = x + 3print(x)",
          "We start with x, change its value, and then display the result.",
          "A functional-style expression can focus directly on the operation:",
          "(+ 5 3)",
          "The result is:",
          "8",
          "The problem is the same, but the way we think about the solution is different.",
          "Imperative: What operations should happen step by step?",
          "Functional: What function should transform the input into the required output?",
          "At this stage, the important point is not which style is better. They are different ways of organizing computation."
        ]
      },
      {
        "number": 3,
        "title": "Lisp",
        "subtitle": "A Language Designed Around Functional Ideas",
        "paragraphs": [
          "Lisp is an important programming language associated with functional programming.",
          "One interesting feature of Lisp-style languages is the way expressions are written.",
          "For example, in many languages we write:",
          "5 + 3",
          "In Lisp-style notation:",
          "(+ 5 3)",
          "Here, the operation comes first.",
          "We can read it as:",
          "Apply + to 5 and 3.",
          "Another example:",
          "(* 4 5)",
          "means:",
          "Apply multiplication to 4 and 5.",
          "The result is:",
          "20",
          "This notation may look unusual at first, but it becomes easy when we think:",
          "Function first → Inputs after it."
        ],
        "source": [
          "Lisp is an important programming language associated with functional programming.",
          "One interesting feature of Lisp-style languages is the way expressions are written.",
          "For example, in many languages we write:",
          "5 + 3",
          "In Lisp-style notation:",
          "(+ 5 3)",
          "Here, the operation comes first.",
          "We can read it as:",
          "Apply + to 5 and 3.",
          "Another example:",
          "(* 4 5)",
          "means:",
          "Apply multiplication to 4 and 5.",
          "The result is:",
          "20",
          "This notation may look unusual at first, but it becomes easy when we think:",
          "Function first → Inputs after it."
        ]
      },
      {
        "number": 4,
        "title": "Scheme",
        "subtitle": "Using a Simple Lisp-Based Language",
        "paragraphs": [
          "Scheme is a language in the Lisp family that we can use to understand functional programming ideas.",
          "Consider:",
          "(+ 10 20)",
          "Result:",
          "30",
          "Another example:",
          "(- 20 5)",
          "Result:",
          "15",
          "We can also place one expression inside another:",
          "(+ 10 (* 2 5))",
          "First:",
          "(* 2 5)",
          "produces 10.",
          "Then:",
          "(+ 10 10)",
          "produces 20.",
          "This shows an important functional idea: the output of one function can become the input of another function."
        ],
        "source": [
          "Scheme is a language in the Lisp family that we can use to understand functional programming ideas.",
          "Consider:",
          "(+ 10 20)",
          "Result:",
          "30",
          "Another example:",
          "(- 20 5)",
          "Result:",
          "15",
          "We can also place one expression inside another:",
          "(+ 10 (* 2 5))",
          "First:",
          "(* 2 5)",
          "produces 10.",
          "Then:",
          "(+ 10 10)",
          "produces 20.",
          "This shows an important functional idea: the output of one function can become the input of another function."
        ]
      },
      {
        "number": 5,
        "title": "Scheme",
        "subtitle": "Defining Our Own Functions",
        "paragraphs": [
          "We are not limited to built-in operations such as + and *. We can create our own functions.",
          "For example:",
          "(define (square x)",
          "(* x x))",
          "This creates a function called square.",
          "The function receives one value called x and multiplies it by itself.",
          "Now:",
          "(square 5)",
          "returns:",
          "25",
          "And:",
          "(square 10)",
          "returns:",
          "100",
          "The important idea is:",
          "Input → Function → Output",
          "A function allows us to give a name to a useful operation and reuse it when needed."
        ],
        "source": [
          "We are not limited to built-in operations such as + and *. We can create our own functions.",
          "For example:",
          "(define (square x)",
          "(* x x))",
          "This creates a function called square.",
          "The function receives one value called x and multiplies it by itself.",
          "Now:",
          "(square 5)",
          "returns:",
          "25",
          "And:",
          "(square 10)",
          "returns:",
          "100",
          "The important idea is:",
          "Input → Function → Output",
          "A function allows us to give a name to a useful operation and reuse it when needed."
        ]
      },
      {
        "number": 6,
        "title": "Building Blocks of Dynamic Memory Structure",
        "subtitle": "Why Do We Need Flexible Data Structures?",
        "paragraphs": [
          "Programs do not always work with one value.",
          "Imagine storing marks:",
          "75, 80, 65, 90",
          "We need a structure that can hold several related values.",
          "In Lisp and Scheme, lists are very important structures.",
          "For example:",
          "'(75 80 65 90)",
          "represents a list containing four values.",
          "Unlike working with four completely separate variables, a list allows us to treat the values as one structure.",
          "For example, we may want to:",
          "Get the first value",
          "Get the remaining values",
          "Add another value",
          "Process the values using functions",
          "Lists therefore provide an important building block for creating flexible structures."
        ],
        "source": [
          "Programs do not always work with one value.",
          "Imagine storing marks:",
          "75, 80, 65, 90",
          "We need a structure that can hold several related values.",
          "In Lisp and Scheme, lists are very important structures.",
          "For example:",
          "'(75 80 65 90)",
          "represents a list containing four values.",
          "Unlike working with four completely separate variables, a list allows us to treat the values as one structure.",
          "For example, we may want to:",
          "Get the first value",
          "Get the remaining values",
          "Add another value",
          "Process the values using functions",
          "Lists therefore provide an important building block for creating flexible structures."
        ]
      },
      {
        "number": 7,
        "title": "Functions on Lists",
        "subtitle": "How Can We Access a List?",
        "paragraphs": [
          "Consider:",
          "(define marks '(75 80 65 90))",
          "Suppose we want the first item.",
          "We can use:",
          "(car marks)",
          "Result:",
          "75",
          "Now suppose we want everything except the first item.",
          "We can use:",
          "(cdr marks)",
          "Result:",
          "(80 65 90)",
          "So remember the basic idea:",
          "car → first item",
          "cdr → remaining list",
          "These functions allow us to break a list into smaller parts and process them."
        ],
        "source": [
          "Consider:",
          "(define marks '(75 80 65 90))",
          "Suppose we want the first item.",
          "We can use:",
          "(car marks)",
          "Result:",
          "75",
          "Now suppose we want everything except the first item.",
          "We can use:",
          "(cdr marks)",
          "Result:",
          "(80 65 90)",
          "So remember the basic idea:",
          "car → first item",
          "cdr → remaining list",
          "These functions allow us to break a list into smaller parts and process them."
        ]
      },
      {
        "number": 8,
        "title": "Functions on Lists",
        "subtitle": "How Can We Build a New List?",
        "paragraphs": [
          "Suppose we already have:",
          "'(20 30 40)",
          "and want to put 10 at the beginning.",
          "We can use:",
          "(cons 10 '(20 30 40))",
          "The result is:",
          "(10 20 30 40)",
          "The cons operation allows us to construct a new list by adding an item to the front of an existing list.",
          "Now we have three useful operations:",
          "car gets the first item.",
          "cdr gets the remaining items.",
          "cons constructs a new list by adding an item at the front.",
          "These simple operations help us understand how larger list structures can be processed and built."
        ],
        "source": [
          "Suppose we already have:",
          "'(20 30 40)",
          "and want to put 10 at the beginning.",
          "We can use:",
          "(cons 10 '(20 30 40))",
          "The result is:",
          "(10 20 30 40)",
          "The cons operation allows us to construct a new list by adding an item to the front of an existing list.",
          "Now we have three useful operations:",
          "car gets the first item.",
          "cdr gets the remaining items.",
          "cons constructs a new list by adding an item at the front.",
          "These simple operations help us understand how larger list structures can be processed and built."
        ]
      },
      {
        "number": 9,
        "title": "Binary Tree Abstraction",
        "subtitle": "Can Data Be Organized as a Tree Instead of a List?",
        "paragraphs": [
          "A list organizes data in a sequence:",
          "10  20  30  40",
          "Sometimes we want a different structure.",
          "A binary tree organizes data using nodes. Each node can have up to two children.",
          "For example:",
          "50",
          "/  \\",
          "30    70",
          "Here:",
          "50 is the root.",
          "30 is the left child.",
          "70 is the right child.",
          "A tree gives us another way to represent and organize information.",
          "The important idea is:",
          "List = sequence of items. Binary tree = hierarchical structure of nodes."
        ],
        "source": [
          "A list organizes data in a sequence:",
          "10  20  30  40",
          "Sometimes we want a different structure.",
          "A binary tree organizes data using nodes. Each node can have up to two children.",
          "For example:",
          "50",
          "/  \\",
          "30    70",
          "Here:",
          "50 is the root.",
          "30 is the left child.",
          "70 is the right child.",
          "A tree gives us another way to represent and organize information.",
          "The important idea is:",
          "List = sequence of items. Binary tree = hierarchical structure of nodes."
        ]
      },
      {
        "number": 10,
        "title": "Binary Search Tree Abstraction",
        "subtitle": "How Can We Organize Values for Searching?",
        "paragraphs": [
          "A binary search tree adds an ordering rule to the binary tree.",
          "Consider:",
          "50",
          "/  \\",
          "30    70",
          "/ \\    / \\",
          "20 40  60 80",
          "For this simple example:",
          "Values smaller than a node are placed on the left.",
          "Values larger than a node are placed on the right.",
          "Suppose we search for 60.",
          "We compare it with 50. Since 60 is larger, we move right to 70. Since 60 is smaller than 70, we move left and find 60.",
          "The important idea is not to memorize a complicated algorithm. Understand how the tree structure and ordering rule organize the data."
        ],
        "source": [
          "A binary search tree adds an ordering rule to the binary tree.",
          "Consider:",
          "50",
          "/  \\",
          "30    70",
          "/ \\    / \\",
          "20 40  60 80",
          "For this simple example:",
          "Values smaller than a node are placed on the left.",
          "Values larger than a node are placed on the right.",
          "Suppose we search for 60.",
          "We compare it with 50. Since 60 is larger, we move right to 70. Since 60 is smaller than 70, we move left and find 60.",
          "The important idea is not to memorize a complicated algorithm. Understand how the tree structure and ordering rule organize the data."
        ]
      },
      {
        "number": 11,
        "title": "Local Binding",
        "subtitle": "Can We Create a Name for Use Only in One Place?",
        "paragraphs": [
          "Sometimes we need a variable only for a small part of a program.",
          "In Scheme, we can use let for a simple local binding.",
          "Example:",
          "(let ((x 10)",
          "(y 20))",
          "(+ x y))",
          "Here, x is associated with 10 and y with 20 inside this expression.",
          "The result is:",
          "30",
          "The important idea is that these names are created for local use.",
          "Why is this useful?",
          "A large program may contain many names. Keeping some names local helps organize the program and limits where those names are used.",
          "This idea becomes very important in Week 4 when we study scope and binding in more detail."
        ],
        "source": [
          "Sometimes we need a variable only for a small part of a program.",
          "In Scheme, we can use let for a simple local binding.",
          "Example:",
          "(let ((x 10)",
          "(y 20))",
          "(+ x y))",
          "Here, x is associated with 10 and y with 20 inside this expression.",
          "The result is:",
          "30",
          "The important idea is that these names are created for local use.",
          "Why is this useful?",
          "A large program may contain many names. Keeping some names local helps organize the program and limits where those names are used.",
          "This idea becomes very important in Week 4 when we study scope and binding in more detail."
        ]
      },
      {
        "number": 12,
        "title": "Introduction to Functional Programming",
        "subtitle": "Apply the Main Ideas",
        "paragraphs": [
          "Consider this function:",
          "(define (double x)",
          "(* x 2))",
          "What is:",
          "(double 5)",
          "Answer: 10",
          "Now consider:",
          "(car '(10 20 30))",
          "Answer: 10",
          "What about:",
          "(cdr '(10 20 30))",
          "Answer: (20 30)",
          "And:",
          "(cons 5 '(10 20 30))",
          "Answer: (5 10 20 30)",
          "Finally:",
          "(let ((x 5))",
          "(double x))",
          "Answer: 10",
          "These examples connect the main Week 3 ideas: functions, Scheme, lists, and local binding."
        ],
        "source": [
          "Consider this function:",
          "(define (double x)",
          "(* x 2))",
          "What is:",
          "(double 5)",
          "Answer: 10",
          "Now consider:",
          "(car '(10 20 30))",
          "Answer: 10",
          "What about:",
          "(cdr '(10 20 30))",
          "Answer: (20 30)",
          "And:",
          "(cons 5 '(10 20 30))",
          "Answer: (5 10 20 30)",
          "Finally:",
          "(let ((x 5))",
          "(double x))",
          "Answer: 10",
          "These examples connect the main Week 3 ideas: functions, Scheme, lists, and local binding."
        ]
      }
    ],
    "quiz": [
      {
        "question": "In functional programming, the main focus is on:",
        "options": [
          "Functions and transformations",
          "Hardware only",
          "File names",
          "Operating systems"
        ],
        "answer": 0
      },
      {
        "question": "What is the result of (+ 5 3)?",
        "options": [
          "2",
          "8",
          "15",
          "53"
        ],
        "answer": 1
      },
      {
        "question": "What does (car '(10 20 30)) return?",
        "options": [
          "10",
          "20",
          "30",
          "(20 30)"
        ],
        "answer": 0
      },
      {
        "question": "What does (cdr '(10 20 30)) return?",
        "options": [
          "(10 20)",
          "10",
          "(20 30)",
          "30"
        ],
        "answer": 2
      },
      {
        "question": "What does (cons 5 '(10 20)) produce?",
        "options": [
          "(10 20 5)",
          "(5 10 20)",
          "15",
          "(5)"
        ],
        "answer": 1
      }
    ],
    "clo": "CLO 1: Review the range of programming paradigms using suitable examples and illustrations.",
    "title": "Functional Programming, Lisp and Scheme",
    "topics": [
      {
        "title": "Introduction to Functional Programming",
        "slides": [
          1,
          2
        ],
        "check": [
          "What is the main focus of functional programming?",
          [
            "Functions, inputs, and outputs",
            "Only changing variables"
          ],
          0,
          "Functional programming focuses on functions and transformations."
        ]
      },
      {
        "title": "Lisp",
        "slides": [
          3
        ],
        "check": [
          "Where is the function written in (+ 5 3)?",
          [
            "First",
            "Last"
          ],
          0,
          "The function comes first, followed by its inputs."
        ]
      },
      {
        "title": "Scheme",
        "slides": [
          4,
          5
        ],
        "check": [
          "What does (square 10) return?",
          [
            "20",
            "100"
          ],
          1,
          "The function multiplies 10 by itself."
        ]
      },
      {
        "title": "Building Blocks of Dynamic Memory Structure",
        "slides": [
          6
        ],
        "check": [
          "How many values are in the marks list?",
          [
            "3",
            "4"
          ],
          1,
          "The list contains 75, 80, 65, and 90."
        ]
      },
      {
        "title": "Functions on Lists",
        "slides": [
          7,
          8
        ],
        "check": [
          "Which operation constructs a new list by adding to the front?",
          [
            "cdr",
            "cons"
          ],
          1,
          "cons adds an item at the front of an existing list."
        ]
      },
      {
        "title": "Binary Tree Abstraction",
        "slides": [
          9
        ],
        "check": [
          "Which node is the root of this tree?",
          [
            "30",
            "50"
          ],
          1,
          "The root is the top node: 50."
        ]
      },
      {
        "title": "Binary Search Tree Abstraction",
        "slides": [
          10
        ],
        "check": [
          "From 50, which direction should a search for 60 take?",
          [
            "Left",
            "Right"
          ],
          1,
          "60 is larger than 50, so move right."
        ]
      },
      {
        "title": "Local Binding",
        "slides": [
          11
        ],
        "check": [
          "Where are x and y intended for use in this let expression?",
          [
            "Inside this expression",
            "Everywhere in the program"
          ],
          0,
          "Local binding limits where these names are used."
        ]
      },
      {
        "title": "Practice",
        "slides": [
          12
        ],
        "check": null
      },
      {
        "title": "Quiz",
        "slides": [],
        "check": null
      }
    ]
  },
  "4": {
    "slides": [
      {
        "number": 1,
        "title": "Languages and Software Engineering",
        "subtitle": "How Does the Programming Language Affect Software Development?",
        "paragraphs": [
          "Software can become very large.",
          "A small program may contain only a few functions, while a large software system may contain many components working together.",
          "Programming languages provide features that help us organize software.",
          "For example, we may organize a program using:",
          "Functions, local variables, modules, objects, and other components.",
          "This is important in software engineering because software needs to be understandable, testable, changeable, and maintainable.",
          "The main question for this week is:",
          "When a program becomes larger, how does the language know which names and variables we are talking about?"
        ],
        "source": [
          "Software can become very large.",
          "A small program may contain only a few functions, while a large software system may contain many components working together.",
          "Programming languages provide features that help us organize software.",
          "For example, we may organize a program using:",
          "Functions, local variables, modules, objects, and other components.",
          "This is important in software engineering because software needs to be understandable, testable, changeable, and maintainable.",
          "The main question for this week is:",
          "When a program becomes larger, how does the language know which names and variables we are talking about?"
        ]
      },
      {
        "number": 2,
        "title": "Layers of Functional Programming",
        "subtitle": "Building a Larger Solution from Smaller Functions",
        "paragraphs": [
          "Functional programs can be organized using layers of functions.",
          "Suppose we have:",
          "(define (square x)",
          "(* x x))",
          "Now create:",
          "(define (sum-squares x y)",
          "(+ (square x) (square y)))",
          "If we call:",
          "(sum-squares 3 4)",
          "square calculates 9 and 16, and sum-squares combines them to produce:",
          "25",
          "The important idea is that simple functions can be combined to create more complex functions.",
          "This helps organize larger solutions without putting everything inside one large function."
        ],
        "source": [
          "Functional programs can be organized using layers of functions.",
          "Suppose we have:",
          "(define (square x)",
          "(* x x))",
          "Now create:",
          "(define (sum-squares x y)",
          "(+ (square x) (square y)))",
          "If we call:",
          "(sum-squares 3 4)",
          "square calculates 9 and 16, and sum-squares combines them to produce:",
          "25",
          "The important idea is that simple functions can be combined to create more complex functions.",
          "This helps organize larger solutions without putting everything inside one large function."
        ]
      },
      {
        "number": 3,
        "title": "Concurrency",
        "subtitle": "Can a Program Handle More Than One Activity?",
        "paragraphs": [
          "Imagine a music application.",
          "While music is playing, the application may also respond when you press a button or perform another activity.",
          "The application has multiple activities that need to make progress during the same period.",
          "This introduces concurrency.",
          "Concurrency means organizing a program so that multiple tasks can make progress during overlapping periods of time.",
          "For this week, we only need the basic idea.",
          "We do not need to study threads, semaphores, or monitors yet.",
          "Example:",
          "Play music",
          "while the application can also",
          "Respond to user actions",
          "The important idea is that a program does not always have only one simple activity to manage."
        ],
        "source": [
          "Imagine a music application.",
          "While music is playing, the application may also respond when you press a button or perform another activity.",
          "The application has multiple activities that need to make progress during the same period.",
          "This introduces concurrency.",
          "Concurrency means organizing a program so that multiple tasks can make progress during overlapping periods of time.",
          "For this week, we only need the basic idea.",
          "We do not need to study threads, semaphores, or monitors yet.",
          "Example:",
          "Play music",
          "while the application can also",
          "Respond to user actions",
          "The important idea is that a program does not always have only one simple activity to manage."
        ]
      },
      {
        "number": 4,
        "title": "Static and Binding Scoping",
        "subtitle": "What Does a Variable Name Actually Refer To?",
        "paragraphs": [
          "Consider:",
          "x = 10",
          "We have a name:",
          "x",
          "and something associated with that name:",
          "10",
          "The idea of connecting a name with something in the program is called binding.",
          "Now imagine:",
          "x = 100\n\ndef calculate():\n    x = 10\n    print(x)\n\ncalculate()",
          "There are two variables named x.",
          "Which one does print(x) use?",
          "It uses the x defined inside calculate(), so the result is:",
          "10",
          "This raises an important programming-language question:",
          "When the same name appears in different places, which one does the program use?"
        ],
        "source": [
          "Consider:",
          "x = 10",
          "We have a name:",
          "x",
          "and something associated with that name:",
          "10",
          "The idea of connecting a name with something in the program is called binding.",
          "Now imagine:",
          "x = 100def calculate():    x = 10    print(x)calculate()",
          "There are two variables named x.",
          "Which one does print(x) use?",
          "It uses the x defined inside calculate(), so the result is:",
          "10",
          "This raises an important programming-language question:",
          "When the same name appears in different places, which one does the program use?"
        ]
      },
      {
        "number": 5,
        "title": "Static and Binding Scoping",
        "subtitle": "Scope Tells Us Where a Name Can Be Used",
        "paragraphs": [
          "Consider:",
          "def calculate():\n    x = 10\n    print(x)",
          "The variable x is created inside calculate().",
          "We say that x has a local scope.",
          "Scope tells us where in the program a name is visible and can be used.",
          "Now consider:",
          "x = 100\n\ndef calculate():\n    print(x)",
          "Here the function does not define its own x, so it can use the surrounding x according to Python's scope rules.",
          "This is why scope matters.",
          "In a large program, the same name may appear in different places, and the language needs rules for deciding which one is being used."
        ],
        "source": [
          "Consider:",
          "def calculate():    x = 10    print(x)",
          "The variable x is created inside calculate().",
          "We say that x has a local scope.",
          "Scope tells us where in the program a name is visible and can be used.",
          "Now consider:",
          "x = 100def calculate():    print(x)",
          "Here the function does not define its own x, so it can use the surrounding x according to Python's scope rules.",
          "This is why scope matters.",
          "In a large program, the same name may appear in different places, and the language needs rules for deciding which one is being used."
        ]
      },
      {
        "number": 6,
        "title": "Static Scoping",
        "subtitle": "Can We Determine the Variable by Looking at the Code?",
        "paragraphs": [
          "Consider:",
          "x = 100\n\ndef outer():\n    x = 20\n\n    def inner():\n        print(x)\n\n    inner()\n\nouter()",
          "What will be printed?",
          "20",
          "Why not 100?",
          "The function inner() is written inside outer(), where x = 20 is defined.",
          "With static or lexical scoping, the program's written structure helps determine which binding a name refers to.",
          "We can look at where the function is defined and its surrounding scopes.",
          "For this example, inner() finds the nearby x from outer()."
        ],
        "source": [
          "Consider:",
          "x = 100def outer():    x = 20    def inner():        print(x)    inner()outer()",
          "What will be printed?",
          "20",
          "Why not 100?",
          "The function inner() is written inside outer(), where x = 20 is defined.",
          "With static or lexical scoping, the program's written structure helps determine which binding a name refers to.",
          "We can look at where the function is defined and its surrounding scopes.",
          "For this example, inner() finds the nearby x from outer()."
        ]
      },
      {
        "number": 7,
        "title": "Lexical Addressing",
        "subtitle": "Where Should the Program Look for a Variable?",
        "paragraphs": [
          "Consider again:",
          "Global area",
          "x = 100",
          "outer()",
          "x = 20",
          "inner()",
          "print(x)",
          "When inner() needs x, it first considers its local environment.",
          "If x is not there, it considers the surrounding lexical environment.",
          "Here, it finds:",
          "x = 20",
          "inside outer().",
          "This gives us the basic idea behind lexical addressing: identifying a variable through its position in the surrounding lexical structure.",
          "For this week, the important idea is simple:",
          "The location of code and its surrounding scopes help determine which variable is used."
        ],
        "source": [
          "Consider again:",
          "Global area",
          "x = 100",
          "outer()",
          "x = 20",
          "inner()",
          "print(x)",
          "When inner() needs x, it first considers its local environment.",
          "If x is not there, it considers the surrounding lexical environment.",
          "Here, it finds:",
          "x = 20",
          "inside outer().",
          "This gives us the basic idea behind lexical addressing: identifying a variable through its position in the surrounding lexical structure.",
          "For this week, the important idea is simple:",
          "The location of code and its surrounding scopes help determine which variable is used."
        ]
      },
      {
        "number": 8,
        "title": "Free and Bound Variables",
        "subtitle": "Is the Variable Defined Here or Does It Come from Outside?",
        "paragraphs": [
          "Consider:",
          "(lambda (x)",
          "(+ x y))",
          "Look at x.",
          "x is introduced as a parameter:",
          "(lambda (x) ...)",
          "So x is bound by this lambda expression.",
          "Now look at y.",
          "This lambda does not introduce y.",
          "Therefore, y is free in this expression. Its meaning must come from somewhere outside this lambda expression.",
          "The simple idea is:",
          "Bound variable: its binding is provided by the current construct.",
          "Free variable: its binding must be found outside the current construct.",
          "This concept helps us understand how programming languages determine the meaning of names."
        ],
        "source": [
          "Consider:",
          "(lambda (x)",
          "(+ x y))",
          "Look at x.",
          "x is introduced as a parameter:",
          "(lambda (x) ...)",
          "So x is bound by this lambda expression.",
          "Now look at y.",
          "This lambda does not introduce y.",
          "Therefore, y is free in this expression. Its meaning must come from somewhere outside this lambda expression.",
          "The simple idea is:",
          "Bound variable: its binding is provided by the current construct.",
          "Free variable: its binding must be found outside the current construct.",
          "This concept helps us understand how programming languages determine the meaning of names."
        ]
      },
      {
        "number": 9,
        "title": "Syntax",
        "subtitle": "Is the Code Written According to the Language Rules?",
        "paragraphs": [
          "Consider:",
          "if mark >= 60\n    print(\"Pass\")",
          "Python rejects this code.",
          "Why?",
          "The if statement is missing :.",
          "Correct version:",
          "if mark >= 60:\n    print(\"Pass\")",
          "This is about syntax.",
          "Syntax describes the rules for how programs are written and structured.",
          "Syntax answers the question:",
          "Is the code written according to the rules of the language?",
          "We already saw a similar idea when studying grammar in Week 2. Grammar helps describe valid structures, while syntax concerns the valid form of program text."
        ],
        "source": [
          "Consider:",
          "if mark >= 60    print(\"Pass\")",
          "Python rejects this code.",
          "Why?",
          "The if statement is missing :.",
          "Correct version:",
          "if mark >= 60:    print(\"Pass\")",
          "This is about syntax.",
          "Syntax describes the rules for how programs are written and structured.",
          "Syntax answers the question:",
          "Is the code written according to the rules of the language?",
          "We already saw a similar idea when studying grammar in Week 2. Grammar helps describe valid structures, while syntax concerns the valid form of program text."
        ]
      },
      {
        "number": 10,
        "title": "Basic Semantics",
        "subtitle": "What Does the Code Actually Mean?",
        "paragraphs": [
          "Now consider:",
          "mark = 75\n\nif mark >= 60:\n    print(\"Fail\")\nelse:\n    print(\"Pass\")",
          "The syntax is valid.",
          "Python can run the program.",
          "But if the requirement is:",
          "A mark of 60 or higher means Pass",
          "then the program expresses the wrong behavior.",
          "This is related to semantics.",
          "Semantics concerns the meaning or behavior of the program.",
          "The easiest way to remember the difference is:",
          "Syntax: Is it written correctly?",
          "Semantics: What does it mean or do?",
          "A program can therefore have correct syntax but still express the wrong intended behavior."
        ],
        "source": [
          "Now consider:",
          "mark = 75if mark >= 60:    print(\"Fail\")else:    print(\"Pass\")",
          "The syntax is valid.",
          "Python can run the program.",
          "But if the requirement is:",
          "A mark of 60 or higher means Pass",
          "then the program expresses the wrong behavior.",
          "This is related to semantics.",
          "Semantics concerns the meaning or behavior of the program.",
          "The easiest way to remember the difference is:",
          "Syntax: Is it written correctly?",
          "Semantics: What does it mean or do?",
          "A program can therefore have correct syntax but still express the wrong intended behavior."
        ]
      },
      {
        "number": 11,
        "title": "Names, Scope and Binding",
        "subtitle": "Put the Ideas Together",
        "paragraphs": [
          "Consider:",
          "x = 100\n\ndef calculate():\n    x = 20\n    result = x + 5\n    return result",
          "Here we can ask several programming-language questions.",
          "Name: What names exist?",
          "x, calculate, and result.",
          "Binding: What is associated with each name?",
          "Inside the function, x is associated with 20.",
          "Scope: Where can each name be used?",
          "The local x and result are used inside calculate().",
          "Semantics: What does the function do?",
          "It calculates 20 + 5 and returns 25.",
          "These concepts help us understand what code means, especially when programs become larger."
        ],
        "source": [
          "Consider:",
          "x = 100def calculate():    x = 20    result = x + 5    return result",
          "Here we can ask several programming-language questions.",
          "Name: What names exist?",
          "x, calculate, and result.",
          "Binding: What is associated with each name?",
          "Inside the function, x is associated with 20.",
          "Scope: Where can each name be used?",
          "The local x and result are used inside calculate().",
          "Semantics: What does the function do?",
          "It calculates 20 + 5 and returns 25.",
          "These concepts help us understand what code means, especially when programs become larger."
        ]
      },
      {
        "number": 12,
        "title": "Syntax, Semantics, Scope and Binding",
        "subtitle": "Find the Problem Before Running the Code",
        "paragraphs": [
          "Look at:",
          "x = 50\n\ndef calculate():\n    x = 10\n    if x > 5:\n        print(\"Small\")",
          "Ask four questions.",
          "Is the syntax valid?",
          "Yes.",
          "Which x is used inside calculate()?",
          "The local x = 10.",
          "What is its scope?",
          "Inside the function.",
          "Does the output match the likely intended meaning?",
          "Probably not if values greater than 5 are supposed to be described as “Large.”",
          "This is why understanding programming languages is useful even when AI writes the code.",
          "We need to understand the structure, names, scope, binding, and meaning to check whether the generated solution is correct."
        ],
        "source": [
          "Look at:",
          "x = 50def calculate():    x = 10    if x > 5:        print(\"Small\")",
          "Ask four questions.",
          "Is the syntax valid?",
          "Yes.",
          "Which x is used inside calculate()?",
          "The local x = 10.",
          "What is its scope?",
          "Inside the function.",
          "Does the output match the likely intended meaning?",
          "Probably not if values greater than 5 are supposed to be described as “Large.”",
          "This is why understanding programming languages is useful even when AI writes the code.",
          "We need to understand the structure, names, scope, binding, and meaning to check whether the generated solution is correct."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does binding describe?",
        "options": [
          "Connecting a name with something in the program",
          "Deleting a variable",
          "CPU speed",
          "Creating a file"
        ],
        "answer": 0
      },
      {
        "question": "What does scope tell us?",
        "options": [
          "Program price",
          "Where a name is visible or can be used",
          "CPU type",
          "Number of files"
        ],
        "answer": 1
      },
      {
        "question": "In (lambda (x) (+ x y)), which variable is bound by the lambda?",
        "options": [
          "y",
          "x",
          "Both",
          "Neither"
        ],
        "answer": 1
      },
      {
        "question": "Which concept asks whether code follows the language's writing rules?",
        "options": [
          "Semantics",
          "Concurrency",
          "Syntax",
          "Binding"
        ],
        "answer": 2
      },
      {
        "question": "Code runs correctly but performs the wrong intended operation. Which concept helps us discuss its meaning?",
        "options": [
          "Syntax",
          "Semantics",
          "CPU architecture",
          "Lexical addressing"
        ],
        "answer": 1
      }
    ],
    "clo": "CLO 2: Analyze syntax, semantics, names, scopes and bindings for programming languages.",
    "title": "Languages and Software Engineering, Functional Programming, Concurrency, Scope and Binding",
    "topics": [
      {
        "title": "Languages and Software Engineering",
        "slides": [
          1
        ],
        "check": [
          "Why do languages provide ways to organize software?",
          [
            "To help make it understandable and maintainable",
            "To prevent reuse"
          ],
          0,
          "Functions, local variables, modules, and objects help organize larger programs."
        ]
      },
      {
        "title": "Layers of Functional Programming",
        "slides": [
          2
        ],
        "check": [
          "What does (sum-squares 3 4) produce?",
          [
            "7",
            "25"
          ],
          1,
          "square produces 9 and 16; sum-squares adds them to get 25."
        ]
      },
      {
        "title": "Concurrency",
        "slides": [
          3
        ],
        "check": [
          "What does concurrency let multiple tasks do?",
          [
            "Make progress during overlapping periods",
            "Always finish at exactly the same time"
          ],
          0,
          "Concurrency concerns overlapping progress; tasks need not finish together."
        ]
      },
      {
        "title": "Static and Binding Scoping",
        "slides": [
          4,
          5
        ],
        "check": [
          "What does scope describe?",
          [
            "Where a name is visible and can be used",
            "The speed of a program"
          ],
          0,
          "Scope determines where in the program a name is available."
        ]
      },
      {
        "title": "Static Scoping",
        "slides": [
          6
        ],
        "check": [
          "Why does inner() use x = 20?",
          [
            "It is in the surrounding outer() scope",
            "It is the largest value"
          ],
          0,
          "The written nesting of the functions determines the binding."
        ]
      },
      {
        "title": "Lexical Addressing",
        "slides": [
          7
        ],
        "check": [
          "If inner() has no local x, where does it look next?",
          [
            "The surrounding lexical environment",
            "An unrelated function"
          ],
          0,
          "The surrounding lexical environment is outer(), where x = 20."
        ]
      },
      {
        "title": "Free and Bound Variables",
        "slides": [
          8
        ],
        "check": [
          "Which variable is free in (lambda (x) (+ x y))?",
          [
            "x",
            "y"
          ],
          1,
          "This lambda introduces x but does not introduce y."
        ]
      },
      {
        "title": "Syntax",
        "slides": [
          9
        ],
        "check": [
          "What is missing from the incorrect if statement?",
          [
            "A colon",
            "A return statement"
          ],
          0,
          "Python requires a colon at the end of the if header."
        ]
      },
      {
        "title": "Basic Semantics",
        "slides": [
          10
        ],
        "check": [
          "Can valid syntax still express the wrong intended behavior?",
          [
            "Yes",
            "No"
          ],
          0,
          "The program runs, but its meaning can disagree with the requirement."
        ]
      },
      {
        "title": "Names, Scope and Binding",
        "slides": [
          11
        ],
        "check": [
          "What does calculate() return in this example?",
          [
            "105",
            "25"
          ],
          1,
          "The local x is 20, so result is 20 + 5 = 25."
        ]
      },
      {
        "title": "Practice",
        "slides": [
          12
        ],
        "check": null
      },
      {
        "title": "Quiz",
        "slides": [],
        "check": null
      }
    ]
  }
};
