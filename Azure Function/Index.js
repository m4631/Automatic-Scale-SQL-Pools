module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.dwsize) {
        context.log('JavaScript timer trigger function ran!');   
        var operation = {
            "operationType": "ScaleDw",
            "ServiceLevelObjective": req.query.dwsize
        }
        context.bindings.operationRequest = operation;
    }
    context.done();
};