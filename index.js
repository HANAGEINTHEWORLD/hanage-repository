require('http').createServer((req, res) => 
                             
     res.end(`
             <?php
             
             echo "Hello World!";
             
             ?>
             
             `)).listen(process.env.PORT || 3000);
