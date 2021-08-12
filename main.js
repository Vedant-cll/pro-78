var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","https://th.bing.com/th/id/OIP.qtUU9gDW2YU-YyorrRqRdAHaLb?pid=ImgDet&rs=1","https://th.bing.com/th/id/R.53e32405e39b8661c8598ac1c195b599?rik=xrROkhSqC4qlbQ&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.b0418629d9c008f1b77065746db7714c?rik=%2bUW8srUUycWGQA&riu=http%3a%2f%2fimages.clipartpanda.com%2findian-clipart-indian-girl-clipart-1.jpg&ehk=jdDs9IgKC1jEZIFSMVAGLWwTGiD%2bfhG2q4zUK2ge5wM%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.008135465bd3c85271456a8d3a721142?rik=WqtXFLwTJ8UH8Q&riu=http%3a%2f%2forig05.deviantart.net%2f7ba3%2ff%2f2014%2f243%2f8%2fe%2fbettaderpy_by_axxidous-d7xhwkj.jpg&ehk=PgsDufLGc1yco12Ee%2figbFtnvXx8UDZMB9JZqNCgkM4%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.4abece5698503bfb7b9432f75c3c39b7?rik=rP6atvPUUmaGwQ&riu=http%3a%2f%2fclipground.com%2fimages%2findian-men-clipart-3.jpg&ehk=vBbbCyzQ4hXMsoS2pfW75LumaMLhLcLpig0TuTdI%2b3I%3d&risl=&pid=ImgRaw&r=0"];
var names = ["Fmaily Book","Mahesh Vyas(Grand Father)", "Anjana Vyas(Grand Mother)", "Gaurav Vyas(Dad)", "Rinki Vyas(Mom)", "Blue","Vedand Vyas(Me)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
