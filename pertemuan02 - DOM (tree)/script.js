/**
 * 
 * DOM (tree)
 * 
 * contoh :                                     
 * <html>                                      | * seluruh elemen disebut node/simpul.
 * <head>                                      | * node paling atas disebut simpul root (document).
 *    <title>Javascript DOM</title>            | * setiap node memiliki tipe : 
 * </head>                                     |      > element   : <html>, <head>, <body>, <title>, <h1, <p>, <div>, <a>
 * <body>                                      |      > attribute : href  
 *    <h1>Hello World</h1>                     |      > text      : 'Paragraf 1', 'Ke halaman 2', dll.
 *    <p>Paragraf 1</p>                        | * tipe-tipe node : 
 *    <p>Paragraf 2</p>                        |   Elemen, Attribute, Text, Entity, Comment, Notation, Document, dll.
 *    <div>                                    | * node list : kumpulan node.
 *        <p>Paragraf 3</p>                    | * HTML COllection : kumpulan node khusus yang tipenya element HTML.
 *    </div>                                   |
 *    <a href="halaman2.html">Ke halaman 2</a> |
 *  </body>                                    | 
 * </html>                                     |
 *
 * 
 *  ______________________________________________________________________________________________________
 * |                                                                                                      | 
 * |    contoh DOM tree :                                                                                 |
 * |                          document                                                                    |
 * |                             |                                                                        |
 * |                            html                                                                      |
 * |        _____________________|______________________                                                  |
 * |       |                                            |                                                 |
 * |     head                                          body                                               |
 * |       |                ____________________________|______________________________________           |  
 * |       |               |              |             |        |          |                  |          |  
 * |    <title>           <h1>           <p>           <p>     <div>       <a>                href        |
 * |       |               |              |             |        |          |                  |          |   
 * |       |               |              |             |        |          |                  |          |   
 * | javascriptDOM   "Hello World"  "Paragraf 1"  "Paragraf 2"  <p>  "Ke halaman 2" --- "halaman2.html"   |
 * |                                                             |                                        |
 * |                                                             |                                        |
 * |                                                        "Paragraf 3"                                  |
 * |______________________________________________________________________________________________________| 
 * 
 * 
 * NodeList VS HTMLCollection
 *    > keduanya merupakan kumpulan node.
 *    > struktur datanya mirip array.
 *    > NodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi element HTML.
 *    > HTMLCollection bersifat live sedangkan NodeList tidak.
 * 
 * 
 * Struktur Hierarki DOM Tree
 *    > Root Node   : node yang menjadi sumber dari semua node lain di dalam DOM. (document)
 *    > Parent Node : node yang berada 1 tingkat diatas node yang lain.
 *                    (contoh : body adalah parent dari h1, p, p, div, dan a)
 *    > Child Node  : node yang berada 1 tingkat dibawah node yang lain.
 * 
 */
