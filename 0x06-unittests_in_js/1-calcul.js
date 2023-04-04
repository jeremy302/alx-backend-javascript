module.exports =  function calculateNumber(type, a, b){
    const v1 = Math.round(a);
    const v2 = Math.round(b);
    let res = 0;

    switch(type){
    case 'SUM':
        res = v1 + v2;
        break;
    case 'SUBTRACT':
        res = v1 - v2;
        break;
    case 'DIVIDE':
        res = v2 === 0 ? 'Error' : v1 / v2;
        break;
    default:
        res = 0;
    }
    return res;
}
