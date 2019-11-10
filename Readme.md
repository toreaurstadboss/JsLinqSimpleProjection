# JsLinqSimpleProjection

## What is it?

A simple module for performing projection in Javascript - choosing a selected array of fields in an array with a Json object
and projecting this into a new object.

## How to use it?

Include the linq.js Javascript file on a page and project your object.

```javascript
//Example: Project an object
 <script type="text/javascript">
      var someCountries = [
          { country: "Norway", population: 5.2, code: "NO" },
          { country: "Finland", population: 5.5, code: "SU" },
          { country: "Iceland", population: 0.4, code: "IC" },
          { country: "Sweden", population: 10.2, code: "SW" }
        ];

        result = someCountries.select("country,population");


        document.getElementById("result").innerText = linqmodule.dump(result);

    </script>
```

Result:

![Projection results of example](https://github.com/toreaurstadboss/JsLinqSimpleProjection/blob/master/Screenshot.png)

```Javascript
<script type="text/javascript">
      var someCountries = [
          { country: "Norway", population: 5.2 },
          { country: "Finland", population: 5.5 },
          { country: "Iceland", population: 0.4 },
          { country: "Sweden", population: 10.2 }
        ];

        result = someCountries.select("country,population");


        document.getElementById("result").innerText = linqmodule.dump(result);

    </script>

```

## Is arrow methods supported

No. No ES6 fancy stuff. Just a comma separated list of fields on the Json object.

## Can I see the source code of the parser?

Sure. Here you go. <a href='https://github.com/toreaurstadboss/JsLinqSimpleProjection/blob/master/linq.js'>linq.js</a>

## Is the source code supported in all browser?

Yes, the linq module is written in pure js with no use of ES6 syntax. It should be supported in most major browsers today.

## What syntax is supported?

Use the method "select" on your array object and pass into a comma separated list of fields to choose from the Json structure.
This works best on uniform structures of course with same type of objects.

## Is it easy to extend this linq module?

Yes, the linq module should be easy to understand.

## Why not just use arrow methods ?

ES6 syntax with arrow methods needs transpiling or transpilers and it is easier to write this kind of code without that in many scenarios.

## Can I use this code in production?

Sure you can, but there are absolutely no warranty. I would rather suggest that you check out Linq libraries for Javscript or Typescript instead which are much more fully grown, I just wrote this code as an educational exercise.

Last update
10.11.2019
Tore Aurstad
E-mail: tore.aurstad@gmail.com
Blog: https://toreaurstad.blogspot.com
