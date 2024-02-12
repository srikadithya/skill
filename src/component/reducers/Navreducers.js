const initState="Login"
export default function Navreducers(state=initState,action){
switch(action.type){
    case "login":
         return "Login";
    case "Reg":
         return "Reg";
    default:
        return "Login";
}
}
