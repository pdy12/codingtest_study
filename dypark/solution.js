//시간 초과
function solution(players, callings) {
    var answer = [];
    var play = '';
    for(var i = 0 ; i < callings.length; i++){
        for(var j= 1; j < players.length; j++){
            if(players[j] == callings[i]){
                play = players[j-1];
                players[j-1] = callings[i];
                players[j] = play;
            }
        }
        
       
        
    }
    return players;
}


//통과
function solution(players, callings) {
    var sPlayers = new Map();
    
    players.forEach((item,idx)=>{
       sPlayers.set(item,idx);
    })

    callings.forEach((cplayer)=>{
  
        var lPlayer = players[sPlayers.get(cplayer) - 1];
        var tmp = players[sPlayers.get(cplayer) - 1];

        players[sPlayers.get(cplayer) - 1] = players[sPlayers.get(cplayer)];
        players[sPlayers.get(cplayer)] = tmp;

        sPlayers.set(cplayer, sPlayers.get(cplayer) - 1);
        sPlayers.set(lPlayer, sPlayers.get(lPlayer) + 1);
        
        
        
    })


    return players;
}