# TomatoTester
A Repo to test Divs position

With TomatoTester you can test div positions easily,
it works by changing each tags to random colors


# Run 
for run, you just need to pass the cdn script tag into your project 
and them call the **tomato_start** function , with an seed

```html
<script src="https://cdn.jsdelivr.net/gh/OUIsolutions/TomatoTestter@main/versions/TomatoTestter_v0.956.js"></script>
<script>
    let my_seed = 'hello my cold friend'
    tomato_start(my_seed)
</script>
```

# Full example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Generation</title>
    <script src="https://cdn.jsdelivr.net/gh/OUIsolutions/TomatoTestter@main/versions/TomatoTestter_v0.956.js"></script>
    <script>
        let my_seed = 'hello my cold friend'
        tomato_start(my_seed)
    </script>
    <style>
        .container{
            width: 70vw;
            height: 70vh;
        }
        .child{
            width: 30%;
            height: 30%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="child">
            <h4>child 1</h4>
        </div>
        <div class="child">

            <h4>child 2</h4>
        </div>
        <div class="child">
            <h4>child 3</h4>
        </div>
   
    </div>
</body>
</html>
```

# Colors Generation
The Colors are generated in a procedural way, trying to find pastel colors ,and making the 
colors became opposite to one to another.

# Modifing attributes
If you want to modify atrributes of the procedural genrataion , these can be easly done 
with 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifying Generation</title>
    <script src="https://cdn.jsdelivr.net/gh/OUIsolutions/TomatoTestter@main/versions/TomatoTestter_v0.956.js"></script>
    <script>
        let my_seed = 'hello my cold friend'
        //determine min rgb level of each of the 3 colors
        tomato_min_rgb = 0;
        //determine max rgb level of each of the 3 colors
        tomato_max_rgb = 255;

        //determine min difference between 2 colors
        tomato_minimum_difference = 70;
        
        tomato_start(my_seed)
    </script>
    <style>
        .container{
            width: 70vw;
            height: 70vh;
        }
        .child{
            width: 30%;
            height: 30%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="child">
            <h4>child 1</h4>
        </div>
        <div class="child">

            <h4>child 2</h4>
        </div>
        <div class="child">
            <h4>child 3</h4>
        </div>
   
    </div>
</body>
</html>
```