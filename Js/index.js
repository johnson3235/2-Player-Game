player1 = document.getElementById("1");
player2 = document.getElementById("2");
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
logout = document.getElementById("logout");
loader = document.getElementById("Bigoverlay");
timerConnection = document.getElementById("tim");
myMusic= document.getElementById("music");
win1= document.getElementById("win1");
win2= document.getElementById("win2");
msg1= document.getElementById("msg1");
msg2= document.getElementById("msg2");
msglod= document.getElementById("msglod");
again= document.getElementById("again");
startbtn= document.getElementById("startbtn");
start= document.getElementById("start");
var game ;
var player = 1 ;
var points = [0,0];
var StatusLogin = true;


again.onclick = () => {
        window.location.reload();
};


logout.onclick = () => {
    if(StatusLogin == true)
    {
        timer=10;
        timerConnection.innerText = timer;
        logout.innerText='Login';
        logout.style.backgroundColor = "green";
        if(player == 1)
        {
                msglod.innerText = 'Player 1 Disconnected';
                player1.classList.remove('active');
        }
        else
        {
                msglod.innerText = 'Player 2 Disconnected';
                player2.classList.remove('active');
        }
        loader.classList.add('active');
        StatusLogin = false;
        var timeOutVar = setTimeout(function () {
                timer2=setInterval(() => {
                        timerConnection.innerText = timer--;
                        console.log(timer);
                        if (timer === -1) 
                        {
                                clearInterval(timer2);
                                clearInterval(game);
                                logout.style.display='none';
                                loader.classList.remove('active');
                                myMusic.play();
                                if(player == 1)
                                {
                                        win2.style.display='block';
                                        msg2.innerText='Player 2 Win';
                                        again.style.float = 'left';
                                }
                                else
                                {
                                        win1.style.display='block';
                                        msg1.innerText='Player 1 Win';
                                }
                                again.style.display='block';

                        }
                }, 1000); 
        }, 1000);
   }
   else
   {
        logout.innerText='Logout';
        logout.style.backgroundColor = "Red";
        if(player == 1)
        {
                player1.classList.add('active');
        }
        else
        {
                player2.classList.add('active');
        }
        loader.classList.remove('active');
        StatusLogin = true;
        clearInterval(timer2);
   }
       
        
};





let i = 30;
s = document.getElementById("time1");
po1 = document.getElementById("po1");
po2 = document.getElementById("po2");
po1.innerText=points[0];
po2.innerText=points[1];


startbtn.onclick = () => {
        start.classList.add('active');
game = setInterval(() => {
        s.innerText = i--;
        if (i === -1) 
        {
                if(player == 1)
                {
                        points[player-1] = points[player-1] - 1
                        po1.innerText = points[player-1];
                        player=2; 
                        player2.classList.add('active');
                        player1.classList.remove('active');
                        s = document.getElementById("time2");
                        i=30;
                        console.log(points);

                }
                else
                {
                        points[player-1] = points[player-1] - 1
                        po2.innerText = points[player-1];
                        player=1; 
                        player1.classList.add('active');
                        player2.classList.remove('active');
                        s = document.getElementById("time1");
                        i=30;
                        console.log(points);
                }
        }
        
}, 1000);


};
function win()
{
        clearInterval(game);
        logout.style.display='none';
        myMusic.play();
        if(player == 2)
        {
                win2.style.display='block';
                msg2.innerText='Player 2 Win';
                player1.classList.remove('active');
        }
        else
        {
                win1.style.display='block';
                msg1.innerText='Player 1 Win';
                player2.classList.remove('active');
        }
        again.style.display='block';    
}


btn1.onclick = () => {
        console.log("player 1 played");
        player2.classList.add('active');
        player1.classList.remove('active');
        s = document.getElementById("time2");
        i=30;
        points[player-1] = points[player-1] + 1
        po1.innerText = points[player-1];
        if(points[player-1] == 10)
        {
                win();         
                again.style.float = 'right';         
                
        }
        player=2;
        console.log(points);

      
        
        
};
      
      
btn2.onclick = () => {
          console.log("player 2 played");
          player1.classList.add('active');
          player2.classList.remove('active');
          s = document.getElementById("time1");
          i=30;
          points[player-1] = points[player-1] + 1
          po2.innerText = points[player-1];
          if(points[player-1]==10)
          {
                win();   
                again.style.float = 'left';
          }
          player=1;
          console.log(points);
};
      