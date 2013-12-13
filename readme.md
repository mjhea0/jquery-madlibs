# Mad Libs featuring Bootstrap and jQuery

Did you ever play Mad Libs as a kid? If not, the games is simple: You fill out a random list of words based on a part of speach - e.g, nouns, verbs, adjectives, and adverbs - without knowing the underlying context. These words are then inserted into a story. When read, the results are generally humorous, causing people to laugh over and over again.

Let's have some fun.

## Boilerplate

Start by creating the following three files, creating a project structure that looks like this:

```sh
├── css
│   └── main.css
├── jquery-madlibs.html
└── js
    └── main.js
 ```

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
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

<<<<<<< HEAD
![boilerplate](https://github.com/mjhea0/jquery-madlibs/blob/master/boilerplate.png)
=======
![boilerplate](https://raw.github.com/mjhea0/jquery-madlibs/master/boilerplate.png)
>>>>>>> 14bab303a6af2ee1e2ba19e3a449183666ebf9af

This is a good base for us to start with. 

## Mad libs format

Update both "index.html" and "main.css" to mimick the mad libs format.

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
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
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

Here we added a form for inputting the words, as well as the story the inputed words will be inserted into.

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

<<<<<<< HEAD
![form](https://github.com/mjhea0/jquery-madlibs/blob/master/form.png)
=======
![form](https://raw.github.com/mjhea0/jquery-madlibs/master/form.png)
>>>>>>> 14bab303a6af2ee1e2ba19e3a449183666ebf9af

## Add jQuery

Grab the values from the form inputs upon submission of the form, insert them between the `<span>` elements, then unhide the story. To do that, let's update "main.js".

```javascript
$(function() {
  $("form").submit(function(e) {
    e.preventDefault()
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

1. `.val()` fetches the value from the form inputs
1. `.empty()` removes any text from that specific class in the story.
3. '.append()' then adds the new value to the stort.
4. `.show()` unhides the story
5. `.hide()` hides the questions

## Test

Let's test out the functionality. Enter values into the form and press submit. You should see the following if all went well.

<<<<<<< HEAD
![story](https://github.com/mjhea0/jquery-madlibs/blob/master/story.png)
=======
![story](https://raw.github.com/mjhea0/jquery-madlibs/master/story.png)
>>>>>>> 14bab303a6af2ee1e2ba19e3a449183666ebf9af

## Play again

Next, add the ability to play the game again by adding the following function to "main.js":

```javascript
$("#play-btn").click(function(e) {
  e.preventDefault()
  $("#questions").show(); 	
  $("#story").hide();
});
```

Test this out again. 



