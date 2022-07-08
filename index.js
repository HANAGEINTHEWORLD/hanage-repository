require('http').createServer((req, res) => 
                             
     res.end('
             <b>hanage</b>hello<br>
             <table border="1">
                 <thead>
                     <tr>
                         <th>いろんなけ</th>
                     </tr>
                 </thead>
                 <tr>
                     <td>hanage</td>
                     <td>はなげ</td>
                 </tr>
                 <tr>
                     <td>sunege</td>
                     <td>すねげ</td>
                 </tr>
                 <tr>
                     <td>momoge</td>
                     <td>ももげ</td>
                 </tr>
                 <tr>
                     <td>udege</td>
                     <td>うでげ</td>
                 </tr>
                 <tr>
                     <td>tinge</td>
                     <td>ちんげ</td>
                 </tr>
             </table>
             
             ')).listen(process.env.PORT || 3000);
