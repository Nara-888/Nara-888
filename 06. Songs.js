function songs (mySongs) {
class Songs {
    constructor (typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }



}

let numOfSongs = mySongs.shift();
let toPrint = mySongs.pop();
let songsArr = [];
for (let i = 0; i < numOfSongs; i++) {
    
    let currentSong = mySongs[i].split('_');
    let typeList = currentSong[0];
    let name = currentSong[1];
    let time = currentSong[2];
    
    let myNewSong = new Songs (typeList,name,time );
    songsArr.push(myNewSong);
    
    
}
if (toPrint === "all") {
    for (let song of songsArr) {
        console.log(song.name);
    }
}else{
    for (let song of songsArr) {
        if (song.typeList == toPrint) {
            console.log(`${song.name}`);
        }
    }
}




    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
    songs([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all'])
        songs([4,
            'favourite_DownTown_3:14',
            'listenLater_Andalouse_3:24',
            'favourite_In To The Night_3:58',
            'favourite_Live It Up_3:48',
            'listenLater'])