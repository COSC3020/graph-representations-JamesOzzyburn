[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12502953&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## Answer

I believe that the runtime complexity of the conversion is $\Theta$ $(n^2)$ where $n$ is the number of verticies. I believe this because all the program does is loop through a list of length $n$ where each element $n$ is also a list of length $n$ and $\Theta$ $(n * n)$ is the same as $\Theta$ $(n^2)$. Also from past classes and exercises we know that going through nested for loops will just be $\Theta$ $(n^2)$.

I believe that the only thing that affect runtime is the number of verticies. I believe this because as previously stated we just iterate through a 2D list and we just look at the edge to see if it exists or not but we dont do anything with it.