<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let numbers = [1, 2, 3, 4, 5];

        let sum = numbers.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        console.log(sum)
    </script>
</body>
</html>