let Mass;
let Volume;
let Density;
let User_object;

document.getElementById("Calculate_Button").onclick = function(){
    
    User_object = document.getElementById("ObjectText").value;
    User_object = String(User_object)

    Mass = document.getElementById("MassTextBox").value;
    Mass = Number(Mass);

    Volume = document.getElementById("VolumeTextBox").value;
    Volume = Number(Volume);



    Density = Mass / Volume;
    let total_Density = Density.toFixed(3)
    document.getElementById("density").innerHTML = User_object + "'s density: " + total_Density + "g/mL";
}