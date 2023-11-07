       <script>
       // reload script for thebutton2
       document.getElementById("Thebutton2").addEventListener("click", function() {
        location.reload();
        window.scrollTo(0, 0);
       });
       </script>

       <script id="1298619575">

        // line below calls the showResults function
        document.getElementById('survey-form').addEventListener('submit', showResults);

        function showResults(event) {
          event.preventDefault();

         // get value of each question and for userresponse
         let q1a = document.querySelector('input[name="q1-a"]').checked;
         let q1b = document.querySelector('input[name="q1-b"]').checked;
         let q1c = document.querySelector('input[name="q1-c"]').checked;
         let q1d = document.querySelector('input[name="q1-d"]').checked;
         let q1e = document.querySelector('input[name="q1-e"]').checked;
         let q1f = document.querySelector('input[name="q1-f"]').checked;
         let q1g = document.querySelector('input[name="q1-g"]').checked;
         let q2 = document.querySelector('input[name="q2"]:checked').value;
         let q3 = document.querySelector('input[name="q3"]:checked').value;
         let q4 = document.querySelector('input[name="q4"]:checked').value;
         let q5a = document.querySelector('input[name="q5-a"]').checked;
         let q5b = document.querySelector('input[name="q5-b"]').checked;
         let q5c = document.querySelector('input[name="q5-c"]').checked;
         let q5d = document.querySelector('input[name="q5-d"]').checked;
         let q5e = document.querySelector('input[name="q5-e"]').checked;
         let q6 = document.querySelector('input[name="q6"]:checked').value;
         let q7 = document.querySelector('input[name="q7"]:checked').value;
         let q8 = document.querySelector('input[name="q8"]:checked').value;
         let q9a = document.querySelector('input[name="q9-a"]').checked;
         let q9b = document.querySelector('input[name="q9-b"]').checked;
         let q9c = document.querySelector('input[name="q9-c"]').checked;
         let q9d = document.querySelector('input[name="q9-d"]').checked;
         let q9e = document.querySelector('input[name="q9-e"]').checked;
         let q9f = document.querySelector('input[name="q9-f"]').checked;
         let q9g = document.querySelector('input[name="q9-g"]').checked;
         let q9h = document.querySelector('input[name="q9-h"]').checked;
         let q10 = document.querySelector('input[name="q10"]:checked').value;
         let q11 = document.querySelector('input[name="q11"]:checked').value;
         let q12 = document.querySelector('input[name="q12"]:checked').value;
         let q13a = document.querySelector('input[name="q13-a"]').checked;
         let q13b = document.querySelector('input[name="q13-b"]').checked;
         let q13c = document.querySelector('input[name="q13-c"]').checked;
         let q13d = document.querySelector('input[name="q13-d"]').checked;
         let q13e = document.querySelector('input[name="q13-e"]').checked;
         let q13f = document.querySelector('input[name="q13-f"]').checked;
         let q13g = document.querySelector('input[name="q13-g"]').checked;
         let q13h = document.querySelector('input[name="q13-h"]').checked;
         let q13i = document.querySelector('input[name="q13-i"]').checked;
         let q14 = document.querySelector('select[name="q14"]').value;   

         // disable and hide the submit button
         document.getElementById('Thebutton').style.display = 'none';
         document.getElementById('Thebutton2').style.display = 'inline-block';

         // shift the view down by a few pixels
         window.scrollTo({
            top: window.scrollY + 50,
            behavior: 'smooth'
         });
         
         // set points for everyone to 0
         let points = {
         "a": 0,
         "b": 0,
         "c": 0,
         "d": 0,
         "e": 0,
         "f": 0,
         "g": 0,
         "h": 0,
         "i": 0,
         "j": 0,
         "k": 0,
         "l": 0,
         "m": 0,
         "n": 0,
         "o": 0,
         "p": 0,
         "q": 0,
         "r": 0,
         "s": 0,
         "t": 0,
         "u": 0,
         "v": 0,
         "w": 0,
         "x": 0,
         "y": 0,
         "aa": 0,
         "bb": 0,
         "cc": 0,
         "dd": 0,
         "ee": 0,
         "ff": 0
         };
      
         // give points based on each question & choice selected
         if (q1a) {
         points["v"] += 1;
         points["d"] += 1;
         }
         if (q1b) {
         points["b"] += 1;
         points["i"] += 1;
         points["j"] += 1;
         points["k"] += 1;
         points["l"] += 1;
         points["n"] += 1;
         points["q"] += 1;
         points["r"] += 1;
         points["u"] += 1;
         }
         if (q1c) {
         points["k"] += 0.5;
         points["m"] += 1;
         points["t"] += 1;
         points["y"] += 1;
         points["aa"] += 1;
         points["bb"] += 0.8;
         points["ee"] += 1;
         }
         if (q1d) {
         points["g"] += 1;
         points["h"] += 1;
         points["x"] += 1;
         points["cc"] += 1;
         }
         if (q1e) {
         points["o"] += 1;
         points["s"] += 1;
         }
         if (q1f) {
         points["p"] += 1;
         points["w"] += 1;
         points["bb"] += 1;
         points["ee"] += 1;
         }
         if (q1g) {
         points["a"] += 1;
         points["c"] += 1;
         points["e"] += 1;
         points["f"] += 1;
         points["z"] += 1;
         points["dd"] += 1;
         points["ff"] += 1;
         }
         if (q2 === "a") {
         points["d"] += 1;
         points["v"] += 1;
         points["ee"] += 1;
         points["w"] += 1;
         }
         if (q2 === "b") {
         points["d"] -= 3;
         points["v"] -= 3;
         points["w"] -= 0.5;
         points["ee"] -= 1;
         }
         if (q3 === "a") {
         points["v"] += 2;
         }
         if (q3 === "b") {
         points["v"] -= 1;
         }
         if (q4 === "a") {
         points["d"] += 2;
         points["b"] += 1;
         points["k"] += 1;
         }
         if (q4 === "b") {
         points["d"] -= 1;
         points["b"] -= 0.5;
         }
         if (q5a) {
         points["f"] += 1;
         }
         if (q5c) {
         points["l"] += 1;
         points["o"] += 0.5;
         points["s"] += 0.5;
         points["b"] += 0.4;
         }
         if (q5d) {
         points["dd"] += 0.1;
         points["c"] += 0.1;
         points["x"] += 0.1;
         }
         if (q5e) {
         points["dd"] += 0.4;
         points["c"] += 0.1;
         }
         if (q6 === "a") {
         points["y"] += 1.5;
         }
         if (q6 === "b") {
         points["y"] -= 0.5;
         }
         if (q7 === "a") {
         points["t"] += 1.5;
         points["aa"] += 1;
         points["n"] += 0.5;
         points["i"] += 0.25;
         }
         if (q7 === "c") {
         points["cc"] += 1;
         points["g"] += 1;
         points["p"] += 1.1;
         points["x"] += 1;
         points["bb"] += 0.5;
         points["ee"] += 0.2;
         points["h"] += 0.5;
         }
         if (q8 === "a") {
         points["n"] += 1;
         points["j"] += 1;
         }
         if (q8 === "b") {
         points["n"] -= 1;
         points["j"] -= 1;
         }
         if (q9a) {
         points["i"] += 0.5;
         points["c"] += 0.5;
         points["a"] += 0.4;
         }
         if (q9b) {
         points["b"] += 0.6;
         points["j"] += 0.5;
         points["l"] += 0.5;
         points["q"] += 0.5;
         points["g"] += 0.5;
         points["p"] += 0.1;
         }
         if (q9c) {
         points["j"] += 0.5;
         points["u"] += 0.4;
         points["k"] += 0.4;
         points["i"] += 0.4;
         }
         if (q9d) {
         points["i"] += 0.1;
         points["u"] += 0.1;
         points["r"] += 1;
         points["ff"] += 1;
         points["cc"] += 0.5;
         points["dd"] += 0.5;
         }
         if (q9e) {
         points["k"] += 0.25;
         points["u"] += 0.25;
         points["p"] += 0.1;
         }
         if (q9f) {
         points["l"] += 0.5;
         points["n"] += 0.5;
         points["m"] += 0.5;
         points["g"] += 0.5;
         points["i"] += 0.1;
         points["bb"] += 0.1;
         points["y"] += 0.1;
         points["u"] += 0.1;
         }
         if (q9g) {
         points["c"] += 0.6;
         }
         if (q9h) {
         points["h"] += 0.8;
         }
         if (q10 === "a") {
         points["t"] += 1;
         points["bb"] += 1;
         points["i"] += 0.3;
         }
         if (q10 === "b") {
         points["t"] -= 2;
         points["bb"] -= 2;
         points["i"] -= 0.3;
         }
         if (q11 === "a") {
         points["p"] += 1;
         points["aa"] += 0.85;
         }
         if (q11 === "b") {
         points["p"] -= 1.4;
         points["aa"] -= 0.2;
         }
         if (q12 === "a") {
         points["f"] += 0.8;
         points["c"] += 0.3;
         points["ff"] += 0.1;
         points["dd"] += 0.74;
         points["z"] += 0.2;
         }
         if (q12 === "b") {
         points["f"] -= 2;
         points["dd"] -= 2;
         points["c"] -= 0.05;
         }
         if (q13a) {
         points["z"] += 0.5;
         }
         if (q13b) {
         points["a"] += 0.5;
         }
         if (q13c) {
         points["ff"] += 0.6;
         }
         if (q13d) {
         points["b"] += 0.5;
         }
         if (q13e) {
         points["m"] += 0.5;
         points["y"] += 0.4;
         }
         if (q13f) {
         points["aa"] += 0.5;
         }
         if (q13g) {
         points["q"] += 0.5;
         }
         if (q13h) {
         points["r"] += 0.5;
         }

          // sort the people in descending olrder
          let sortedSubjects = Object.keys(points).sort((a, b) => points[b] - points[a]);

          // get the names of the top 5 people
          let top3Subjects = sortedSubjects.slice(0, 5).map(subject => getSubjectName(subject));

          // Display the results
          let resultsHeader = document.querySelector("#results-header");
          resultsHeader.style.display = "block";
          let resultsList = document.querySelector("#results-list");
          resultsList.style.display = "block";

          // Clear old results
          while (resultsList.firstChild) {
            resultsList.removeChild(resultsList.firstChild);
          }

          top3Subjects.forEach(subject => {
            let li = document.createElement("li");
            li.textContent = subject;
            resultsList.appendChild(li);
          });

              // ENTIRE EMAIL SUBMITTING PROCESS
              (function() {
                emailjs.init('removed');
              })();
              // Store Responses
              let userResponses = {
                q1a, q1b, q1c, q1d, q1e, q1f, q1g,
                q2, q3, q4, q5a, q5b, q5c, q5d, q5e,
                q6, q7, q8, q9a, q9b, q9c, q9d, q9e, q9f, q9g, q9h,
                q10, q11, q12, q13a, q13b, q13c, q13d, q13e, q13f, q13g, q13h, q13i,
                q14
              };

              // Prepare the email content
              let emailContent = `
                User Responses:

                ${JSON.stringify(userResponses, null, 2)}

                Recommended Professors:
                ${top3Subjects.join(", ")}
              `;

              // Send email results
              emailjs.send('removed', 'removed', {
                to_email: 'removed',
                subject: 'User Responses',
                message: emailContent
              })
              .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                console.log('FAILED...', error);
              });     

            // prevents form from submitting
            return false;
         }
         // Returns the name of the subject with the given label
         function getSubjectName(label) {
         switch (label) {
         case "a":
         return "1";
         case "b":
         return "2";
         case "c":
         return "3";
         case "d":
         return "4";
         case "e":
         return "5";
         case "f":
         return "6";
         case "g":
         return "7";
         case "h":
         return "8";
         case "i":
         return "9";
         case "j":
         return "10";
         case "k":
         return "11";
         case "l":
         return "12";
         case "m":
         return "13";
         case "n":
         return "14";
         case "o":
         return "15";
         case "p":
         return "16";
         case "q":
         return "17";
         case "r":
         return "18";
         case "s":
         return "19";
         case "t":
         return "20";
         case "u":
         return "21";
         case "v":
         return "22";
         case "w":
         return "23";
         case "x":
         return "24l";
         case "y":
         return "25";
         case "z":
         return "26";
         case "aa":
         return "27";
         case "bb":
         return "28";
         case "cc":
         return "29";
         case "dd":
         return "30";
         case "ee":
         return "31";
         case "ff":
         return "32";
         default:
         return "";
         }
         }
       </script>
