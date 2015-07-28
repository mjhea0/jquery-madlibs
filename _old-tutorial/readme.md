# Mad Libs featuring Bootstrap and jQuery

Did you ever play Mad Libs as a kid? If not, the rules are simple: You fill out a random list of words based on a part of speach - e.g, nouns, verbs, adjectives, and adverbs - without knowing the underlying context. These words are then inserted into a story. When read, the results are generally humorous, causing much laughter.

Let's have some fun.

## Boilerplate

Start by creating the following files and directories, to define a project structure:

```sh
├── css
│   └── main.css
├── index.html
└── js
    └── main.js
 ```

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- stylesheets -->
    <link href="http://bootswatch.com/united/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
    <link href="css/main.css" rel="stylesheet" type="text/css" media="all">
    <title>My AWESOME Boilerplate</title>
  </head>
  <body>
    <div class="container">
      <div class="jumbotron">
        <h1>Hello, World!</h1>
        <p class="lead">My AWESOME Boilerplate</p>
        <button type="button" class="btn btn-primary btn-lg">My BIG Button</button>
      </div>
    </div>
    <!-- scripts -->
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

### main.css

```css
/* main.css */

.container {
  padding-top: 50px;
}
```

### main.js

```javascript
$(function() {
  console.log("whee!")
});
```

Open the "index.html" file in your web browser. You should see this:

![boilerplate](https://raw.github.com/mjhea0/jquery-madlibs/master/images/boilerplate.png)

Go back and look at "index.html" in your text editor. You're looking at HTML. Put simply, HTML is the langage used for creating websites, displayable in a web browser. Now open the "main.css" file. While HTML provides the structure, CSS makes webpages look pretty. Together, they are the fundamental building blocks for web pages.

This is a good base for us to start with. Also, to ensure that JavaScript is working, open your console. You should see the text "whee!".

## Mad libs format

Update both "index.html" and "main.css" to mimick the mad libs format.

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- stylesheets -->
    <link href="http://bootswatch.com/united/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
    <link href="css/main.css" rel="stylesheet" type="text/css" media="all">
    <title>Morning Mad Libs</title>
  </head>
  <body>
    <div class="container">

      <div id="questions">
        <h1>Please fill out the following!</h1>
        <hr>
        <form role="form">
          <div class="form-group">
            <label for="person">Boy's Name</label>
            <input for="person" class="form-control person" type="text" placeholder="Enter a boy's name ..">
          </div>
          <div class="form-group">
            <label for="adjective">Adjective</label>
            <input for="adjective" class="form-control adjective" type="text" placeholder="Enter an adjective ..">
          </div>
          <div class="form-group">
            <label for="noun">Plural noun</label>
            <input id="noun" class="form-control noun" type="text" placeholder="Enter a plural noun ..">
          </div>
          <div class="form-group">
            <label for="insect">An insect, plural</label>
            <input id="insect" class="form-control insect" type="text" placeholder="Enter an insect, plural ..">
          </div>
          <div class="form-group">
            <label for="noun2">Plural noun</label>
            <input id="noun2" class="form-control plural-noun" type="text" placeholder="Enter a plural noun ..">
          </div>
          <div class="form-group">
            <label for="verb">A verb ending in "s"</label>
            <input id="verb" class="form-control verb" type="text" placeholder="Enter a verb ending in "s" ..">
          </div>
          <div>
            <button type="submit" class="btn btn-primary btn-lg">Generate!</button>
          </div>
        </form>
        <hr>
      </div>

      <div id="story">
        <h1>Mad with the Libs</h1>
        <hr>
        <h3>I'm in love with <span class="person"></span>. He's so <span class="adjective"></span>! He has big flat <span class="noun"></span>, and when our <span class="insect"></span> meet, I get <span class="noun2"></span> in my stomach. I've fallen for him like a ton of <span class="verb"></span>, and he shuffles for me, too. But I think he's got another girlfriend. What should I do?</h3>
      </div>

    </div>
    <!-- scripts -->
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

Here we added a form (with labels and inputs) for inputting the words, as well as the story that the inputed words will be inserted into. The actual words will be inserted between the span tags. Notice how the classes for each span matches the input id in the form. This is not required, but it just makes it consistent.  I also included some [Bootstrap](http://getbootstrap.com/) classes for styling. 

### main.css

```css
/* main.css */

.container {
  padding-top: 50px;
  max-width: 500px;
}

#story {
  display: none;
}
```

`display:none` hides the story from view. You'll see in a second why we do this.

![form](https://raw.github.com/mjhea0/jquery-madlibs/master/images/form.png)

## Add jQuery

Grab the values from the form inputs upon submission of the form, insert them between the empty `<span>` tags, then unhide the story. To do that, let's update "main.js".

```javascript
$(function() {
  $("form").submit(function(e) {
    e.preventDefault()
    // grabs the value from the input, then appends that value to the story
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());
    $("#story").show();
    $(':input').val('');
    $("#questions").hide();
  });
});
```

**What's going on here?**

1. `$("form").submit()` initiates the process. In other words, the remaining jQuery doesn't run until you submit the form.
2. `e.preventDefault()` disables the browser's default behavior. Try leaving this out. What happens? 
3. `.val()` fetches the value from the form inputs.
4. `.empty()` removes any text from that specific class in the story.
5. `.append()` then adds the new value to the story.
6. `.show()` unhides the story.
7. `.hide()` hides the questions.

## Test

Let's test out the functionality. Enter values into the form and press submit. You should see the following if all went well.

![story](https://raw.github.com/mjhea0/jquery-madlibs/master/images/story.png)

## Play again

Next, add the ability to play the game again by adding the following code to "main.js":

```javascript
$("#play-btn").click(function(e) {
  e.preventDefault()
  $("#questions").show(); 	
  $("#story").hide();
});
```
Can you tell what's happening here? Look at previous jQuery code that we added before. 

**All done?**

Test the program out again. If all works well, run along and play with your bestest of friends.

## Challenges

Too easy? Need some challenges?

1. As with all projects, there are several ways of creation. Implement a new means.
2. Add unit and functional tests. Coverage too.
3. Allow users to add their own stories. Think about what type of medium you could use to store the data. JSON, perhaps? Then where would you store the JSON file? LocalStorage? Mongo?
4. Make it easy for two people to play one game together. One person would enter his/her answers, which would be stored. The inputs would clear. Then the next person would do the same. Finally, both stories would appear. Double the amount of laughs.

## Too hard?

Start with the basics. Create a simple form from the two files within the "easy" directory. Most of the code is already filled out. Look at my example if you need help. Make it look pretty by adding a CSS file.

Have fun. Cheers!
