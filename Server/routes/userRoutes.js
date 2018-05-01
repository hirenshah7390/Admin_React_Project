var models = require('../sequelizeModels/models');
const express = require('express');
const router = express.Router();

router.get('/users', function (request, response, next) {
    setTimeout(() => {
    models.users.findAll({
       include: [
           {
               model: models.titles,
               required: true
           },
           {
               model: models.user_functions,
               include: [
                   {
                       model: models.ors_functions
                   }
               ]
           }
       ]
    })
    .then(users => {
            const data = {
                error: "false",
                data: users
            };
            response.send(data);
            next();
        });
    }, 2000);
});

router.get('/users/:User_ID', function (request, response, next) {
    models.users.findById(request.params.User_ID,{
        include: [
            {
                model: models.titles,
                required: true
            },
            {
                model: models.user_functions,
                include: [
                    {
                        model: models.ors_functions
                    }
                ]
            }
        ]     
    }).then(function (user) {
        var data = {
            error: "false",
            data: user
        };
        response.send(data);
        next();
    });
});

router.post('/users/', function (request, response, next) {
    setTimeout(() => {
    models.users.create(request.body)
    .then(function(user) {               
        models.users.findById(user.user_ID,{
        include: [
            {
                model: models.titles,
                required: true
            },
            {
                model: models.user_functions,
                include: [
                    {
                        model: models.ors_functions
                    }
                ]
            }
        ]     
        })
     .then(function (user) {         
        var data = {
            error: "false",
            message: "New user created successfully",
            data: user
        };
        response.send(data);
        next();
        });
    });
  }, 3000);
});

router.put('/user', function (request, response, next) {   
    models.users.find({
        where: {
            'user_ID': request.body.user_ID
        }
    }).then(function (user) {       
        if (user) {
            user.updateAttributes(request.body)
            .then(function(user) {               
                models.users.findById(request.body.user_ID,{
                include: [
                    {
                        model: models.titles,
                        required: true
                    },
                    {
                        model: models.user_functions,
                        include: [
                            {
                                model: models.ors_functions
                            }
                        ]
                    }
                ]     
                }).then(function (user) {                   
                var data = {
                    error: "false",
                    data: user
                };
                response.send(data);
                next();
            });
         });
        }
        else{
            var data = {
                error: "false",
                message: "No Record Found",
                data: []
            };
            response.send(data);
            next();
        }
    });
});

router.delete('/users/:User_ID', function (request, response, next) {
    models.user.destroy({
        where: {
            User_ID: request.body.User_ID
        }
    }).then(function (user) {
        var data = {
            error: "false",
            message: "Deleted user successfully",
            data: user
        };
        response.send(data);
        next();
    });
});

//user_Function
router.post('/user/function/', function (request, response, next) {
    console.log(request.body);
    try{
        if(request.body === undefined || request.body === null || request.body.length == 0)
            throw "not valid data";

            models.user_functions.bulkCreate(request.body, { individualHooks: true })
            .then(function(userFunctions) { 
                models.user_functions.findAll({
                    where: {
                        user_ID: request.body[0].user_ID
                    },
                include: [
                            {
                                model: models.ors_functions
                            }
                        ] 
                }) 
            .then(function (userFunction) {         
                var data = {
                    error: "false",
                    message: "New user function created successfully",
                    data: userFunction
                };
                response.send(data);
                next();
            });
            });
   }
   catch(e){
    var data = {
        error: "true",
        message: "Supplied data is not sufficient for post",
        data: request.body
    };
    response.send(data);
    next();
   }
});

router.delete('/user/function/', function (request, response, next) {
    let user_functions_IDs = [];
    request.body.forEach(element => {
        user_functions_IDs.push(element.user_function_ID);
    });
    models.user_functions.destroy({
        where: {
            user_function_ID: user_functions_IDs
        }
    }).then(function () {
        var data = {
            error: "false",
            message: "Deleted user function successfully",
            data: []
        };
        response.send(data);
        next();
    });
});


module.exports = router;



