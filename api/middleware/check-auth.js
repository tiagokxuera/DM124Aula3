const checkAuth = (request, response, next) => {

    const token = request.headers.authorization;
    
    //A linha abaixo serve para pegarmos o token
    //console.log('Token ====> ' + token);
    
    //Se o token esta correto (Basic token)
    //user: dm124
    //senha: alunoinatel
    //Essa senha + esse user + esse tipo de token gera sempre esse token.
    if(/ZG0xMjQ6YWx1bm9pbmF0ZWw=/ .test(token)){
        next();
    }else{
        response.status(401).json({
             message: 'Not authorized'
        });
    }
    
    //next();
    
    //if (/aW5hdGVsOmFsdW5vc2luYXRlbA==/.test(token)) {
    //  next();
    //} else {
    //  response.status(401).json({
   //     message: 'Not authorized'
   //   });
   // }
};
   
module.exports = checkAuth;
   