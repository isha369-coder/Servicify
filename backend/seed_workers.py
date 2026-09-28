from app import db, Worker, app
import random

names = [
"Amit Patel","Rakesh Shah","Suresh Parmar","Rajesh Kumar","Dinesh Sharma",
"Manoj Patel","Vikas Yadav","Arjun Mehta","Ravi Singh","Sunil Verma",
"Kiran Desai","Mahesh Patel","Vijay Chauhan","Rahul Gupta","Anil Sharma",
"Deepak Singh","Sanjay Patel","Pankaj Kumar","Rohit Sharma","Nitin Joshi"
]

services = [
"Plumber","Electrician","Carpenter","Painter","AC Repair","Cleaner"
]

cities = [
"Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Mumbai","Delhi",
"Pune","Bangalore","Hyderabad","Chennai","Kolkata","Jaipur","Indore",
"Lucknow","Bhopal","Patna","Nagpur","Chandigarh","Kochi"
]

areas = [
"Navrangpura","Satellite","Bopal","Adajan","Alkapuri","Vesu",
"Kalavad Road","Maninagar","Andheri","Dwarka","Whitefield",
"Banjara Hills","T Nagar","Salt Lake","Vaishali Nagar","Vijay Nagar",
"Hazratganj","MP Nagar","Kankarbagh","Dharampeth"
]

workers = []

for i in range(1,301):

    name = random.choice(names)
    service = random.choice(services)
    city = random.choice(cities)
    area = random.choice(areas)

    location = f"{city} - {area}"

    experience = random.randint(2,15)
    rating = round(random.uniform(4.0,5.0),1)

    workers.append({
        "name": name,
        "service": service,
        "location": location,
        "experience": experience,
        "rating": rating
    })

with app.app_context():

    for w in workers:
        worker = Worker(
            name=w["name"],
            service=w["service"],
            location=w["location"],
            experience=w["experience"],
            rating=w["rating"]
        )

        db.session.add(worker)

    db.session.commit()

print("✅ 300 workers inserted successfully!")