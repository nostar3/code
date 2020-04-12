    //local.json
    {
      "data": {
        "manpower": [
          {
            "name": "David",
            "des": "Senior Developer",
            "phone": 4130000001,
            "salary": 18500
          },
          {
            "name": "Stephen Riley",
            "des": "Developer",
            "phone": 4130000003,
            "salary": 8700
          },
          {
            "name": "Janice Toth",
            "des": "Marketing",
            "phone": 4130003003,
            "salary": 8400
          },
          {
            "name": "Kasey Jason",
            "des": "Sales",
            "phone": 413009009,
            "salary": 8300
          }
        ]
      }
    }

Another file


    //online.json
    {
      "data": {
        "staff": [
          {
            "name": "David",
            "des": "Senior Developer",
            "phone": 4140000001,
            "salary": 18500
          },
          {
            "name": "Stephen Riley",
            "des": "Senior Developer",
            "phone": 4130000003,
            "salary": 12000
          },
          {
            "name": "Janice Toth",
            "des": "Marketing",
            "phone": 4130003011,
            "salary": 13000
          },
          {
            "name": "Dale Ray",
            "des": "Sales",
            "phone": 413009009,
            "salary": 9800
          },
          {
            "name": "Margaret L. Bonner",
            "des": "Sales",
            "phone": 413009009,
            "salary": 9800
          },
          {
            "name": "Sondra R. Gilmore",
            "des": "Sales",
            "phone": 4130090099,
            "salary": 14000
          },{
            "name": "Kasey Jason",
            "des": "Senior Sales",
            "phone": 4130090019,
            "salary": 8300
          }
        ]
      }
    }

The above information is just a demo.

I can download the online.json file and do the processing..

The local.json i have on my system. The online file has always updated info.
I want to compare the online.json file with my local.json ie.

 # want to check if the `salary` is more than local.json and replace.

 # Want to check the `des`value change

 # Want to check the name key-value exists in local.json file, if not add it to the local.json file, ie. `"Dale Ray"`not exist in the local.json. So, i need to add `name` `des` `phone` `salary` to the local.json.

 # Want to check if the salary is more than 10% from the local.json file.

  

The online.json data didn't make serial ie `Kasey Jason`



I was trying to do with js, Is this possible to archive?
