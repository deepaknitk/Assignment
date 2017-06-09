# Assignment

This is Sample Assignment to create following REST API.

1. Search API: Take input and search by following database columns 
   battle name
   attacker_king
   defender king
   battle type
   attacker command
   defender commander
   location
   region
2. List Battles: Fetch all the battles group by attacker king
3. Find kings with maximum wins, maximum loss and maximum wars
4. List of Kings sorted by wins and loss (For calculation use win: 2 points & loss: -1 point)


 Before we start, Please mind the environment of this Application.
 I'm using Windows
 NPM, Express 
 MySQL for Node
 I haven't tested it yet on Ubuntu. but Hopefully this will work too.

Steps to setup the environment to run this project  
1. Install Node.js,NPM and Express.js in your System.
2. create your project Folder.
3. Install MYSQL.
4. create Database and create table battles or you can import the .SQL file  in source code.
5. Open app.js by default some codes are already given for you. we'll just need to add few codes.

 Database configuration : 
    host: 'localhost',
    user: 'root',
    password : '',
    port : 3306, //port mysql
    database:'arshad'	

1. To run Search API :put This url to postman or Restclient " http://localhost:8082/licious/search " (I have used Postman).
  input For this API is : {
	"name": "Battle of the Golden Tooth",
	"attacker_king": "Joffrey/Tommen Baratheon",
	"defender_king": "Robb Stark",
	"battle_type": "pitched battle",
  "attacker_commander": "Jaime Lannister",
  "defender_commander": "Clement Piper, Vance",
  "location": "Golden Tooth",
  "region": "The Westerlands"
}
OUTPUT : {

 if given input is correct ==>>
  "http_code": 200,
  "message": [
    {
      "id": 1,
      "name": "Battle of the Golden Tooth",
      "year": 298,
      "battle_number": 1,
      "attacker_king": "Joffrey/Tommen Baratheon",
      "defender_king": "Robb Stark",
      "attacker_1": "Lannister",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Tully",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "win",
      "battle_type": "pitched battle",
      "major_death": "1",
      "major_capture": "0",
      "attacker_size": "15000",
      "defender_size": "4000",
      "attacker_commander": "Jaime Lannister",
      "defender_commander": "Clement Piper, Vance",
      "summer": "1",
      "location": "Golden Tooth",
      "region": "The Westerlands",
      "note": ""
    }
  ]
}
if given input is in bad formagt ==>
{
  "http_code": 404,
  "message": "No result match for given input"
}

2. To run List Battles API that is  Fetch all the battles group by attacker king url is     "http://localhost:8082/licious/groupAttackerKing" 

OUTPUT : {
  "http_code": 200,
  "message": [
    {
      "id": 23,
      "name": "Battle of the Burning Septry",
      "year": 299,
      "battle_number": 23,
      "attacker_king": "",
      "defender_king": "",
      "attacker_1": "Brotherhood without Banners",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Brave Companions",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "win",
      "battle_type": "pitched battle",
      "major_death": "0",
      "major_capture": "0",
      "attacker_size": "",
      "defender_size": "",
      "attacker_commander": "",
      "defender_commander": "",
      "summer": "1",
      "location": "",
      "region": "The Riverlands",
      "note": ""
    },
    {
      "id": 8,
      "name": "Battle of Moat Cailin",
      "year": 299,
      "battle_number": 8,
      "attacker_king": "Balon/Euron Greyjoy",
      "defender_king": "Robb Stark",
      "attacker_1": "Greyjoy",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Stark",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "win",
      "battle_type": "pitched battle",
      "major_death": "0",
      "major_capture": "0",
      "attacker_size": "",
      "defender_size": "",
      "attacker_commander": "Victarion Greyjoy",
      "defender_commander": "",
      "summer": "1",
      "location": "Moat Cailin",
      "region": "The North",
      "note": ""
    },
    {
      "id": 1,
      "name": "Battle of the Golden Tooth",
      "year": 298,
      "battle_number": 1,
      "attacker_king": "Joffrey/Tommen Baratheon",
      "defender_king": "Robb Stark",
      "attacker_1": "Lannister",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Tully",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "win",
      "battle_type": "pitched battle",
      "major_death": "1",
      "major_capture": "0",
      "attacker_size": "15000",
      "defender_size": "4000",
      "attacker_commander": "Jaime Lannister",
      "defender_commander": "Clement Piper, Vance",
      "summer": "1",
      "location": "Golden Tooth",
      "region": "The Westerlands",
      "note": ""
    },
    {
      "id": 4,
      "name": "Battle of the Green Fork",
      "year": 298,
      "battle_number": 4,
      "attacker_king": "Robb Stark",
      "defender_king": "Joffrey/Tommen Baratheon",
      "attacker_1": "Stark",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Lannister",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "loss",
      "battle_type": "pitched battle",
      "major_death": "1",
      "major_capture": "1",
      "attacker_size": "18000",
      "defender_size": "20000",
      "attacker_commander": "Roose Bolton, Wylis Manderly, Medger Cerwyn, Harrion Karstark, Halys Hornwood",
      "defender_commander": "Tywin Lannister, Gregor Clegane, Kevan Lannister, Addam Marbrand",
      "summer": "1",
      "location": "Green Fork",
      "region": "The Riverlands",
      "note": ""
    },
    {
      "id": 16,
      "name": "Siege of Storm's End",
      "year": 299,
      "battle_number": 16,
      "attacker_king": "Stannis Baratheon",
      "defender_king": "Renly Baratheon",
      "attacker_1": "Baratheon",
      "attacker_2": "",
      "attacker_3": "",
      "attacker_4": "",
      "defender_1": "Baratheon",
      "defender_2": "",
      "defender_3": "",
      "defender_4": "",
      "attacker_outcome": "win",
      "battle_type": "siege",
      "major_death": "1",
      "major_capture": "0",
      "attacker_size": "5000",
      "defender_size": "20000",
      "attacker_commander": "Stannis Baratheon, Davos Seaworth",
      "defender_commander": "Renly Baratheon, Cortnay Penrose, Loras Tyrell, Randyll Tarly, Mathis Rowan",
      "summer": "1",
      "location": "Storm's End",
      "region": "The Stormlands",
      "note": ""
    }
  ]
}

3. Find kings with maximum wins, maximum loss and maximum wars. Url "http://localhost:8082/licious/winLosswar"
 Output: 
 {
  "http_code": "200",
  "maxWin": {
    "king": "Joffrey/Tommen Baratheon",
    "noofwins": 16
  },
  "maxLoss": {
    "king": "Robb Stark",
    "noofloss": 15
  },
  "maxWar": {
    "king": "Joffrey/Tommen Baratheon",
    "noofwars": 27
  }
}

4. List of Kings sorted by wins and loss. Url "http://localhost:8082/licious/listofking" 
Output : 
{
  "http_code": 200,
  "message": [
    {
      "attacker_king": "Stannis Baratheon",
      "total_point": 2
    },
    {
      "attacker_king": "",
      "total_point": 4
    },
    {
      "attacker_king": "Robb Stark",
      "total_point": 14
    },
    {
      "attacker_king": "Balon/Euron Greyjoy",
      "total_point": 14
    },
    {
      "attacker_king": "Joffrey/Tommen Baratheon",
      "total_point": 25
    }
  ]
}


