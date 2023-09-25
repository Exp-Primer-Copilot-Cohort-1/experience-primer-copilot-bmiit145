function skillsMember(){
    var member = {
        name: "Shashwat",
        age: 26,
        skills: ["JavaScript", "Java", "Python"],
        address: {
            city: "Bangalore",
            state: "Karnataka",
            pincode: 560037
        },
        dateOfBirth: function(){
            return 2021 - this.age;
        }
    };
    // console.log(member.name);
    // console.log(member.age);
    // console.log(member.skills);
    // console.log(member.address);
    // console.log(member.address.city);
    // console.log(member.dateOfBirth());
    // console.log(member["name"]);
    // console.log(member["age"]);
    // console.log(member["skills"]);
    // console.log(member["address"]);
    // console.log(member["address"]["city"]);
    // console.log(member["dateOfBirth"]());
    // console.log(typeof(member));
    // console.log(typeof(member.name));
    // console.log(typeof(member.age));
    // console.log(typeof(member.skills));
    // console.log(typeof(member.address));
    // console.log(typeof(member.address.city));
    // console.log(typeof(member.dateOfBirth()));
    // console.log(member.hasOwnProperty("name"));
    // console.log(member.hasOwnProperty("age"));
    // console.log(member.hasOwnProperty("skills"));
    // console.log(member.hasOwnProperty("address"));
    // console.log(member.hasOwnProperty("dateOfBirth"));
    // console.log(member.hasOwnProperty("dateOfBirth()"));
    // console.log(member.hasOwnProperty("dateOfBirth"));
    // console.log(member.hasOwnProperty("dateOfBirth()"));
    // console.log(member.hasOwnProperty("address.pincode"));
    // console.log(member.hasOwnProperty("address.country"));
    // console.log(member.hasOwnProperty("address.state"));
    // console.log(member.hasOwnProperty("address.city"));
    // console.log(member.hasOwnProperty("address.street"));
    // console.log(member.hasOwnProperty("address.houseNumber"));
    // console.log(member.hasOwnProperty("address.doorNumber"));
    // console.log(member.hasOwnProperty("address.pincode"));
    // console.log(member.hasOwnProperty("address.country"));
    // console.log(member.hasOwnProperty("address.state"));
    // console.log(member.hasOwnProperty("address.city"));
    // console.log(member.hasOwnProperty("address.street"));
    // console.log(member.hasOwnProperty("address.houseNumber"));
    // console.log(member.hasOwnProperty("address.doorNumber"));
    // console.log(member.hasOwnProperty("address.pincode"));
    // console.log(member.hasOwnProperty("address.country"));
    // console.log(member.hasOwnProperty("address.state"));
    // console.log(member.hasOwnProperty("address.city"));
}