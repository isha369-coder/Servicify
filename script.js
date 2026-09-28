/* ===================================================
   SERVICIFY – Main JavaScript
   =================================================== */
   
   document.addEventListener("DOMContentLoaded", () => {
  showPage("login-page"); // show login page first
});
/* ===== DATA ===== */
const WORKERS = [
  { id: 1, name: "Amit Kumar", service: "Plumber", location: "Mumbai, Bandra", state: "Maharashtra", exp: 8, rating: 4.9, reviews: 312, color: "#3b82f6", emoji: "🔧", bio: "Expert plumber with 8+ years handling leak repairs, pipe fitting, and bathroom renovations across Mumbai." },
  { id: 2, name: "Ravi Singh", service: "Electrician", location: "Delhi, Rohini", state: "Delhi", exp: 12, rating: 4.8, reviews: 420, color: "#f59e0b", emoji: "⚡", bio: "Certified electrician skilled in wiring, switchboard repairs, and appliance installation. Available for emergency calls 24/7." },
  { id: 3, name: "Suresh Patel", service: "Carpenter", location: "Bangalore, Koramangala", state: "Karnataka", exp: 6, rating: 4.7, reviews: 185, color: "#8b5cf6", emoji: "🪚", bio: "Skilled carpenter specializing in furniture making, door/window installations, and custom woodwork. Delivers quality craftsmanship on time." },
  { id: 4, name: "Manoj Verma", service: "Painter", location: "Hyderabad, Madhapur", state: "Telangana", exp: 9, rating: 4.8, reviews: 220, color: "#ec4899", emoji: "🎨", bio: "Professional painter with expertise in interior and exterior painting, wallpaper installations, and decorative finishes." },
  { id: 5, name: "Dinesh Sharma", service: "AC Repair", location: "Chennai, Anna Nagar", state: "Tamil Nadu", exp: 11, rating: 4.9, reviews: 380, color: "#06b6d4", emoji: "❄️", bio: "AC technician with 11 years of experience in servicing, gas refilling, and installation of all brands. Offers same-day service." },
  { id: 6, name: "Priya Devi", service: "Cleaner", location: "Pune, Kothrud", state: "Maharashtra", exp: 4, rating: 4.7, reviews: 295, color: "#22c55e", emoji: "🧹", bio: "Professional cleaner offering home, office, and deep cleaning services. Uses eco-friendly products and modern equipment." },
  { id: 7, name: "Rakesh Yadav", service: "Plumber", location: "Delhi, Dwarka", state: "Delhi", exp: 5, rating: 4.6, reviews: 140, color: "#3b82f6", emoji: "🔧", bio: "Reliable plumber available across Delhi NCR. Handles leaks, blockages, and full bathroom renovations with quality fittings." },
  { id: 8, name: "Anita Nair", service: "Cleaner", location: "Bangalore, BTM Layout", state: "Karnataka", exp: 3, rating: 4.8, reviews: 178, color: "#22c55e", emoji: "🧹", bio: "Thorough and trustworthy cleaner. Offers move-in/move-out cleaning, regular housekeeping, and post-party cleanup services." },
  { id: 9, name: "Vijay Mehta", service: "Electrician", location: "Mumbai, Andheri", state: "Maharashtra", exp: 7, rating: 4.7, reviews: 263, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician handling all types of residential and commercial electrical work. Expert in smart home installations." },
  { id: 10, name: "Sanjay Gupta", service: "Carpenter", location: "Pune, Wakad", state: "Maharashtra", exp: 15, rating: 4.9, reviews: 312, color: "#8b5cf6", emoji: "🪚", bio: "Master carpenter with 15 years of experience. Creates bespoke furniture and does high-end interior woodwork installations." },
  { id: 11, name: "Kavitha Reddy", service: "Painter", location: "Chennai, Velachery", state: "Tamil Nadu", exp: 5, rating: 4.6, reviews: 145, color: "#ec4899", emoji: "🎨", bio: "Creative painter specializing in texture painting, stencils, and artistic wall designs. Transforms spaces with color." },
  { id: 12, name: "Harish Bose", service: "AC Repair", location: "Kolkata, Salt Lake", state: "West Bengal", exp: 8, rating: 4.8, reviews: 290, color: "#06b6d4", emoji: "❄️", bio: "Certified AC technician servicing Kolkata and surrounding areas. Handles split, window, and cassette ACs for all brands." },
  { id: 13, name: "Neha Joshi", service: "Mason", location: "Mumbai, Dadar", state: "Maharashtra", exp: 7, rating: 4.8, reviews: 210, color: "#ef4444", emoji: "🏗️", bio: "Expert mason for brickwork, plastering, flooring, and structural repairs. Handles waterproofing and tiling professionally." },
  { id: 14, name: "Rajeshwari Menon", service: "Welder", location: "Delhi, Janakpuri", state: "Delhi", exp: 10, rating: 4.7, reviews: 156, color: "#f97316", emoji: "🔥", bio: "Certified welder specializing in steel gates, grills, railings, and repairs. MIG/TIG/Arc welding expertise." },
  { id: 15, name: "Kiran Desai", service: "Carpenter", location: "Bangalore, Whitefield", state: "Karnataka", exp: 9, rating: 4.9, reviews: 287, color: "#8b5cf6", emoji: "🪚", bio: "Precision carpenter for wardrobe installations, kitchen cabinets, and furniture repairs. Polish finishes guaranteed." },
  { id: 16, name: "Vikram Singh", service: "Plumber", location: "Hyderabad, Kukatpally", state: "Telangana", exp: 6, rating: 4.6, reviews: 198, color: "#3b82f6", emoji: "🔧", bio: "Emergency plumber available 24/7 for leak repairs, geyser installation, and bathroom plumbing upgrades." },
  { id: 17, name: "Sunita Rao", service: "Painter", location: "Chennai, OMR", state: "Tamil Nadu", exp: 5, rating: 4.8, reviews: 234, color: "#ec4899", emoji: "🎨", bio: "Texture painting specialist with waterproof and anti-fungal paints. Interior and exterior experts." },
  { id: 18, name: "Arjun Patel", service: "Electrician", location: "Pune, Hadapsar", state: "Maharashtra", exp: 8, rating: 4.9, reviews: 345, color: "#f59e0b", emoji: "⚡", bio: "Smart home wiring specialist. Installs CCTV, video doorbells, and home automation systems." },
  { id: 19, name: "Lakshmi Nair", service: "Cleaner", location: "Kolkata, Howrah", state: "West Bengal", exp: 4, rating: 4.7, reviews: 167, color: "#22c55e", emoji: "🧹", bio: "Professional home organizer and declutter specialist. Sofa deep cleaning and pest control services." },
  { id: 20, name: "Gopal Reddy", service: "AC Repair", location: "Hyderabad, Secunderabad", state: "Telangana", exp: 12, rating: 4.9, reviews: 421, color: "#06b6d4", emoji: "❄️", bio: "Master AC technician for ducted systems and commercial units. Energy audit and optimization specialist." },
  { id: 21, name: "Pooja Desai", service: "Electrician", location: "Kozhikode, Calicut Beach", state: "Kerala", exp: 16, rating: 4.9, reviews: 208, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Kozhikode with 16 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 22, name: "Maulik Dave", service: "Cleaner", location: "Faridabad, Sector 15", state: "Haryana", exp: 5, rating: 4.9, reviews: 464, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Faridabad for 5 yrs. Daily, weekly, or one-time plans." },
  { id: 23, name: "Rupal Mehta", service: "Electrician", location: "Panaji, Panjim", state: "Goa", exp: 12, rating: 4.5, reviews: 230, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Panaji. Industrial, residential and shop wiring with safety compliance." },
  { id: 24, name: "Smita Joshi", service: "Painter", location: "Vadodara, Tandalja", state: "Gujarat", exp: 7, rating: 4.8, reviews: 81, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Vadodara offering 3D textures, ombre, and geometric accent walls." },
  { id: 25, name: "Rina Mishra", service: "Welder", location: "Kutch, Gandhidham", state: "Gujarat", exp: 18, rating: 4.6, reviews: 339, color: "#f97316", emoji: "🔥", bio: "Certified welder in Kutch with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 26, name: "Mitali Bose", service: "Electrician", location: "Ahmedabad, Chandkheda", state: "Gujarat", exp: 11, rating: 4.9, reviews: 391, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Ahmedabad. Specializes in inverter, solar, and CCTV installations." },
  { id: 27, name: "Jayalakshmi Varma", service: "Cleaner", location: "Aurangabad, Cidco", state: "Maharashtra", exp: 6, rating: 4.7, reviews: 470, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Aurangabad. Eco-friendly products used." },
  { id: 28, name: "Saroja Krishnan", service: "Electrician", location: "Kolkata, Salt Lake", state: "West Bengal", exp: 18, rating: 4.5, reviews: 386, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Kolkata for 18+ years." },
  { id: 29, name: "Ruksana Begum", service: "Painter", location: "Navsari, Lunsikui", state: "Gujarat", exp: 17, rating: 4.5, reviews: 137, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Navsari offering 3D textures, ombre, and geometric accent walls." },
  { id: 30, name: "Kamla Devi", service: "Welder", location: "Hyderabad, Madhapur", state: "Telangana", exp: 11, rating: 4.6, reviews: 109, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Hyderabad for 11+ years. Industrial and residential work." },
  { id: 31, name: "Seema Singh", service: "Electrician", location: "Vadodara, Fatehgunj", state: "Gujarat", exp: 4, rating: 4.5, reviews: 454, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Vadodara. Industrial, residential and shop wiring with safety compliance." },
  { id: 32, name: "Bharti Gajjar", service: "Cleaner", location: "Raipur, Shankar Nagar", state: "Chhattisgarh", exp: 4, rating: 4.9, reviews: 472, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Raipur. Eco-friendly products used." },
  { id: 33, name: "Rekha Darji", service: "Electrician", location: "Kolkata, Dumdum", state: "West Bengal", exp: 6, rating: 4.8, reviews: 361, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Kolkata. Specializes in inverter, solar, and CCTV installations." },
  { id: 34, name: "Taraben Desai", service: "Painter", location: "Thiruvananthapuram, Kazhakkoottam", state: "Kerala", exp: 10, rating: 4.9, reviews: 390, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Thiruvananthapuram. Delivers smooth, drip-free finishes with premium paints." },
  { id: 35, name: "Jashodaben Patel", service: "Welder", location: "Kochi, Ernakulam", state: "Kerala", exp: 8, rating: 4.9, reviews: 466, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Kochi for 8+ years. Industrial and residential work." },
  { id: 36, name: "Ramilaben Vaghela", service: "Electrician", location: "Udaipur, Hiran Magri", state: "Rajasthan", exp: 11, rating: 4.8, reviews: 423, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Udaipur for 11+ years." },
  { id: 37, name: "Nirmalaben Gamit", service: "Cleaner", location: "Ludhiana, Model Town", state: "Punjab", exp: 16, rating: 4.9, reviews: 311, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Ludhiana offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 38, name: "Anita Nair", service: "Electrician", location: "Rajkot, Kalawad Road", state: "Gujarat", exp: 9, rating: 4.6, reviews: 112, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Rajkot for 9+ years." },
  { id: 39, name: "Vikram Singh", service: "Painter", location: "Ahmedabad, Isanpur", state: "Gujarat", exp: 2, rating: 4.9, reviews: 363, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 2 yrs exp in Ahmedabad. Anti-fungal and weatherproof coatings." },
  { id: 40, name: "Bhavesh Trivedi", service: "Welder", location: "Mumbai, Andheri", state: "Maharashtra", exp: 9, rating: 4.5, reviews: 116, color: "#f97316", emoji: "🔥", bio: "Certified welder in Mumbai with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 41, name: "Nisha Rana", service: "Electrician", location: "Ahmedabad, Bopal", state: "Gujarat", exp: 9, rating: 4.5, reviews: 96, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 9+ years." },
  { id: 42, name: "Bindu Pillai", service: "Cleaner", location: "Bangalore, Indiranagar", state: "Karnataka", exp: 4, rating: 4.9, reviews: 201, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Bangalore for 4 yrs. Daily, weekly, or one-time plans." },
  { id: 43, name: "Manjula Rao", service: "Electrician", location: "Patna, Bailey Road", state: "Bihar", exp: 17, rating: 4.6, reviews: 356, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Patna. Specializes in inverter, solar, and CCTV installations." },
  { id: 44, name: "Kavya Singh", service: "Painter", location: "Gandhinagar, Sector 11", state: "Gujarat", exp: 17, rating: 4.6, reviews: 481, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Gandhinagar. Delivers smooth, drip-free finishes with premium paints." },
  { id: 45, name: "Sarbani Sen", service: "Welder", location: "Chennai, Anna Nagar", state: "Tamil Nadu", exp: 15, rating: 4.6, reviews: 128, color: "#f97316", emoji: "🔥", bio: "Certified welder in Chennai with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 46, name: "Divya Thomas", service: "Electrician", location: "Mehsana, Highway Road", state: "Gujarat", exp: 15, rating: 4.7, reviews: 296, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Mehsana. Industrial, residential and shop wiring with safety compliance." },
  { id: 47, name: "Gurpreet Kaur", service: "Cleaner", location: "Anand, Vidyanagar", state: "Gujarat", exp: 16, rating: 4.5, reviews: 424, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Anand offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 48, name: "Nusrat Parveen", service: "Electrician", location: "Surat, Vesu", state: "Gujarat", exp: 3, rating: 4.8, reviews: 452, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Surat for 3+ years." },
  { id: 49, name: "Santosh Saini", service: "Painter", location: "Visakhapatnam, MVP Colony", state: "Andhra Pradesh", exp: 5, rating: 4.6, reviews: 178, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 5 yrs exp in Visakhapatnam. Anti-fungal and weatherproof coatings." },
  { id: 50, name: "Anjali Gupta", service: "Welder", location: "Valsad, Tithal Road", state: "Gujarat", exp: 16, rating: 4.6, reviews: 296, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Valsad for 16+ years. Industrial and residential work." },
  { id: 51, name: "Kalpana Vaghela", service: "Electrician", location: "Rajkot, Mavdi", state: "Gujarat", exp: 10, rating: 4.8, reviews: 207, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Rajkot with 10 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 52, name: "Geeta Raval", service: "Cleaner", location: "Agra, Fatehabad Road", state: "Uttar Pradesh", exp: 16, rating: 4.9, reviews: 130, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Agra offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 53, name: "Savitaben Solanki", service: "Electrician", location: "Nagpur, Sitabuldi", state: "Maharashtra", exp: 2, rating: 4.5, reviews: 465, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Nagpur. Specializes in inverter, solar, and CCTV installations." },
  { id: 54, name: "Chetanaben Vora", service: "Painter", location: "Jaipur, Vaishali Nagar", state: "Rajasthan", exp: 7, rating: 4.8, reviews: 328, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Jaipur. Delivers smooth, drip-free finishes with premium paints." },
  { id: 55, name: "Savitaben Mistry", service: "Welder", location: "Palanpur, Ambaji Road", state: "Gujarat", exp: 8, rating: 4.8, reviews: 110, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Palanpur for 8+ years. Industrial and residential work." },
  { id: 56, name: "Ravi Singh", service: "Electrician", location: "Nadiad, College Road", state: "Gujarat", exp: 14, rating: 4.5, reviews: 279, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Nadiad for 14+ years." },
  { id: 57, name: "Sanjay Gupta", service: "Cleaner", location: "Varanasi, Sigra", state: "Uttar Pradesh", exp: 16, rating: 4.7, reviews: 296, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Varanasi. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 58, name: "Arjun Patel", service: "Electrician", location: "Amritsar, Ranjit Avenue", state: "Punjab", exp: 6, rating: 4.6, reviews: 231, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Amritsar. Specializes in inverter, solar, and CCTV installations." },
  { id: 59, name: "Jignesh Modi", service: "Painter", location: "Vadodara, Manjalpur", state: "Gujarat", exp: 3, rating: 4.9, reviews: 456, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Vadodara specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 60, name: "Ankita Chauhan", service: "Welder", location: "Shimla, Mall Road", state: "Himachal Pradesh", exp: 12, rating: 4.5, reviews: 105, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Shimla. Security grills, shutters, and structural steel work." },
  { id: 61, name: "Savita Nair", service: "Electrician", location: "Visakhapatnam, Gajuwaka", state: "Andhra Pradesh", exp: 18, rating: 4.9, reviews: 160, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Visakhapatnam with 18 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 62, name: "Usha Krishnan", service: "Cleaner", location: "Mumbai, Borivali", state: "Maharashtra", exp: 18, rating: 4.5, reviews: 175, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Mumbai offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 63, name: "Priyanka Pandey", service: "Electrician", location: "Ahmedabad, Maninagar", state: "Gujarat", exp: 4, rating: 4.6, reviews: 286, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 4 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 64, name: "Debjani Das", service: "Painter", location: "Lucknow, Hazratganj", state: "Uttar Pradesh", exp: 9, rating: 4.9, reviews: 384, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Lucknow specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 65, name: "Padma Devi", service: "Welder", location: "Botad, Main Market", state: "Gujarat", exp: 4, rating: 4.8, reviews: 416, color: "#f97316", emoji: "🔥", bio: "Precision welder in Botad — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 66, name: "Harmandeep Kaur", service: "Electrician", location: "Indore, Vijay Nagar", state: "Madhya Pradesh", exp: 10, rating: 4.6, reviews: 422, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Indore for 10+ years." },
  { id: 67, name: "Rizwana Khan", service: "Cleaner", location: "Surendranagar, Wadhwan", state: "Gujarat", exp: 9, rating: 4.7, reviews: 282, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Surendranagar. Eco-friendly products used." },
  { id: 68, name: "Malti Pandey", service: "Electrician", location: "Delhi, Rohini", state: "Delhi", exp: 11, rating: 4.8, reviews: 241, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Delhi with 11 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 69, name: "Pallavi Bajaj", service: "Painter", location: "Pune, Wakad", state: "Maharashtra", exp: 2, rating: 4.8, reviews: 398, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Pune specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 70, name: "Nayna Thakor", service: "Welder", location: "Jalandhar, Model Town", state: "Punjab", exp: 4, rating: 4.9, reviews: 189, color: "#f97316", emoji: "🔥", bio: "Precision welder in Jalandhar — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 71, name: "Pushpaben Shah", service: "Electrician", location: "Bangalore, Marathahalli", state: "Karnataka", exp: 6, rating: 4.7, reviews: 115, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Bangalore. Specializes in inverter, solar, and CCTV installations." },
  { id: 72, name: "Sunitaben Bhatt", service: "Cleaner", location: "Mumbai, Thane", state: "Maharashtra", exp: 13, rating: 4.7, reviews: 160, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Mumbai. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 73, name: "Maniben Gohel", service: "Electrician", location: "Rajkot, Raiya Road", state: "Gujarat", exp: 11, rating: 4.9, reviews: 493, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Rajkot with 11 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 74, name: "Manjuben Makwana", service: "Painter", location: "Noida, Sector 18", state: "Uttar Pradesh", exp: 11, rating: 4.5, reviews: 148, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Noida offering 3D textures, ombre, and geometric accent walls." },
  { id: 75, name: "Manoj Verma", service: "Welder", location: "Anand, Anand City", state: "Gujarat", exp: 5, rating: 4.5, reviews: 460, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Anand for 5+ years. Industrial and residential work." },
  { id: 76, name: "Harish Bose", service: "Electrician", location: "Gandhinagar, Sector 30", state: "Gujarat", exp: 10, rating: 4.7, reviews: 389, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Gandhinagar. Specializes in inverter, solar, and CCTV installations." },
  { id: 77, name: "Gopal Reddy", service: "Cleaner", location: "Vadodara, Waghodia Road", state: "Gujarat", exp: 12, rating: 4.6, reviews: 431, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Vadodara for 12 yrs. Daily, weekly, or one-time plans." },
  { id: 78, name: "Dhruv Acharya", service: "Electrician", location: "Bharuch, Zadeshwar", state: "Gujarat", exp: 18, rating: 4.8, reviews: 208, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Bharuch with 18 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 79, name: "Swati Vyas", service: "Painter", location: "Jodhpur, Shastri Nagar", state: "Rajasthan", exp: 4, rating: 4.8, reviews: 221, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Jodhpur specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 80, name: "Rekha Patil", service: "Welder", location: "Amreli, Rajkot Road", state: "Gujarat", exp: 2, rating: 4.7, reviews: 474, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Amreli for 2+ years. Industrial and residential work." },
  { id: 81, name: "Geeta Sharma", service: "Electrician", location: "Chennai, Velachery", state: "Tamil Nadu", exp: 10, rating: 4.6, reviews: 459, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Chennai. Industrial, residential and shop wiring with safety compliance." },
  { id: 82, name: "Soma Banerjee", service: "Cleaner", location: "Ahmedabad, Naroda", state: "Gujarat", exp: 15, rating: 4.9, reviews: 84, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Ahmedabad offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 83, name: "Sindhu Menon", service: "Electrician", location: "Bharuch, City Centre", state: "Gujarat", exp: 4, rating: 4.6, reviews: 359, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Bharuch with 4 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 84, name: "Annapurna Murthy", service: "Painter", location: "Bhubaneswar, Saheed Nagar", state: "Odisha", exp: 13, rating: 4.9, reviews: 362, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 13 yrs exp in Bhubaneswar. Anti-fungal and weatherproof coatings." },
  { id: 85, name: "Simranpreet Kour", service: "Welder", location: "Chennai, OMR", state: "Tamil Nadu", exp: 15, rating: 4.6, reviews: 101, color: "#f97316", emoji: "🔥", bio: "Precision welder in Chennai — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 86, name: "Sarla Meena", service: "Electrician", location: "Jamnagar, Digvijay Plot", state: "Gujarat", exp: 13, rating: 4.5, reviews: 263, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Jamnagar. Specializes in inverter, solar, and CCTV installations." },
  { id: 87, name: "Sunita Yadav", service: "Cleaner", location: "Bhopal, MP Nagar", state: "Madhya Pradesh", exp: 9, rating: 4.5, reviews: 261, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Bhopal. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 88, name: "Shweta Saxena", service: "Electrician", location: "Gurgaon, DLF Phase 2", state: "Haryana", exp: 6, rating: 4.6, reviews: 163, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Gurgaon. Specializes in inverter, solar, and CCTV installations." },
  { id: 89, name: "Manisha Chaudhary", service: "Painter", location: "Indore, AB Road", state: "Madhya Pradesh", exp: 15, rating: 4.5, reviews: 171, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Indore offering 3D textures, ombre, and geometric accent walls." },
  { id: 90, name: "Kantaben Leuva", service: "Welder", location: "Ranchi, Doranda", state: "Jharkhand", exp: 15, rating: 4.6, reviews: 216, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Ranchi for 15+ years. Industrial and residential work." },
  { id: 91, name: "Kamlabahen Rana", service: "Electrician", location: "Bangalore, Koramangala", state: "Karnataka", exp: 5, rating: 4.8, reviews: 99, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Bangalore. Industrial, residential and shop wiring with safety compliance." },
  { id: 92, name: "Geetaben Modi", service: "Cleaner", location: "Coimbatore, RS Puram", state: "Tamil Nadu", exp: 9, rating: 4.6, reviews: 498, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Coimbatore. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 93, name: "Daxaben Rathwa", service: "Electrician", location: "Chandigarh, Sector 17", state: "Punjab", exp: 13, rating: 4.7, reviews: 500, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Chandigarh. Specializes in inverter, solar, and CCTV installations." },
  { id: 94, name: "Priya Devi", service: "Painter", location: "Bangalore, Whitefield", state: "Karnataka", exp: 9, rating: 4.5, reviews: 417, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 9 yrs exp in Bangalore. Anti-fungal and weatherproof coatings." },
  { id: 95, name: "Rajeshwari Menon", service: "Welder", location: "Kanpur, Civil Lines", state: "Uttar Pradesh", exp: 14, rating: 4.7, reviews: 222, color: "#f97316", emoji: "🔥", bio: "Certified welder in Kanpur with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 96, name: "Pooja Desai", service: "Electrician", location: "Kochi, Kakkanad", state: "Kerala", exp: 10, rating: 4.7, reviews: 408, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Kochi. Industrial, residential and shop wiring with safety compliance." },
  { id: 97, name: "Maulik Dave", service: "Cleaner", location: "Mysore, Vijayanagar", state: "Karnataka", exp: 12, rating: 4.5, reviews: 139, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Mysore for 12 yrs. Daily, weekly, or one-time plans." },
  { id: 98, name: "Rupal Mehta", service: "Electrician", location: "Patna, Boring Road", state: "Bihar", exp: 7, rating: 4.9, reviews: 215, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Patna with 7 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 99, name: "Smita Joshi", service: "Painter", location: "Surat, Adajan", state: "Gujarat", exp: 5, rating: 4.9, reviews: 302, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Surat offering 3D textures, ombre, and geometric accent walls." },
  { id: 100, name: "Rina Mishra", service: "Welder", location: "Nagpur, Dharampeth", state: "Maharashtra", exp: 12, rating: 4.8, reviews: 390, color: "#f97316", emoji: "🔥", bio: "Certified welder in Nagpur with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 101, name: "Mitali Bose", service: "Electrician", location: "Bhavnagar, Waghawadi Road", state: "Gujarat", exp: 14, rating: 4.9, reviews: 177, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Bhavnagar for 14+ years." },
  { id: 102, name: "Jayalakshmi Varma", service: "Cleaner", location: "Delhi, Lajpat Nagar", state: "Delhi", exp: 3, rating: 4.8, reviews: 80, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Delhi. Eco-friendly products used." },
  { id: 103, name: "Saroja Krishnan", service: "Electrician", location: "Delhi, Janakpuri", state: "Delhi", exp: 13, rating: 4.8, reviews: 115, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Delhi for 13+ years." },
  { id: 104, name: "Ruksana Begum", service: "Painter", location: "Gandhinagar, Sector 21", state: "Gujarat", exp: 12, rating: 4.5, reviews: 448, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Gandhinagar offering 3D textures, ombre, and geometric accent walls." },
  { id: 105, name: "Kamla Devi", service: "Welder", location: "Dehradun, Rajpur Road", state: "Uttarakhand", exp: 18, rating: 4.7, reviews: 421, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Dehradun. Security grills, shutters, and structural steel work." },
  { id: 106, name: "Seema Singh", service: "Electrician", location: "Ahmedabad, Navrangpura", state: "Gujarat", exp: 12, rating: 4.8, reviews: 436, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 12+ years." },
  { id: 107, name: "Bharti Gajjar", service: "Cleaner", location: "Madurai, Anna Nagar", state: "Tamil Nadu", exp: 6, rating: 4.6, reviews: 295, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Madurai. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 108, name: "Rekha Darji", service: "Electrician", location: "Ahmedabad, Nikol", state: "Gujarat", exp: 7, rating: 4.9, reviews: 371, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 7+ years." },
  { id: 109, name: "Taraben Desai", service: "Painter", location: "Mumbai, Dadar", state: "Maharashtra", exp: 14, rating: 4.9, reviews: 80, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Mumbai offering 3D textures, ombre, and geometric accent walls." },
  { id: 110, name: "Jashodaben Patel", service: "Welder", location: "Porbandar, MG Road", state: "Gujarat", exp: 11, rating: 4.6, reviews: 300, color: "#f97316", emoji: "🔥", bio: "Precision welder in Porbandar — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 111, name: "Ramilaben Vaghela", service: "Electrician", location: "Vadodara, Sama", state: "Gujarat", exp: 16, rating: 4.8, reviews: 306, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Vadodara. Specializes in inverter, solar, and CCTV installations." },
  { id: 112, name: "Nirmalaben Gamit", service: "Cleaner", location: "Rajkot, Amin Marg", state: "Gujarat", exp: 18, rating: 4.8, reviews: 486, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Rajkot. Eco-friendly products used." },
  { id: 113, name: "Anita Nair", service: "Electrician", location: "Vijayawada, Benz Circle", state: "Andhra Pradesh", exp: 4, rating: 4.7, reviews: 343, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Vijayawada for 4+ years." },
  { id: 114, name: "Vikram Singh", service: "Painter", location: "Morbi, Industrial Area", state: "Gujarat", exp: 4, rating: 4.6, reviews: 424, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Morbi offering 3D textures, ombre, and geometric accent walls." },
  { id: 115, name: "Bhavesh Trivedi", service: "Welder", location: "Bhavnagar, Ghogha Circle", state: "Gujarat", exp: 9, rating: 4.6, reviews: 155, color: "#f97316", emoji: "🔥", bio: "Certified welder in Bhavnagar with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 116, name: "Nisha Rana", service: "Electrician", location: "Ahmedabad, Bodakdev", state: "Gujarat", exp: 3, rating: 4.6, reviews: 323, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 3 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 117, name: "Bindu Pillai", service: "Cleaner", location: "Jamnagar, Indira Nagar", state: "Gujarat", exp: 16, rating: 4.8, reviews: 402, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Jamnagar. Eco-friendly products used." },
  { id: 118, name: "Manjula Rao", service: "Electrician", location: "Ahmedabad, Satellite", state: "Gujarat", exp: 14, rating: 4.8, reviews: 284, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Ahmedabad. Specializes in inverter, solar, and CCTV installations." },
  { id: 119, name: "Kavya Singh", service: "Painter", location: "Ahmedabad, Vastrapur", state: "Gujarat", exp: 6, rating: 4.5, reviews: 464, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Ahmedabad specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 120, name: "Sarbani Sen", service: "Welder", location: "Siliguri, Sevoke Road", state: "West Bengal", exp: 15, rating: 4.6, reviews: 170, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Siliguri. Security grills, shutters, and structural steel work." },
  { id: 121, name: "Divya Thomas", service: "Electrician", location: "Hyderabad, Kukatpally", state: "Telangana", exp: 3, rating: 4.9, reviews: 207, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Hyderabad with 3 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 122, name: "Gurpreet Kaur", service: "Cleaner", location: "Surat, Piplod", state: "Gujarat", exp: 16, rating: 4.6, reviews: 490, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Surat. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 123, name: "Nusrat Parveen", service: "Electrician", location: "Ahmedabad, Ghatlodia", state: "Gujarat", exp: 18, rating: 4.9, reviews: 384, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 18+ years." },
  { id: 124, name: "Santosh Saini", service: "Painter", location: "Warangal, Hanamkonda", state: "Telangana", exp: 16, rating: 4.9, reviews: 497, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Warangal. Delivers smooth, drip-free finishes with premium paints." },
  { id: 125, name: "Anjali Gupta", service: "Welder", location: "Ankleshwar, GIDC", state: "Gujarat", exp: 16, rating: 4.6, reviews: 460, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Ankleshwar. Security grills, shutters, and structural steel work." },
  { id: 126, name: "Kalpana Vaghela", service: "Electrician", location: "Dahod, Main Road", state: "Gujarat", exp: 16, rating: 4.7, reviews: 464, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Dahod. Specializes in inverter, solar, and CCTV installations." },
  { id: 127, name: "Geeta Raval", service: "Cleaner", location: "Lucknow, Gomti Nagar", state: "Uttar Pradesh", exp: 10, rating: 4.9, reviews: 328, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Lucknow. Eco-friendly products used." },
  { id: 128, name: "Savitaben Solanki", service: "Electrician", location: "Ahmedabad, Vejalpur", state: "Gujarat", exp: 10, rating: 4.8, reviews: 119, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 10+ years." },
  { id: 129, name: "Chetanaben Vora", service: "Painter", location: "Hyderabad, Secunderabad", state: "Telangana", exp: 9, rating: 4.7, reviews: 251, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Hyderabad offering 3D textures, ombre, and geometric accent walls." },
  { id: 130, name: "Savitaben Mistry", service: "Welder", location: "Jaipur, Mansarovar", state: "Rajasthan", exp: 4, rating: 4.6, reviews: 157, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Jaipur for 4+ years. Industrial and residential work." },
  { id: 131, name: "Ravi Singh", service: "Electrician", location: "Vadodara, Alkapuri", state: "Gujarat", exp: 14, rating: 4.6, reviews: 441, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Vadodara. Specializes in inverter, solar, and CCTV installations." },
  { id: 132, name: "Sanjay Gupta", service: "Cleaner", location: "Kolkata, Howrah", state: "West Bengal", exp: 4, rating: 4.8, reviews: 288, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Kolkata for 4 yrs. Daily, weekly, or one-time plans." },
  { id: 133, name: "Arjun Patel", service: "Electrician", location: "Bhubaneswar, Patia", state: "Odisha", exp: 16, rating: 4.8, reviews: 111, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Bhubaneswar. Specializes in inverter, solar, and CCTV installations." },
  { id: 134, name: "Jignesh Modi", service: "Painter", location: "Nashik, Gangapur Road", state: "Maharashtra", exp: 15, rating: 4.8, reviews: 474, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Nashik specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 135, name: "Ankita Chauhan", service: "Welder", location: "Guwahati, Paltan Bazaar", state: "Assam", exp: 14, rating: 4.8, reviews: 83, color: "#f97316", emoji: "🔥", bio: "Precision welder in Guwahati — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 136, name: "Savita Nair", service: "Electrician", location: "Margao, Fatorda", state: "Goa", exp: 11, rating: 4.8, reviews: 294, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Margao. Specializes in inverter, solar, and CCTV installations." },
  { id: 137, name: "Usha Krishnan", service: "Cleaner", location: "Patan, Old City", state: "Gujarat", exp: 17, rating: 4.6, reviews: 219, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Patan. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 138, name: "Priyanka Pandey", service: "Electrician", location: "Mumbai, Bandra", state: "Maharashtra", exp: 17, rating: 4.5, reviews: 279, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Mumbai for 17+ years." },
  { id: 139, name: "Debjani Das", service: "Painter", location: "Bangalore, BTM Layout", state: "Karnataka", exp: 14, rating: 4.6, reviews: 319, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 14 yrs exp in Bangalore. Anti-fungal and weatherproof coatings." },
  { id: 140, name: "Padma Devi", service: "Welder", location: "Gurgaon, Sohna Road", state: "Haryana", exp: 2, rating: 4.8, reviews: 383, color: "#f97316", emoji: "🔥", bio: "Certified welder in Gurgaon with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 141, name: "Harmandeep Kaur", service: "Electrician", location: "Hubli, Gokul Road", state: "Karnataka", exp: 4, rating: 4.8, reviews: 149, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Hubli. Industrial, residential and shop wiring with safety compliance." },
  { id: 142, name: "Rizwana Khan", service: "Cleaner", location: "Surat, Udhna", state: "Gujarat", exp: 7, rating: 4.5, reviews: 213, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Surat. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 143, name: "Malti Pandey", service: "Electrician", location: "Pune, Hadapsar", state: "Maharashtra", exp: 12, rating: 4.6, reviews: 312, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Pune for 12+ years." },
  { id: 144, name: "Pallavi Bajaj", service: "Painter", location: "Vadodara, Karelibaug", state: "Gujarat", exp: 12, rating: 4.8, reviews: 222, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Vadodara. Delivers smooth, drip-free finishes with premium paints." },
  { id: 145, name: "Nayna Thakor", service: "Welder", location: "Delhi, Dwarka", state: "Delhi", exp: 10, rating: 4.5, reviews: 320, color: "#f97316", emoji: "🔥", bio: "Certified welder in Delhi with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 146, name: "Pushpaben Shah", service: "Electrician", location: "Kutch, Mundra", state: "Gujarat", exp: 3, rating: 4.7, reviews: 194, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Kutch with 3 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 147, name: "Sunitaben Bhatt", service: "Cleaner", location: "Surat, Bhestan", state: "Gujarat", exp: 3, rating: 4.5, reviews: 206, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Surat. Eco-friendly products used." },
  { id: 148, name: "Maniben Gohel", service: "Electrician", location: "Godhra, Station Road", state: "Gujarat", exp: 2, rating: 4.9, reviews: 158, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Godhra. Specializes in inverter, solar, and CCTV installations." },
  { id: 149, name: "Manjuben Makwana", service: "Painter", location: "Surat, Athwa", state: "Gujarat", exp: 6, rating: 4.8, reviews: 422, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Surat specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 150, name: "Manoj Verma", service: "Welder", location: "Vadodara, Nizampura", state: "Gujarat", exp: 8, rating: 4.8, reviews: 438, color: "#f97316", emoji: "🔥", bio: "Precision welder in Vadodara — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 151, name: "Harish Bose", service: "Electrician", location: "Vadodara, Chhani", state: "Gujarat", exp: 13, rating: 4.6, reviews: 390, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Vadodara with 13 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 152, name: "Gopal Reddy", service: "Cleaner", location: "Jabalpur, Wright Town", state: "Madhya Pradesh", exp: 7, rating: 4.7, reviews: 135, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Jabalpur offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 153, name: "Dhruv Acharya", service: "Electrician", location: "Ahmedabad, SG Highway", state: "Gujarat", exp: 11, rating: 4.9, reviews: 426, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Ahmedabad. Industrial, residential and shop wiring with safety compliance." },
  { id: 154, name: "Swati Vyas", service: "Painter", location: "Surat, Katargam", state: "Gujarat", exp: 14, rating: 4.6, reviews: 118, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 14 yrs exp in Surat. Anti-fungal and weatherproof coatings." },
  { id: 155, name: "Rekha Patil", service: "Welder", location: "Rajkot, Kothariya", state: "Gujarat", exp: 5, rating: 4.7, reviews: 430, color: "#f97316", emoji: "🔥", bio: "Certified welder in Rajkot with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 156, name: "Geeta Sharma", service: "Electrician", location: "Junagadh, Dhal Road", state: "Gujarat", exp: 3, rating: 4.7, reviews: 352, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Junagadh. Industrial, residential and shop wiring with safety compliance." },
  { id: 157, name: "Soma Banerjee", service: "Cleaner", location: "Kutch, Bhuj", state: "Gujarat", exp: 13, rating: 4.5, reviews: 339, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Kutch for 13 yrs. Daily, weekly, or one-time plans." },
  { id: 158, name: "Sindhu Menon", service: "Electrician", location: "Pune, Kothrud", state: "Maharashtra", exp: 2, rating: 4.8, reviews: 330, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Pune with 2 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 159, name: "Annapurna Murthy", service: "Painter", location: "Vadodara, Gorwa", state: "Gujarat", exp: 15, rating: 4.7, reviews: 405, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Vadodara. Delivers smooth, drip-free finishes with premium paints." },
  { id: 160, name: "Simranpreet Kour", service: "Welder", location: "Surat, Varachha", state: "Gujarat", exp: 6, rating: 4.8, reviews: 170, color: "#f97316", emoji: "🔥", bio: "Precision welder in Surat — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 161, name: "Sarla Meena", service: "Electrician", location: "Kozhikode, Calicut Beach", state: "Kerala", exp: 17, rating: 4.8, reviews: 303, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Kozhikode for 17+ years." },
  { id: 162, name: "Sunita Yadav", service: "Cleaner", location: "Faridabad, Sector 15", state: "Haryana", exp: 12, rating: 4.6, reviews: 124, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Faridabad for 12 yrs. Daily, weekly, or one-time plans." },
  { id: 163, name: "Shweta Saxena", service: "Electrician", location: "Panaji, Panjim", state: "Goa", exp: 16, rating: 4.6, reviews: 464, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Panaji. Industrial, residential and shop wiring with safety compliance." },
  { id: 164, name: "Manisha Chaudhary", service: "Painter", location: "Vadodara, Tandalja", state: "Gujarat", exp: 14, rating: 4.7, reviews: 94, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Vadodara. Delivers smooth, drip-free finishes with premium paints." },
  { id: 165, name: "Kantaben Leuva", service: "Welder", location: "Kutch, Gandhidham", state: "Gujarat", exp: 12, rating: 4.6, reviews: 329, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Kutch for 12+ years. Industrial and residential work." },
  { id: 166, name: "Kamlabahen Rana", service: "Electrician", location: "Ahmedabad, Chandkheda", state: "Gujarat", exp: 13, rating: 4.7, reviews: 254, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 13+ years." },
  { id: 167, name: "Geetaben Modi", service: "Cleaner", location: "Aurangabad, Cidco", state: "Maharashtra", exp: 10, rating: 4.9, reviews: 85, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Aurangabad. Eco-friendly products used." },
  { id: 168, name: "Daxaben Rathwa", service: "Electrician", location: "Kolkata, Salt Lake", state: "West Bengal", exp: 4, rating: 4.6, reviews: 448, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Kolkata. Industrial, residential and shop wiring with safety compliance." },
  { id: 169, name: "Priya Devi", service: "Painter", location: "Navsari, Lunsikui", state: "Gujarat", exp: 17, rating: 4.9, reviews: 468, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 17 yrs exp in Navsari. Anti-fungal and weatherproof coatings." },
  { id: 170, name: "Rajeshwari Menon", service: "Welder", location: "Hyderabad, Madhapur", state: "Telangana", exp: 17, rating: 4.8, reviews: 309, color: "#f97316", emoji: "🔥", bio: "Certified welder in Hyderabad with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 171, name: "Pooja Desai", service: "Electrician", location: "Vadodara, Fatehgunj", state: "Gujarat", exp: 4, rating: 4.7, reviews: 193, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Vadodara. Industrial, residential and shop wiring with safety compliance." },
  { id: 172, name: "Maulik Dave", service: "Cleaner", location: "Raipur, Shankar Nagar", state: "Chhattisgarh", exp: 9, rating: 4.7, reviews: 419, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Raipur for 9 yrs. Daily, weekly, or one-time plans." },
  { id: 173, name: "Rupal Mehta", service: "Electrician", location: "Kolkata, Dumdum", state: "West Bengal", exp: 17, rating: 4.9, reviews: 351, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Kolkata for 17+ years." },
  { id: 174, name: "Smita Joshi", service: "Painter", location: "Thiruvananthapuram, Kazhakkoottam", state: "Kerala", exp: 15, rating: 4.9, reviews: 249, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Thiruvananthapuram offering 3D textures, ombre, and geometric accent walls." },
  { id: 175, name: "Rina Mishra", service: "Welder", location: "Kochi, Ernakulam", state: "Kerala", exp: 16, rating: 4.7, reviews: 236, color: "#f97316", emoji: "🔥", bio: "Precision welder in Kochi — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 176, name: "Mitali Bose", service: "Electrician", location: "Udaipur, Hiran Magri", state: "Rajasthan", exp: 9, rating: 4.5, reviews: 449, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Udaipur. Specializes in inverter, solar, and CCTV installations." },
  { id: 177, name: "Jayalakshmi Varma", service: "Cleaner", location: "Ludhiana, Model Town", state: "Punjab", exp: 12, rating: 4.5, reviews: 460, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Ludhiana. Eco-friendly products used." },
  { id: 178, name: "Saroja Krishnan", service: "Electrician", location: "Rajkot, Kalawad Road", state: "Gujarat", exp: 8, rating: 4.6, reviews: 458, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Rajkot. Industrial, residential and shop wiring with safety compliance." },
  { id: 179, name: "Ruksana Begum", service: "Painter", location: "Ahmedabad, Isanpur", state: "Gujarat", exp: 10, rating: 4.9, reviews: 469, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Ahmedabad offering 3D textures, ombre, and geometric accent walls." },
  { id: 180, name: "Kamla Devi", service: "Welder", location: "Mumbai, Andheri", state: "Maharashtra", exp: 5, rating: 4.6, reviews: 231, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Mumbai for 5+ years. Industrial and residential work." },
  { id: 181, name: "Seema Singh", service: "Electrician", location: "Ahmedabad, Bopal", state: "Gujarat", exp: 13, rating: 4.6, reviews: 234, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 13 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 182, name: "Bharti Gajjar", service: "Cleaner", location: "Bangalore, Indiranagar", state: "Karnataka", exp: 6, rating: 4.7, reviews: 103, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Bangalore offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 183, name: "Rekha Darji", service: "Electrician", location: "Patna, Bailey Road", state: "Bihar", exp: 11, rating: 4.6, reviews: 406, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Patna. Industrial, residential and shop wiring with safety compliance." },
  { id: 184, name: "Taraben Desai", service: "Painter", location: "Gandhinagar, Sector 11", state: "Gujarat", exp: 5, rating: 4.5, reviews: 373, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Gandhinagar offering 3D textures, ombre, and geometric accent walls." },
  { id: 185, name: "Jashodaben Patel", service: "Welder", location: "Chennai, Anna Nagar", state: "Tamil Nadu", exp: 17, rating: 4.8, reviews: 305, color: "#f97316", emoji: "🔥", bio: "Precision welder in Chennai — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 186, name: "Ramilaben Vaghela", service: "Electrician", location: "Mehsana, Highway Road", state: "Gujarat", exp: 7, rating: 4.5, reviews: 209, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Mehsana. Industrial, residential and shop wiring with safety compliance." },
  { id: 187, name: "Nirmalaben Gamit", service: "Cleaner", location: "Anand, Vidyanagar", state: "Gujarat", exp: 5, rating: 4.5, reviews: 285, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Anand. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 188, name: "Anita Nair", service: "Electrician", location: "Surat, Vesu", state: "Gujarat", exp: 4, rating: 4.9, reviews: 402, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Surat with 4 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 189, name: "Vikram Singh", service: "Painter", location: "Visakhapatnam, MVP Colony", state: "Andhra Pradesh", exp: 6, rating: 4.6, reviews: 495, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Visakhapatnam offering 3D textures, ombre, and geometric accent walls." },
  { id: 190, name: "Bhavesh Trivedi", service: "Welder", location: "Valsad, Tithal Road", state: "Gujarat", exp: 4, rating: 4.6, reviews: 140, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Valsad. Security grills, shutters, and structural steel work." },
  { id: 191, name: "Nisha Rana", service: "Electrician", location: "Rajkot, Mavdi", state: "Gujarat", exp: 9, rating: 4.9, reviews: 274, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Rajkot. Industrial, residential and shop wiring with safety compliance." },
  { id: 192, name: "Bindu Pillai", service: "Cleaner", location: "Agra, Fatehabad Road", state: "Uttar Pradesh", exp: 16, rating: 4.7, reviews: 381, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Agra. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 193, name: "Manjula Rao", service: "Electrician", location: "Nagpur, Sitabuldi", state: "Maharashtra", exp: 11, rating: 4.9, reviews: 397, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Nagpur with 11 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 194, name: "Kavya Singh", service: "Painter", location: "Jaipur, Vaishali Nagar", state: "Rajasthan", exp: 5, rating: 4.6, reviews: 400, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 5 yrs exp in Jaipur. Anti-fungal and weatherproof coatings." },
  { id: 195, name: "Sarbani Sen", service: "Welder", location: "Palanpur, Ambaji Road", state: "Gujarat", exp: 10, rating: 4.5, reviews: 160, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Palanpur for 10+ years. Industrial and residential work." },
  { id: 196, name: "Divya Thomas", service: "Electrician", location: "Nadiad, College Road", state: "Gujarat", exp: 7, rating: 4.9, reviews: 118, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Nadiad. Specializes in inverter, solar, and CCTV installations." },
  { id: 197, name: "Gurpreet Kaur", service: "Cleaner", location: "Varanasi, Sigra", state: "Uttar Pradesh", exp: 2, rating: 4.8, reviews: 310, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Varanasi. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 198, name: "Nusrat Parveen", service: "Electrician", location: "Amritsar, Ranjit Avenue", state: "Punjab", exp: 11, rating: 4.5, reviews: 198, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Amritsar for 11+ years." },
  { id: 199, name: "Santosh Saini", service: "Painter", location: "Vadodara, Manjalpur", state: "Gujarat", exp: 11, rating: 4.8, reviews: 116, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 11 yrs exp in Vadodara. Anti-fungal and weatherproof coatings." },
  { id: 200, name: "Anjali Gupta", service: "Welder", location: "Shimla, Mall Road", state: "Himachal Pradesh", exp: 10, rating: 4.9, reviews: 418, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Shimla for 10+ years. Industrial and residential work." },
  { id: 201, name: "Kalpana Vaghela", service: "Electrician", location: "Visakhapatnam, Gajuwaka", state: "Andhra Pradesh", exp: 15, rating: 4.5, reviews: 358, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Visakhapatnam. Specializes in inverter, solar, and CCTV installations." },
  { id: 202, name: "Geeta Raval", service: "Cleaner", location: "Mumbai, Borivali", state: "Maharashtra", exp: 6, rating: 4.7, reviews: 152, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Mumbai offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 203, name: "Savitaben Solanki", service: "Electrician", location: "Ahmedabad, Maninagar", state: "Gujarat", exp: 3, rating: 4.6, reviews: 485, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 3+ years." },
  { id: 204, name: "Chetanaben Vora", service: "Painter", location: "Lucknow, Hazratganj", state: "Uttar Pradesh", exp: 11, rating: 4.8, reviews: 143, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Lucknow. Delivers smooth, drip-free finishes with premium paints." },
  { id: 205, name: "Savitaben Mistry", service: "Welder", location: "Botad, Main Market", state: "Gujarat", exp: 11, rating: 4.8, reviews: 219, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Botad. Security grills, shutters, and structural steel work." },
  { id: 206, name: "Ravi Singh", service: "Electrician", location: "Indore, Vijay Nagar", state: "Madhya Pradesh", exp: 16, rating: 4.5, reviews: 386, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Indore with 16 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 207, name: "Sanjay Gupta", service: "Cleaner", location: "Surendranagar, Wadhwan", state: "Gujarat", exp: 15, rating: 4.7, reviews: 389, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Surendranagar for 15 yrs. Daily, weekly, or one-time plans." },
  { id: 208, name: "Arjun Patel", service: "Electrician", location: "Delhi, Rohini", state: "Delhi", exp: 2, rating: 4.5, reviews: 197, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Delhi with 2 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 209, name: "Jignesh Modi", service: "Painter", location: "Pune, Wakad", state: "Maharashtra", exp: 10, rating: 4.9, reviews: 100, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 10 yrs exp in Pune. Anti-fungal and weatherproof coatings." },
  { id: 210, name: "Ankita Chauhan", service: "Welder", location: "Jalandhar, Model Town", state: "Punjab", exp: 17, rating: 4.9, reviews: 413, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Jalandhar. Security grills, shutters, and structural steel work." },
  { id: 211, name: "Savita Nair", service: "Electrician", location: "Bangalore, Marathahalli", state: "Karnataka", exp: 10, rating: 4.6, reviews: 379, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Bangalore. Industrial, residential and shop wiring with safety compliance." },
  { id: 212, name: "Usha Krishnan", service: "Cleaner", location: "Mumbai, Thane", state: "Maharashtra", exp: 17, rating: 4.5, reviews: 320, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Mumbai for 17 yrs. Daily, weekly, or one-time plans." },
  { id: 213, name: "Priyanka Pandey", service: "Electrician", location: "Rajkot, Raiya Road", state: "Gujarat", exp: 15, rating: 4.7, reviews: 244, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Rajkot with 15 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 214, name: "Debjani Das", service: "Painter", location: "Noida, Sector 18", state: "Uttar Pradesh", exp: 7, rating: 4.7, reviews: 290, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Noida. Delivers smooth, drip-free finishes with premium paints." },
  { id: 215, name: "Padma Devi", service: "Welder", location: "Anand, Anand City", state: "Gujarat", exp: 11, rating: 4.8, reviews: 496, color: "#f97316", emoji: "🔥", bio: "Certified welder in Anand with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 216, name: "Harmandeep Kaur", service: "Electrician", location: "Gandhinagar, Sector 30", state: "Gujarat", exp: 16, rating: 4.5, reviews: 241, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Gandhinagar for 16+ years." },
  { id: 217, name: "Rizwana Khan", service: "Cleaner", location: "Vadodara, Waghodia Road", state: "Gujarat", exp: 12, rating: 4.5, reviews: 475, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Vadodara. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 218, name: "Malti Pandey", service: "Electrician", location: "Bharuch, Zadeshwar", state: "Gujarat", exp: 18, rating: 4.5, reviews: 416, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Bharuch. Industrial, residential and shop wiring with safety compliance." },
  { id: 219, name: "Pallavi Bajaj", service: "Painter", location: "Jodhpur, Shastri Nagar", state: "Rajasthan", exp: 15, rating: 4.5, reviews: 176, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Jodhpur offering 3D textures, ombre, and geometric accent walls." },
  { id: 220, name: "Nayna Thakor", service: "Welder", location: "Amreli, Rajkot Road", state: "Gujarat", exp: 17, rating: 4.8, reviews: 469, color: "#f97316", emoji: "🔥", bio: "Certified welder in Amreli with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 221, name: "Pushpaben Shah", service: "Electrician", location: "Chennai, Velachery", state: "Tamil Nadu", exp: 8, rating: 4.7, reviews: 361, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Chennai. Specializes in inverter, solar, and CCTV installations." },
  { id: 222, name: "Sunitaben Bhatt", service: "Cleaner", location: "Ahmedabad, Naroda", state: "Gujarat", exp: 11, rating: 4.8, reviews: 437, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Ahmedabad. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 223, name: "Maniben Gohel", service: "Electrician", location: "Bharuch, City Centre", state: "Gujarat", exp: 5, rating: 4.5, reviews: 402, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Bharuch. Specializes in inverter, solar, and CCTV installations." },
  { id: 224, name: "Manjuben Makwana", service: "Painter", location: "Bhubaneswar, Saheed Nagar", state: "Odisha", exp: 7, rating: 4.7, reviews: 362, color: "#ec4899", emoji: "🎨", bio: "Professional painter in Bhubaneswar specializing in texture, Royale Atmos, and stencil wall finishes." },
  { id: 225, name: "Manoj Verma", service: "Welder", location: "Chennai, OMR", state: "Tamil Nadu", exp: 15, rating: 4.5, reviews: 195, color: "#f97316", emoji: "🔥", bio: "Certified welder in Chennai with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 226, name: "Harish Bose", service: "Electrician", location: "Jamnagar, Digvijay Plot", state: "Gujarat", exp: 16, rating: 4.5, reviews: 411, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Jamnagar. Specializes in inverter, solar, and CCTV installations." },
  { id: 227, name: "Gopal Reddy", service: "Cleaner", location: "Bhopal, MP Nagar", state: "Madhya Pradesh", exp: 17, rating: 4.7, reviews: 340, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Bhopal for 17 yrs. Daily, weekly, or one-time plans." },
  { id: 228, name: "Dhruv Acharya", service: "Electrician", location: "Gurgaon, DLF Phase 2", state: "Haryana", exp: 15, rating: 4.8, reviews: 321, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Gurgaon. Specializes in inverter, solar, and CCTV installations." },
  { id: 229, name: "Swati Vyas", service: "Painter", location: "Indore, AB Road", state: "Madhya Pradesh", exp: 16, rating: 4.9, reviews: 154, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Indore. Delivers smooth, drip-free finishes with premium paints." },
  { id: 230, name: "Rekha Patil", service: "Welder", location: "Ranchi, Doranda", state: "Jharkhand", exp: 8, rating: 4.9, reviews: 340, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Ranchi for 8+ years. Industrial and residential work." },
  { id: 231, name: "Geeta Sharma", service: "Electrician", location: "Bangalore, Koramangala", state: "Karnataka", exp: 4, rating: 4.7, reviews: 475, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Bangalore. Industrial, residential and shop wiring with safety compliance." },
  { id: 232, name: "Soma Banerjee", service: "Cleaner", location: "Coimbatore, RS Puram", state: "Tamil Nadu", exp: 12, rating: 4.9, reviews: 216, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Coimbatore offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 233, name: "Sindhu Menon", service: "Electrician", location: "Chandigarh, Sector 17", state: "Punjab", exp: 11, rating: 4.7, reviews: 380, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Chandigarh. Industrial, residential and shop wiring with safety compliance." },
  { id: 234, name: "Annapurna Murthy", service: "Painter", location: "Bangalore, Whitefield", state: "Karnataka", exp: 6, rating: 4.8, reviews: 355, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Bangalore. Delivers smooth, drip-free finishes with premium paints." },
  { id: 235, name: "Simranpreet Kour", service: "Welder", location: "Kanpur, Civil Lines", state: "Uttar Pradesh", exp: 13, rating: 4.7, reviews: 362, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Kanpur. Security grills, shutters, and structural steel work." },
  { id: 236, name: "Sarla Meena", service: "Electrician", location: "Kochi, Kakkanad", state: "Kerala", exp: 16, rating: 4.7, reviews: 176, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Kochi. Specializes in inverter, solar, and CCTV installations." },
  { id: 237, name: "Sunita Yadav", service: "Cleaner", location: "Mysore, Vijayanagar", state: "Karnataka", exp: 14, rating: 4.6, reviews: 477, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Mysore. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 238, name: "Shweta Saxena", service: "Electrician", location: "Patna, Boring Road", state: "Bihar", exp: 3, rating: 4.7, reviews: 461, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Patna. Industrial, residential and shop wiring with safety compliance." },
  { id: 239, name: "Manisha Chaudhary", service: "Painter", location: "Surat, Adajan", state: "Gujarat", exp: 14, rating: 4.8, reviews: 419, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 14 yrs exp in Surat. Anti-fungal and weatherproof coatings." },
  { id: 240, name: "Kantaben Leuva", service: "Welder", location: "Nagpur, Dharampeth", state: "Maharashtra", exp: 17, rating: 4.5, reviews: 144, color: "#f97316", emoji: "🔥", bio: "Precision welder in Nagpur — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 241, name: "Kamlabahen Rana", service: "Electrician", location: "Bhavnagar, Waghawadi Road", state: "Gujarat", exp: 5, rating: 4.8, reviews: 131, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Bhavnagar. Industrial, residential and shop wiring with safety compliance." },
  { id: 242, name: "Geetaben Modi", service: "Cleaner", location: "Delhi, Lajpat Nagar", state: "Delhi", exp: 2, rating: 4.6, reviews: 289, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Delhi. Eco-friendly products used." },
  { id: 243, name: "Daxaben Rathwa", service: "Electrician", location: "Delhi, Janakpuri", state: "Delhi", exp: 4, rating: 4.8, reviews: 480, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Delhi for 4+ years." },
  { id: 244, name: "Priya Devi", service: "Painter", location: "Gandhinagar, Sector 21", state: "Gujarat", exp: 12, rating: 4.9, reviews: 434, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Gandhinagar. Delivers smooth, drip-free finishes with premium paints." },
  { id: 245, name: "Rajeshwari Menon", service: "Welder", location: "Dehradun, Rajpur Road", state: "Uttarakhand", exp: 4, rating: 4.7, reviews: 425, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Dehradun. Security grills, shutters, and structural steel work." },
  { id: 246, name: "Pooja Desai", service: "Electrician", location: "Ahmedabad, Navrangpura", state: "Gujarat", exp: 12, rating: 4.8, reviews: 357, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 12 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 247, name: "Maulik Dave", service: "Cleaner", location: "Madurai, Anna Nagar", state: "Tamil Nadu", exp: 4, rating: 4.6, reviews: 403, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Madurai for 4 yrs. Daily, weekly, or one-time plans." },
  { id: 248, name: "Rupal Mehta", service: "Electrician", location: "Ahmedabad, Nikol", state: "Gujarat", exp: 9, rating: 4.5, reviews: 302, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 9 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 249, name: "Smita Joshi", service: "Painter", location: "Mumbai, Dadar", state: "Maharashtra", exp: 5, rating: 4.8, reviews: 165, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Mumbai offering 3D textures, ombre, and geometric accent walls." },
  { id: 250, name: "Rina Mishra", service: "Welder", location: "Porbandar, MG Road", state: "Gujarat", exp: 2, rating: 4.5, reviews: 246, color: "#f97316", emoji: "🔥", bio: "Certified welder in Porbandar with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 251, name: "Mitali Bose", service: "Electrician", location: "Vadodara, Sama", state: "Gujarat", exp: 11, rating: 4.7, reviews: 271, color: "#f59e0b", emoji: "⚡", bio: "Certified electrical contractor in Vadodara. Industrial, residential and shop wiring with safety compliance." },
  { id: 252, name: "Jayalakshmi Varma", service: "Cleaner", location: "Rajkot, Amin Marg", state: "Gujarat", exp: 6, rating: 4.6, reviews: 351, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Rajkot. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 253, name: "Saroja Krishnan", service: "Electrician", location: "Vijayawada, Benz Circle", state: "Andhra Pradesh", exp: 7, rating: 4.6, reviews: 169, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Vijayawada with 7 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 254, name: "Ruksana Begum", service: "Painter", location: "Morbi, Industrial Area", state: "Gujarat", exp: 14, rating: 4.9, reviews: 429, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 14 yrs exp in Morbi. Anti-fungal and weatherproof coatings." },
  { id: 255, name: "Kamla Devi", service: "Welder", location: "Bhavnagar, Ghogha Circle", state: "Gujarat", exp: 17, rating: 4.9, reviews: 153, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Bhavnagar for 17+ years. Industrial and residential work." },
  { id: 256, name: "Seema Singh", service: "Electrician", location: "Ahmedabad, Bodakdev", state: "Gujarat", exp: 16, rating: 4.7, reviews: 315, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 16+ years." },
  { id: 257, name: "Bharti Gajjar", service: "Cleaner", location: "Jamnagar, Indira Nagar", state: "Gujarat", exp: 2, rating: 4.8, reviews: 227, color: "#22c55e", emoji: "🧹", bio: "Move-in/move-out and post-construction cleaning specialist in Jamnagar. Eco-friendly products used." },
  { id: 258, name: "Rekha Darji", service: "Electrician", location: "Ahmedabad, Satellite", state: "Gujarat", exp: 4, rating: 4.8, reviews: 256, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Ahmedabad for 4+ years." },
  { id: 259, name: "Taraben Desai", service: "Painter", location: "Ahmedabad, Vastrapur", state: "Gujarat", exp: 15, rating: 4.7, reviews: 313, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Ahmedabad offering 3D textures, ombre, and geometric accent walls." },
  { id: 260, name: "Jashodaben Patel", service: "Welder", location: "Siliguri, Sevoke Road", state: "West Bengal", exp: 8, rating: 4.8, reviews: 327, color: "#f97316", emoji: "🔥", bio: "Certified welder in Siliguri with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 261, name: "Ramilaben Vaghela", service: "Electrician", location: "Hyderabad, Kukatpally", state: "Telangana", exp: 9, rating: 4.8, reviews: 372, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Hyderabad for 9+ years." },
  { id: 262, name: "Nirmalaben Gamit", service: "Cleaner", location: "Surat, Piplod", state: "Gujarat", exp: 11, rating: 4.7, reviews: 91, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Surat. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 263, name: "Anita Nair", service: "Electrician", location: "Ahmedabad, Ghatlodia", state: "Gujarat", exp: 10, rating: 4.5, reviews: 369, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Ahmedabad with 10 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 264, name: "Vikram Singh", service: "Painter", location: "Warangal, Hanamkonda", state: "Telangana", exp: 17, rating: 4.7, reviews: 477, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 17 yrs exp in Warangal. Anti-fungal and weatherproof coatings." },
  { id: 265, name: "Bhavesh Trivedi", service: "Welder", location: "Ankleshwar, GIDC", state: "Gujarat", exp: 13, rating: 4.6, reviews: 405, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Ankleshwar for 13+ years. Industrial and residential work." },
  { id: 266, name: "Nisha Rana", service: "Electrician", location: "Dahod, Main Road", state: "Gujarat", exp: 10, rating: 4.6, reviews: 401, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Dahod with 10 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 267, name: "Bindu Pillai", service: "Cleaner", location: "Lucknow, Gomti Nagar", state: "Uttar Pradesh", exp: 3, rating: 4.7, reviews: 483, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Lucknow. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 268, name: "Manjula Rao", service: "Electrician", location: "Ahmedabad, Vejalpur", state: "Gujarat", exp: 3, rating: 4.9, reviews: 266, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Ahmedabad. Specializes in inverter, solar, and CCTV installations." },
  { id: 269, name: "Kavya Singh", service: "Painter", location: "Hyderabad, Secunderabad", state: "Telangana", exp: 4, rating: 4.7, reviews: 247, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Hyderabad. Delivers smooth, drip-free finishes with premium paints." },
  { id: 270, name: "Sarbani Sen", service: "Welder", location: "Jaipur, Mansarovar", state: "Rajasthan", exp: 7, rating: 4.6, reviews: 147, color: "#f97316", emoji: "🔥", bio: "Precision welder in Jaipur — stainless steel, MS, and aluminium fabrication for homes and factories." },
  { id: 271, name: "Divya Thomas", service: "Electrician", location: "Vadodara, Alkapuri", state: "Gujarat", exp: 18, rating: 4.9, reviews: 219, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Vadodara. Specializes in inverter, solar, and CCTV installations." },
  { id: 272, name: "Gurpreet Kaur", service: "Cleaner", location: "Kolkata, Howrah", state: "West Bengal", exp: 10, rating: 4.8, reviews: 492, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Kolkata for 10 yrs. Daily, weekly, or one-time plans." },
  { id: 273, name: "Nusrat Parveen", service: "Electrician", location: "Bhubaneswar, Patia", state: "Odisha", exp: 12, rating: 4.5, reviews: 319, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Bhubaneswar with 12 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 274, name: "Santosh Saini", service: "Painter", location: "Nashik, Gangapur Road", state: "Maharashtra", exp: 6, rating: 4.6, reviews: 426, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Nashik. Delivers smooth, drip-free finishes with premium paints." },
  { id: 275, name: "Anjali Gupta", service: "Welder", location: "Guwahati, Paltan Bazaar", state: "Assam", exp: 13, rating: 4.5, reviews: 484, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Guwahati. Security grills, shutters, and structural steel work." },
  { id: 276, name: "Kalpana Vaghela", service: "Electrician", location: "Margao, Fatorda", state: "Goa", exp: 2, rating: 4.7, reviews: 354, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Margao with 2 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 277, name: "Geeta Raval", service: "Cleaner", location: "Patan, Old City", state: "Gujarat", exp: 16, rating: 4.7, reviews: 424, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Patan for 16 yrs. Daily, weekly, or one-time plans." },
  { id: 278, name: "Savitaben Solanki", service: "Electrician", location: "Mumbai, Bandra", state: "Maharashtra", exp: 14, rating: 4.7, reviews: 135, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Mumbai. Specializes in inverter, solar, and CCTV installations." },
  { id: 279, name: "Chetanaben Vora", service: "Painter", location: "Bangalore, BTM Layout", state: "Karnataka", exp: 17, rating: 4.5, reviews: 397, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Bangalore offering 3D textures, ombre, and geometric accent walls." },
  { id: 280, name: "Savitaben Mistry", service: "Welder", location: "Gurgaon, Sohna Road", state: "Haryana", exp: 9, rating: 4.5, reviews: 405, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Gurgaon. Security grills, shutters, and structural steel work." },
  { id: 281, name: "Ravi Singh", service: "Electrician", location: "Hubli, Gokul Road", state: "Karnataka", exp: 11, rating: 4.8, reviews: 139, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Hubli. Specializes in inverter, solar, and CCTV installations." },
  { id: 282, name: "Sanjay Gupta", service: "Cleaner", location: "Surat, Udhna", state: "Gujarat", exp: 3, rating: 4.5, reviews: 235, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Surat. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 283, name: "Lakshmi Nair", service: "Electrician", location: "Pune, Hadapsar", state: "Maharashtra", exp: 5, rating: 4.5, reviews: 200, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Pune. Specializes in inverter, solar, and CCTV installations." },
  { id: 284, name: "Jignesh Modi", service: "Painter", location: "Vadodara, Karelibaug", state: "Gujarat", exp: 14, rating: 4.8, reviews: 269, color: "#ec4899", emoji: "🎨", bio: "Colour consultant and painter in Vadodara. Delivers smooth, drip-free finishes with premium paints." },
  { id: 285, name: "Ankita Chauhan", service: "Welder", location: "Delhi, Dwarka", state: "Delhi", exp: 6, rating: 4.8, reviews: 415, color: "#f97316", emoji: "🔥", bio: "Certified welder in Delhi with MIG, TIG, and arc welding expertise. Gates, grills, and railings specialist." },
  { id: 286, name: "Savita Nair", service: "Electrician", location: "Kutch, Mundra", state: "Gujarat", exp: 17, rating: 4.9, reviews: 288, color: "#f59e0b", emoji: "⚡", bio: "Skilled electrician handling load balancing, earthing, and full flat wiring in Kutch for 17+ years." },
  { id: 287, name: "Usha Krishnan", service: "Cleaner", location: "Surat, Bhestan", state: "Gujarat", exp: 3, rating: 4.7, reviews: 191, color: "#22c55e", emoji: "🧹", bio: "Office and commercial cleaning contractor in Surat. Sanitisation, carpet cleaning, and glass polishing." },
  { id: 288, name: "Priyanka Pandey", service: "Electrician", location: "Godhra, Station Road", state: "Gujarat", exp: 16, rating: 4.6, reviews: 265, color: "#f59e0b", emoji: "⚡", bio: "Licensed electrician in Godhra with 16 yrs exp. Expert in MCB panels, concealed wiring, and smart home setups." },
  { id: 289, name: "Debjani Das", service: "Painter", location: "Surat, Athwa", state: "Gujarat", exp: 13, rating: 4.9, reviews: 410, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Surat offering 3D textures, ombre, and geometric accent walls." },
  { id: 290, name: "Padma Devi", service: "Welder", location: "Vadodara, Nizampura", state: "Gujarat", exp: 3, rating: 4.8, reviews: 221, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Vadodara for 3+ years. Industrial and residential work." },
  { id: 291, name: "Harmandeep Kaur", service: "Electrician", location: "Vadodara, Chhani", state: "Gujarat", exp: 5, rating: 4.8, reviews: 126, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Vadodara. Specializes in inverter, solar, and CCTV installations." },
  { id: 292, name: "Rizwana Khan", service: "Cleaner", location: "Jabalpur, Wright Town", state: "Madhya Pradesh", exp: 2, rating: 4.5, reviews: 482, color: "#22c55e", emoji: "🧹", bio: "Trained housekeeping professional serving Jabalpur for 2 yrs. Daily, weekly, or one-time plans." },
  { id: 293, name: "Malti Pandey", service: "Electrician", location: "Ahmedabad, SG Highway", state: "Gujarat", exp: 9, rating: 4.6, reviews: 482, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Ahmedabad. Specializes in inverter, solar, and CCTV installations." },
  { id: 294, name: "Pallavi Bajaj", service: "Painter", location: "Surat, Katargam", state: "Gujarat", exp: 4, rating: 4.9, reviews: 186, color: "#ec4899", emoji: "🎨", bio: "Interior & exterior painting expert with 4 yrs exp in Surat. Anti-fungal and weatherproof coatings." },
  { id: 295, name: "Nayna Thakor", service: "Welder", location: "Rajkot, Kothariya", state: "Gujarat", exp: 9, rating: 4.7, reviews: 476, color: "#f97316", emoji: "🔥", bio: "Steel fabrication and on-site welding contractor in Rajkot for 9+ years. Industrial and residential work." },
  { id: 296, name: "Pushpaben Shah", service: "Electrician", location: "Junagadh, Dhal Road", state: "Gujarat", exp: 2, rating: 4.7, reviews: 154, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Junagadh. Specializes in inverter, solar, and CCTV installations." },
  { id: 297, name: "Sunitaben Bhatt", service: "Cleaner", location: "Kutch, Bhuj", state: "Gujarat", exp: 10, rating: 4.6, reviews: 136, color: "#22c55e", emoji: "🧹", bio: "Professional home cleaner in Kutch offering deep cleaning, sofa shampooing, and kitchen degreasing." },
  { id: 298, name: "Maniben Gohel", service: "Electrician", location: "Pune, Kothrud", state: "Maharashtra", exp: 6, rating: 4.5, reviews: 263, color: "#f59e0b", emoji: "⚡", bio: "Residential & commercial electrician serving Pune. Specializes in inverter, solar, and CCTV installations." },
  { id: 299, name: "Manjuben Makwana", service: "Painter", location: "Vadodara, Gorwa", state: "Gujarat", exp: 12, rating: 4.5, reviews: 169, color: "#ec4899", emoji: "🎨", bio: "Creative wall designer in Vadodara offering 3D textures, ombre, and geometric accent walls." },
  { id: 300, name: "Manoj Verma", service: "Welder", location: "Surat, Varachha", state: "Gujarat", exp: 3, rating: 4.6, reviews: 459, color: "#f97316", emoji: "🔥", bio: "Emergency welding and repair services across Surat. Security grills, shutters, and structural steel work." }
];

const TENDERS_DATA = [
  { id: 1, title: "Full Home Electrical Rewiring", desc: "Looking for a licensed electrician to rewire a 3BHK apartment completely. New switchboards, MCB panel, and concealed wiring required.", budget: "₹45,000", deadline: "2025-08-15", category: "Electrician", poster: "Rajesh Kapoor", rating: "⭐ 4.5", city: "Mumbai" },
  { id: 2, title: "Bathroom Renovation Plumbing", desc: "Need complete plumbing work for a bathroom renovation including new fittings, tiles, geyser installation, and drainage.", budget: "₹30,000", deadline: "2025-07-30", category: "Plumber", poster: "Priya Shah", rating: "⭐ 4.7", city: "Pune" },
  { id: 3, title: "Modular Kitchen Carpentry", desc: "Custom modular kitchen design and installation. Requires cabinets, drawers, chimney cutouts, and countertop fitting for 12ft kitchen.", budget: "₹65,000", deadline: "2025-09-10", category: "Carpenter", poster: "Anil Mehta", rating: "⭐ 4.8", city: "Bangalore" },
  { id: 4, title: "5-Room Interior Painting", desc: "Complete interior painting for a 2BHK flat. Include ceiling, walls, and doors. Premium Royale Atmos paints preferred.", budget: "₹22,000", deadline: "2025-07-20", category: "Painter", poster: "Sunita Verma", rating: "⭐ 4.6", city: "Delhi" },
  { id: 5, title: "Office AC Maintenance Contract", desc: "Annual maintenance contract for 8 split ACs in a corporate office. Monthly servicing + emergency repair coverage included.", budget: "₹18,000/yr", deadline: "2025-12-31", category: "AC Repair", poster: "TechCorp Solutions", rating: "⭐ 4.9", city: "Hyderabad" },
  { id: 6, title: "Weekly Office Cleaning Service", desc: "Looking for a professional cleaning crew for weekly deep cleaning of 5000 sqft office space. 5 days/week with supplies.", budget: "₹15,000/mo", deadline: "2025-07-01", category: "Cleaner", poster: "Nexus Realty", rating: "⭐ 4.5", city: "Chennai" },
];

const SERVICE_HISTORY = [
  { worker: "Amit Kumar", service: "Plumber", date: "2025-06-10", amount: "₹799", mode: "UPI", status: "completed" },
  { worker: "Ravi Singh", service: "Electrician", date: "2025-05-22", amount: "₹549", mode: "Card", status: "completed" },
  { worker: "Priya Devi", service: "Cleaner", date: "2025-05-05", amount: "₹349", mode: "UPI", status: "completed" },
  { worker: "Manoj Verma", service: "Painter", date: "2025-04-18", amount: "₹2,200", mode: "Net Banking", status: "completed" },
  { worker: "Dinesh Sharma", service: "AC Repair", date: "2025-03-30", amount: "₹649", mode: "UPI", status: "pending" },
];

const AI_RESPONSES = {
  water_leak: { problem: "Water Leak Detected", service: "Plumber", urgency: "High", cost: "₹299 – ₹999", steps: ["Turn off the main water supply immediately.", "Locate the leak source (pipe joint, tap, or fitting).", "Place a bucket to collect dripping water.", "Avoid using water until repaired.", "Book a verified plumber for immediate repair."] },
  electrical: { problem: "Electrical Issue", service: "Electrician", urgency: "High", cost: "₹199 – ₹799", steps: ["Switch off the main circuit breaker immediately.", "Do not touch exposed wires or wet electrical panels.", "Check for tripped MCBs in the fusebox.", "Note the affected switches/areas for the electrician.", "Book a certified electrician urgently."] },
  ac: { problem: "AC Not Cooling", service: "AC Technician", urgency: "Medium", cost: "₹399 – ₹1,499", steps: ["Check if AC is set to cooling mode (not fan mode).", "Clean or replace the air filter if clogged.", "Ensure the outdoor unit vents are not blocked.", "Check if gas/refrigerant may be low.", "Book an AC repair technician for servicing."] },
  paint: { problem: "Wall Damage / Paint Peeling", service: "Painter", urgency: "Low", cost: "₹499 – ₹5,000", steps: ["Identify the extent of peeling — if water-related, fix the leak first.", "Sand down the peeled area to create a smooth surface.", "Apply a coat of wall primer.", "Apply 2 coats of interior paint after drying.", "Book a professional painter for a flawless finish."] },
  default: { problem: "General Home Issue", service: "Home Service Expert", urgency: "Medium", cost: "₹299 – ₹999", steps: ["Take clear photos of the problem from multiple angles.", "Note when the problem started and any recent changes.", "Check if any DIY fixes are safe to attempt.", "Gather relevant warranty/product details if applicable.", "Book the appropriate service professional via Servicify."] },
};

const STAR_LABELS = ["Terrible", "Poor", "Average", "Good", "Excellent"];

/* ===== CURRENT STATE ===== */
let currentWorker = null;
let selectedRating = 0;
let currentPayTab = "upi";

document.addEventListener('DOMContentLoaded', function(){ initPage(); });

function initPage() {
  renderWorkersGrid("workers-grid", WORKERS);
  renderWorkersGrid("all-workers-grid", WORKERS);
  const countEl = document.getElementById("filter-count");
  if (countEl) countEl.textContent = `Showing all ${WORKERS.length} workers`;
  renderTenders();
  renderDashboard();
  initStarRating();
  initScrollEffects();
  initCounters();
  setMinBookingDate();
}

/* ===== PAGE NAVIGATION ===== */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  
  // Show target
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update navbar links
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

  // Close mobile menu
  document.getElementById("navLinks").classList.remove("open");
}

/* ===== NAVBAR ===== */
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ===== POPUP ===== */
function showPopup(msg, duration = 3500) {
  const popup = document.getElementById("popup");
  document.getElementById("popup-msg").textContent = msg;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), duration);
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

/* ===== HERO SEARCH ===== */
function handleHeroSearch() {
  const service = document.getElementById("hero-service-input").value.trim();
  const location = document.getElementById("hero-location-input").value.trim();
  
  if (!service && !location) {
    showPopup("Please enter a service or location to search.");
    return;
  }
  
  showPage("services-page");
  renderWorkersGrid("workers-grid", WORKERS);
}

function quickSearch(service) {
  document.getElementById("hero-service-input").value = service;
  showPage("services-page");
  document.getElementById("filter-category").value = service;
  filterWorkers();
}

function goToService(service) {
  showPage("services-page");
  document.getElementById("filter-category").value = service;
  filterWorkers();
}

/* ===== WORKERS GRID ===== */
function renderWorkersGrid(containerId, workers) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (workers.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted)"><i class="fa-solid fa-search" style="font-size:2.5rem;margin-bottom:1rem;display:block;opacity:0.3"></i><p>No workers found for your filters. Try different options.</p></div>`;
    return;
  }

  container.innerHTML = workers.map(w => `
    <div class="worker-card fade-in" onclick="openWorkerProfile(${w.id})">
      <div class="worker-avatar" style="background:${w.color}20;color:${w.color};font-size:2rem;display:flex;align-items:center;justify-content:center;">
        ${w.emoji}
      </div>
      <div class="worker-name">${w.name}</div>
      <div class="worker-service">${w.service}</div>
      <div class="worker-meta">
        <span><i class="fa-solid fa-location-dot"></i> ${w.location}</span>
        <span><i class="fa-solid fa-clock"></i> ${w.exp} years experience</span>
        <span><i class="fa-solid fa-star" style="color:#f59e0b"></i> ${w.rating} (${w.reviews} reviews)</span>
      </div>
      <div class="worker-actions">
        <button class="btn-outline" onclick="event.stopPropagation(); openWorkerProfile(${w.id})">
          <i class="fa-solid fa-eye"></i> Profile
        </button>
        <button class="btn-primary" onclick="event.stopPropagation(); bookWorker(${w.id})">
          <i class="fa-solid fa-calendar-check"></i> Book
        </button>
      </div>
    </div>
  `).join("");
}

/* ===== FILTER WORKERS ===== */
function filterWorkers() {
  const category = document.getElementById("filter-category").value;
  const state = document.getElementById("filter-state") ? document.getElementById("filter-state").value : "";
  const city = document.getElementById("filter-location").value;
  const rating = parseFloat(document.getElementById("filter-rating").value) || 0;

  const filtered = WORKERS.filter(w => {
    const cityMatch = !city || w.location.toLowerCase().includes(city.toLowerCase());
    const stateMatch = !state || (w.state && w.state === state);
    return (
      (!category || w.service === category) &&
      stateMatch &&
      cityMatch &&
      (w.rating >= rating)
    );
  });

  // Update result count
  const countEl = document.getElementById("filter-count");
  if (countEl) {
    const parts = [category, state, city].filter(Boolean);
    const filterDesc = parts.length ? ` for "${parts.join(", ")}"` : "";
    countEl.textContent = `Showing ${filtered.length} worker${filtered.length !== 1 ? "s" : ""}${filterDesc}`;
  }

  renderWorkersGrid("workers-grid", filtered);
}

function resetFilters() {
  ["filter-category", "filter-state", "filter-location", "filter-rating"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const countEl = document.getElementById("filter-count");
  if (countEl) countEl.textContent = `Showing all ${WORKERS.length} workers`;
  renderWorkersGrid("workers-grid", WORKERS);
}

/* ===== WORKER PROFILE ===== */
function openWorkerProfile(id) {
  const w = WORKERS.find(x => x.id === id);
  if (!w) return;
  currentWorker = w;

  document.getElementById("profile-avatar-img").style.background = w.color + "30";
  document.getElementById("profile-avatar-img").style.color = w.color;
  document.getElementById("profile-avatar-img").textContent = w.emoji;
  document.getElementById("profile-avatar-img").style.fontSize = "3rem";
  document.getElementById("profile-avatar-img").style.display = "flex";
  document.getElementById("profile-avatar-img").style.alignItems = "center";
  document.getElementById("profile-avatar-img").style.justifyContent = "center";

  document.getElementById("profile-name").textContent = w.name;
  document.getElementById("profile-service").textContent = w.service;
  document.getElementById("profile-location").textContent = w.location;
  document.getElementById("profile-exp").textContent = w.exp;
  document.getElementById("profile-bio").textContent = w.bio;

  // Rating stars
  const stars = "★".repeat(Math.round(w.rating)) + "☆".repeat(5 - Math.round(w.rating));
  document.getElementById("profile-rating").innerHTML = `<span style="color:#f59e0b;font-size:1.2rem">${stars}</span> <strong>${w.rating}</strong> <span style="color:var(--text-muted);font-size:0.875rem">(${w.reviews} reviews)</span>`;

  // Reviews
  const sampleReviews = [
    { name: "Rajesh K.", stars: 5, date: "2 weeks ago", text: `${w.name} was punctual, professional, and did an excellent job. Highly recommended!` },
    { name: "Sneha M.", stars: 5, date: "1 month ago", text: "Very skilled and polite. Fixed the problem quickly and explained everything clearly." },
    { name: "Arjun P.", stars: 4, date: "2 months ago", text: "Good work overall. Took slightly longer than expected but quality is great." },
  ];

  document.getElementById("profile-reviews-list").innerHTML = sampleReviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-author">
          <strong>${r.name}</strong>
          <small>${r.date}</small>
        </div>
        <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join("");

  showPage("profile-page");
}

function bookWorker(id) {
  const w = WORKERS.find(x => x.id === id);
  if (w) {
    currentWorker = w;
    document.getElementById("b-service").value = w.service;
  }
  showPage("booking-page");
}

/* ===== AUTH PAGES ===== */
function switchRegTab(tab) {
  document.getElementById("tab-customer").classList.toggle("active", tab === "customer");
  document.getElementById("tab-worker").classList.toggle("active", tab === "worker");
  document.getElementById("customer-form").classList.toggle("hidden", tab !== "customer");
  document.getElementById("worker-form").classList.toggle("hidden", tab !== "worker");
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;

  if (!email || !pass) {
    showPopup("Please fill in all fields.");
    return;
  }

  // Simulate login
  showPopup("Welcome back! Logging you in...");
  setTimeout(() => {
    showPage("dashboard-page");
  }, 1000);
}

function handleRegister(e, type) {
  e.preventDefault();

  if (type === "customer") {
    const pass = document.getElementById("c-pass").value;
    const cpass = document.getElementById("c-cpass").value;
    if (pass !== cpass) {
      showPopup("Passwords do not match!");
      return;
    }
    if (pass.length < 8) {
      showPopup("Password must be at least 8 characters.");
      return;
    }
  }

  showPopup(`✅ Registration successful! Welcome to Servicify.`);
  setTimeout(() => showPage("login-page"), 1500);
}

function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  const icon = btn.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    icon.className = "fa-solid fa-eye";
  }
}

/* ===== BOOKING ===== */
function setMinBookingDate() {
  const today = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("b-date");
  if (dateInput) dateInput.min = today;
}

function handleBooking(e) {
  e.preventDefault();
  const date = document.getElementById("b-date").value;
  const time = document.getElementById("b-time").value;
  const address = document.getElementById("b-address").value;
  const service = document.getElementById("b-service").value;

  if (!date || !time || !address) {
    showPopup("Please fill in all required fields.");
    return;
  }

  // Populate payment page
  document.getElementById("pay-service").textContent = service;
  document.getElementById("pay-datetime").textContent = `${date} at ${time}`;

  showPopup("Booking details saved! Proceeding to payment...");
  setTimeout(() => showPage("payment-page"), 800);
}

/* ===== PAYMENT ===== */
function selectPayTab(btn, tab) {
  document.querySelectorAll(".pay-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".pay-panel").forEach(p => p.classList.add("hidden"));
  document.getElementById(`pay-${tab}`).classList.remove("hidden");
  currentPayTab = tab;
}

function processPayment() {
  const bookingId = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("booking-id").textContent = bookingId;

  document.getElementById("payment-form-wrap").classList.add("hidden");
  document.getElementById("payment-success-screen").classList.remove("hidden");
  showPopup("🎉 Payment successful! Booking confirmed.");
}

/* ===== REVIEW / STAR RATING ===== */
function initStarRating() {
  const stars = document.querySelectorAll("#star-rating i");
  const label = document.getElementById("star-label");

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => s.classList.toggle("hover", i <= index));
      if (label) label.textContent = STAR_LABELS[index];
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s, i) => {
        s.classList.remove("hover");
        s.classList.toggle("active", i < selectedRating);
      });
      if (label) label.textContent = selectedRating ? STAR_LABELS[selectedRating - 1] : "Select a rating";
    });

    star.addEventListener("click", () => {
      selectedRating = index + 1;
      stars.forEach((s, i) => s.classList.toggle("active", i < selectedRating));
      if (label) label.textContent = STAR_LABELS[selectedRating - 1];
    });
  });
}

function submitReview(e) {
  e.preventDefault();
  if (!selectedRating) {
    showPopup("Please select a star rating.");
    return;
  }
  const text = document.getElementById("review-text").value;
  if (!text.trim()) {
    showPopup("Please write a review comment.");
    return;
  }
  showPopup("✅ Review submitted successfully! Thank you.");
  setTimeout(() => showPage("home"), 1500);
}

/* ===== AI HELP ===== */
function handleAIUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    const previewWrap = document.getElementById("ai-preview-wrap");
    const preview = document.getElementById("ai-preview");
    const dropZone = document.getElementById("ai-drop-zone");

    preview.src = e.target.result;
    previewWrap.classList.remove("hidden");
    dropZone.classList.add("hidden");

    // Auto-add chat message
    addChatMsg(`I've uploaded an image of my problem. Can you help?`, "user");
    setTimeout(() => {
      addChatMsg("Got it! I can see the image. Click 'Analyze Problem' to get a detailed diagnosis and step-by-step solution.", "ai");
    }, 800);
  };

  reader.readAsDataURL(file);
}

function analyzeImage() {
  addChatMsg("Analyzing the image now...", "user");

  // Simulate AI thinking
  setTimeout(() => {
    addChatMsg("🔍 Analyzing image... Detecting problem type...", "ai");
  }, 600);

  setTimeout(() => {
    // Pick a random response type for demo
    const types = Object.keys(AI_RESPONSES);
    const randomType = types[Math.floor(Math.random() * types.length)];
    const result = AI_RESPONSES[randomType];

    addChatMsg(`✅ Analysis complete! I detected: **${result.problem}**. Recommended service: **${result.service}**. Estimated cost: ${result.cost}. Check the solution panel below for step-by-step instructions.`, "ai");

    displaySolution(result);
  }, 2000);
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;

  addChatMsg(msg, "user");
  input.value = "";

  // AI response based on keywords
  setTimeout(() => {
    const lower = msg.toLowerCase();
    let response, result;

    if (lower.includes("water") || lower.includes("leak") || lower.includes("pipe") || lower.includes("tap")) {
      result = AI_RESPONSES.water_leak;
    } else if (lower.includes("electric") || lower.includes("wire") || lower.includes("switch") || lower.includes("current")) {
      result = AI_RESPONSES.electrical;
    } else if (lower.includes("ac") || lower.includes("cool") || lower.includes("air condition")) {
      result = AI_RESPONSES.ac;
    } else if (lower.includes("paint") || lower.includes("wall") || lower.includes("peel")) {
      result = AI_RESPONSES.paint;
    } else {
      result = AI_RESPONSES.default;
    }

    addChatMsg(`I understand you have a **${result.problem}** issue. The recommended service is **${result.service}** with an estimated cost of **${result.cost}**. I've generated a step-by-step solution guide below!`, "ai");
    displaySolution(result);
  }, 1000);
}

function handleChatEnter(e) {
  if (e.key === "Enter") sendChatMessage();
}

function addChatMsg(text, type) {
  const display = document.getElementById("chat-display");
  const isAI = type === "ai";

  const div = document.createElement("div");
  div.className = `chat-msg ${isAI ? "ai-msg" : "user-msg"} fade-in`;
  div.innerHTML = `
    <div class="msg-avatar">
      ${isAI ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>'}
    </div>
    <div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</div>
  `;

  display.appendChild(div);
  display.scrollTop = display.scrollHeight;
}

function displaySolution(result) {
  const solutionEl = document.getElementById("ai-solution");
  const gridEl = document.getElementById("solution-grid");

  solutionEl.classList.remove("hidden");

  gridEl.innerHTML = `
    <div class="solution-card">
      <h5>🔍 Problem Detected</h5>
      <p>${result.problem}</p>
    </div>
    <div class="solution-card">
      <h5>🛠️ Recommended Service</h5>
      <p>${result.service}</p>
    </div>
    <div class="solution-card">
      <h5>⚡ Urgency Level</h5>
      <p>${result.urgency}</p>
    </div>
    <div class="solution-card">
      <h5>💰 Estimated Cost</h5>
      <p>${result.cost}</p>
    </div>
    <div class="solution-card" style="grid-column:1/-1">
      <h5>📋 Step-by-Step Solution</h5>
      <ol style="margin-top:0.5rem;padding-left:1.25rem;display:flex;flex-direction:column;gap:0.4rem">
        ${result.steps.map((s, i) => `<li style="font-size:0.875rem;color:var(--text);line-height:1.6"><strong>Step ${i + 1}:</strong> ${s}</li>`).join("")}
      </ol>
      <button class="btn-primary" style="margin-top:1.25rem" onclick="showPage('services-page')">
        <i class="fa-solid fa-calendar-check"></i> Book ${result.service} Now
      </button>
    </div>
  `;

  solutionEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===== TENDERS ===== */
function renderTenders() {
  const grid = document.getElementById("tenders-grid");
  if (!grid) return;

  grid.innerHTML = TENDERS_DATA.map(t => `
    <div class="tender-card fade-in">
      <div class="tender-header">
        <div class="tender-title">${t.title}</div>
        <div class="tender-budget">${t.budget}</div>
      </div>
      <p class="tender-desc">${t.desc}</p>
      <div class="tender-meta">
        <span><i class="fa-solid fa-briefcase"></i> ${t.category}</span>
        <span><i class="fa-solid fa-location-dot"></i> ${t.city}</span>
        <span><i class="fa-solid fa-calendar"></i> Deadline: ${t.deadline}</span>
        <span><i class="fa-solid fa-user"></i> ${t.poster}</span>
        <span>${t.rating}</span>
      </div>
      <div class="tender-actions">
        <button class="btn-primary" onclick="acceptTender('${t.title}')">
          <i class="fa-solid fa-check"></i> Accept Tender
        </button>
        <button class="btn-outline" onclick="showPopup('Opening tender details...')">
          <i class="fa-solid fa-eye"></i> Details
        </button>
      </div>
    </div>
  `).join("");
}

function showTenderModal() {
  document.getElementById("tender-modal").classList.remove("hidden");
}

function closeTenderModal() {
  document.getElementById("tender-modal").classList.add("hidden");
}

function submitTender(e) {
  e.preventDefault();
  const title = document.getElementById("t-title").value;
  const budget = document.getElementById("t-budget").value;
  const deadline = document.getElementById("t-deadline").value;
  const desc = document.getElementById("t-desc").value;

  // Add to tender list
  const newTender = {
    id: TENDERS_DATA.length + 1,
    title, desc,
    budget: `₹${parseInt(budget).toLocaleString("en-IN")}`,
    deadline, category: "General", poster: "You",
    rating: "⭐ New", city: "Your City"
  };

  TENDERS_DATA.unshift(newTender);
  renderTenders();
  closeTenderModal();
  showPopup("✅ Tender posted successfully!");
}

function acceptTender(title) {
  showPopup(`✅ You've applied for: "${title}". The poster will contact you soon.`);
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  // Service History
  const tbody = document.getElementById("service-history-body");
  if (tbody) {
    tbody.innerHTML = SERVICE_HISTORY.map(s => `
      <tr>
        <td><strong>${s.worker}</strong></td>
        <td>${s.service}</td>
        <td>${s.date}</td>
        <td>${s.amount}</td>
        <td><span class="status-badge status-${s.status}">${s.status}</span></td>
        <td><button class="btn-sm btn-outline" onclick="showPage('review-page')" style="font-size:0.75rem;padding:0.3rem 0.65rem"><i class="fa-solid fa-star"></i> Review</button></td>
      </tr>
    `).join("");
  }

  // Payment History
  const ptbody = document.getElementById("payment-history-body");
  if (ptbody) {
    ptbody.innerHTML = SERVICE_HISTORY.map(s => `
      <tr>
        <td><strong>${s.amount}</strong></td>
        <td>${s.date}</td>
        <td>${s.mode}</td>
        <td><button class="invoice-btn" onclick="showPopup('Invoice downloading...')"><i class="fa-solid fa-download"></i> Invoice</button></td>
      </tr>
    `).join("");
  }
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".service-card, .why-card, .step-card, .worker-card, .tender-card").forEach(el => {
    observer.observe(el);
  });
}

/* ===== COUNTER ANIMATION ===== */
function initCounters() {
  const counters = document.querySelectorAll(".stat-num");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    // Format large numbers
    if (target >= 1000000) {
      el.textContent = (current / 1000000).toFixed(1) + "M+";
    } else if (target >= 1000) {
      el.textContent = Math.floor(current / 1000) + "K+";
    } else {
      el.textContent = Math.floor(current) + "+";
    }
  }, 16);
}

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      links.forEach(l => {
        l.classList.toggle("active", l.getAttribute("href") === `#${section.id}`);
      });
    }
  });
});

/* ===== KEYBOARD ACCESSIBILITY ===== */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeTenderModal();
    closePopup();
  }
});

/* ===== CLOSE MOBILE MENU ON OUTSIDE CLICK ===== */
document.addEventListener("click", e => {
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!nav.contains(e.target) || (!toggle.contains(e.target) && !links.contains(e.target))) {
    links.classList.remove("open");
  }
});
// ============================
// LOAD WORKERS FROM BACKEND
// ============================

async function loadWorkers() {
    try {

        const response = await fetch("http://127.0.0.1:5000/api/workers");

        const workers = await response.json();

        console.log(workers);

        const workersContainer = document.getElementById("workers-container");

        workersContainer.innerHTML = "";

        workers.forEach(worker => {

            const card = `
                <div class="worker-card">
                    <h3>${worker.name}</h3>
                    <p>Service: ${worker.service}</p>
                    <p>Location: ${worker.location}</p>
                    <p>Experience: ${worker.experience} years</p>
                    <p>Rating: ⭐ ${worker.rating}</p>
                </div>
            `;

            workersContainer.innerHTML += card;

        });

    } catch (error) {
        console.error("Error loading workers:", error);
    }
}

loadWorkers();
async function viewWorkerProfile(workerId) {

  try {

    const response = await fetch(`http://127.0.0.1:5000/api/workers`);

    const workers = await response.json();

    const worker = workers.find(w => w.id === workerId);

    if (!worker) return;

    document.getElementById("profile-name").textContent = worker.name;

    document.getElementById("profile-service").textContent = worker.service;

    document.getElementById("profile-location").textContent = worker.location;

    document.getElementById("profile-exp").textContent = worker.experience;

    document.getElementById("profile-rating").innerHTML =
      "⭐ " + worker.rating + " / 5";

    document.getElementById("profile-bio").textContent =
      "Experienced " + worker.service + " providing reliable service.";

    showPage("profile-page");

  } catch (error) {

    console.error("Error loading worker profile:", error);

  }

}