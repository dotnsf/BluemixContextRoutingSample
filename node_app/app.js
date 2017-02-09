// Node.js + Express
var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    app = express();
var appEnv = cfenv.getAppEnv();

//. 静的ファイルは /public 以下に用意する（index.html含む）
app.use( express.static( __dirname + '/public' ) );

//. /about だけは Node.js で処理する
app.get( '/about', function( req, res ){
  res.writeHead( 200, { 'Content-Type': 'text/plain' } );
  res.write( "My name is K.Kimura." );
  res.end();
});

//. cfenv を使って動的にポートを決めて起動する
app.listen( appEnv.port );
console.log( "server starting on " + appEnv.port + " ..." );

